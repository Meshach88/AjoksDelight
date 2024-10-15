import React from "react";

const Hero = () => {
  return (
    <div className="relative md:h-[36vw] w-full bg-[url('/heroimg.jpg')] bg-cover bg-center">
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-75"></div>
      <div className="relative z-10 flex items-center justify-straight h-full max-w-6xl mx-auto">
        <div className="m-10 flex flex-col gap-5 justify-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">Ajoks Delight</h1>
          <p className="text-base sm:text-xl italic"> making your events delightful...</p>
          <button className="bg-customYellow text-customPurple text-sm md:text-xl p-3 rounded-lg w-[100px] md:w-1/3">
            Visit Menu
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Hero;
