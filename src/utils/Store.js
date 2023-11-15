// Store.js
import { create } from "zustand";
import { productLineOptions, categoryOptions, brandOptions } from "./data";

const useStore = create((set) => ({
  productLineOptions: productLineOptions || [],
  categoryOptions: categoryOptions || [],
  brandOptions: brandOptions || [],
  selectedProductLine: "",
  selectedCategory: "",
  selectedBrand: "",
  setSelectedProductLine: (value) => set({ selectedProductLine: value }),
  setSelectedCategory: (value) => set({ selectedCategory: value }),
  setSelectedBrand: (value) => set({ selectedBrand: value }),
}));

export { useStore };
