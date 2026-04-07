import { SelectedApp, ThemeConfig } from "@/types";
import { minutesToDisplay, percentOf } from "@/lib/timeFormatters";

interface AppBreakdownItemProps {
  app: SelectedApp;
  totalMinutes: number;
  theme: ThemeConfig;
  rank: number;
}

export function AppBreakdownItem({ app, totalMinutes, theme, rank }: AppBreakdownItemProps) {
  const pct = percentOf(app.minutes, totalMinutes);
  const duration = minutesToDisplay(app.minutes);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        marginBottom: "14px",
      }}
    >
      {/* Rank */}
      <div
        style={{
          width: "20px",
          fontSize: "12px",
          color: theme.secondaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 600,
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {rank}
      </div>

      {/* Icon */}
      <div
        style={{
          width: "36px",
          height: "36px",
          borderRadius: "10px",
          backgroundColor: `${app.color}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "20px",
          flexShrink: 0,
        }}
      >
        {app.icon}
      </div>

      {/* Name + bar */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "5px",
          }}
        >
          <span
            style={{
              fontSize: "14px",
              fontWeight: 600,
              color: theme.primaryText,
              fontFamily: "system-ui, -apple-system, sans-serif",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {app.name}
          </span>
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: theme.secondaryText,
              fontFamily: "system-ui, -apple-system, sans-serif",
              flexShrink: 0,
              marginLeft: "8px",
            }}
          >
            {duration}
          </span>
        </div>

        {/* Progress bar */}
        <div
          style={{
            height: "6px",
            borderRadius: "3px",
            backgroundColor: theme.barBackground,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${pct}%`,
              borderRadius: "3px",
              backgroundColor: app.color,
            }}
          />
        </div>
      </div>

      {/* Percentage */}
      <div
        style={{
          width: "36px",
          fontSize: "12px",
          color: theme.secondaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontWeight: 600,
          textAlign: "right",
          flexShrink: 0,
        }}
      >
        {pct}%
      </div>
    </div>
  );
}
