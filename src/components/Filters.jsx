import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from "./Dropdown";

function Filters() {
  const productLineOptions = [
    { value: 1, label: "Product Line 1" },
    { value: 2, label: "Product Line 2" },
    // Add more options as needed
  ];

  const categoryOptions = [
    { value: "a", label: "Category A" },
    { value: "b", label: "Category B" },
    // Add more options as needed
  ];

  const brandOptions = [
    { value: "x", label: "Brand X" },
    { value: "y", label: "Brand Y" },
    // Add more options as needed
  ];
  return (
    <div>
      <div className="flex items-center">
        <BsFilterLeft className="text-2xl" />
        <span className="text-2xl ml-2">Filters</span>
      </div>
      <div className="flex justify-between mt-2">
        <button className="bg-gray-200 text-black w-1/4 py-2 text-left">
          Enter postal / Zip code
        </button>
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
