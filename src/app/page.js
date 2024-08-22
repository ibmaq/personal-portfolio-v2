"use client";
import Image from "next/image";
import TopNav from "./Components/TopNav";
import Button from "./Components/Button";
import Cursor from "./Components/Cursor";
import Experience from "./Components/Sections/Experience";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";
import { useEffect, useState } from "react";

export default function Home() {
  let year = new Date().getFullYear();

  const [theme, setTheme] = useState("dark");
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

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

  return (
    <main className={theme}>
      <div className="grid lg:grid grid-cols-1 grid-rows-auto lg:grid-cols-4 lg:grid-rows-5 lg:h-screen md:divide-x divide-y text-slate-600 dark:text-slate-100 text-sm lg:text-base dark:bg-slate-950">
        {/* Main Grid - Row 1 */}
        <section
          id="about"
          className="col-span-1 md:col-span-4 row-span-1 grid grid-cols-1 md:grid-cols-5 lg:grid-cols-4 md:divide-x"
        >
          <div className="col-span-1 row-span-1 md:col-span-3 lg:col-span-3 md:row-span-1 grid items-center p-4 select-none">
            <div className="flex flex-col gap-4">
              <h1 className="hidden lg:block text-neutral-900 dark:text-neutral-100 font-extrabold text-4xl/none lg:text-7xl/none tracking-tighter w-fit">
                {`Hi, I'm `}
                <span className="hover:animate-pulse hover:drop-shadow-md">
                  Muhammad Ibrahim
                </span>
                👋
              </h1>
              <h1 className="block lg:hidden text-neutral-900 dark:text-neutral-100 font-extrabold text-4xl/none tracking-tighter w-fit">
                Muhammad Ibrahim
              </h1>
              <p className="dark:text-slate-200">
                A{" "}
                <b className="text-black dark:text-white">software engineer</b>{" "}
                dedicated to producing code that is not only clean and efficient
                but also testable and scalable.
              </p>
            </div>
          </div>
          {/* Main Grid - Row 2 - Tablet View */}
          <div className="col-span-1 row-span-1 md:col-span-2 lg:col-span-1 md:flex md:flex-col md:gap-1 justify-center p-4">
            <Contact />
          </div>
        </section>

        {/* Main Grid - Row 2 - Internal Grid */}
        <div className="col-span-1 row-span-auto md:col-span-5 lg:col-span-4 md:row-span-4 grid grid-cols-1 grid-rows-auto lg:grid-cols-3 md:grid-rows-1 md:divide-x border-b select-none">
          <Experience />
          <Skills />
          <Projects />
        </div>

        <div className="col-span-1 row-span-1 md:col-span-4 md:grid-cols-6">
          <div className="items-center p-4">
            <p className="text-sm">
              {`Crafted with ❤️ and a whole lot of ☕️. Loosely designed on a sketchbook, developed with Next.js, Tailwind CSS, and VS Code. Deployed with Vercel. © Muhammad Ibrahim ${year} – All Rights Playful.`}
            </p>
          </div>
        </div>
      </div>

      {/* <ThemeToggle /> */}
      <div className="fixed top-36 md:top-7 lg:top-16 right-2 md:right-1 lg:opacity-60 hover:opacity-100 transition-all ease-in-out duration-700 border-2 border-black dark:border-white rounded-2xl bg-black dark:bg-slate-900 md:scale-75 hover:scale-105 z-20">
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
    </main>
  );
}
