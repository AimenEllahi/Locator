import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import { useStore } from "../utils/Store";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFiaWFubWMyMDIzIiwiYSI6ImNsb3EyNXZ0NjBkNjMycWxuYnR4dHBoamUifQ.Ixf-PoC7qOcveb-NoatYiA";

function Map() {
  const mapContainer = useRef(null);
  const tooltipRef = useRef(null);

  const [data, setData] = useState(null);

  const [dealers, setDealers] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const { selectedProductLine, selectedCategory, selectedBrand } = useStore(
    (state) => state
  );

  useEffect(() => {
    if (!data) return;
    // filter dealers
    const filteredDealers = data?.filter((dealer) => {
      let brandMatch = true;
      let categoryMatch = true;
      let productLineMatch = true;

      if (selectedBrand) {
        brandMatch = dealer.attributes.brands.data.some(
          (brand) => brand.attributes.name === selectedBrand
        );
      }

      if (selectedCategory) {
        categoryMatch = dealer.attributes.product_categories.data.some(
          (category) => category.attributes.name === selectedCategory
        );
      }

      if (selectedProductLine) {
        productLineMatch = dealer.attributes.product_lines.data.some(
          (productLine) => {
            return productLine.attributes.name === selectedProductLine;
          }
        );
      }

      // Return true only if all conditions are met
      return brandMatch && categoryMatch && productLineMatch;
    });

    setDealers(filteredDealers);
  }, [selectedProductLine, selectedCategory, selectedBrand]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-api-2jzf.onrender.com/api/dealers?populate=*"
        );
        const data = await response.json();
        setData(data.data);
        setDealers(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      center: [-111, 54.6667568],
      zoom: 4,
      style: "mapbox://styles/mapbox/light-v10",
    });

    // Create a tooltip element
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip";
    tooltipRef.current = tooltip;

    map.on("mouseover", "clusters", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseout", "clusters", () => {
      map.getCanvas().style.cursor = "";
    });

    // Add markers for each dealer's location
    dealers.forEach((dealer) => {
      const { id, name, latitude, longitude } = dealer.attributes;
      const marker = new mapboxgl.Marker()
        .setLngLat([parseFloat(longitude), parseFloat(latitude)])
        .addTo(map);

      marker.getElement().innerHTML =
        "<div class='h-5 w-5 bg-slate-800 rounded-full'></div>";

      marker.getElement().style.cursor = "pointer";

      marker.getElement().addEventListener("click", () => {
        setSelectedDealer(dealer);
        map.flyTo({
          center: [parseFloat(longitude), parseFloat(latitude)],
          zoom: 15,
        });
      });
    });

    return () => map.remove();
  }, [dealers]);
  console.log(selectedDealer);
  return (
    <div className="relative w-full h-[70vh]">
      {selectedDealer && (
        <div className="absolute z-10 h-[35vh] md:w-[25vw] w-[80vw] bottom-5 right-5 bg-black bg-opacity-60 text-white p-4 rounded-lg font-sans">
          <h3 className="text-2xl font-bold">
            {selectedDealer.attributes.name}
          </h3>
          <h3 className="font-bold mt-5">Address:</h3>
          <p>{selectedDealer.attributes.address}</p>
          <h3 className="font-bold mt-2">Phone:</h3>
          <p>{selectedDealer.attributes.phone}</p>
        </div>
      )}
      <div
        ref={mapContainer}
        className="absolute cursor-pointer top-0 bottom-0 w-full rounded-xl mt-4 mb-4"
      />
    </div>
  );
}

export default Map;
