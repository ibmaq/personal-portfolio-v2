import Image from "next/image";
import TopNav from "./Components/TopNav";
import Button from "./Components/Button";
import Cursor from "./Components/Cursor";
import Experience from "./Components/Sections/Experience";
import Skills from "./Components/Sections/Skills";
import Projects from "./Components/Sections/Projects";
import Contact from "./Components/Sections/Contact";

export default function Home() {
  let year = new Date().getFullYear();
  return (
    <main className="">
      {/* <div className="grid lg:grid-cols-4 lg:h-screen divide-x divide-y"> */}
      <div className="grid lg:grid grid-cols-1 grid-rows-auto lg:grid-cols-4 lg:grid-rows-5 lg:h-screen divide-x divide-y text-slate-500 text-sm lg:text-base">
        {/* Main Grid - Row 1 */}
        {/* Main Grid - Row 1 */}
        <section
          className="col-span-1 row-span-1 md:col-span-3 md:row-span-1 grid items-center p-4"
          id="about"
        >
          <div className="flex flex-col gap-4">
            <h1 className="hidden lg:block text-black font-extrabold text-4xl/none lg:text-7xl/none tracking-tighter w-fit">
              {`Hi, I'm `}
              <span className="hover:animate-pulse hover:drop-shadow-md">
                Muhammad Ibrahim
              </span>
              👋
            </h1>
            <h1 className="block lg:hidden text-black font-extrabold text-4xl/none tracking-tighter w-fit">
              Muhammad Ibrahim
            </h1>
            <p className="leading-none">
              A software engineer dedicated to producing code that is not only
              clean and efficient but also testable and scalable. 🙌
            </p>
          </div>
        </section>

        {/* Main Grid - Row 2 - Tablet View */}
        <div className="col-span-1 row-span-1 md:col-span-1 md:flex md:flex-col md:gap-1 justify-center p-4">
          <Contact />
        </div>

        {/* Main Grid - Row 2 - Internal Grid */}
        <div className="col-span-1 row-span-auto md:col-span-5 lg:col-span-4 md:row-span-4 grid grid-cols-1 grid-rows-auto lg:grid-cols-3 md:grid-rows-1 divide-x border-b">
          <Experience />
          <Skills />
          <Projects />
        </div>

        <div className="col-span-1 row-span-1 md:col-span-4 md:grid-cols-6">
          <div className="items-center p-4">
            <p className="text-md">
              {`Crafted with ❤️ and a whole lot of ☕️. Loosely designed on a sketchbook, developed with Next.js, Tailwind CSS, and VS Code. Deployed with Vercel. © Muhammad Ibrahim ${year} – All Rights Playful.`}
            </p>
          </div>
        </div>
      </div>

      {/* animated-cursor */}
      <Cursor />
    </main>
  );
}
