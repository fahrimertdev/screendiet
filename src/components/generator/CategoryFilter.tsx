"use client";

import { CATEGORIES } from "@/lib/appDefinitions";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
            selected === cat.id
              ? "bg-violet-600 text-white"
              : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-zinc-200"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
