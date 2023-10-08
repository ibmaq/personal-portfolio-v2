"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCursorContext } from "../CursorContext";

export default function Cursor() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    });
    return () => {
      document.removeEventListener("mousemove", (e) => {
        setMousePos({ x: e.clientX, y: e.clientY });
      });
    };
  }, []);

  const { cursorAnimation } = useCursorContext();

  const cursorVariants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0,
      },
    },
    expand: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 1.5,
      transition: { type: "linear", duration: 0.05 },
      border: "transparent",
    },
    fillInner: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 0.5,
      border: "3px solid white",
      transition: { type: "linear", duration: 0.05, infinite: 1 },
    },
    expandInvert: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 0,
      transition: { type: "linear", duration: 0.05 },

      //   border: "3px solid #bae6fd",
      //   backgroundColor: "#bae6fd",
      //   mixBlendMode: "difference",
    },
    resume: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 0.3,
      backgroundColor: "#000",
      transition: { type: "linear", duration: 0.05 },
    },
  };
  const secondCursorVariants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 1,
      transition: {
        ease: "linear",
        duration: 0.5,
        // delay: 0.05,
      },
      backgroundColor: "transparent",
    },
    fillInner: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      transition: { type: "linear", duration: 0.05 },
      border: "5px solid #bae6fd",
    },
    expand: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      scale: 1.2,
      transition: { type: "linear", duration: 0.05 },
    },
    expandInvert: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      border: "3px solid #bae6fd",
      backgroundColor: "#bae6fd",
      mixBlendMode: "difference",
      transition: { type: "linear", duration: 0.05 },
    },
    resume: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
      // border: "3px solid #000",
      scale: 1,
      // backgroundColor: "#fff",
      // mixBlendMode: "difference",
      transition: { type: "linear", duration: 0.05 },
    },
  };
  // const secondCursorVariants = {
  //   default: {
  //     x: mousePos.x - 10,
  //     y: mousePos.y - 10,
  //     scale: 1,
  //     transition: {
  //       // ease: "linear",
  //       // duration: 0,
  //       delay: 0.05,
  //     },
  //   },
  //   expand: {
  //     x: mousePos.x - 10,
  //     y: mousePos.y - 10,
  //     scale: 2,
  //     transition: { type: "linear", duration: 0.05, delay: 0.05 },
  //   },
  //   expandInvert: {
  //     x: mousePos.x - 10,
  //     y: mousePos.y - 10,
  //   },
  // };
  return (
    <>
      <motion.div
        className="hidden lg:block fixed top-0 left-0 h-4 w-4 rounded-full border-2 border-black dark:border-white pointer-events-none z-10"
        variants={cursorVariants}
        animate={cursorAnimation}
      />
      <motion.div
        className="hidden lg:block fixed -top-3 -left-3 h-10 w-10 rounded-full border-2 border-slate-500  pointer-events-none z-10"
        variants={secondCursorVariants}
        animate={cursorAnimation}
      />
    </>
  );
}
