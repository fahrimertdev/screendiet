import { ThemeConfig } from "@/types";

interface WatermarkProps {
  theme: ThemeConfig;
}

export function Watermark({ theme }: WatermarkProps) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "6px",
        paddingTop: "12px",
        borderTop: `1px solid ${theme.secondaryText}33`,
        opacity: 0.6,
      }}
    >
      <span
        style={{
          fontSize: "13px",
          color: theme.secondaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "0.05em",
          fontWeight: 500,
        }}
      >
        screendiet.app
      </span>
    </div>
  );
}
