"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { useCursorContext } from "@/app/CursorContext";

export default function Skills() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        "React.js + Next.js",
        "Vue.js + Nuxt.js",
        "HTML5 + CSS3 + JS",
        "Tailwind CSS",
        "Bootstrap",
        "Material UI",
        "Typescript",
      ],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Express.js", "MongoDB"],
    },
    {
      category: "Cloud Services",
      skills: ["AWS (Amazon Web Services)", "Firebase/Google Cloud Platform"],
    },
    {
      category: "Additional Skills",
      skills: ["Redux Toolkit", "Figma", "SEO principles", "Web3"],
    },
    {
      category: "Version Control",
      skills: ["Git"],
    },
    {
      category: "API Development",
      skills: ["REST APIs"],
    },
  ];
  const [selectedProjectId, setSelectedProjectId] = useState(-1);
  const { setCursorAnimType } = useCursorContext();
  const expandCursor = (e) => {
    e.preventDefault();
    setCursorAnimType("expand");
  };
  const defaultCursor = (e) => {
    e.preventDefault();
    setCursorAnimType("default");
  };
  return (
    <section className="md:col-span-1 md:row-span-3 items-center md:overflow-auto">
      <div className="flex flex-col">
        <h1 className="text-neutral-900 dark:text-neutral-100 font-bold lg:text-4xl text-3xl tracking-tighter sticky top-0 z-10 p-4 pt-6">
          Skills
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-4 p-4 pt-2 h-fit max-h-fit">
          {skillsData.map((item, idx) => {
            return (
              <div
                key={idx}
                className="text-slate-800 dark:text-slate-200 border border-transparent hover:border-black/30 dark:hover:border-white/30 rounded-lg p-4 shadow-md hover:shadow-none transition-all ease-in-out duration-300 bg-neutral-100 dark:bg-slate-900"
              >
                <h2 className="font-bold">{item.category}</h2>
                <ul className="list-disc list-outside">
                  {item.skills.map((skill, index) => (
                    <li key={index} className="ml-4">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
        {/* <ul className="flex flex-col gap-4 p-4 pt-2">
          {skillsData.map((item, idx) => {
            return (
              <li key={idx} className="text-black">
                {item.category}
              </li>
            );
          })}
        </ul> */}
        {/* <ul className="flex flex-col gap-4 p-4 pt-2">
          {skillsData.map((item, idx) => {
            return (
              <li
                className={`border relative bg-white rounded-lg ${
                  cardHoverID === item.id
                    ? "scale-[1.02] shadow-xl"
                    : "scale-100"
                } transition-all ease-in-out duration-300`}
                key={idx}
                onPointerEnter={() => setCardHoverID(item.id)}
                onPointerLeave={() => setCardHoverID(-1)}
              >
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center justify-between">
                    <h1 className="text-black font-extrabold text-2xl tracking-tighter w-fit">
                      {item.title}
                    </h1>
                    <div
                      className="h-8 w-8"
                      onClick={() =>
                        setSelectedProjectId(
                          selectedProjectId === item.id ? null : item.id
                        )
                      }
                      onMouseEnter={expandCursor}
                      onMouseLeave={defaultCursor}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="inline-block shrink-0 transition-transform rotate-45 hover:rotate-0"
                        //   class="inline-block h-8 w-8 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <p className="text-slate-500 text-sm tracking-tight">
                    {item.description}
                  </p>
                  <div className="border-y border-black/5 w-full py-2">
                    <ul className="flex gap-2">
                      {item.stack.map((stack, idx) => {
                        return (
                          <li
                            className={`text-black px-2 border rounded-full capitalize text-sm tracking-tight flex gap-1
                          ${
                            stackHover.cardID === item.id &&
                            stackHover.pillID === idx
                              ? "bg-sky-300"
                              : "bg-sky-200"
                          } transition-all ease-in-out duration-300 transform`}
                            key={idx}
                            onPointerEnter={() =>
                              setStackHover({
                                cardID: item.id,
                                pillID: idx,
                              })
                            }
                            onPointerLeave={() =>
                              setStackHover({
                                cardID: -1,
                                pillID: -1,
                              })
                            }
                          >
                            <Image
                              src={`/stack_icons/${stack}.svg`}
                              alt="used_stack_icon"
                              width={18}
                              height={18}
                            />
                            {stack}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul> */}
      </div>
    </section>
  );
}
