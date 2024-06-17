// Modules
import React from "react";
import Image from "next/image";

// Assets
import Junkyard from "@/Assets/images/Gallery/Junkyard.png";
import Jefferson from "@/Assets/images/Gallery/Jefferson.png";
import Characters from "@/Assets/images/Gallery/Characters.png";
import Characters1 from "@/Assets/images/Gallery/Characters1.png";
import ChloeRoom from "@/Assets/images/Gallery/ChloeRoom.png";

const ImageGrid = () => {
  return (
    <div className="w-full lg:w-[90%] h-full flex flex-col gap-2 items-center relative overflow-hidden">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[50%,50%] gap-2 w-full h-[35%] overflow-hidden">
        <div className="relative">
          <Image
            src={Junkyard}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Junkyard"
          />
        </div>
        <div className="relative">
          <Image
            src={Characters1}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Characters"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[30%,70%] gap-2 w-full h-[65%] overflow-hidden">
        <div className="relative">
          <Image
            src={Jefferson}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Jefferson"
          />
        </div>
        <div className="relative">
          <Image
            src={Characters}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Characters"
          />
        </div>
      </div>{" "}
      <div className="grid grid-cols-1 gap-2 w-full h-[50%] overflow-hidden">
        <div className="relative">
          <Image
            src={ChloeRoom}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="ChloeRoom"
          />
        </div>
      </div>{" "}
    </div>
  );
};

export default ImageGrid;
