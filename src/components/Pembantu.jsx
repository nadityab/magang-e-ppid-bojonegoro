import React from "react";
import { pembantuImages } from "../constants";

const Pembantu = () => {
  return (
    <div className="w-full px-8 py-8 bg-white text-[rgba(14,124,98,255)]">
      <h1 className="text-3xl sm:text-4xl text-center font-bold mb-10">
        WEBSITE PPID PEMBANTU <br />
        KABUPATEN BOJONEGORO
      </h1>

      {/* Dynamic Grid: Adjusts columns based on screen size */}
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {pembantuImages.map((image, index) => (
          <div key={index} className="w-full">
            <img
              src={image}
              alt={`Pembantu ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pembantu;
