"use client";

import { useState } from "react";
import { useCursorContext } from "@/app/CursorContext";
import Link from "next/link";

export default function Contact() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const { setCursorAnimType } = useCursorContext();
  const animateCursor = (e) => {
    e.preventDefault();
    setCursorAnimType("resume");
  };
  const defaultCursor = (e) => {
    e.preventDefault();
    setCursorAnimType("default");
  };
  return (
    <>
      <ul className="leading-5">
        <li className="font-bold text-slate-800 dark:text-slate-200 text-xl transition-all ease-in-out duration-300">
          <a href="/resume.pdf" download={true}>
            {/* 👉 */}
            <span
              onMouseEnter={animateCursor}
              onMouseLeave={defaultCursor}
              className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text"
            >
              Download My Resume
            </span>
          </a>
        </li>
        <li>
          <a href="mailto:ibrahimaq99@gmail.com">ibrahimaq99@gmail.com</a>
        </li>
        <li>
          <a href="tel:+923123996083">+92 312 3996083</a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ibrahimqureshi99/"
            target="_blank"
          >
            linkedin.com/in/ibrahimqureshi99
          </a>
        </li>
      </ul>
    </>
  );
}
