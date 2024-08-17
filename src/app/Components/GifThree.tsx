import React from "react";

const GifThree = () => {
  return (
    <div className="w-full h-[80vh] lg:h-[120vh] tv:max-w-6xl tv:max-h-[30vh] flex flex-col gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[40%, 60%] gap-2 w-full h-[45%]">
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/f6ead4143347459.62a5fe57c62fe.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/931eae143347459.62a5fe57c5adb.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 w-full h-[30%] lg:h-[60%] overflow-hidden">
        <div className="relative">
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/780f24143347459.62a5fe57c5f64.gif"
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Gif"
          />
        </div>
      </div>
    </div>
  );
};

export default GifThree;
