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
  return (
    <div>
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Usage Time</h2>
        <span className="text-sm font-semibold text-white/60 tabular-nums">
          {minutesToDisplay(totalMinutes)}
        </span>
      </div>

      <div className="divide-y divide-white/[0.04]">
        {apps.map((app) => (
          <TimeSlider
            key={app.id}
            app={app}
            totalMinutes={totalMinutes}
            onChangeMinutes={(m) => onSetMinutes(app.id, m)}
            onRemove={() => onRemove(app.id)}
          />
        ))}
      </div>
    </div>
  );
}
