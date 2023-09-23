// "use client";
import Image from "next/image";
import TopNav from "./Components/TopNav";
import Button from "./Components/Button";
import Cursor from "./Components/Cursor";
import Experience from "./Components/Sections/Experience";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";

export default function Home() {
  return (
    <main className="bg-white ">
      <div className="grid grid-cols-4 grid-rows-5 h-screen divide-x divide-y">
        {/* Main Grid - Row 1 */}
        <section
          className="col-span-2 row-span-1 grid items-center p-4"
          id="about"
        >
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-extrabold text-7xl/none tracking-tighter w-fit">
              Muhammad Ibrahim
            </h1>
            <p className="text-slate-500 leading-none">
              Hi, My name is Ibrahim. I'm a frontend dev, based in Pakistan.
            </p>
          </div>
        </section>
        <section
          className="col-span-1 row-span-1 grid items-center p-4"
          id="about"
        >
          <ul className="text-slate-500 text-md">
            <li>ibrahimaq99@gmail.com</li>
            <li>+92 312 3996083</li>
            <li>linkedin.com/in/ibrahimqureshi99</li>
            <li>muhmmadibrahim.com</li>
          </ul>
        </section>
        <section
          className="col-span-1 row-span-1 grid items-center p-4"
          id="about"
        >
          <ul className="text-slate-500 text-md">
            <li>ibrahimaq99@gmail.com</li>
            <li>+92 312 3996083</li>
            <li>linkedin.com/in/ibrahimqureshi99</li>
            <li>muhmmadibrahim.com</li>
          </ul>
        </section>
        {/* Main Grid - Row 2 - Internal Grid */}
        <div className="col-span-4 row-span-4 grid grid-cols-1 grid-rows-6">
          <div className="col-span-4 row-span-5 grid grid-cols-3 grid-rows-1 divide-x border-b">
            <Experience />
            <Skills />
            <Projects />
          </div>
        </div>
      </div>

      {/* animated-cursor */}
      {/* <Cursor /> */}
    </main>
  );
}
