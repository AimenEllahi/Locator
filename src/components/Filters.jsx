import React from "react";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Input } from "@mui/material";

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
      <div className='flex items-center'>
        <BsFilterLeft className='text-2xl' />
        <span className='text-2xl ml-2'>Filters</span>
      </div>
      <div className='flex gap-x-4 h-14 mt-2'>
        <input
          placeholder='Enter postal / Zip code'
          className='border rounded-lg w-full px-3 bg-gray-200'
        />
        <Dropdown label='Product Line' options={productLineOptions} />
        <Dropdown label='Category' options={categoryOptions} />
        <Dropdown label='Brand' options={brandOptions} />
      </div>
      <button className='bg-gray-800 text-white w-full py-2 mt-4'>
        Filter
      </button>
    </div>
  );
}

export default Filters;
