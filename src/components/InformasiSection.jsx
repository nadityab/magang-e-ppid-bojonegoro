import { informasiLeft, informasiRight } from "../constants";
import { ChevronRight } from "lucide-react";

const InformasiSection = () => {
  return (
    <div className="p-4">
      {/* Judul */}
      <h1 className="mt-10 text-3xl sm:text-4xl text-[rgba(14,124,98,255)] text-left font-bold">
        Informasi Terbaru
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-6 p-4">
        {/* Left Section (Berita utama) */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          {informasiLeft.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl h-60 flex flex-col lg:flex-row"
            >
              {/* Image Section */}
              <figure className="w-full lg:w-1/3">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-32 sm:h-40 lg:h-full object-cover"
                />
              </figure>

              {/* Content Section */}
              <div className="card-body p-4">
                <h2 className="card-title text-lg">{item.title}</h2>
                <p className="text-xs text-gray-500">
                  Dirilis pada {item.date}
                </p>
                <p className="text-sm">{item.description}</p>
                <div className="card-actions">
                  <a
                    href={item.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 bg-[rgba(14,124,98,255)] hover:bg-[rgb(97,197,165)] text-white text-sm font-bold rounded-lg shadow-lg transition flex items-center gap-2"
                  >
                    Selengkapnya <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (Form + Berita kecil) */}
        <div className="lg:col-span-2 flex flex-col gap-4">
          {/* Input Fields */}
          <div className="flex flex-col gap-2">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow w-full"
                placeholder="Nama Lengkap"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow w-full" placeholder="Email" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <label className="input input-bordered flex items-center gap-2 w-full">
              <input
                type="text"
                className="grow w-full"
                placeholder="Nomor Telfon"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            <label className="input input-bordered flex items-center gap-2 w-full">
              <input type="text" className="grow w-full" placeholder="Alamat" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>

            {/* Textarea with Button Inside */}
            <div className="relative w-full">
              <textarea
                placeholder="Pesan"
                className="textarea textarea-bordered w-full p-3 text-sm resize-none pr-16"
                rows="7"
              ></textarea>

              {/* Button inside the textarea (Bottom Right) */}
              <button className="absolute bottom-2 right-2 bg-[rgba(14,124,98,255)] text-white px-4 py-2 rounded-lg shadow-md hover:bg-[rgb(97,197,165)] transition">
                Submit
              </button>
            </div>
          </div>

          {/* Berita Singkat */}
          {informasiRight.slice(0, 3).map((item, index) => (
            <div
              key={index}
              className="card bg-[rgba(14,124,98,255)] text-primary-content w-full"
            >
              <div className="card-body text-white">
                <h2 className="text-sm">Dirilis pada {item.date}</h2>
                <p className="font-semibold">{item.description}</p>
                <div className="card-actions">
                  <a
                    href={item.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 px-4 py-2 bg-white hover:bg-gray-200 text-[rgba(14,124,98,255)] text-sm font-bold rounded-lg shadow-lg transition flex items-center gap-2"
                  >
                    Selengkapnya <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformasiSection;
