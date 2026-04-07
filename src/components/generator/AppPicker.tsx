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
    const matchesSearch = !search || app.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Header */}
      <div className="flex items-baseline justify-between mb-4">
        <h2 className="text-base font-semibold text-white">Apps</h2>
        <span className="text-xs text-white/30">{selectedCount}/{maxApps}</span>
      </div>

      {/* Search */}
      <div className="relative mb-3">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-white/25"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-white/[0.04] rounded-lg pl-8 pr-3 py-2 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.06] transition-colors"
        />
      </div>

      {/* Category tabs */}
      <div className="mb-4">
        <CategoryFilter selected={category} onSelect={setCategory} />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-4 gap-1 max-h-56 overflow-y-auto">
        {filtered.map((app) => (
          <AppCard
            key={app.id}
            app={app}
            isSelected={isAppSelected(app.id)}
            isDisabled={isAtLimit}
            onToggle={() => onToggle(app)}
          />
        ))}

        {/* Custom app */}
        <button
          onClick={onAddCustom}
          disabled={isAtLimit}
          className={`flex flex-col items-center gap-2 p-3 rounded-xl transition-all ${
            isAtLimit ? "opacity-25 cursor-not-allowed" : "hover:bg-white/[0.06]"
          }`}
        >
          <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white/20 border border-dashed border-white/10">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M7 2v10M2 7h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>
          <span className="text-[11px] font-medium text-white/25">Custom</span>
        </button>
      </div>

      {isAtLimit && (
        <p className="mt-3 text-xs text-white/30 text-center">
          Remove an app to add another
        </p>
      )}
    </div>
  );
}
