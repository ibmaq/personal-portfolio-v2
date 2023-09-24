"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { useCursorContext } from "@/app/CursorContext";
import Link from "next/link";

export default function Projects() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const projectsData = [
    {
      id: 0,
      title: "WordPress Projects",
      description:
        "Crafted over 50 WordPress websites with finesse, leveraging top-notch page builders like Elementor Pro, WPBakery, and Divi. Each project showcases my expertise in creating captivating and highly functional WordPress experiences.",
      image: "/pfp.jpg",
      stack: ["wordpress"],
      link: "/projects",
    },
    // {
    //   id: 1,
    //   title: "NCR",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   image: "/pfp.jpg",
    //   stack: ["next", "typescript", "MUI"],
    //   link: "https://www.ncr.com/",
    // },
    {
      id: 2,
      title: "AEvent - Webinar Automation Application",
      description:
        "AEvent is an event and communications automation platform for professionals and businesses organizing online events, running digital marketing campaigns, and sharing training sessions",
      image: "/pfp.jpg",
      stack: ["vue", "nuxt"],
      link: "https://aevent.com/",
    },
    // {
    //   id: 3,
    //   title: "Workplace Solutions",
    //   description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    //   image: "/pfp.jpg",
    //   stack: ["react", "vue", "next"],
    //   link: "#",
    // },
    // {
    //   id: 4,
    //   title: "RMS",
    //   description: "description",
    //   image: "/pfp.jpg",
    //   stack: ["react", "vue", "next"],
    //   link: "#",
    // },
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
    <section className="col-span-1 row-span-3 items-center overflow-auto">
      <div className="flex flex-col">
        <h1 className="text-black font-bold lg:text-4xl text-3xl tracking-tighter sticky top-0 z-10 bg-white p-4 pt-6">
          Projects
        </h1>
        <ul className="flex flex-col gap-4 p-4 pt-2">
          {projectsData.map((item, idx) => {
            return (
              <li
                layoutId={item.id}
                className={`border relative bg-white rounded-lg ${
                  cardHoverID === item.id && "scale-[1.02] shadow-lg"
                } ${
                  cardHoverID !== item.id && cardHoverID !== -1 && "blur-[1px]"
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
                    <Link href={item.link} target="_blank">
                      <div
                        className="h-8 w-8"
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
                            fill-rule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </Link>
                  </div>
                  <p className="text-slate-500 text-sm tracking-tight">
                    {item.description}
                  </p>
                  {/* stack used */}
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
                {/* Button */}
                {/* className="absolute px-1.5 pt-1 pb-2 -top-3 right-2 rounded-lg text-md bg-black text-white" */}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
