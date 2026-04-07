import { SelectedApp, ThemeConfig } from "@/types";
import { AppBreakdownItem } from "./AppBreakdownItem";

interface AppBreakdownListProps {
  apps: SelectedApp[];
  totalMinutes: number;
  theme: ThemeConfig;
}

export function AppBreakdownList({ apps, totalMinutes, theme }: AppBreakdownListProps) {
  const sorted = [...apps].sort((a, b) => b.minutes - a.minutes);

  return (
    <div style={{ flex: 1 }}>
      {sorted.map((app, index) => (
        <AppBreakdownItem
          key={app.id}
          app={app}
          totalMinutes={totalMinutes}
          theme={theme}
          rank={index + 1}
        />
      ))}
    </div>
  );
}
