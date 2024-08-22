"use client";
import { useTheme } from "../Hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="fixed top-10 right-1 opacity-20 hover:opacity-100 transition-all ease-in-out duration-700 z-20">
      <div className="dark-toggle-switch">
        <label className="dark-switch-label">
          <input
            type="checkbox"
            className="dark-checkbox"
            checked={theme === "light"}
            onChange={toggleTheme}
          />
          <span className="dark-slider"></span>
        </label>
      </div>
    </div>
  );
}
