import { ThemeConfig } from "@/types";
import { periodLabel } from "@/lib/timeFormatters";
import type { PeriodOption } from "@/types";

interface CardHeaderProps {
  theme: ThemeConfig;
  period: PeriodOption;
  customPeriodLabel?: string;
}

export function CardHeader({ theme, period, customPeriodLabel }: CardHeaderProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "4px",
      }}
    >
      {/* Brand */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "8px",
            backgroundColor: theme.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "16px",
          }}
        >
          📱
        </div>
        <span
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: theme.primaryText,
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-0.02em",
          }}
        >
          ScreenDiet
        </span>
      </div>

      {/* Period label */}
      <div
        style={{
          backgroundColor: `${theme.accent}22`,
          border: `1px solid ${theme.accent}44`,
          borderRadius: "100px",
          padding: "4px 12px",
        }}
      >
        <span
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: theme.accent,
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "0.02em",
          }}
        >
          {periodLabel(period, customPeriodLabel)}
        </span>
      </div>
    </div>
  );
}
