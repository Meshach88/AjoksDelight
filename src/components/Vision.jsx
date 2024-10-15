import React from "react";
import { assets } from "../assets";

const Vision = () => {
  return (
    <div className="min-h-screen mb-5 md:mb-16 md:-ml-5">
      <section className="flex flex-col-reverse gap-2 md:flex-row justify-center max-w-5xl items-center mx-auto mt-5 md:mt-20">
        <article className="flex flex-col gap-4 md:w-1/2 justify-center items-center text-center my-5">
          <div className="bg-slate-300 rounded-lg p-5 mx-5 my-1 md:mr-5 md:my-5 transition-all duration-500 hover:shadow-lg">
            <h1 className="font-bold m-2 text-lg">Our Purpose</h1>
            <p>
              To provide high quality, top notch Catering Services that exceed
              customer expectations.
            </p>
          </div>
          <div className="bg-slate-300 rounded-lg p-5 mx-5 my-2 md:mr-5 md:my-5 hover:shadow-lg transition-all duration-500">
          <h1 className="font-bold m-2 text-lg">Our Vision</h1>
          <p>To be a leader in the provision of catering and cafeteria services by providing enhanced services, and boost customer relationship and profitability.</p>
          </div>
          <div className="bg-slate-300 rounded-lg p-5 mx-5 my-2 md:mr-5 md:my-5 hover:shadow-lg transition-all duration-500">
            <h1 className="font-bold m-2 text-lg">Our Mission</h1>
            <p>To foster a rewarding customer-product service relationship between our business and our clients and customers and provide exceptional customer services, through the delivery of healthy, delicious meals meet for their various needs, and at competitive prices.</p>
          </div>
        </article>
        <img src={assets.chef1} alt="Picture of chef" className=" w-4/5 md:ml-10 md:w-2/5 border-black border-4 rounded-xl"/>
      </section>
    </div>
  );
};

export default Vision;
