// useTheme.js
import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Get the theme from localStorage when the component mounts
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }

    // Listen for changes to the "theme" key in localStorage and update the theme
    const handleStorageChange = (e) => {
      if (e.key === "theme") {
        setTheme(e.newValue);
      }
    };

    window.addEventListener("storage", handleStorageChange);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  // Function to toggle the theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  console.log("🚀 ~ file: useTheme.js:3s3 ~ toggleTheme ~ newTheme:", theme);
  return { theme, toggleTheme };
}
