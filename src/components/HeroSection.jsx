import Hero from "../assets/images/Hero.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[500px] lg:h-[600px]">
      {/* Background Image */}
      <img
        src={Hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white px-4">
        {/* Judul */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center font-bold">
          PPID KABUPATEN BOJONEGORO
        </h1>

        {/* Deskripsi */}
        <p className="mt-6 text-lg text-center">
          Pejabat Pengelola Informasi dan Dokumentasi <br />
          Kabupaten Bojonegoro
        </p>

        {/* Tombol Selengkapnya */}
        <button className="mt-6 px-8 py-3 bg-[rgb(16,124,100)] hover:bg-[rgb(97,197,165)] text-white font-semibold rounded-lg shadow-lg transition flex items-center gap-2">
          Selengkapnya <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
