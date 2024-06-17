"use client";

// Modules
import Image from "next/image";
import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
// Assets
import Logo from "@/Assets/images/Icons/SquareEnixLogo.png";

const Nav = () => {
  return (
    <div className="w-full flex justify-center lg:justify-between items-center px-[10rem] py-4">
      <div className="hidden md:block">
        <Image src={Logo} className="w-36 select-none" alt="Logo" />
      </div>
      <div className="text-black font-medium gap-10 hidden lg:flex">
        <Link
          to="Narrativa"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300"
        >
          NARRATIVA.
        </Link>
        <Link
          to="Comparação"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300"
        >
          COMPARAÇÃO.
        </Link>
        <Link
          to="Soundtrack"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300"
        >
          SOUNDTRACK.
        </Link>
        <Link
          to="Franquia"
          smooth={true}
          duration={500}
          className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300"
        >
          FRANQUIA.
        </Link>
      </div>
    </div>
  );
};

export default Nav;
