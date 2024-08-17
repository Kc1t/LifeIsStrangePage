import Image from "next/image";
import React from "react";

// Assets
import LifeIsStrange2 from "@/Assets/images/Posters/LifeisStrange2.png";
import LifeIsStrangeTrueColors from "@/Assets/images/Posters/LisTrueColors.png";
import LifeIsStrangeDoubleExposure from "@/Assets/images/Posters/LisDoubleExposure.png";
import CaptainSpirit from "@/Assets/images/Posters/CaptainSpirit.png";

const Franchise = () => {
  return (
    <div className="w-full lg:flex flex-col gap-4 items-center px-4 py-8 overflow-hidden tv:max-w-6xl tv:max-h-[30vh]" id="Franquia">
      <div className="w-full lg:w-[90%] flex items-end justify-end tv:items-center tv:justify-center">
        <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
          FRANQUIA
        </span>
      </div>
      <div className="flex gap-4 w-full lg:w-[70%] items-center justify-center flex-col lg:flex-row">
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-1/4">
          <div className="relative h-[25rem] w-full">
            <Image
              src={LifeIsStrange2}
              className="absolute object-cover w-full h-full inset-0 rounded-lg"
              alt="LifeIsStrange2"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-[#111111] px-8 font-light text-white duration-1000">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                VER MAIS
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-[-120deg]"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-[#111111] bg-transparent font-light">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-sm md:text-base text-[#111111] transition duration-500 group-hover:-translate-y-[150%]">
                ASSISTIR TRAILER
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#111111] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 text-sm md:text-sm">
                  ASSISTIR TRAILER
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-1/4">
          <div className="relative h-[25rem] w-full">
            <Image
              src={LifeIsStrangeTrueColors}
              className="absolute object-cover w-full h-full inset-0 rounded-lg"
              alt="LifeIsStrangeTrueColors"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-[#111111] px-8 font-light text-white duration-1000">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                VER MAIS
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-[-120deg]"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-[#111111] bg-transparent font-light">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-sm md:text-base text-[#111111] transition duration-500 group-hover:-translate-y-[150%]">
                ASSISTIR TRAILER
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#111111] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 text-sm md:text-sm">
                  ASSISTIR TRAILER
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-1/4">
          <div className="relative h-[25rem] w-full">
            <Image
              src={LifeIsStrangeDoubleExposure}
              className="absolute object-cover w-full h-full inset-0 rounded-lg"
              alt="Life Is Strange Double Exposure"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-[#111111] px-8 font-light text-white duration-1000">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                VER MAIS
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-[-120deg]"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-[#111111] bg-transparent font-light">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-sm md:text-base text-[#111111] transition duration-500 group-hover:-translate-y-[150%]">
                ASSISTIR TRAILER
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#111111] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 text-sm md:text-sm">
                  ASSISTIR TRAILER
                </span>
              </div>
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center w-full lg:w-1/4">
          <div className="relative h-[25rem] w-full">
            <Image
              src={CaptainSpirit}
              className="absolute object-cover w-full h-full inset-0 rounded-lg"
              alt="Captain Spirit"
            />
          </div>
          <div className="flex flex-col gap-2">
            <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-[#111111] px-8 font-light text-white duration-1000">
              <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0 text-sm md:text-base">
                VER MAIS
              </div>
              <div className="absolute translate-y-[150%] opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 rotate-[-120deg]"
                >
                  <path
                    d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                    fill="currentColor"
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </button>
            <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-[#111111] bg-transparent font-light">
              <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-sm md:text-base text-[#111111] transition duration-500 group-hover:-translate-y-[150%]">
                ASSISTIR TRAILER
              </div>
              <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-white transition duration-500 group-hover:translate-y-0">
                <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#111111] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                <span className="z-10 text-sm md:text-sm">
                  ASSISTIR TRAILER
                </span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Franchise;
