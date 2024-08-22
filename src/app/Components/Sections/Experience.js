"use client";

import Image from "next/image";
import Button from "../Button";
import { useEffect, useState } from "react";

export default function Experience() {
  const [cardHoverID, setCardHoverID] = useState(-1);
  const [stackHover, setStackHover] = useState({
    cardID: -1,
    pillID: -1,
  });
  const experienceData = [
    {
      id: 0,
      title: "Junior Web Developer",
      company: "Fleekbiz",
      duration: "June 2017 - February 2018",
      description: [
        "Developed responsive HTML/CSS/JS projects, prioritizing user-friendly design and exceptional user experiences.",
        "Successfully delivered 4–5-page websites featuring core functionality and interactive contact forms.",
        "Utilized jQuery along with various CSS pre-processors such as SASS and SCSS to enhance website functionality and aesthetics.",
      ],
      skills: ["react", "vue", "next"],
    },
    {
      id: 1,
      title: "Web Developer",
      company: "Digital Marvels",
      duration: "September 2020 - January 2022",
      description: [
        "Led the development of visually stunning websites for diverse clients, demonstrating proficiency in WordPress and CSS.",
        "Revamped and optimized website projects for improved design and functionality.",
        "Implemented SEO strategies, enhancing online visibility and organic traffic.",
      ],
      skills: ["react", "vue", "next"],
    },
    {
      id: 2,
      title: "Freelance Developer",
      company: "Remote",
      duration: "February - November 2022",
      description: [
        "Led the development of visually stunning websites for diverse clients, demonstrating proficiency in WordPress and CSS.",
        "Revamped and optimized website projects for improved design and functionality.",
        "Implemented SEO strategies, enhancing online visibility and organic traffic.",
      ],
      skills: ["vue", "nuxt"],
    },
    {
      id: 3,
      title: "Frontend Developer",
      company: "AlphaSquad",
      duration: "November 2022 - January 2024",
      description: [
        "Leveraged 2+ years of React.js experience to enhance the front-end of complex web applications.",
        "Collaborated on product and web design, ensuring seamless user experiences.",
        "Utilized cloud services for efficient application deployment.",
        "Developed REST APIs with node.js and Express, prioritizing code quality and scalability.",
      ],
      skills: ["next", "typescript", "MUI"],
    },
    {
      id: 4,
      title: "Frontend Developer - Team Lead",
      company: "AG InfoTech",
      duration: "January 2024 - Present",
      description: [
        "Promoted to Frontend Lead in July 2024, successfully managing and mentoring a team of frontend developers.",
        "Spearheaded the development of complex web applications, including high-profile websites for a global architectural firm, AI-driven sales tools, and advanced accounting software.",
        "Ensured seamless integration between frontend and backend through continuous collaboration with backend developers.",
        "Optimized server-side and client-side rendering, enhancing development efficiency and post-production performance.",
        "Streamlined deployment processes by leveraging Docker and AWS, leading to faster and more reliable rollouts.",
      ],
      skills: ["next", "react", "typescript", "MUI", "Docker", "AWS"],
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector("#experience-section");
      if (section) {
        setIsScrolled(section.scrollTop > 0);
      }
    };

    const section = document.querySelector("#experience-section");
    if (section) {
      section.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (section) {
        section.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);
  return (
    <section
      className="md:col-span-1 md:row-span-3 items-center lg:overflow-y-auto text-slate-500"
      id="experience-section"
    >
      <div className="flex flex-col">
        {/* Heading for mobile view */}
        {/* <h1 className="text-neutral-900 dark:text-neutral-100 font-bold lg:text-4xl text-3xl tracking-tighter sticky top-0 z-10 p-4 pt-6">
          Experience
        </h1> */}
        {/* Heading for mobile view */}
        <h1
          className={`text-neutral-900 dark:text-neutral-100 font-bold lg:text-4xl text-3xl tracking-tighter sticky top-0 z-10 p-4 pt-6 transition-all ease-in-out duration-300 ${
            isScrolled
              ? "opacity-100 shadow-md shadow-slate-200 dark:shadow-slate-800 bg-white dark:bg-slate-950 border border-b-black"
              : "bg-[#f5f5f5] dark:bg-slate-950"
          }`}
          id="experience-heading"
        >
          Experience
        </h1>

        <ul className="flex flex-col md:flex-row md:flex-wrap lg:flex-nowrap lg:flex-col gap-0 sm:gap-4 p-4 pt-2">
          {experienceData.reverse().map((item, idx) => {
            return (
              <li
                className={`border sm:hover:border-black/40 dark:hover:border-white/40 relative bg-neutral-50 dark:bg-slate-950 first:rounded-xl first:rounded-b-none rounded-b-none last:rounded-b-xl sm:rounded-lg sm:first:rounded-lg transition-all ease-in-out duration-300 w-full md:w-[calc(50%-1rem)] lg:w-full`}
                key={idx}
              >
                <div
                  className="flex flex-col p-4 hover:text-black dark:hover:text-white"
                  onClick={() =>
                    setCardHoverID(cardHoverID === item.id ? null : item.id)
                  }
                >
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h1 className="text-neutral-700 dark:text-neutral-300 font-extrabold text-lg sm:text-2xl tracking-tighter w-fit">
                        {item.title}
                      </h1>
                      <div className="w-full flex justify-between">
                        <p className="text-slate-800 dark:text-slate-200 text-sm font-medium tracking-tighter">
                          {item.company} —{" "}
                          <span className="text-slate-600 dark:text-slate-400 text-sm tracking-tighter">
                            {item.duration}
                          </span>
                        </p>
                      </div>
                    </div>
                    <div className="h-8 w-8 md:hidden lg:block">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className={`inline-block shrink-0 transition-transform rotate-[135deg] ${
                          cardHoverID === item.id && "rotate-[315deg]"
                        }`}
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  {/* Description Section */}
                  <div
                    className={`transition-all ease-out duration-300 overflow-hidden border-t ${
                      cardHoverID === item.id
                        ? "max-h-screen  pt-2 mt-3"
                        : "max-h-0"
                    }`}
                    style={{
                      height: cardHoverID === item.id ? "auto" : 0,
                      opacity: cardHoverID === item.id ? 1 : 0,
                    }}
                  >
                    <ul className="flex flex-col gap-2 list-disc list-outside">
                      {item.description.map((point, idx) => (
                        <li key={idx} className="ml-4 dark:text-neutral-300">
                          <p>{point}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
