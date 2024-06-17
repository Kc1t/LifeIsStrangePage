"use client";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import "./Swiper/swiper.css";

// Assets
import Poster1 from "@/Assets/images/Posters/VideoPoster1.png";

export default function VideoSlider() {
  return (
    <>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={2}
        className="mySwiper flex gap-2 w-[90%]"
      >
        <SwiperSlide className="">
          <div className="h-[10rem] lg:h-[30rem] w-full relative">
            <video
              src="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/Life%20is%20Strange%20Remastered%20Collection%20-%20Official%20Trailer%20PS4.mp4?updatedAt=1718626116793"
              className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
              controls
              poster="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/VideoPoster.png?updatedAt=1718628056133"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-12">
          <div className="h-[10rem] lg:h-[30rem] w-full relative">
            <video
              src="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/Official%20Launch%20Trailer%20-%20Life%20is%20Strange_%20Remastered%20Collection%20_ESRB_.mp4?updatedAt=1718627152446"
              className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
              controls
              poster="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/VideoPoster1.png?updatedAt=1718628061071"
            ></video>
          </div>
        </SwiperSlide>
        <SwiperSlide className="ml-12">
        <div className="h-[10rem] lg:h-[30rem] w-full relative">
            <video
              src="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/Life%20is%20Strange%20Remastered%20Collection%20-%20Official%20Trailer%20PS4.mp4?updatedAt=1718626116793"
              className="absolute inset-0 object-cover w-full h-full z-[0] select-none cursor-pointer"
              controls
              poster="https://ik.imagekit.io/z3fr9lhps/Life%20is%20Strange%20Page/VideoPoster.png?updatedAt=1718628056133"
            ></video>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
