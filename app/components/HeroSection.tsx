import React from "react";
import HeroImg from "../images/hero_endframe__cvklg0xk3w6e_large 2.png";
import AppleLogo from "../images/1200px-Apple_gray_logo 1.png";
function HeroSection() {
  return (
    <div className="w-[1188px] mx-auto flex mt-11">
      {/* Left Menu Section */}
      <div className="w-1/4 border-r pr-4">
        <ul className="space-y-4 text-sm font-medium">
          <li className="flex justify-between items-center">
            <span>Womans Fashion</span>
            <span>&#62;</span> {/* Right Arrow */}
          </li>
          <li className="flex justify-between items-center">
            <span>Mens Fashion</span>
            <span>&#62;</span>
          </li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Babys & Toys</li>
          <li>Groceries & Pets</li>
          <li>Health & Beauty</li>
        </ul>
      </div>

      <div className="bg-black w-full text-white flex flex-col p-8 px-20 h-80 rounded-lg">
        {/* Hero Section */}
        <div className="flex items-center">
          {/* Left Text Section */}
          <div className="flex-1">
            {/* Apple Logo Placeholder */}
            <div className="mb-2">
              <span className="inline-block w-8 h-8 ">
                <img className="w-full h-full" src={AppleLogo.src} alt="" />{" "}
              </span>
            </div>
            <h3 className="uppercase text-sm">iPhone 14 Series</h3>
            <h1 className="text-4xl font-bold mt-2 leading-tight">
              Up to 10% <br />
              off Voucher
            </h1>
            <a
              href="#"
              className="inline-block mt-6 px-2 py-2 text-lg underline font-medium  "
            >
              Shop Now &#8594; {/* Arrow */}
            </a>
          </div>

          {/* Right Image Placeholder */}
          <div className="flex-1 flex justify-end">
            <div className=" w-[250px] h-60 rounded-lg mt-7">
              <img className="w-full h-full" src={HeroImg.src} alt="" />
            </div>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 ">
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-red-500"></div>{" "}
          {/* Active dot */}
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
          <div className="w-3 h-3 rounded-full bg-gray-400"></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
