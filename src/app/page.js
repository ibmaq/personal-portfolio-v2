import Image from "next/image";
import TopNav from "./Components/TopNav";
import Button from "./Components/Button";
import Cursor from "./Components/Cursor";

export default function Home() {
  return (
    <main className="min-h-screen">
      <TopNav />
      {/* Intro */}
      <section className="flex items-center w-full max-w-7xl mx-auto lg:px-24 md:px-12 px-8 py-24">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
              Hola!
            </h1>
            <p className="text-slate-500 text-lg tracking-tight">
              Hi, My name is Ibrahim. I'm a frontend dev, based in Pakistan.
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="primary" size="large" text="Hire Me 👋" />
            <Button type="secondary" size="large" text="See work" />
          </div>
        </div>
        <Image
          src="/pfp.jpg"
          alt="Vercel Logo"
          className="dark:invert rounded-lg ml-auto"
          width={400}
          height={400}
          priority
        />
      </section>
      {/* Intro */}
      <section className="flex items-center w-full max-w-7xl mx-auto lg:px-24 md:px-12 px-8 py-24">
        <div className="w-1/2 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h1 className="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter">
              Hola!
            </h1>
            <p className="text-slate-500 text-lg tracking-tight">
              Hi, My name is Ibrahim. I'm a frontend dev, based in Pakistan.
            </p>
          </div>
          <div className="flex gap-2">
            <Button type="primary" size="large" text="Hire Me 👋" />
            <Button type="secondary" size="large" text="See work" />
          </div>
        </div>
        <Image
          src="/pfp.jpg"
          alt="Vercel Logo"
          className="dark:invert rounded-lg ml-auto"
          width={400}
          height={400}
          priority
        />
      </section>
      {/* animated-cursor */}
      <Cursor />
    </main>
  );
}
