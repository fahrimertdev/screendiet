"use client";

import { SelectedApp } from "@/types";
import { minutesToDisplay, normalizeMinutes } from "@/lib/timeFormatters";

interface TimeSliderProps {
  app: SelectedApp;
  onChangeMinutes: (minutes: number) => void;
  onRemove: () => void;
}

export function TimeSlider({ app, onChangeMinutes, onRemove }: TimeSliderProps) {
  const MAX_MINUTES = 720;
  const STEP = 15;

  const handleSlider = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeMinutes(Number(e.target.value));
  };

  const handleManualInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value;
    // Parse "h:mm" or just minutes
    const parts = raw.split(":");
    let minutes = 0;
    if (parts.length === 2) {
      minutes = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    } else {
      minutes = parseInt(raw) * 60;
    }
    if (!isNaN(minutes)) {
      onChangeMinutes(normalizeMinutes(minutes));
    }
  };

  return (
    <div className="flex items-center gap-3 py-2 group">
      {/* Icon + name */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-base shrink-0"
        style={{ backgroundColor: `${app.color}22` }}
      >
        {app.icon}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1">
          <span className="text-sm font-medium text-zinc-200 truncate">
            {app.name}
          </span>
          <span className="text-sm font-semibold text-violet-400 shrink-0 ml-2">
            {minutesToDisplay(app.minutes)}
          </span>
        </div>

        <input
          type="range"
          min={0}
          max={MAX_MINUTES}
          step={STEP}
          value={app.minutes}
          onChange={handleSlider}
          className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
          style={{
            background: `linear-gradient(to right, ${app.color} ${(app.minutes / MAX_MINUTES) * 100}%, #3f3f46 ${(app.minutes / MAX_MINUTES) * 100}%)`,
          }}
        />
      </div>

      {/* Remove button */}
      <button
        onClick={onRemove}
        className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-zinc-600 hover:text-red-400 hover:bg-red-950/30 transition-colors opacity-0 group-hover:opacity-100"
        aria-label={`Remove ${app.name}`}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
    </div>
  );
}
