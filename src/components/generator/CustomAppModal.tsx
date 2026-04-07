"use client";

import { useState } from "react";
import { SelectedApp } from "@/types";

interface CustomAppModalProps {
  onAdd: (app: SelectedApp) => void;
  onClose: () => void;
}

const EMOJI_OPTIONS = ["📱", "💻", "🎮", "📺", "🎵", "📷", "🌐", "💬", "📧", "🎧", "🛒", "🏋️", "🧘", "📰", "🗂️", "🔧"];
const COLOR_OPTIONS = ["#7C3AED", "#E1306C", "#FF6B35", "#00B4D8", "#4CAF50", "#FF4500", "#1DA1F2", "#FFFC00", "#9146FF", "#FA243C"];

export function CustomAppModal({ onAdd, onClose }: CustomAppModalProps) {
  const [name, setName] = useState("");
  const [icon, setIcon] = useState("📱");
  const [color, setColor] = useState("#7C3AED");

  const handleAdd = () => {
    if (!name.trim()) return;
    const id = `custom-${Date.now()}`;
    onAdd({
      id,
      name: name.trim(),
      icon,
      color,
      category: "other",
      minutes: 30,
      isCustom: true,
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 w-full max-w-sm">
        <div className="flex items-center justify-between mb-5">
          <h3 className="text-base font-bold text-zinc-100">Add Custom App</h3>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-300 hover:bg-zinc-800"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M2 2L10 10M10 2L2 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            App Name
          </label>
          <input
            type="text"
            placeholder="e.g. Duolingo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleAdd()}
            autoFocus
            className="w-full bg-zinc-800 border border-zinc-700 rounded-lg px-3 py-2.5 text-sm text-zinc-200 placeholder:text-zinc-600 focus:outline-none focus:border-violet-500"
          />
        </div>

        {/* Emoji */}
        <div className="mb-4">
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            Icon
          </label>
          <div className="grid grid-cols-8 gap-1.5">
            {EMOJI_OPTIONS.map((e) => (
              <button
                key={e}
                onClick={() => setIcon(e)}
                className={`w-9 h-9 rounded-lg text-lg flex items-center justify-center transition-all ${
                  icon === e ? "bg-violet-900 ring-1 ring-violet-500" : "bg-zinc-800 hover:bg-zinc-700"
                }`}
              >
                {e}
              </button>
            ))}
          </div>
        </div>

        {/* Color */}
        <div className="mb-6">
          <label className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-1.5">
            Color
          </label>
          <div className="flex gap-2 flex-wrap">
            {COLOR_OPTIONS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                className={`w-8 h-8 rounded-full transition-all ${
                  color === c ? "ring-2 ring-white ring-offset-2 ring-offset-zinc-900 scale-110" : ""
                }`}
                style={{ backgroundColor: c }}
              />
            ))}
          </div>
        </div>

        <div className="flex gap-2">
          <button
            onClick={onClose}
            className="flex-1 py-2.5 rounded-xl bg-zinc-800 text-zinc-400 text-sm font-semibold hover:bg-zinc-700 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleAdd}
            disabled={!name.trim()}
            className="flex-1 py-2.5 rounded-xl bg-violet-600 text-white text-sm font-semibold hover:bg-violet-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Add App
          </button>
        </div>
      </div>
    </div>
  );
}
