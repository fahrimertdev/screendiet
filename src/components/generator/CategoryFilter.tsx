"use client";

import { CATEGORIES } from "@/lib/appDefinitions";

interface CategoryFilterProps {
  selected: string;
  onSelect: (category: string) => void;
}

export function CategoryFilter({ selected, onSelect }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-1">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onSelect(cat.id)}
          className={`flex-shrink-0 px-3 py-1 rounded-full text-xs font-medium transition-all ${
            selected === cat.id
              ? "bg-white text-black"
              : "text-white/40 hover:text-white/70"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
