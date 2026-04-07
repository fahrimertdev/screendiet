import { ThemeConfig } from "@/types";

interface FunFactFooterProps {
  theme: ThemeConfig;
  funFact: string;
}

export function FunFactFooter({ theme, funFact }: FunFactFooterProps) {
  return (
    <div
      style={{
        backgroundColor: `${theme.accent}11`,
        border: `1px solid ${theme.accent}33`,
        borderRadius: "12px",
        padding: "14px 16px",
        marginBottom: "16px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: 700,
          color: theme.accent,
          fontFamily: "system-ui, -apple-system, sans-serif",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          marginBottom: "6px",
        }}
      >
        ScreenDiet Verdict
      </div>
      <div
        style={{
          fontSize: "14px",
          color: theme.primaryText,
          fontFamily: "system-ui, -apple-system, sans-serif",
          fontStyle: "italic",
          lineHeight: 1.5,
          fontWeight: 500,
        }}
      >
        &ldquo;{funFact}&rdquo;
      </div>
    </div>
  );
}
