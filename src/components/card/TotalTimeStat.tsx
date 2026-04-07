import { ThemeConfig } from "@/types";
import { minutesToDisplay } from "@/lib/timeFormatters";

interface TotalTimeStatProps {
  theme: ThemeConfig;
  totalMinutes: number;
  appCount: number;
}

export function TotalTimeStat({ theme, totalMinutes, appCount }: TotalTimeStatProps) {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "28px 0 20px",
        borderBottom: `1px solid ${theme.secondaryText}22`,
        marginBottom: "20px",
      }}
    >
      <div
        style={{
          fontSize: "64px",
          fontWeight: 900,
          color: theme.primaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: "8px",
        }}
      >
        {minutesToDisplay(totalMinutes)}
      </div>
      <div
        style={{
          fontSize: "15px",
          color: theme.secondaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 500,
          letterSpacing: "0.02em",
        }}
      >
        total screen time · {appCount} {appCount === 1 ? "app" : "apps"}
      </div>
    </div>
  );
}
