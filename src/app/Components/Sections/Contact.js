"use client";

import Image from "next/image";
import Button from "../Button";
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
        <li className="font-bold text-black">
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
        <li>ibrahimaq99@gmail.com</li>
        <li>+92 312 3996083</li>
        <li>linkedin.com/in/ibrahimqureshi99</li>
      </ul>
    </>
  );
}