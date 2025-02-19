import { ChevronRight } from "lucide-react";

import { cardItems } from "../constants"; // Import cardItems

const FeatureSection = () => {
  return (
    <div className="mt-20 text-lg text-center">
      {/* Judul */}
      <h1 className="text-4xl text-[rgb(48,134,98)] sm:text-6xl lg:text-6xl text-center font-bold">
        PENGAJUAN INFORMASI
        <br />
        KINI LEBIH MUDAH
      </h1>

      {/* Deskripsi */}
      <p className="mt-10 text-[rgb(101,114,113)] text-lg text-center">
        Ajukan permohonan Informasi Publik, atau keberatan Informasi Publik
        <br />
        dengan mengisi E-Form secara online.
      </p>

      {/* Cards Container - Flexbox for Side by Side Layout */}
      <div className="mt-15 flex flex-wrap justify-center gap-3">
        {cardItems.map((card, index) => (
          <div key={index} className={`card ${card.bgColor} w-80 shadow-xl`}>
            <figure className="px-10 pt-10">
              <div
                className={`w-24 h-24 flex items-center justify-center ${card.iconBg} rounded-full shadow-md`}
              >
                {card.icon} {/* Render the icon dynamically */}
              </div>
            </figure>
            <div
              className={`card-body items-center text-center text-xl ${card.textColor}`}
            >
              <h2 className="card-title text-xl">{card.title}</h2>
              <p>{card.description}</p>
              <div className="card-actions">
                <a
                  href={card.href}
                  className="mt-6 px-8 py-3 font-semibold transition flex items-center gap-2"
                >
                  <span
                    className={`underline decoration-2 underline-offset-10 ${card.textColor}`}
                  >
                    Selengkapnya
                  </span>
                  <ChevronRight className={`w-5 h-5 ${card.textColor}`} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;
