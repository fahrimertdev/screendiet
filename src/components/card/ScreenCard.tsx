import { forwardRef } from "react";
import { GeneratorState, ThemeConfig } from "@/types";
import { getCardSize } from "@/lib/imageExport";
import { THEME_REGISTRY } from "@/lib/themeRegistry";
import { getFunFact } from "@/lib/funFactEngine";
import { CardHeader } from "./CardHeader";
import { TotalTimeStat } from "./TotalTimeStat";
import { AppBreakdownList } from "./AppBreakdownList";
import { FunFactFooter } from "./FunFactFooter";
import { Watermark } from "./Watermark";

interface ScreenCardProps {
  state: GeneratorState;
  forExport?: boolean;
}

export const ScreenCard = forwardRef<HTMLDivElement, ScreenCardProps>(
  ({ state, forExport = false }, ref) => {
    const theme: ThemeConfig = THEME_REGISTRY[state.theme];
    const { width, height } = getCardSize(state.sizePreset);

    const totalMinutes = state.selectedApps.reduce(
      (sum, app) => sum + app.minutes,
      0
    );

    const sorted = [...state.selectedApps].sort((a, b) => b.minutes - a.minutes);
    const topApp = sorted[0];
    const funFact = getFunFact({
      totalMinutes,
      topAppId: topApp?.id,
      topCategory: topApp?.category,
    });

    const isEmpty = state.selectedApps.length === 0;

    const padding = state.sizePreset === "landscape" ? 40 : 52;

    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: theme.gradientFrom && theme.gradientTo
            ? `linear-gradient(145deg, ${theme.gradientFrom}, ${theme.gradientTo})`
            : theme.background,
          padding: `${padding}px`,
          display: "flex",
          flexDirection: "column",
          boxSizing: "border-box",
          overflow: "hidden",
          fontFamily: "system-ui, -apple-system, sans-serif",
        }}
      >
        <CardHeader
          theme={theme}
          period={state.period}
          customPeriodLabel={state.customPeriodLabel}
        />

        <TotalTimeStat
          theme={theme}
          totalMinutes={totalMinutes}
          appCount={state.selectedApps.length}
        />

        {isEmpty ? (
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <div style={{ fontSize: "48px" }}>📱</div>
            <div
              style={{
                fontSize: "16px",
                color: theme.secondaryText,
                textAlign: "center",
                lineHeight: 1.5,
              }}
            >
              Add apps to see your breakdown
            </div>
          </div>
        ) : (
          <AppBreakdownList
            apps={state.selectedApps}
            totalMinutes={totalMinutes}
            theme={theme}
          />
        )}

        <div style={{ marginTop: "auto", paddingTop: "16px" }}>
          {!isEmpty && <FunFactFooter theme={theme} funFact={funFact} />}
          <Watermark theme={theme} />
        </div>
      </div>
    );
  }
);

ScreenCard.displayName = "ScreenCard";
