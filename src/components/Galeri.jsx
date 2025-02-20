import React from "react";
import { galleryItems } from "../constants";
import { ChevronRight } from "lucide-react";

const Galeri = () => {
  return (
    <div className="w-full px-8 py-8 bg-[rgba(14,124,98,255)] text-white">
      <h1 className="text-3xl sm:text-4xl text-center font-semibold mb-10">
        GALERI
      </h1>

      {/* Responsive Grid: 4 columns on large screens, 2 on medium, 1 on small */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {galleryItems.slice(0, 8).map((item) => (
          <div key={item.id} className="card glass w-full bg-white text-black">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title justify-center">{item.title}</h2>
              <div className="card-actions justify-start">
                <a
                  href={item.buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 px-6 py-2 bg-[rgba(14,124,98,255)] hover:bg-[rgb(97,197,165)] text-white font-bold rounded-lg shadow-lg transition flex items-center gap-2"
                >
                  Selengkapnya <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
