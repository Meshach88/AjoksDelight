import React from "react";
import { assets } from "../assets";

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto flex flex-col items-center justify-center mb-5 md:mb-16">
      <h1 className="font-bold text-2xl sm:text-4xl text-center mb-2">
        Testimonials
      </h1>
      <hr className="border-2 border-black w-10 rounded-xl md:mb-10" />
      <article className="md:grid md:grid-cols-2 flex flex-col mx-auto items-center justify-center">
        <div className="bg-white shadow-xl m-5 p-5 flex flex-col justify-start text-justify rounded-xl">
            <img src={assets.rating1} alt="rating stars" className="w-1/6 mb-8" />
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis ullam corrupti delectus debitis, placeat ut sapiente provident quam illo sint iste, enim eos, quaerat est. Laboriosam aliquid quae dolorum!</p>
            <h3 className="font-bold text-customPurple text-lg">Meshach Esuabom</h3>
        </div>
        <div className="bg-white shadow-xl m-5 p-5 flex flex-col justify-start text-justify rounded-xl">
            <img src={assets.rating1} alt="rating stars" className="w-1/6 mb-8" />
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis ullam corrupti delectus debitis, placeat ut sapiente provident quam illo sint iste, enim eos, quaerat est. Laboriosam aliquid quae dolorum!</p>
            <h3 className="font-bold text-customPurple text-lg">Meshach Esuabom</h3>
        </div>
        <div className="bg-white shadow-xl m-5 p-5 flex flex-col justify-start text-justify rounded-xl">
            <img src={assets.rating1} alt="rating stars" className="w-1/6 mb-8" />
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis ullam corrupti delectus debitis, placeat ut sapiente provident quam illo sint iste, enim eos, quaerat est. Laboriosam aliquid quae dolorum!</p>
            <h3 className="font-bold text-customPurple text-lg">Meshach Esuabom</h3>
        </div>
        <div className="bg-white shadow-xl m-5 p-5 flex flex-col justify-start text-justify rounded-xl">
            <img src={assets.rating1} alt="rating stars" className="w-1/6 mb-8" />
            <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reiciendis ullam corrupti delectus debitis, placeat ut sapiente provident quam illo sint iste, enim eos, quaerat est. Laboriosam aliquid quae dolorum!</p>
            <h3 className="font-bold text-customPurple text-lg">Meshach Esuabom</h3>
        </div>
      </article>
    </section>
  );
};

export default Testimonials;
