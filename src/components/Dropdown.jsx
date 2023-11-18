// Dropdown.js
import React, { useEffect, useState } from "react";
import { useStore } from "../utils/Store"; // Import the useStore hook

export default function Dropdown({ label, options, onClick }) {
  const [show, setShow] = useState(false);

  return (
    <div className="md:w-3/4 w-full">
      <div className="relative w-full h-full inline-block text-left">
        <button
          type="button"
          className="inline-flex w-full h-14 font-bold items-center justify-between gap-x-1.5 rounded-md bg-gray-200 px-3 py-2 hover:border-0 group-focus-within:ring-0 ring-0 border-0 text-gray-900 "
          onClick={() => setShow(!show)}
        >
          {label}
          <svg
            className="-mr-1 h-5 w-5 text-gray-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div className="relative w-full h-full  z-10 inline-block text-left">
        {/* ... (rest of your code remains unchanged) */}
        <div
          className={`absolute right-0 z-10 mt-2 w-full max-h-[60vh] overflow-y-scroll origin-top-right rounded-md bg-gray-200 shadow-lg focus:outline-none ${
            !show && "hidden"
          }`}
          role="menu"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <span
                key={index}
                onClick={() => {
                  setShow(false);
                  if (
                    option.label === "Product Line" ||
                    option.label === "Category" ||
                    option.label === "Brand"
                  ) {
                    onClick(null);
                    return;
                  }
                  onClick(option.label);
                }}
                className="text-gray-700 cursor-pointer font-bold block px-4 py-2 text-sm"
                role="menuitem"
                tabIndex="-1"
                id={`menu-item-${index}`}
              >
                {option.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
