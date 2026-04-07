"use client";

import { PeriodOption } from "@/types";

const PERIODS: { id: PeriodOption; label: string }[] = [
  { id: "today", label: "Today" },
  { id: "week", label: "This Week" },
  { id: "month", label: "This Month" },
  { id: "custom", label: "Custom" },
];

interface PeriodSelectorProps {
  selected: PeriodOption;
  customLabel?: string;
  onSelect: (period: PeriodOption) => void;
  onCustomLabel: (label: string) => void;
}

export function PeriodSelector({
  selected,
  customLabel,
  onSelect,
  onCustomLabel,
}: PeriodSelectorProps) {
  return (
    <div>
      <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider mb-3">
        Period
      </h2>
      <div className="grid grid-cols-4 gap-2">
        {PERIODS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`py-2 px-2 rounded-lg text-xs font-semibold transition-all ${
              selected === p.id
                ? "bg-violet-600 text-white"
                : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
            }`}
          >
            {p.label}
          </button>
        ))}
      </div>

      {selected === "custom" && (
        <input
          type="text"
          placeholder="e.g. Jan 1–7, 2025"
          value={customLabel || ""}
          onChange={(e) => onCustomLabel(e.target.value)}
          className="mt-2 w-full bg-zinc-900 border border-zinc-800 rounded-lg px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
        />
      )}
    </div>
  );
}
