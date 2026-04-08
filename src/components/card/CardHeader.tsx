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
      {/* Brand mark */}
      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
        {/* Geometric SD mark */}
        <div
          style={{
            width: "24px",
            height: "24px",
            borderRadius: "6px",
            backgroundColor: theme.accent,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "9px",
              fontWeight: 800,
              color: theme.background,
              fontFamily: "system-ui, -apple-system, sans-serif",
              letterSpacing: "-0.02em",
              lineHeight: 1,
            }}
          >
            SD
          </span>
        </div>
        <span
          style={{
            fontSize: "14px",
            fontWeight: 700,
            color: theme.primaryText,
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "-0.02em",
            opacity: 0.85,
          }}
        >
          ScreenDiet
        </span>
      </div>

      {/* Period label */}
      <div
        style={{
          backgroundColor: `${theme.accent}18`,
          borderRadius: "100px",
          padding: "4px 10px",
        }}
      >
        <span
          style={{
            fontSize: "12px",
            fontWeight: 600,
            color: theme.accent,
            fontFamily: "system-ui, -apple-system, sans-serif",
            letterSpacing: "0.01em",
          }}
        >
          {periodLabel(period, customPeriodLabel)}
        </span>
      </div>
    </div>
  );
}
