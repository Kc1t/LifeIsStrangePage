// Modules
import React from "react";
import Image from "next/image";

const GifGrid = () => {
  return (
    <div className="w-full h-screen flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[37.5%,25%,37.5%] gap-2 w-full h-[45%]">
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/66cb60143347459.62a33475f2a40.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
        <div className="relative">
          <img
            src="https://media1.tenor.com/m/4Ilvx_hwAgMAAAAC/lifeisstrange.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/aa0d32143347459.62a33475f374a.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
      </div>
      <div className="grid sm:hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 w-full h-[40%]">
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/23796c143347459.62a33475f2580.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/3ef8e3143347459.62a33475f1e72.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/fc4d37143347459.62a33475f3c30.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
      </div>
    </div>
  );
};

export default GifGrid;
