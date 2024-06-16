// Modules
import Image from "next/image";
import React from "react";

// Assets
import Logo from "@/Assets/images/Icons/SquareEnixLogo.png";

const Nav = () => {
  return (
    <div className="w-full flex justify-between items-center px-[10rem] py-4">
      <div>
        <Image src={Logo} className="w-36 select-none" alt="Logo" />
      </div>
      <div className="text-black font-medium flex gap-10">
        <a className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300">HISTÓRIA.</a>
        <a className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300">COMPARAÇÃO.</a>
        <a className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300">SOUNDTRACK.</a>
        <a className="cursor-pointer hover:text-black/60 transition-all ease-in-out duration-300">FRANQUIA.</a>
      </div>
    </div>
  );
};

export default Nav;
