"use client";
import { useCursorContext } from "../CursorContext";
export default function TextPlate({ ...props }) {
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
    <div
      className={`w-full flex flex-col gap-4 text-${props.align} justify-${props.align} items-${props.align}`}
    >
      <h1
        className="text-black font-extrabold lg:text-5xl text-4xl tracking-tighter w-fit"
        onMouseEnter={expandCursor}
        onMouseLeave={defaultCursor}
      >
        {props.heading}
      </h1>

      <p className="text-slate-500 text-lg tracking-tight">{props.content}</p>
    </div>
  );
}
