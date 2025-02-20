import { Globe, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 items-center text-center md:text-left">
        {/* Logo dan Teks */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
          <img className="h-20 w-40" src={logo} alt="PPID Logo" />
          <div>
            <h2 className="text-xl font-bold text-black">
              PPID KABUPATEN BOJONEGORO
            </h2>
            <hr className="border-t border-gray-400 my-1" />
            <p className="text-sm text-gray-600">
              PEJABAT PENGELOLA INFORMASI DAN DOKUMENTASI
            </p>
          </div>
        </div>

        {/* Informasi Kontak */}
        <div className="text-black text-sm leading-relaxed">
          <p>GEDUNG PUSAT INFORMASI PUBLIK (PIP) PEMKAB BOJONEGORO</p>
          <p>(0353) 880999</p>
          <p>0822300073660</p>
          <p>PPIDBOJONEGORO@gmail.com</p>
        </div>

        {/* Media Sosial */}
        <div className="flex flex-col items-center md:items-end">
          <p className="text-lg font-semibold text-black mb-2">
            IKUTI KAMI DI MEDIA SOSIAL :
          </p>
          <div className="flex items-center gap-3 justify-center md:justify-end">
            <a
              href="#"
              className="p-2 bg-[rgba(48,188,156,255)] rounded-full text-white"
            >
              <Globe size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-[rgba(48,188,156,255)] rounded-full text-white"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-[rgba(48,188,156,255)] rounded-full text-white"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-[rgba(48,188,156,255)] rounded-full text-white"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="p-2 bg-[rgba(48,188,156,255)] rounded-full text-white"
            >
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
