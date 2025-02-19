import { Globe, Instagram, Youtube, Facebook, Twitter } from "lucide-react";
import logo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <div className="bg-gray-100 p-6">
      <div className="grid grid-cols-3 gap-10 items-start">
        {/* Logo dan Teks */}
        <div className="flex items-center gap-4">
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
      </div>

      {/* Informasi Kontak & Media Sosial (Di bagian bawah kiri) */}
      <div className="ml-5 mt-6 flex justify-between items-end">
        <div className="text-black text-sm leading-relaxed">
          <p>GEDUNG PUSAT INFORMASI PUBLIK (PIP) PEMKAB BOJONEGORO</p>
          <p>(0353) 880999</p>
          <p>0822300073660</p>
          <p>PPIDBOJONEGORO@gmail.com</p>
        </div>

        {/* Media Sosial */}
        <div className="mr-10 flex flex-col items-end">
          <p className="text-l font-semibold text-black mb-2">
            IKUTI KAMI DI MEDIA SOSIAL :
          </p>
          <div className="flex items-center gap-3">
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
