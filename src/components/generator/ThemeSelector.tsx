"use client";

import { ThemeId } from "@/types";
import { THEME_REGISTRY, THEME_ORDER } from "@/lib/themeRegistry";

interface ThemeSelectorProps {
  selected: ThemeId;
  onSelect: (theme: ThemeId) => void;
}

export function ThemeSelector({ selected, onSelect }: ThemeSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
        Theme
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {THEME_ORDER.map((id) => {
          const theme = THEME_REGISTRY[id];
          const isSelected = selected === id;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              title={theme.name}
              className={`flex flex-col items-center gap-1.5 p-2 rounded-xl border transition-all ${
                isSelected
                  ? "border-violet-500"
                  : "border-zinc-800 hover:border-zinc-600"
              }`}
            >
              {/* Swatch */}
              <div
                className="w-10 h-10 rounded-lg relative overflow-hidden"
                style={{
                  background: theme.gradientFrom && theme.gradientTo
                    ? `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`
                    : theme.background,
                }}
              >
                {/* Accent dot */}
                <div
                  className="absolute bottom-1 right-1 w-3 h-3 rounded-full"
                  style={{ backgroundColor: theme.accent }}
                />
              </div>
              <span className="text-xs text-zinc-400 font-medium leading-tight text-center">
                {theme.name}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
