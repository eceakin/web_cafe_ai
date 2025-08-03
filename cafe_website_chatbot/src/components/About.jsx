import React from "react";
import img from "../assets/img3.jpg";
import Button from "../layouts/Button";

const About = (props) => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 gap-8 lg:gap-16">
      {/* Resim kısmı - Oran korumalı ve responsive */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <img 
          src={img} 
          alt="My Sweet Cafe" 
          className="w-full max-w-md h-auto rounded-lg shadow-xl object-cover aspect-video"
        />
      </div>
      
      {/* İçerik kısmı */}
      <div className="space-y-4 lg:w-1/2">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <p className="text-justify">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
          voluptatem deserunt perspiciatis. Soluta, quis labore. Mollitia illum
          quos ad consequuntur ipsam laboriosam fuga, odit reiciendis
          asperiores.
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;