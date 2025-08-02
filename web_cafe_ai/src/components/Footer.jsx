import React from "react";

const Footer = () => {
  return (
    <div className="bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className="w-full md:w-1/4">
          <h1 className="font-semibold text-xl pb-4">Sweet Cafe</h1>
          <p className="text-sm">Your one-stop shop for the best coffee in town! 
            We serve a variety of coffees, teas, and snacks to satisfy your cravings.
          </p>
        </div>
        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 "> Links</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/"
            >
              Coffees
            </a>
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/about"
            >
              About
            </a>
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/menu"
            >
              Menu
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 "> Menu</h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/"
            >
              Our Coffees
            </a>
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/about"
            >
              Premium Menu
            </a>
          </nav>
        </div>

        <div>
          <h1 className="font-medium text-xl pb-4 pt-5 md:pt-0 ">
            {" "}
            Contact Us
          </h1>
          <nav className="flex flex-col gap-2">
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/"
            >
              cafe@gmail.com
            </a>
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/about"
            >
              02585202585
            </a>
            <a
              className="hover:text-red-500 transition-all cursor-pointer"
              href="/menu"
            >
              Social Media
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p className="text-center py-4" > @copyright developed by <span className="text-red-500"> Sweet Cafe</span> | All rights reserved</p>


      </div>
    </div>
  );
};

export default Footer;
