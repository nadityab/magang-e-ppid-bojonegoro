import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Background from "./components/Background";
import InformasiSection from "./components/InformasiSection";
import Footer from "./components/Footer";
import Galeri from "./components/Galeri";

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

      <Footer />
    </>
  );
};

export default App;
