"use client";

import { useState } from "react";
import { AppDefinition } from "@/types";
import { APP_DEFINITIONS } from "@/lib/appDefinitions";
import { CategoryFilter } from "./CategoryFilter";
import { AppCard } from "./AppCard";

interface AppPickerProps {
  isAppSelected: (id: string) => boolean;
  isAtLimit: boolean;
  onToggle: (app: AppDefinition) => void;
  onAddCustom: () => void;
  selectedCount: number;
  maxApps: number;
}

export function AppPicker({
  isAppSelected,
  isAtLimit,
  onToggle,
  onAddCustom,
  selectedCount,
  maxApps,
}: AppPickerProps) {
  const [category, setCategory] = useState("all");
  const [search, setSearch] = useState("");

  const filtered = APP_DEFINITIONS.filter((app) => {
    const matchesCategory = category === "all" || app.category === category;
    const matchesSearch =
      !search || app.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h2 className="text-sm font-semibold text-zinc-300 uppercase tracking-wider">
          Apps
        </h2>
        <span className="text-xs text-zinc-500">
          {selectedCount}/{maxApps} selected
        </span>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="Search apps..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-9 pr-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-zinc-600"
        />
      </div>

      <CategoryFilter selected={category} onSelect={setCategory} />

      {/* Grid */}
      <div className="grid grid-cols-4 gap-2 max-h-64 overflow-y-auto pr-1">
        {filtered.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            isSelected={isAppSelected(app.id)}
            isDisabled={isAtLimit}
            onToggle={() => onToggle(app)}
          />
        ))}

        {/* Custom app button */}
        <button
          onClick={onAddCustom}
          disabled={isAtLimit}
          className={`flex flex-col items-center gap-1.5 p-3 rounded-xl border border-dashed transition-all text-center ${
            isAtLimit
              ? "border-zinc-800 opacity-40 cursor-not-allowed"
              : "border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/30"
          }`}
        >
          <span className="text-2xl">➕</span>
          <span className="text-xs font-medium text-zinc-500">Custom</span>
        </button>
      </div>

      {isAtLimit && (
        <p className="mt-2 text-xs text-amber-500/80 text-center">
          Max {maxApps} apps reached. Remove one to add another.
        </p>
      )}
    </div>
  );
}
