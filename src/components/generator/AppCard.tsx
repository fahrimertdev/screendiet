"use client";

import { AppDefinition } from "@/types";

interface AppCardProps {
  app: AppDefinition;
  isSelected: boolean;
  isDisabled: boolean;
  onToggle: () => void;
}

export function AppCard({ app, isSelected, isDisabled, onToggle }: AppCardProps) {
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
      {/* Icon bubble */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-xl transition-transform group-hover:scale-105"
        style={{
          backgroundColor: isSelected ? `${app.color}33` : `${app.color}18`,
        }}
      >
        {app.icon}
      </div>

      <span className={`text-[11px] font-medium leading-tight text-center line-clamp-1 w-full ${
        isSelected ? "text-white" : "text-white/50"
      }`}>
        {app.name}
      </span>

      {/* Selected indicator */}
      {isSelected && (
        <div
          className="absolute top-1.5 right-1.5 w-3.5 h-3.5 rounded-full flex items-center justify-center"
          style={{ backgroundColor: app.color }}
        >
          <svg width="7" height="7" viewBox="0 0 7 7" fill="none">
            <path d="M1 3.5L2.8 5.5L6 2" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
    </button>
  );
}
