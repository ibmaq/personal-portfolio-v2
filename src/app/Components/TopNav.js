"use client";

import Image from "next/image";

const navItems = [
  {
    name: "About",
    href: "#about",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export default function TopNav() {
  return (
    <section className="bg-white/70 border-b border-black/5 sticky top-0 backdrop-blur-2xl">
      <div className="w-full max-w-7xl lg:px-24 md:px-12 px-8 py-6 flex justify-between mx-auto">
        {/* Logo */}
        <Image src="/vercel.svg" alt="Vercel Logo" width={100} height={24} />
        {/* Navigation */}
        <nav className="flex gap-5">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black font-medium hover:text-accent-400 py-2 text-sm px-2"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </section>
  );
}
