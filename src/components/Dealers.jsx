import React from "react";
import Filters from "./Filters";
import Map from "./Map";

function Dealers() {
  return (
    <div className="w-[90%] m-auto">
      <div className="flex py-[6%] justify-between">
        <div className="w-[40%]">
          <h1 className="text-[38px] font-bold">
            Let us help you find a stocking dealer!
          </h1>
        </div>
        <div className="w-[45%]">
          <p className="text-base text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
            aliquam a repellat corporis dolor aspernatur sed molestias expedita
            autem voluptates. Quo maiores ratione repellendus, odit accusamus a
            laudantium dicta accusantium!
          </p>
        </div>
      </div>
      <Filters />
      <Map />
    </div>
  );
}

export default Dealers;
