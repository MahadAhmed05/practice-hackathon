import React from "react";
import Card1 from "../images/Frame 611.png"
function FlashSale() {
  return (
    <div className="w-[1308px] h-[493px] mx-auto p-4">
      {/* Flash Sales Header with Countdown */}
      <div className="flex justify-between items-center mb-6">
        {/* Left Section: "Today's" and Countdown */}
        <div className="ml-10">
          <h2 className="text-2xl font-bold text-red-600 mb-4">Today's</h2>
          <div className="flex gap-4 text-center">
            {/* Countdown Timer */}
            <div>
              <p className="text-sm font-medium">Days</p>
              <p className="text-3xl font-bold text-red-600">03</p>
            </div>
            <div>
              <p className="text-sm font-medium">Hours</p>
              <p className="text-3xl font-bold text-red-600">23</p>
            </div>
            <div>
              <p className="text-sm font-medium">Minutes</p>
              <p className="text-3xl font-bold text-red-600">19</p>
            </div>
            <div>
              <p className="text-sm font-medium">Seconds</p>
              <p className="text-3xl font-bold text-red-600">56</p>
            </div>
          </div>
        </div>

        {/* Right Section: Navigation Buttons */}
        <div className="flex gap-2">
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300">
            <span className="text-xl font-bold">{"<"}</span>
          </button>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full hover:bg-gray-300">
            <span className="text-xl font-bold">{">"}</span>
          </button>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-5 gap-4">
        {/* Product Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <div className="w-full h-36 bg-gray-300 mb-4"><img className="w-full h-full" src={Card1.src} alt="" /></div>
          <p className="text-sm font-bold">HAVIT HV-G92 Gamepad</p>
          <p className="text-red-600">
            $120 <span className="text-gray-500 line-through">$160</span>
          </p>
          <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐ (88)</p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <div className="w-full h-36 bg-gray-300 mb-4"></div>
          <p className="text-sm font-bold">AK-900 Wired Keyboard</p>
          <p className="text-red-600">
            $960 <span className="text-gray-500 line-through">$1160</span>
          </p>
          <p className="text-sm text-yellow-500">⭐⭐⭐⭐ (75)</p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <div className="w-full h-36 bg-gray-300 mb-4"></div>
          <p className="text-sm font-bold">IPS LCD Gaming Monitor</p>
          <p className="text-red-600">
            $370 <span className="text-gray-500 line-through">$400</span>
          </p>
          <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐ (99)</p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <div className="w-full h-36 bg-gray-300 mb-4"></div>
          <p className="text-sm font-bold">S-Series Comfort Chair</p>
          <p className="text-red-600">
            $375 <span className="text-gray-500 line-through">$400</span>
          </p>
          <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐ (99)</p>
        </div>

        {/* Product Card */}
        <div className="bg-gray-100 p-4 rounded-md shadow">
          <div className="w-full h-36 bg-gray-300 mb-4"></div>
          <p className="text-sm font-bold">S-Series Comfort Chair</p>
          <p className="text-red-600">
            $375 <span className="text-gray-500 line-through">$400</span>
          </p>
          <p className="text-sm text-yellow-500">⭐⭐⭐⭐⭐ (99)</p>
        </div>
      </div>

      {/* View All Products Button */}
      <div className="mt-6 text-center">
        <button className="bg-red-600 text-white py-2 px-6 rounded hover:bg-red-700">
          View All Products
        </button>
      </div>
    </div>
  );
}

export default FlashSale;
