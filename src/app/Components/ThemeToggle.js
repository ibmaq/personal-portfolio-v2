"use client";
import { useState } from "react";

export default function ThemeToggle() {
  // let temp = localStorage.getItem("theme");
  // const [theme, setTheme] = useState(temp ?? "light");
  // console.log("theme", theme);

  const handleWebsiteTheme = () => {
    console.log("hit");
  };

  return (
    <div className="fixed top-0 right-0">
      <div className="dark-toggle-switch">
        <label className="dark-switch-label">
          <input
            type="checkbox"
            className="dark-checkbox"
            checked="false"
            onChange={handleWebsiteTheme}
          />
          <span className="dark-slider"></span>
        </label>
      </div>
    </div>
  );
}
