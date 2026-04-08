"use client";

import { AppDefinition } from "@/types";
import { getInitials, ensureVisibleColor } from "@/lib/timeFormatters";

interface AppCardProps {
  app: AppDefinition;
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function AppCard({ app, isSelected, isDisabled, onToggle }: AppCardProps) {
  const initials = getInitials(app.name);
  const visibleColor = ensureVisibleColor(app.color);

  return (
    <button
      onClick={onToggle}
      disabled={isDisabled && !isSelected}
      title={isDisabled && !isSelected ? "Remove an app to add another" : app.name}
      className={`relative group flex flex-col items-center gap-2 p-3 rounded-xl transition-all duration-150 ${
        isSelected
          ? "bg-white/10 ring-1 ring-white/20"
          : isDisabled
          ? "opacity-25 cursor-not-allowed"
          : "hover:bg-white/[0.06] active:bg-white/[0.09]"
      }`}
    >
      {/* Initials bubble */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm leading-none transition-transform group-hover:scale-105 flex-shrink-0"
        style={{
          backgroundColor: isSelected ? `${app.color}40` : `${app.color}20`,
          color: visibleColor,
        }}
      >
        {initials}
      </div>

      <span className={`text-[11px] font-medium leading-tight text-center line-clamp-1 w-full ${
        isSelected ? "text-white" : "text-white/50"
      }`}>
        {app.name}
      </span>

      {/* Selected dot */}
      {isSelected && (
        <div
          className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
          style={{ backgroundColor: app.color }}
        />
      )}
    </button>
  );
}
