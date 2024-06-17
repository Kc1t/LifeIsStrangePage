// Modules
import React from "react";
import Image from "next/image";

// Assets
import TrainLine from "@/Assets/images/Background/Chloe&MaxInTrain.png";

const NarrativeBlock = () => {
  return (
    <div className="w-full lg:w-[90%] px-4 flex gap-2 lg:gap-12 flex-col items-center xl:justify-between xl:flex-row overflow-hidden" id="Narrativa">
      <div className="w-full xl:w-1/2 flex items-center justify-center ">
        <div className="relative w-full h-[15rem] lg:h-[25rem] xl:h-[45rem]">
          <Image
            src={TrainLine}
            className="absolute inset-0 object-cover w-full h-full select-none"
            alt="Chloe&MaxInTrain"
          />
        </div>
      </div>
      <div className="w-full xl:w-1/2 flex flex-col gap-4 items-center">
        <div className="flex flex-col gap-4 w-full">
          <span className="font-black Inter text-4xl lg:text-6xl xl:text-7xl 2xl:text-8xl tracking-[0.1em] text-left">
            NARRATIVA
          </span>
          <div className="flex flex-col gap-4 items-start justify-center Chilanka text-left text-xl lg:text-2xl w-full md:w-[90%]">
            <p>
              Após uma ausência de cinco anos de sua cidade natal, Arcadia Bay,
              ela retorna à pequena cidade no Oregon para participar de uma aula
              de fotografia e descobre que tem o poder de voltar no tempo depois
              que sua amiga, Chloe Price, é baleada e morta.
            </p>
            <p>
              Sonhando com uma tempestade iminente para destruir Arcadia Bay,
              Max deve descobrir como salvar a cidade e a origem de seus poderes
              de viagem no tempo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NarrativeBlock;
