"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import { useCursorContext } from "@/app/CursorContext";

export default function Projects() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const experienceData = [
    {
      id: 0,
      title: "Frontend Developer",
      company: "AlphaSquad",
      duration: "Nov 2022 - Present",
      description: [
        "Leveraged 2+ years of React.js experience to enhance the front-end and back-end of complex web applications.",
        "Collaborated on product and web design, ensuring seamless user experiences.",
        "Utilized cloud services for efficient application deployment.",
        "Developed REST APIs with node.js and Express, prioritizing code quality and scalability.",
      ],
      skills: ["next", "typescript", "MUI"],
    },
    {
      id: 1,
      title: "Freelance Developer",
      company: "Remote",
      duration: "Feb - Nov 2022",
      description: [
        "Led the development of visually stunning websites for diverse clients, demonstrating proficiency in WordPress and CSS.",
        "Revamped and optimized website projects for improved design and functionality.",
        "Implemented SEO strategies, enhancing online visibility and organic traffic.",
      ],
      skills: ["vue", "nuxt"],
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Digital Marvels",
      duration: "Sep 2020 - Jan 2022",
      description: [
        "Led the development of visually stunning websites for diverse clients, demonstrating proficiency in WordPress and CSS.",
        "Revamped and optimized website projects for improved design and functionality.",
        "Implemented SEO strategies, enhancing online visibility and organic traffic.",
      ],
      skills: ["react", "vue", "next"],
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Fleekbiz",
      duration: "Jun 2017 - Feb 2018",
      description: [
        "Developed responsive HTML/CSS/JS projects, prioritizing user-friendly design and exceptional user experiences.",
        "Successfully delivered 4–5-page websites featuring core functionality and interactive contact forms.",
        "Utilized jQuery along with various CSS pre-processors such as SASS and SCSS to enhance website functionality and aesthetics.",
      ],
      skills: ["react", "vue", "next"],
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
    <section className="col-span-1 row-span-3 items-center overflow-auto">
      <div className="flex flex-col">
        <h1 className="text-black font-bold lg:text-4xl text-3xl tracking-tighter sticky top-0 z-10 bg-white p-4 pt-6">
          Experience
        </h1>
        <ul className="flex flex-col gap-4 p-4 pt-2">
          {experienceData.map((item, idx) => {
            return (
              <li
                layoutId={item.id}
                className={`border hover:border-black/40 relative bg-white rounded-lg ${
                  cardHoverID === item.id
                    ? "scale-[1.02] shadow-md"
                    : "scale-100"
                } transition-all ease-in-out duration-300`}
                key={idx}
              >
                {/* onPointerEnter={() => setCardHoverID(item.id)}
                onPointerLeave={() => setCardHoverID(-1)} */}
                <div className="flex flex-col p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-2">
                      <h1 className="text-black font-extrabold text-2xl tracking-tighter w-fit">
                        {item.title}
                      </h1>
                      <div className="w-full flex justify-between">
                        <p className="text-slate-800 text-sm font-medium tracking-tighter">
                          {item.company} —{" "}
                          <span className="text-slate-500 text-sm tracking-tighter">
                            {item.duration}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div
                      className="h-8 w-8"
                      onClick={() =>
                        setCardHoverID(cardHoverID === item.id ? null : item.id)
                      }
                      onMouseEnter={expandCursor}
                      onMouseLeave={defaultCursor}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`inline-block shrink-0 transition-transform rotate-45 ${
                          cardHoverID === item.id && "rotate-[135deg]"
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clip-rule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  <div
                    className={`transition-all ease-out duration-300 max-h-fit ${
                      cardHoverID === item.id
                        ? "opacity-100 h-52 py-2 mt-3 border-t"
                        : "opacity-0 h-0"
                    }`}
                  >
                    <ul
                      className={`flex flex-col gap-2 list-disc list-outside ${
                        cardHoverID === item.id ? "opacity-100 " : "opacity-0"
                      }`}
                    >
                      {item.description.map((point, idx) => {
                        return (
                          <li key={idx} className="ml-4">
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  {/* <p className="text-slate-500 text-sm tracking-tight">
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
                  </div> */}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
