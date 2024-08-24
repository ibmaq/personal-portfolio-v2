"use client";

import { useState } from "react";

export default function Contact() {
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  return (
    <>
      <ul className="leading-5 ">
        <li className="hidden sm:block font-bold text-slate-800 dark:text-slate-200 text-2xl pb-4 relative">
          <div
            onClick={() => setShowDownloadModal(!showDownloadModal)}
            className="flex gap-1 items-center cursor-pointer select-none"
          >
            <span className="hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition duration-300 ease-in-out hover:text-transparent hover:bg-clip-text">
              Download My Resume
            </span>
            <span>👈</span>
          </div>
          {/* Modal content */}
          <div
            className={`absolute p-8 w-full max-w-sm bg-white dark:bg-slate-900 rounded-xl z-30 border border-white transition-all ease-out duration-300 overflow-hidden border-t ${
              showDownloadModal ? "max-h-screen mt-3" : "max-h-0"
            }`}
            style={{
              height: showDownloadModal ? "auto" : 0,
              opacity: showDownloadModal ? 1 : 0,
            }}
          >
            <div className="flex flex-col gap-4">
              <a
                href="/resume.pdf"
                download={true}
                className="text-lg bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500 text-center p-2 rounded-2xl transition-all ease-out duration-300"
              >
                Download Resume
              </a>
              <a
                href="/resume.pdf"
                download={true}
                className="text-lg bg-slate-300 hover:bg-slate-400 dark:bg-slate-700 dark:hover:bg-slate-500 text-center p-2 rounded-2xl transition-all ease-out duration-300"
              >
                Download Europass CV
              </a>
              <div
                className="text-lg bg-rose-500 hover:bg-red-600 dark:bg-rose-800 dark:hover:bg-red-600 text-center p-2 rounded-2xl cursor-pointer transition-all ease-out duration-300 relative group text-white"
                onClick={() => setShowDownloadModal(false)}
              >
                <p>Maybe Later</p>
                <p className="absolute -right-3 -top-3 text-2xl">
                  <span className="inline-block group-hover:hidden">🙁</span>
                  <span className="hidden group-hover:inline-block">😢</span>
                </p>
              </div>
            </div>
          </div>
          {/* backdrop */}
          {showDownloadModal && (
            <div
              className="fixed top-0 left-0 w-full h-screen z-20 bg-black/30 cursor-default"
              onClick={() => setShowDownloadModal(false)}
            ></div>
          )}
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
