import { informasiLeft, informasiRight } from "../constants";
import { ChevronRight } from "lucide-react";

const InformasiSection = () => {
  return (
    <div>
      {/* Judul */}
      <h1 className="mt-10 text-4xl text-[rgba(14,124,98,255)] sm:text-4xl lg:text-4xl text-left ml-10 font-bold">
        Informasi Terbaru
      </h1>
      <div className="grid grid-cols-8 gap-10 p-6">
        {/* Left Section (3 parts width) */}
        <div className="col-span-6">
          {informasiLeft.map((item, index) => (
            <div
              key={index}
              className="card lg:card-side bg-base-100 shadow-xl h-80 mt-5"
            >
              <figure>
                <img src={item.image} alt={item.title} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p className="card-date">Dirilis pada {item.date}</p>
                <p>{item.description}</p>
                <div className="card-actions justify-start">
                  <a
                    href={item.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-8 py-3 bg-[rgba(14,124,98,255)] hover:bg-[rgb(97,197,165)] text-white font-bold rounded-lg shadow-lg transition flex items-center gap-2"
                  >
                    Selengkapnya <ChevronRight className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Section (1 part width) */}
        <div className="col-span-2 flex flex-col gap-4">
          {/* Input Fields */}
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
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
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input type="text" className="grow" placeholder="Username" />
          </label>
          <label className="input input-bordered flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70"
            >
              <path
                fillRule="evenodd"
                d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                clipRule="evenodd"
              />
            </svg>
            <input type="password" className="grow" value="password" />
          </label>

          {/* Right Card */}
          {informasiRight.map((item, index) => (
            <div
              key={index}
              className="card bg-[rgba(14,124,98,255)] text-primary-content w-84"
            >
              <div className="card-body text-white">
                <h2 className="card-date">Dirilis pada {item.date}</h2>
                <p className="font-semibold ">{item.description}</p>
                <div className="card-actions justify-start">
                  <a
                    href={item.buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 px-8 py-3 bg-[rgba(14,124,98,255)] hover:bg-[rgb(97,197,165)] font-bold rounded-lg shadow-lg transition flex items-center gap-2"
                  >
                    Selengkapnya <ChevronRight className="w-5 h-5" />
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
