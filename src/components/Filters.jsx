import React, { useEffect } from "react";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Input } from "@mui/material";
import { useStore } from "../utils/Store";

function Filters() {
  const productLineOptions = useStore((state) => state.productLineOptions);
  const categoryOptions = useStore((state) => state.categoryOptions);
  const brandOptions = useStore((state) => state.brandOptions);
  return (
    <div>
      <div className="flex items-center">
        <BsFilterLeft className="text-2xl" />
        <span className="text-2xl ml-2">Filters</span>
      </div>
      <div className="flex md:flex-row flex-col md:gap-x-4 h-[35vh] md:h-14 mt-2">
        <input
          placeholder="Enter postal / Zip code"
          className="border rounded-lg w-full px-3 bg-gray-200 md:mb-2"
        />
        <Dropdown label="Product Line" options={productLineOptions} />
        <Dropdown label="Category" options={categoryOptions} />
        <Dropdown label="Brand" options={brandOptions} />
      </div>
      <button className="bg-gray-800 text-white w-full py-2 mt-4">
        Filter
      </button>
    </div>
  );
}

export default Filters;
