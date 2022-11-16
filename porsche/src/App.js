import Navbar from "./components/navbar/Navbar";
import HeroSection from "./components/herosection/HeroSection";
import Models from "./components/models/Models";
import Dealerships from "./components/dealerships/Dealerships";
import Tools from "./components/tools/Tools";
import Live from "./components/live/Live";
import Discover from "./components/discover/Discover";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div>
      <Navbar/>
      <HeroSection/>
      <Models/>
      <Dealerships/>
      <Tools/>
      <Live/>
      <Discover/>
      <Footer/>


    </div>
  );
}

export default App;
