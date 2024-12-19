import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

import Awal from "./components/Products/Awal"
import Brithday from "./components/Products/Brithday";
import Garduation from "./components/Products/Garduation";
import Marriage from "./components/Products/Marriage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-[#FCEBE9] dark:bg-gray-900 dark:text-[#FCEBE9] duration-200 ">
      <Router>
        <Navbar handleOrderPopup={handleOrderPopup} />
        <Hero handleOrderPopup={handleOrderPopup} />
        <Routes>
          <Route path="/#" element={<Hero handleOrderPopup={handleOrderPopup} />} />
          <Route path="/birthday" element={<Brithday />} />
          <Route path="/graduation" element={<Garduation />} />
          <Route path="/marriage" element={<Marriage />} />
          <Route path="/Awal" element={<Awal />} />
        </Routes>


        <TopProducts handleOrderPopup={handleOrderPopup} />
        <Banner />
        <Subscribe />
        <Testimonials />
        <Footer />
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </Router>
    </div>
  );
};

export default App;
