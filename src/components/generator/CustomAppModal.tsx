"use client";

import { useState } from "react";
import { SelectedApp } from "@/types";
import { getInitials } from "@/lib/timeFormatters";

interface CustomAppModalProps {
  onAdd: (app: SelectedApp) => void;
  onClose: () => void;
}

const COLOR_OPTIONS = [
  "#7C3AED", "#E1306C", "#FF6B35", "#00B4D8",
  "#4CAF50", "#FF4500", "#1DA1F2", "#F59E0B",
  "#9146FF", "#EC4899", "#06B6D4", "#10B981",
];

export function CustomAppModal({ onAdd, onClose }: CustomAppModalProps) {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#7C3AED");

  const initials = name.trim() ? getInitials(name.trim()) : "??";

  const handleAdd = () => {
    if (!name.trim()) return;
    const id = `custom-${Date.now()}`;
    onAdd({
      id,
      name: name.trim(),
      icon: "",
      color,
      category: "other",
      minutes: 30,
      isCustom: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div
        className="bg-[#111] border border-white/[0.08] rounded-2xl p-6 w-full max-w-sm"
        style={{ boxShadow: "0 24px 60px rgba(0,0,0,0.6)" }}
      >
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-base font-semibold text-white">Add custom app</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-white/30 hover:text-white/70 hover:bg-white/[0.06] transition-all"
          >
            <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
              <path d="M1 1l9 9M10 1L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Preview */}
        <div className="flex justify-center mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold"
            style={{ backgroundColor: `${color}25`, color }}
          >
            {initials}
          </div>
        </div>

        {/* Name */}
        <div className="mb-5">
          <label className="block text-xs font-medium text-white/40 mb-1.5">App name</label>
          <input
            type="text"
            placeholder="e.g. Duolingo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            autoFocus
            className="w-full bg-white/[0.04] rounded-xl px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 focus:outline-none focus:bg-white/[0.07] transition-colors"
          />
        </div>

        {/* Color */}
        <div className="mb-6">
          <label className="block text-xs font-medium text-white/40 mb-2">Color</label>
          <div className="flex flex-wrap gap-2">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className="w-7 h-7 rounded-full transition-all"
                style={{
                  backgroundColor: c,
                  outline: color === c ? `2px solid ${c}` : "none",
                  outlineOffset: "2px",
                  transform: color === c ? "scale(1.15)" : "scale(1)",
                }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl text-sm font-medium text-white/40 hover:text-white/70 hover:bg-white/[0.04] transition-all"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!name.trim()}
            className="flex-1 py-2.5 rounded-xl bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
