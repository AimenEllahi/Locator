import React, { useRef, useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoiZmFiaWFubWMyMDIzIiwiYSI6ImNsb3EyNXZ0NjBkNjMycWxuYnR4dHBoamUifQ.Ixf-PoC7qOcveb-NoatYiA";

function Map() {
  const mapContainer = useRef(null);
  const [dealers, setDealers] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://strapi-api-2jzf.onrender.com/api/dealers?sort[0]=name:asc&populate[product_lines][fields][0]=name&populate[brands][fields][0]=name&populate[product_categories][fields][0]=name&fields[0]=name&fields[1]=address&fields[2]=phone&fields[3]=latitude&fields[4]=longitude&fields[5]=postal_code&pagination[pageSize]=10&pagination[page]=1&publicationState=live&locale[0]=en"
        );
        const data = await response.json();
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
      // style: "mapbox://styles/mapbox/streets-v12",
      center: [-111, 54.6667568], // Default center of the US
      zoom: 4, // Default zoom level
      style: "mapbox://styles/mapbox/light-v10",
    });

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

      marker.getElement().addEventListener("click", () => {
        setSelectedDealer(dealer);
      });
      marker.getElement().addEventListener("mouseover", () => {
        map.getCanvas().style.cursor = "pointer";
      });

      marker.getElement().addEventListener("mouseleave", () => {
        map.getCanvas().style.cursor = "";
      });

      if (selectedDealer && selectedDealer.id === id) {
        marker.togglePopup();
      }
    });

    return () => map.remove();
  }, [dealers, selectedDealer]);

  return (
    <div className='relative w-full h-[70vh]'>
      <div
        ref={mapContainer}
        className='absolute cursor-pointer top-0 bottom-0 w-full rounded-xl mt-4 mb-4'
      />
      {selectedDealer && (
        <div className='absolute h-[35vh] w-[25vw] bottom-5 right-5 bg-black bg-opacity-60 text-white p-4 rounded-lg font-sans'>
          <h2 className='text-2xl font-bold'>Checkpoint</h2>
          <h3>{selectedDealer.attributes.name}</h3>
          <h3 className='font-bold'>Address:</h3>
          <p>{selectedDealer.attributes.address}</p>
          <h3 className='font-bold'>Phone:</h3>
          <p>{selectedDealer.attributes.phone}</p>
        </div>
      )}
    </div>
  );
}

export default Map;
