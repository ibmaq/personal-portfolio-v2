"use client";
import { useTheme } from "../Hooks/useTheme";

export default function ThemeToggle({ themeProp, setTheme }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      {/* For Desktop View */}
      <div className="hidden sm:block fixed top-36 md:top-7 lg:top-16 right-2 md:right-1 lg:opacity-60 hover:opacity-100 transition-all ease-in-out duration-700 border-2 border-black dark:border-white rounded-full bg-black dark:bg-slate-900 md:scale-75 hover:scale-105 z-20">
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
      {/* For Mobile View */}
      <div className="block sm:hidden fixed bottom-1 right-2 transition-all ease-in-out duration-700 border-2 border-black dark:border-white rounded-full bg-black dark:bg-slate-900  z-20">
        <div className="dark-toggle-switch-sm">
          <label className="dark-switch-label-sm">
            <input
              type="checkbox"
              className="dark-checkbox-sm"
              checked={theme === "light"}
              onChange={toggleTheme}
            />
            <span className="dark-slider-sm"></span>
          </label>
        </div>
      </div>
    </>
  );
}
