import React, { useState } from "react";
import {  Link } from "react-scroll";
import { BiRestaurant } from "react-icons/bi";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import Button from "../layouts/Button";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <div className="fixed w-full">
      <div>
        <div
          className="flex flex-row justify-between p-5 md:px-32
         px-5 bg-white shadow-[0_3px_10px_rgba(0,0,0,0.1)] "
        >
          <div className="flex flex-row items-center cursor-pointer">
            <span>
              <BiRestaurant size={30} />
            </span>
            <h1 className="text-xl font-semibold">My Sweet Cafe</h1>
          </div>
          <nav className="hidden md:flex flex-row items-center text-lg font-medium gap-8">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Home
            </Link>
            
            <Link
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              Menu
            </Link>
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-red-500 transition-all cursor-pointer"
            >
              About
            </Link>
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose size={30} onClick={handleChange} />
            ) : (
              <AiOutlineMenuUnfold size={30} onClick={handleChange} />
            )}
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Navbar;
