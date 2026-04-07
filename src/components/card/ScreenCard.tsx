import { forwardRef } from "react";
import { GeneratorState, ThemeConfig } from "@/types";
import { getCardSize } from "@/lib/imageExport";
import { THEME_REGISTRY } from "@/lib/themeRegistry";
import { getFunFact } from "@/lib/funFactEngine";
import { minutesToDisplay } from "@/lib/timeFormatters";
import { CardHeader } from "./CardHeader";
import { TotalTimeStat } from "./TotalTimeStat";
import { AppBreakdownList } from "./AppBreakdownList";
import { FunFactFooter } from "./FunFactFooter";
import { Watermark } from "./Watermark";

interface ScreenCardProps {
  state: GeneratorState;
}

export const ScreenCard = forwardRef<HTMLDivElement, ScreenCardProps>(
  ({ state }, ref) => {
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
    const isLandscape = state.sizePreset === "landscape";
    const padding = isLandscape ? 40 : 52;

    const cardBackground =
      theme.gradientFrom && theme.gradientTo && theme.gradientFrom !== theme.gradientTo
        ? `linear-gradient(150deg, ${theme.gradientFrom} 0%, ${theme.gradientTo} 100%)`
        : theme.background;

    if (isLandscape) {
      return (
        <div
          ref={ref}
          style={{
            width: `${width}px`,
            height: `${height}px`,
            background: cardBackground,
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

          <div
            style={{
              display: "flex",
              flex: 1,
              gap: "40px",
              marginTop: "24px",
              minHeight: 0,
            }}
          >
            {/* Left column: total stat */}
            <div style={{ width: "280px", flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div
                style={{
                  fontSize: "72px",
                  fontWeight: 900,
                  color: theme.primaryText,
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                {minutesToDisplay(totalMinutes)}
              </div>
              <div style={{ fontSize: "14px", color: theme.secondaryText, fontWeight: 500, marginBottom: "24px" }}>
                total · {state.selectedApps.length} apps
              </div>
              {!isEmpty && <FunFactFooter theme={theme} funFact={funFact} />}
            </div>

            {/* Right column: breakdown */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {isEmpty ? (
                <div style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: "14px", color: theme.secondaryText }}>Add apps to see your breakdown</span>
                </div>
              ) : (
                <AppBreakdownList apps={state.selectedApps} totalMinutes={totalMinutes} theme={theme} />
              )}
            </div>
          </div>

          <Watermark theme={theme} />
        </div>
      );
    }

    // Story / Square layout
    return (
      <div
        ref={ref}
        style={{
          width: `${width}px`,
          height: `${height}px`,
          background: cardBackground,
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
