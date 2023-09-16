"use client";

export default function Button({ ...props }) {
  console.log("props", props.text);
  return (
    <button
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
      }`}
    >
      {props.text}
    </button>
  );
}
