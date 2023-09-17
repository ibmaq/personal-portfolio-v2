"use client";

import Image from "next/image";
import Button from "../Button";
import { useState } from "react";
import Hamburger from "../Hamburger";

export default function Projects() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const projectsData = [
    {
      id: 0,
      title: "NCR",
      description: "description",
      image: "/pfp.jpg",
      stack: ["next", "typescript", "MUI"],
    },
    {
      id: 1,
      title: "AEvent",
      description: "description",
      image: "/pfp.jpg",
      stack: ["vue", "nuxt"],
    },
    {
      id: 2,
      title: "RMS",
      description: "description",
      image: "/pfp.jpg",
      stack: ["react", "vue", "next"],
    },
    {
      id: 3,
      title: "Workplace Solutions",
      description: "description",
      image: "/pfp.jpg",
      stack: ["react", "vue", "next"],
    },
  ];
  //   const [selectedId, setSelectedId] = useState(null)
  return (
    <>
      <div className="grid grid-cols-3 gap-6 w-full">
        {projectsData.map((item, idx) => {
          return (
            <div
              className={`relative bg-white rounded-lg ${
                cardHoverID === item.id ? "scale-[1.02] shadow-xl" : "scale-100"
              } transition-all ease-in-out duration-300 transform}`}
              key={idx}
              onPointerEnter={() => setCardHoverID(item.id)}
              onPointerLeave={() => setCardHoverID(-1)}
            >
              {/* <Image
                src={item.image}
                alt="Vercel Logo"
                className="ml-auto"
                width={400}
                height={100}
                priority
              /> */}
              <div className="flex flex-col gap-3 p-4">
                {/* <div className="flex flex-col"> */}
                <h1 className="text-black font-extrabold text-2xl tracking-tighter w-fit">
                  {item.title}
                </h1>
                {/* <p className="text-slate-500 text-lg tracking-tight">
                    {item.description}
                  </p> */}
                {/* </div> */}
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
                              ? "bg-sky-300 shadow"
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
                            width={20}
                            height={20}
                          />

                          {/* <p
                            className={`${
                              stackHover.cardID === item.id &&
                              stackHover.pillID === idx
                                ? "w-full visible"
                                : "w-0 invisible"
                            } transition-all ease-in-out duration-300 transform`}
                          > */}
                          {stack}
                          {/* </p> */}
                        </li>
                      );
                    })}
                    {/* <li className="flex items-center gap-2">test</li> */}
                  </ul>
                </div>
                {/* Button */}
              </div>
              {/* <Button
                type="primary"
                size="medium"
                text="View"
                class="absolute px-2 py-[3.5px] top-[35%] -right-4 rounded-full text-md bg-black text-white"
              /> */}
              <div className="absolute px-1.5 py-3 top-[35%] -right-4 rounded-lg text-md bg-black text-white">
                <Hamburger />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
