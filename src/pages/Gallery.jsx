import React from "react";
import { Group } from "../components/Group";
import relic from "../assets/images/relic.svg";
import crystal1 from "../assets/images/crystal1.svg";
import crystal2 from "../assets/images/crystal2.svg";
import arrow from "../assets/images/arrow.png";

const Gallery = () => {
  return (
    <>
      <Group
        className={`flex flex-col items-center justify-center absolute left-[10560px] top-[-2.1dvw] h-screen`}
      >
        <h1 className="text-[64px] text-white font-cinzel ml-[-1.5dvw]">
          Gallery
        </h1>
        <img
          src={relic}
          className="max-w-none w-[583px] h-[577px]"
          alt="relic"
        />
        <div className="flex justify-center items-center gap-[31dvh] relative mt-[-18dvh]">
          <img src={`${crystal1}`} alt="crystal1" />
          <img src={`${crystal2}`} alt="crystal1" />
        </div>
        <div className="flex flex-row justify-center gap-[35dvh] relative top-[2dvw]">
          <img src={`${arrow}`} className="rotate-180" alt="arrow" />
          <img src={`${arrow}`} alt="arrow" />
        </div>
      </Group>
    </>
  );
};

export default Gallery;
