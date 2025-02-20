import React from "react";
import { galleryItems } from "../constants";

const Galeri = () => {
  return (
    <div className="container mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Galeri</h2>

      {/* Responsive Grid: 3 columns on large screens, 2 on medium, 1 on small */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item) => (
          <div key={item.id} className="card glass w-full">
            <figure>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Galeri;
