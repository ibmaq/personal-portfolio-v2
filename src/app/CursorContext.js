"use client";
import { createContext, useContext, useState } from "react";

const CursonContext = createContext();

export function useCursorContext() {
  return useContext(CursonContext);
}

export function CursorProvider({ children }) {
  const [cursorAnimation, setCursorAnimation] = useState("default"); // Default cursor animation

  const setCursorAnimType = (type) => {
    setCursorAnimation(type);
  };

  return (
    <CursonContext.Provider
      value={{
        cursorAnimation,
        setCursorAnimType,
      }}
    >
      {children}
    </CursonContext.Provider>
  );
}
