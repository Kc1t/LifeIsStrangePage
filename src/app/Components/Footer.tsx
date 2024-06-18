import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#111111]/0 h-screen md:h-[60vh] 2xl:h-[40vh] w-full flex items-center flex-col gap-4 justify-center px-8 flex-wrap">
      <p className="Chilanka text-[#111111] text-center w-full lg:w-[70%] flex-wrap text-sm lg:text-base font-semibold">
        LIFE IS STRANGE © 2015, 2021 Square Enix Limited. LIFE IS STRANGE:
        BEFORE THE STORM © 2017, 2021 Square Enix Limited. LIFE IS STRANGE, LIFE
        IS STRANGE 2, LIFE IS STRANGE: TRUE COLORS, SQUARE ENIX and the SQUARE
        ENIX logo are registered trademarks or trademarks of the Square Enix
        group of companies. DECK NINE and DECK NINE GAMES are registered
        trademarks of Idol Minds, LLC. DONTNOD and DONTNOD Entertainment are
        registered trademarks of DONTNOD Entertainment, S.A. “PlayStation”, “PS4
        logo”, and “PS5 logo” are registered trademarks or trademarks of Sony
        Interactive Entertainment Inc. Microsoft, a marca da esfera do Xbox, o
        logotipo do Series X, o logotipo do Series S, o logotipo do Series X|S,
        Xbox One, Xbox Series X, Xbox Series S e Xbox Series X|S são marcas
        comerciais do grupo de empresas Microsoft. Nintendo Switch is a
        trademark of Nintendo. ©2021 Valve Corporation. All rights reserved.
        Steam and the Steam logo are trademarks and/or registered trademarks of
        Valve Corporation in the U.S. and/or other countries. All other
        trademarks are the property of their respective owners.
      </p>
      <span className="Chilanka text-center">
        Made by{" "}
        <a
          href="https://portfolio-kaua.vercel.app"
          target="_blank"
          className="font-semibold text-[#171717] hover:text-[#171717]/50 transition-all ease-in-out duration-300"
        >
          @Kc1t 
        </a><br/>
        Design Found and Improved from Behance.
      </span>
    </div>
  );
};

export default Footer;
