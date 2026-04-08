"use client";

import { SelectedApp } from "@/types";
import { minutesToDisplay, getInitials, ensureVisibleColor } from "@/lib/timeFormatters";

interface TimeSliderProps {
  app: SelectedApp;
  onChangeMinutes: (minutes: number) => void;
  onRemove: () => void;
}

export function TimeSlider({ app, onChangeMinutes, onRemove }: TimeSliderProps) {
  const MAX_MINUTES = 720;
  const STEP = 15;
  const pct = (app.minutes / MAX_MINUTES) * 100;
  const initials = getInitials(app.name);
  const visibleColor = ensureVisibleColor(app.color);

  return (
    <div className="group py-3">
      <div className="flex items-center gap-3 mb-2">
        {/* Icon */}
        <div
          className="w-7 h-7 rounded-lg flex items-center justify-center text-[10px] font-bold flex-shrink-0"
          style={{ backgroundColor: `${app.color}20`, color: visibleColor }}
        >
          {initials}
        </div>

        {/* Name */}
        <span className="flex-1 text-sm font-medium text-white/80 truncate min-w-0">
          {app.name}
        </span>

        {/* Duration */}
        <span className="text-sm font-semibold text-white tabular-nums flex-shrink-0">
          {minutesToDisplay(app.minutes)}
        </span>

        {/* Remove */}
        <button
          onClick={onRemove}
          className="w-5 h-5 flex items-center justify-center text-white/20 hover:text-white/60 transition-colors opacity-0 group-hover:opacity-100 flex-shrink-0"
          aria-label={`Remove ${app.name}`}
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={MAX_MINUTES}
        step={STEP}
        value={app.minutes}
        onChange={(e) => onChangeMinutes(Number(e.target.value))}
        className="w-full"
        style={{
          background: `linear-gradient(to right, ${app.color} ${pct}%, rgba(255,255,255,0.08) ${pct}%)`,
        }}
      />
    </div>
  );
}
