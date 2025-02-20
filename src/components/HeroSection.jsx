import Hero from "../assets/images/Hero.jpg";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-[80vh] lg:h-[500px]">
      {/* Background Image */}
      <img
        src={Hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white text-center px-6">
        {/* Judul */}
        <h1 className="text-2xl sm:text-4xl lg:text-6xl font-bold leading-tight">
          PPID KABUPATEN BOJONEGORO
        </h1>

        {/* Deskripsi */}
        <p className="mt-3 text-sm sm:text-base lg:text-lg max-w-xl">
          Pejabat Pengelola Informasi dan Dokumentasi <br />
          Kabupaten Bojonegoro
        </p>

        {/* Tombol Selengkapnya */}
        <button className="mt-4 px-5 py-2 md:px-6 md:py-2.5 bg-[rgb(16,124,100)] hover:bg-[rgb(97,197,165)] text-white font-semibold rounded-lg shadow-md transition flex items-center gap-2">
          Selengkapnya <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
