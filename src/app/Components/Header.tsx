// Modules
import Image from "next/image";

// Assets
import Background from "@/Assets/images/Background/HeaderBackground.jpg";
import Cover from "@/Assets/images/Background/Cover.png";
import LifeLogo from "@/Assets/images/Icons/LifeCollection.png";
import Nav from "./Ui/Nav";

const Header = () => {
  return (
    <div className="h-screen w-screen flex items-center flex-col justify-center Inter">
      <div className="z-[3] h-full w-full flex items-center justify-between flex-col">
        <Nav />
        <div className="w-full flex justify-between items-center pb-12">
          {/* <div>
            <p className="w-[100%]">
              Desenvolver Prêmio de Excelência da Indústria 2015 Prêmio Joystick
              de Ouro 2015 Prêmios da Academia Britânica de Jogos 2016
            </p>
          </div> */}
          <div className="w-full flex flex-col items-center justify-center gap-8 Chilanka">
            <Image
              src={LifeLogo}
              className="w-[25rem]"
              alt="Life is Strange Logo"
            />
            <div className="flex gap-4 flex-col justify-center items-center">
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden border border-white bg-transparent font-bold">
                <div className="inline-flex h-12 translate-y-0 items-center justify-center px-8 text-white transition duration-500 group-hover:-translate-y-[150%]">
                  VER TRAILER
                </div>
                <div className="absolute inline-flex h-12 w-full translate-y-[100%] items-center justify-center text-[black] transition duration-500 group-hover:translate-y-0">
                  <span className="absolute h-full w-full translate-y-full skew-y-6 scale-y-0 bg-[#fff] transition duration-500 group-hover:translate-y-0 group-hover:scale-150"></span>
                  <span className="z-10 font-bold">COMEÇAR</span>
                </div>
              </button>
              <button className="group relative inline-flex h-12 w-full items-center justify-center overflow-hidden rounded-md bg-white px-8 font-bold text-black duration-1000">
                <div className="translate-y-0 opacity-100 transition group-hover:-translate-y-[150%] group-hover:opacity-0">
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
              </button>
            </div>
            <div className="flex items-center justify-center flex-col">
              <span className="text-white Chilanka font-bold">EXPLORAR</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 animate-bounc"
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
            </div>
          </div>
          {/* <div>
            <p  className="w-[100%]">
              Experimente dois premiados. Life is Strange jogos como nunca
              antes! Visuais e animações remasterizados dão nova vida ao grande
              elenco de personagens e histórias emocionantes.
            </p>
          </div> */}
        </div>
      </div>
      {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1920"
        height="1072"
        viewBox="0 0 1920 1072"
        className="absolute inset-0 object-cover w-screen h-full z-[1] select-none"
        fill="none"
      >
        <rect width="1920" height="1072" fill="url(#paint0_linear_354_650)" />
        <defs>
          <linearGradient
            id="paint0_linear_354_650"
            x1="981.455"
            y1="1072"
            x2="960.312"
            y2="-0.00344555"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0106533" stop-opacity="0.35" />
            <stop offset="1" stop-opacity="0.15" />
          </linearGradient>
        </defs>
      </svg> */}
      <Image
        src={Cover}
        className="absolute inset-0 object-cover w-full h-full z-[1] select-none"
        alt="CoverGradient"
      />
      <Image
        src={Background}
        className="absolute inset-0 object-cover w-full h-full z-[0] select-none"
        alt="Background"
      />
    </div>
  );
};

export default Header;
