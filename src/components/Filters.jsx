import React, { useEffect } from "react";
import { BsFilterLeft } from "react-icons/bs";
import Dropdown from "./Dropdown";
import { Input } from "@mui/material";
import { useStore } from "../utils/Store";

function Filters() {
  const {
    setSelectedProductLine,
    setSelectedCategory,
    setSelectedBrand,
    selectedProductLine,
    selectedCategory,
    selectedBrand,
    productLineOptions,
    categoryOptions,
    brandOptions,
    setZipCode,
    zipCode,
    filter,
    setFilter,
  } = useStore((state) => state);
  return (
    <div>
      <div className='flex items-center'>
        <BsFilterLeft className='text-2xl' />
        <span className='text-2xl ml-2'>Filters</span>
      </div>
      <div className='flex w-full md:flex-row flex-col md:gap-x-2 md:h-14 mt-2'>
        <input
          value={zipCode}
          onChange={(e) => {
            setZipCode(e.target.value);
            setFilter(false);
          }}
          minLength={4}
          placeholder='Enter postal / Zip code'
          className='border rounded-lg w-full px-3 py-4 h-full bg-gray-200 mb-6'
        />
        <Dropdown
          label={selectedProductLine || "Product Line"}
          options={[{ label: "Product Line" }, ...productLineOptions]}
          onClick={(option) => {
            setSelectedProductLine(option);
            setFilter(false);
          }}
        />
        <Dropdown
          label={selectedCategory || "Category"}
          options={[{ label: "Category" }, ...categoryOptions]}
          onClick={(option) => {
            setSelectedCategory(option);
            setFilter(false);
          }}
        />
        <Dropdown
          label={selectedBrand || "Brand"}
          options={[{ label: "Brand" }, ...brandOptions]}
          onClick={(option) => {
            setSelectedBrand(option);
            setFilter(false);
          }}
        />
      </div>
      <button
        onClick={() => setFilter(true)}
        className='bg-gray-800 text-white w-full py-2 mt-4'
      >
        Filter
      </button>
    </div>
  );
}

export default Filters;
