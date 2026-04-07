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
      <h2 className="text-base font-semibold text-white mb-4">Period</h2>

      <div className="flex flex-wrap gap-2">
        {PERIODS.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
              selected === p.id
                ? "bg-white text-black"
                : "text-white/40 hover:text-white/70 bg-white/[0.03] hover:bg-white/[0.06]"
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
          className="mt-3 w-full bg-white/[0.04] rounded-lg px-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.06] transition-colors"
        />
      )}
    </div>
  );
}
