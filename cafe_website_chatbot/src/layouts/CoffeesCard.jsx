import React from "react";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import Button from "./Button";

const CoffeesCard = (props) => {
  return (
    <div className="w-full lg:w-1/4 p-5 shadow-xl rounded-lg bg-white transition-all duration-300 hover:shadow-2xl">
      <div className="w-full h-48 overflow-hidden flex justify-center items-center">
  <img className="rounded-xl object-contain h-full" src={props.img} alt={props.title} />
</div>
      <div className="space-y-4">
        <h3 className="font-semibold text-center text-xl pt-6">{props.title}</h3>
        <div className="flex flex-row justify-center">
          <BsStarFill className="text-red-500"/>
          <BsStarFill className="text-red-500"/>
          <BsStarFill className="text-red-500"/>
          <BsStarFill className="text-red-500"/>
          <BsStarHalf className="text-red-500"/>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <h3 className="font-semibold text-lg">{props.price}</h3>
          <Button title="Buy Now" /> 
        </div>
      </div>
    </div>
  );
};

export default CoffeesCard;