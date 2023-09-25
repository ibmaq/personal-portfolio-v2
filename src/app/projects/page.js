"use client";
import Image from "next/image";
import { useState } from "react";
import Cursor from "../Components/Cursor";

// `app/dashboard/page.js` is the UI for the `/dashboard` URL
export default function Page() {
  const wordPressProjects = [
    {
      id: 0,
      title: "Altuzar Mobile Detailing",
      image: "/project_images/wordpress/altuzar.jpg",
      alt: "Altuzar Mobile Detailing Project",
    },
    {
      id: 1,
      title: "Homey Furniture",
      image: "/project_images/wordpress/homey.jpg",
      alt: "Homey Furniture Project",
    },
    {
      id: 2,
      title: "Thomas Legacy",
      image: "/project_images/wordpress/thomas_legacy.jpg",
      alt: "Thomas Legacy Project",
    },
    {
      id: 3,
      title: "DFA Medical",
      image: "/project_images/wordpress/dfa.jpg",
      alt: "DFA Medical Project",
    },
    {
      id: 4,
      title: "Star West",
      image: "/project_images/wordpress/star_west.jpg",
      alt: "Star West Project",
    },
    {
      id: 5,
      title: "Alta Richardson",
      image: "/project_images/wordpress/alta_richardson.jpg",
      alt: "Alta Richardson Project",
    },
    {
      id: 6,
      title: "MMCC Technologies",
      image: "/project_images/wordpress/mmcc.jpg",
      alt: "MMCC Technologies Project",
    },
    {
      id: 7,
      title: "Ocansey Foundation",
      image: "/project_images/wordpress/ocansey.jpg",
      alt: "Ocansey Foundation Project",
    },
    {
      id: 8,
      title: "Pak-Austria Fachhochschule",
      image: "/project_images/wordpress/paf.jpg",
      alt: "The General Group Project",
    },
    {
      id: 9,
      title: "The Creators Lab",
      image: "/project_images/wordpress/tcl.jpg",
      alt: "The Creators Lab Project",
    },
    {
      id: 10,
      title: "Legacy Leadership Academy",
      image: "/project_images/wordpress/legacy_leadership.jpg",
      alt: "Legacy Leadership Academy Project",
    },
    {
      id: 11,
      title: "Personal Website",
      image: "/project_images/wordpress/fh.jpg",
      alt: "Personal Website Project",
    },
  ];

  const [image, setImage] = useState(null);

  return (
    <main className="bg-white dark:bg-black">
      <div className="h-screen">
        {/* Header Section */}
        <section
          className="flex w-full justify-center items-center p-4 h-40"
          id="about"
        >
          <div className="flex flex-col gap-4 items-center">
            <h1 className="text-black font-extrabold text-5xl/none tracking-tighter w-fit">
              Projects
            </h1>
            <p className="text-slate-500 leading-none">
              Here are some of my WordPress projects.
            </p>
          </div>
        </section>
        {/* Projects Section */}
        <div className="flex flex-wrap gap-4 p-4 justify-center h-[calc(100vh-160px)] overflow-auto">
          {wordPressProjects.map((item, idx) => {
            return (
              <div
                className="rounded-md overflow-hidden border flex flex-col"
                key={idx}
              >
                <div
                  className="relative h-[200px] w-[300px] border-b"
                  onClick={() => setImage(item.image)}
                >
                  <Image
                    src={item.image}
                    alt="Picture of the project"
                    fill={true}
                    loading="lazy"
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <h1 className="font-bold text-xl tracking-tighter w-fit p-4">
                  {item.title}
                </h1>
                {/* width={400}
                  height={200}
                  style={{ objectFit: "contain" }} */}
              </div>
            );
          })}
        </div>
      </div>
      {image && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[1] overflow-hidden"
            onClick={() => setImage(null)}
          ></div>
          <div className="fixed inset-0 m-auto z-[2] w-screen h-screen overflow-auto md:hidden">
            <div className="w-full rounded">
              <img
                src={image}
                alt="Picture of the project"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
            <div
              className="fixed top-2 right-2 z-[3] md:hidden"
              onClick={() => setImage(null)}
            >
              <svg
                width="32px"
                height="32px"
                viewBox="0 0 24 24"
                fill="#000000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M16 8L8 16M12 12L16 16M8 8L10 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#ffffff"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
          <div className="fixed inset-0 m-auto z-[2] w-fit h-fit hidden md:block">
            <div className="max-h-[80vh] w-full max-w-[80vw] overflow-auto rounded">
              <img
                src={image}
                alt="Picture of the project"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </>
      )}
      {/* {image && (
        <>
          <div
            className="fixed inset-0 bg-black/60 z-[1] overflow-hidden"
            onClick={() => setImage(null)}
          ></div>
          <div className="fixed inset-0 m-auto z-[2] w-fit h-fit">
            <div className="max-h-[80vh] w-full max-w-[80vw] overflow-auto rounded">
              <img
                src={image}
                alt="Picture of the project"
                loading="lazy"
                style={{
                  objectFit: "cover",
                  objectPosition: "top",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>
        </>
      )} */}
      <Cursor />
    </main>
  );
}
