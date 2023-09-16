"use client";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

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

  const cursorVariants = {
    default: {
      x: mousePos.x - 10,
      y: mousePos.y - 10,
    },
  };
  return (
    <>
      <motion.div
        className="fixed top-0 left-0 h-5 w-5 rounded-full border border-black"
        variants={cursorVariants}
        animate="default"
        transition={{
          ease: "linear",
        }}
      />
      <motion.div
        className="fixed -top-1 -left-1 h-7 w-7 rounded-full border-2 border-red-700"
        variants={cursorVariants}
        animate="default"
        transition={{
          ease: "linear",
        }}
      />
    </>
  );
}
