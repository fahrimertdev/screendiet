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
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Theme</h2>
        <span className="text-xs text-white/30">{THEME_REGISTRY[selected].name}</span>
      </div>

      <div className="grid grid-cols-4 gap-2">
        {THEME_ORDER.map((id) => {
          const theme = THEME_REGISTRY[id];
          const isSelected = selected === id;
          return (
            <button
              key={id}
              onClick={() => onSelect(id)}
              title={theme.name}
              className={`relative rounded-xl overflow-hidden transition-all duration-150 ${
                isSelected ? "ring-2 ring-white ring-offset-2 ring-offset-[#0a0a0a]" : "opacity-60 hover:opacity-90"
              }`}
              style={{ aspectRatio: "1" }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    theme.gradientFrom && theme.gradientTo && theme.gradientFrom !== theme.gradientTo
                      ? `linear-gradient(135deg, ${theme.gradientFrom}, ${theme.gradientTo})`
                      : theme.background,
                }}
              />
              {/* Accent dot */}
              <div
                className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: theme.accent }}
              />
              {/* Name */}
              <div className="absolute bottom-1 left-1.5">
                <span
                  className="text-[8px] font-semibold"
                  style={{ color: `${theme.primaryText}99` }}
                >
                  {theme.name.split(" ")[0]}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
