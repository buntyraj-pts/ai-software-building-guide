"use client";

import { useEffect, useState } from "react";

const BACKGROUND_OPTIONS = [
  { label: "White (default)", value: "#ffffff" },
  { label: "Light blue", value: "#eff6ff" },
  { label: "Light green", value: "#f0fdf4" },
  { label: "Light yellow", value: "#fefce8" },
  { label: "Light pink", value: "#fdf2f8" },
  { label: "Light gray", value: "#f1f5f9" },
  { label: "Soft lavender", value: "#f5f3ff" },
] as const;

const STORAGE_KEY = "page-background-color";
const DEFAULT_COLOR = BACKGROUND_OPTIONS[0].value;

function applyPageBackground(color: string) {
  document.documentElement.style.setProperty("--background", color);
}

export default function BackgroundColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_COLOR);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial =
      saved && BACKGROUND_OPTIONS.some((option) => option.value === saved)
        ? saved
        : DEFAULT_COLOR;
    setColor(initial);
    applyPageBackground(initial);
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setColor(next);
    applyPageBackground(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span className="font-medium whitespace-nowrap">Background color</span>
      <select
        value={color}
        onChange={handleChange}
        className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        aria-label="Choose page background color"
      >
        {BACKGROUND_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
