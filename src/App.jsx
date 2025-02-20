import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Background from "./components/Background";
import InformasiSection from "./components/InformasiSection";
import Footer from "./components/Footer";
import Galeri from "./components/Galeri";
import Pembantu from "./components/Pembantu";

const App = () => {
  return (
    <>
      <Navbar />

      <HeroSection />

      <FeatureSection />
      <Background />

      <InformasiSection />
      <Background />

      <Galeri />

      <Pembantu />

      <Footer />
    </>
  );
};

export default App;
