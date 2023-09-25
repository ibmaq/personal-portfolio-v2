"use client";
import { useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <div className="dark-toggle-switch">
      <label className="dark-switch-label">
        <input
          type="checkbox"
          className="dark-checkbox"
          checked="theme === 'light'"
          onChange={() => setTheme(theme === "light" ? "dark" : "light")}
        />
        <span className="dark-slider"></span>
      </label>
    </div>
  );
}
