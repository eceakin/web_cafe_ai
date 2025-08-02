import React from "react";
import CoffeesCard from "../layouts/CoffeesCard";
import img1 from "../assets/img1.jpg";

const Coffees = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center pt-24 pb-10">
        Menu
      </h1>
      <div className="flex flex-wrap gap-8 justify-center">
        <CoffeesCard img={img1} title="Espresso" price="$4.00" />
        <CoffeesCard img={img1} title="Latte" price="$5.00" />
        <CoffeesCard img={img1} title="Cappuccino" price="$7.00" />
        <CoffeesCard img={img1} title="Mocha" price="$10.00" />
        <CoffeesCard img={img1} title="Americano" price="$2.00" />
        <CoffeesCard img={img1} title="Macchiato" price="$5.00" />
      </div>
    </div>
  );
};

export default Coffees;
