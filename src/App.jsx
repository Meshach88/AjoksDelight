import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Vision from "./components/Vision";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Vision />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
};
export default App;
