"use client";
import React, { useEffect, useState } from "react";
import { projects } from "@/data/index";
import { PinContainer } from "./ui/3d-pin";
import { CiLocationArrow1 } from "react-icons/ci";
export default function RecentProjects() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Aseguramos que estamos en el cliente para evitar problemas de hidratación
    setIsClient(true);
  }, []);

  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        Una selección de mis proyectos{" "}
        <span className="text-purple">más recientes</span>
      </h1>

      {/* PROJECT CARDS */}
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 gap-y-1 mt-10">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <div
            key={id}
            className="lg:min-h-[32.5rem] h-[25rem] flex item-center justify-center sm:w-96 w-[80vw]"
          >
            {isClient && (
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <img
                    src={img}
                    alt={title}
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <h1 className="font-bold lg:text-2xl text-base line-clamp-1">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-base line-clamp-2">
                  {des}
                </p>
                {/* TECHNOLOGIES */}
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check live Site
                    </p>
                    <CiLocationArrow1 className="ms-3" color="#CBACB" />
                  </div>
                </div>
              </PinContainer>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
