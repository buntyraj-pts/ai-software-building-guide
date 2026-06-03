"use client";

import { useEffect, useState } from "react";

const FOREGROUND_OPTIONS = [
  { label: "Dark slate (default)", value: "#0f172a" },
  { label: "Navy blue", value: "#1e3a8a" },
  { label: "Forest green", value: "#14532d" },
  { label: "Burgundy", value: "#881337" },
  { label: "Purple", value: "#581c87" },
  { label: "Black", value: "#000000" },
  { label: "Gray", value: "#475569" },
] as const;

const STORAGE_KEY = "page-foreground-color";
const DEFAULT_COLOR = FOREGROUND_OPTIONS[0].value;

function applyPageForeground(color: string) {
  document.documentElement.style.setProperty("--foreground", color);
}

export default function ForegroundColorPicker() {
  const [color, setColor] = useState<string>(DEFAULT_COLOR);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const initial =
      saved && FOREGROUND_OPTIONS.some((option) => option.value === saved)
        ? saved
        : DEFAULT_COLOR;
    setColor(initial);
    applyPageForeground(initial);
  }, []);

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const next = event.target.value;
    setColor(next);
    applyPageForeground(next);
    localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <label className="flex items-center gap-2 text-sm text-slate-700">
      <span className="font-medium whitespace-nowrap">Text color</span>
      <select
        value={color}
        onChange={handleChange}
        className="rounded-md border border-slate-300 bg-white px-2 py-1.5 text-sm text-slate-900 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30"
        aria-label="Choose page text color"
      >
        {FOREGROUND_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}
