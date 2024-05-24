"use client";

import { IconButton, Button, Typography } from "@material-tailwind/react";
import { FaPlay } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative min-h-screen w-full bg-[url('/image/students.jpg')] bg-cover bg-no-repeat">
    <div className="absolute inset-0 h-full w-full bg-gray-900/60" />
    <div className="grid min-h-screen px-8">
      <div className="container relative z-10 my-auto mx-auto grid place-items-center text-center">
        <h3  className="mb-2 text-white text-lg font-semibold">
          Reghardt
        </h3>
        <h1  className="lg:max-w-3xl text-[40px] leading-none mt-2 text-white font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h2
          className="mt-2 mb-12 w-full md:max-w-full lg:max-w-2xl text-white"
        >
          Lamet consectetur adipisicing elit. Possimus aspernatur quis totam facere eius quod blanditiis!
        </h2>
        <div className="flex items-center gap-4">
          <button className="text-white text-lg">
            Get started
          </button>
          <div className="rounded-full bg-white p-4">
          <FaPlay />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Hero;
