import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from "./Dropdown";

function Filters() {
  return (
    <div>
      <div className="flex items-center">
        <BsFilterLeft className="text-2xl" />
        <span className="text-2xl ml-2">Filters</span>
      </div>
      <div className="flex justify-between mt-2">
        <Dropdown />
        <Dropdown />
        <Dropdown />
        <Dropdown />
      </div>
      <button className="bg-gray-800 text-white w-full py-2 mt-4">
        Filter
      </button>
    </div>
  );
}

export default Filters;
