"use client";
import Image from "next/image";
import { Button } from "@material-tailwind/react";
import { IoLogoWhatsapp } from "react-icons/io";

export function FixedPlugin() {
  return (
    <a href="#" target="_blank">
      <button
        color="white"
        className="!fixed bottom-4 right-4 flex gap-1 pl-2 items-center border border-blue-gray-50"
      >
        <IoLogoWhatsapp /> Chat with us
      </button>
    </a>
  );
}
