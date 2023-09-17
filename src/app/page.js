// "use client";
import Image from "next/image";
import TopNav from "./Components/TopNav";
import Button from "./Components/Button";
import Cursor from "./Components/Cursor";
import TextPlate from "./Components/TextPlate";
import Projects from "./Components/Sections/Projects";

export default function Home() {
  return (
    <main className="neu-body">
      <TopNav />
      {/* Intro */}
      <section
        className="flex items-center w-full max-w-7xl mx-auto lg:px-24 md:px-12 px-8 py-24"
        id="about"
      >
        <div className="w-1/2 flex flex-col gap-10">
          <TextPlate
            heading="Hola!"
            content="Hi, My name is Ibrahim. I'm a frontend dev, based in
              Pakistan."
            align="left"
          />
          <div className="flex gap-2">
            <Button type="primary" size="large" text="Hire Me 👋" />
            <Button
              type="secondary"
              size="large"
              text="Check out my resume 👉"
            />
          </div>
        </div>
        <Image
          src="/pfp.jpg"
          alt="Vercel Logo"
          className="rounded-lg ml-auto"
          width={400}
          height={400}
          priority
        />
      </section>
      {/* Projects */}
      <section className="flex flex-col gap-10 items-center w-full max-w-7xl mx-auto lg:px-24 md:px-12 px-8 py-24">
        <TextPlate
          heading="Projects"
          content="Here are some of my prominent works."
          align="center"
        />

        {/* masonry card layout with images, headings, small text and view details buttons */}
        <Projects />
      </section>
      {/* animated-cursor */}
      <Cursor />
    </main>
  );
}
