import { ChevronRight } from "lucide-react";
import { BookOpen } from "lucide-react";

const FeatureSection = () => {
  return (
    <div className="mt-20 text-lg text-center">
      {/* Judul */}
      <h1 className="text-4xl text-[rgb(48,134,98)] sm:text-6xl lg:text-7xl text-center font-bold">
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
        {/* Card 1 */}
        <div className="card bg-[rgb(48,134,98)] w-90 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md">
              <BookOpen className="w-12 h-12 text-green-600" />
            </div>
          </figure>
          <div className="card-body items-center text-center text-xl text-white">
            <h2 className="card-title text-xl">Alur Permohonan</h2>
            <p>
              Warga dapat mengajukan permohonan informasi pada PPID di Badan
              Publik
            </p>
            <div className="card-actions">
              {" "}
              <button className="mt-6 px-8 py-3 text-white font-semibold transition flex items-center gap-2">
                <span className="underline decoration-2 underline-offset-10">
                  Selengkapnya
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Card 2 */}
        <div className="card bg-white w-90 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="w-24 h-24 flex items-center justify-center bg-[rgb(48,134,98)] rounded-full shadow-md">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </figure>
          <div className="card-body items-center text-center text-xl text-black">
            <h2 className="card-title text-xl">Alur Keberatan</h2>
            <p>
              Ungkapan rasa tidak senang, ketidak puasan kepada Badan Publik
            </p>
            <div className="card-actions">
              <button className="mt-6 px-8 py-3 text-white font-semibold transition flex items-center gap-2">
                <span className="underline decoration-2 underline-offset-10 text-[rgb(48,134,98)]">
                  Selengkapnya
                </span>
                <ChevronRight className="w-5 h-5 text-[rgb(48,134,98)]" />
              </button>
            </div>
          </div>
        </div>
        {/* Card 3 */}
        <div className="card bg-[rgb(48,134,98)] w-90 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md">
              <BookOpen className="w-12 h-12 text-green-600" />
            </div>
          </figure>
          <div className="card-body items-center text-center text-xl text-white">
            <h2 className="card-title text-xl">Serta Merta</h2>
            <p>Informasi yang dapat mengancam hajat hidup orang banyak</p>
            <div className="card-actions">
              <button className="mt-6 px-8 py-3 text-white font-semibold transition flex items-center gap-2">
                <span className="underline decoration-2 underline-offset-10">
                  Selengkapnya
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
        {/* Card 4 */}{" "}
        <div className="card bg-white w-90 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="w-24 h-24 flex items-center justify-center bg-[rgb(48,134,98)] rounded-full shadow-md">
              <BookOpen className="w-12 h-12 text-white" />
            </div>
          </figure>
          <div className="card-body items-center text-center text-xl text-black">
            <h2 className="card-title text-xl">Daftar Informasi Publik</h2>
            <p>
              Informasi Publik yang wajib disediakan dan diumumkan setiap saat
            </p>
            <div className="card-actions">
              <button className="mt-6 px-8 py-3 text-white font-semibold transition flex items-center gap-2">
                <span className="underline decoration-2 underline-offset-10 text-[rgb(48,134,98)]">
                  Selengkapnya
                </span>
                <ChevronRight className="w-5 h-5 text-[rgb(48,134,98)]" />
              </button>
            </div>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card bg-[rgb(48,134,98)] w-90 shadow-xl ">
          <figure className="px-10 pt-10">
            <div className="w-24 h-24 flex items-center justify-center bg-white rounded-full shadow-md">
              <BookOpen className="w-12 h-12 text-green-600" />
            </div>
          </figure>
          <div className="card-body items-center text-center text-xl text-white">
            <h2 className="card-title text-xl">Informasi Mobile</h2>
            <p>Layanan sambang langsung di berbagai desa-desa</p>
            <div className="card-actions">
              <button className="mt-6 px-8 py-3 text-white font-semibold transition flex items-center gap-2">
                <span className="underline decoration-2 underline-offset-10">
                  Selengkapnya
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;
