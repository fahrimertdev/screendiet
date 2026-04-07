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
      className={`relative flex flex-col items-center gap-1.5 p-3 rounded-xl border transition-all text-center ${
        isSelected
          ? "border-violet-500 bg-violet-950/50"
          : isDisabled
          ? "border-zinc-800 bg-zinc-900/30 opacity-40 cursor-not-allowed"
          : "border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 hover:bg-zinc-800/50"
      }`}
    >
      {isSelected && (
        <div className="absolute top-1.5 right-1.5 w-4 h-4 bg-violet-500 rounded-full flex items-center justify-center">
          <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M1 4L3 6L7 2" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      )}
      <span className="text-2xl">{app.icon}</span>
      <span className="text-xs font-medium text-zinc-300 leading-tight line-clamp-2">
        {app.name}
      </span>
    </button>
  );
}
