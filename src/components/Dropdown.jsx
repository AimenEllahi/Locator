// Dropdown.js
import React, { useState } from "react";
import { useStore } from "../utils/Store"; // Import the useStore hook

export default function Dropdown({ label }) {
  const options = useStore((state) => state[label.toLowerCase() + "Options"]); // Get options based on label
  const [show, setShow] = useState(false);
  console.log(options);

  return (
    <>
      <div className="relative w-full h-full inline-block text-left">
        {/* ... (rest of your code remains unchanged) */}
        <div
          className={`absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-gray-200 shadow-lg focus:outline-none ${
            !show && "hidden"
          }`}
          role="menu"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            {options?.map((option, index) => (
              <span
                key={index}
                onClick={() => setShow(false)}
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
    </>
  );
}
