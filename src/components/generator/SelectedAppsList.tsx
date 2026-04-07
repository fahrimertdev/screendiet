"use client";

import { SelectedApp } from "@/types";
import { TimeSlider } from "./TimeSlider";
import { minutesToDisplay } from "@/lib/timeFormatters";

interface SelectedAppsListProps {
  apps: SelectedApp[];
  totalMinutes: number;
  onSetMinutes: (id: string, minutes: number) => void;
  onRemove: (id: string) => void;
}

export function SelectedAppsList({
  apps,
  totalMinutes,
  onSetMinutes,
  onRemove,
}: SelectedAppsListProps) {
  if (apps.length === 0) {
    return (
      <div className="py-8 text-center text-zinc-600 text-sm">
        Select apps above to start building your card
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Usage Time
        </h2>
        <span className="text-sm font-bold text-violet-400">
          Total: {minutesToDisplay(totalMinutes)}
        </span>
      </div>

      <div className="divide-y divide-zinc-800/50">
        {apps.map((app) => (
          <TimeSlider
            key={app.id}
            app={app}
            onChangeMinutes={(m) => onSetMinutes(app.id, m)}
            onRemove={() => onRemove(app.id)}
          />
        ))}
      </div>
    </div>
  );
}
