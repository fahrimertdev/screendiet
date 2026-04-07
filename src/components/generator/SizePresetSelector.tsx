"use client";

import { SizePreset } from "@/types";

const PRESETS: { id: SizePreset; label: string; sublabel: string; aspect: string }[] = [
  { id: "story", label: "Story", sublabel: "1080×1920", aspect: "9:16" },
  { id: "square", label: "Square", sublabel: "1080×1080", aspect: "1:1" },
  { id: "landscape", label: "Landscape", sublabel: "1200×675", aspect: "16:9" },
];

interface SizePresetSelectorProps {
  selected: SizePreset;
  onSelect: (preset: SizePreset) => void;
}

export function SizePresetSelector({ selected, onSelect }: SizePresetSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
        Format
      </h2>
      <div className="grid grid-cols-3 gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`flex flex-col items-center gap-2 p-3 rounded-xl border transition-all ${
              selected === p.id
                ? "border-violet-500 bg-violet-950/40"
                : "border-zinc-800 hover:border-zinc-600"
            }`}
          >
            {/* Aspect ratio preview */}
            <div className="flex items-center justify-center w-10 h-10">
              {p.id === "story" && (
                <div className={`w-4 h-7 rounded border-2 ${selected === p.id ? "border-violet-400" : "border-zinc-600"}`} />
              )}
              {p.id === "square" && (
                <div className={`w-6 h-6 rounded border-2 ${selected === p.id ? "border-violet-400" : "border-zinc-600"}`} />
              )}
              {p.id === "landscape" && (
                <div className={`w-8 h-[18px] rounded border-2 ${selected === p.id ? "border-violet-400" : "border-zinc-600"}`} />
              )}
            </div>
            <div>
              <div className={`text-xs font-semibold ${selected === p.id ? "text-violet-300" : "text-zinc-400"}`}>
                {p.label}
              </div>
              <div className="text-xs text-zinc-600">{p.aspect}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
