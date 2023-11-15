// Store.js
import { create } from "zustand";
import { productLineOptions, categoryOptions, brandOptions } from "./data";

const useStore = create((set) => ({
  productLineOptions: productLineOptions || [],
  categoryOptions: categoryOptions || [],
  brandOptions: brandOptions || [],
}));

export { useStore };
