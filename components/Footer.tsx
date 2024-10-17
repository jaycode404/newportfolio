import React from "react";
import MagicButton from "./ui/MagicButton";
import { CiLocationArrow1 } from "react-icons/ci";
import { socialMedia } from "@/data";
export default function Footer() {
  return (
    <footer className="w-full pt-20 pb-10 mb-40" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96 ">
        <img
          src="/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-60"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Listo para traer tu proyecto a{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 text-transparent bg-clip-text">
            al siguiente nivel?
          </span>{" "}
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Contáctame! Traigamos tu idea a la Web
        </p>
        <a href="mailto:jaycode404@gmail.com">
          <MagicButton
            title="Contactar"
            icon={<CiLocationArrow1 />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">JCODE 2024</p>
        <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map(profile => (
                <div key={profile.id} className="w-10 h-10 mt-4 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                    <img src={profile.img} alt={profile.id} width={20} height={20} />
                </div>
            )) }
        </div>
      </div>
    </footer>
  );
}
