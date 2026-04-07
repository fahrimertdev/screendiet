"use client";

import { SizePreset } from "@/types";

const PRESETS: {
  id: SizePreset;
  label: string;
  sub: string;
  w: number;
  h: number;
}[] = [
  { id: "story", label: "Story", sub: "9:16", w: 9, h: 16 },
  { id: "square", label: "Square", sub: "1:1", w: 1, h: 1 },
  { id: "landscape", label: "Landscape", sub: "16:9", w: 16, h: 9 },
];

interface SizePresetSelectorProps {
  selected: SizePreset;
  onSelect: (preset: SizePreset) => void;
}

export function SizePresetSelector({ selected, onSelect }: SizePresetSelectorProps) {
  return (
    <div>
      <h2 className="text-base font-semibold text-white mb-4">Format</h2>

      <div className="flex gap-3">
        {PRESETS.map((p) => {
          const isSelected = selected === p.id;
          // Scale the visual preview rectangles
          const maxH = 36;
          const maxW = 48;
          const scale = Math.min(maxH / p.h, maxW / p.w);
          const vw = Math.round(p.w * scale);
          const vh = Math.round(p.h * scale);

          return (
            <button
              key={p.id}
              onClick={() => onSelect(p.id)}
              className={`flex-1 flex flex-col items-center gap-2.5 py-3 rounded-xl transition-all ${
                isSelected ? "bg-white/10" : "hover:bg-white/[0.04]"
              }`}
            >
              <div className="flex items-center justify-center w-12 h-10">
                <div
                  className={`rounded transition-all ${
                    isSelected ? "bg-white" : "bg-white/20"
                  }`}
                  style={{ width: `${vw}px`, height: `${vh}px` }}
                />
              </div>
              <div className="text-center">
                <div className={`text-xs font-semibold ${isSelected ? "text-white" : "text-white/40"}`}>
                  {p.label}
                </div>
                <div className="text-[10px] text-white/20">{p.sub}</div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
