"use client";
import { useCursorContext } from "../CursorContext";

export default function Button({ ...props }) {
  const { setCursorAnimType } = useCursorContext();
  const expandCursor = (e) => {
    e.preventDefault();

    setCursorAnimType("fillInner");
  };
  const defaultCursor = (e) => {
    e.preventDefault();
    setCursorAnimType("default");
  };
  return (
    <button
      onMouseEnter={expandCursor}
      onMouseLeave={defaultCursor}
      className={`font-medium rounded-lg ${
        props.type === "primary"
          ? "bg-black border text-white"
          : props.type === "secondary"
          ? "bg-transparent border border-black text-black"
          : "bg-transparent border border-transparent text-black"
      } ${
        props.size === "large"
          ? "px-6 py-3"
          : props.size === "medium"
          ? "px-5 py-2"
          : "px-4 py-1"
      } cursor-none ${props.class && props.class}`}
    >
      {props.text}
    </button>
  );
}
