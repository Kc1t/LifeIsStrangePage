"use client";

// Modules
import Image from "next/image";
import { Link, animateScroll as scroll } from "react-scroll";

// Components
import Nav from "./Ui/Nav";

// Assets
import Background from "@/Assets/images/Background/HeaderBackground.jpg";
import Cover from "@/Assets/images/Background/Cover.png";
import LifeLogo from "@/Assets/images/Icons/LifeCollection.png";
import OnlyMax from "@/Assets/images/Background/OnlyMax.png";

const Header = () => {
  return (
    <div className="h-screen w-screen tv:max-w-6xl tv:max-h-[30vh] flex items-center flex-col justify-center Inter relative px-4">
      <div className="z-[3] h-full w-full flex items-center justify-between flex-col">
        <Nav />
        <div className="w-full flex relative justify-center items-center pb-12">
          <p className="absolute w-[20%] text-white left-[10%] font-medium text-sm 2xl:text-lg hidden lg:block">
            Develop Industry Excellence Award 2015 <br />
            Golden Joystick Award 2015 <br />
            The British Academy Games Award 2016
          </p>
          <div className="w-full flex flex-col items-center justify-center gap-8 Chilanka">
            <Image
              src={LifeLogo}
              className="w-[15rem] sm:w-[10rem] md:w-[11rem] lg:w-[18rem] 2xl:w-[25rem]"
              alt="Life is Strange Logo"
            />
            <div className="flex gap-4 flex-col justify-center items-center">
              <Link
                to="Trailers"
                smooth={true}
                duration={500}
                className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-white bg-transparent font-bold cursor-pointer"
              >
                <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-sm md:text-base text-white transition duration-500 group-hover:-translate-y-[150%]">
                  ASSISTIR TRAILER
                </div>
                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-[black] transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#fff] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                  <span className="z-10 font-bold text-sm md:text-sm">
                    ASSISTIR TRAILER
                  </span>
                </div>
              </Link>
              <Link
                to="Franquia"
                smooth={true}
                duration={500}
                className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-white px-8 font-bold text-black duration-1000 cursor-pointer"
              >
                <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                  PRÉ VENDA
                </div>
                <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                      fill="currentColor"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
              </Link>
            </div>
            <Link
              to="Narrativa"
              smooth={true}
              duration={500}
              className="hidden lg:flex items-center justify-center flex-col"
            >
              <span className="text-white Chilanka font-bold cursor-pointer">
                EXPLORAR
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 animate-bounc cursor-pointer"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 4V20M12 20L8 16M12 20L16 16"
                  stroke="#fff"
                  stroke-width="1.7"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </div>
          <p className="absolute w-[20%] text-white right-[10%] font-medium text-sm 2xl:text-lg hidden lg:block">
            {/* Experiecie dois jogos premiados <br />
            Como se fosse a primeira vez!
            <br /> */}
            <br />
            Visuais e animações remasterizados dão nova vida ao grande elenco de
            personagens e histórias emocionantes.
          </p>
        </div>
      </div>
      <img
        src="https://lfieisstrange-6164253ge-kc1t.vercel.app/Assets/img/comp/camera.gif"
        className="w-[20rem] h-[20rem] absolute left-[80%] tv:left-[70%] top-[65%] tv:top-[60%] z-[1] hidden 2xl:block"
        alt="Camera"
      />
      <Image
        src={Cover}
        className="absolute inset-0 object-cover w-full h-full z-[1] select-none opacity-100 lg:opacity-30"
        alt="CoverGradient"
      />
      <Image
        src={Background}
        className="hidden lg:block absolute inset-0 object-cover w-full h-full z-[0] select-none"
        alt="Background"
        loading="eager"
      />
      <Image
        src={OnlyMax}
        className="block lg:hidden absolute inset-0 object-cover w-full h-full z-[0] select-none"
        alt="Background"
        loading="eager"
      />
    </div>
  );
};

export default Header;
