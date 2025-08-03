import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/h.jpg')] bg-cover bg-no-repeat">
      <div className="w-full lg:w-2/3 space-y-5" >
        <h1 className="text-amber-100 font-semibold text-6xl">Elevate Your Cafe Experience </h1>
        <p className="text-white/80 ">
          Discover the perfect blend of ambiance and innovation at our cafe.
            Enjoy a seamless experience with our AI-powered services, from
            personalized recommendations to efficient ordering systems. Whether
            you're here for a quick coffee or a leisurely meal, we've got you
            covered.
        </p>
       
      </div>
    </div>
  );
};

export default Home;
