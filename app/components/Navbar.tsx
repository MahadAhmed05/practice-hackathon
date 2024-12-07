"use client";
import Wishlist from "../images/Wishlist.png";
import Cart from "../images/Cart1.png";
import Search from "../images/Vector.png";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full border-b-2">
      <div className="max-w-[1188px] mx-auto mt-4 flex items-center justify-between px-4 lg:px-0">
        {/* Left Section */}
        <div className="font-bold text-2xl lg:text-3xl">Exclusive</div>

        {/* Center Section - Links */}
        <div className="hidden lg:flex flex-1 justify-center space-x-6 text-lg font-medium">
          <a
            href="/"
            className="hover:underline decoration-2 underline-offset-4"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:underline decoration-2 underline-offset-4"
          >
            Contact
          </a>
          <a
            href="../About"
            className="hover:underline decoration-2 underline-offset-4"
          >
            About
          </a>
          <Link
            href="#"
            className="hover:underline decoration-2 underline-offset-4"
          >
            Sign Up
          </Link>
        </div>

        {/* Right Section */}
        <div className="hidden lg:flex items-center space-x-4">
          {/* Search Bar */}
          <div className="flex items-center border border-gray-300 rounded-md">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="w-[200px] h-[32px] px-2 text-sm rounded-md outline-none"
            />
          </div>
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <img src={Search.src} alt="Search Icon" />
          </div>
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <img src={Wishlist.src} alt="Wishlist Icon" />
          </div>
          <div className="w-[32px] h-[32px] flex justify-center items-center">
            <Link href="../Cart"><img src={Cart.src} alt="Cart Icon" /></Link>
          </div>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col items-center space-y-4 mt-4 lg:hidden">
          {/* Links */}
          <a
            href="#"
            className="block py-2 text-center hover:bg-gray-100 w-full"
          >
            Home
          </a>
          <a
            href="#"
            className="block py-2 text-center hover:bg-gray-100 w-full"
          >
            Contact
          </a>
          <a
            href="#"
            className="block py-2 text-center hover:bg-gray-100 w-full"
          >
            About
          </a>
          <Link
            href="../Signup"
            className="block py-2 text-center hover:bg-gray-100 w-full"
          >
            Sign Up
          </Link>

          {/* Search Bar */}
          <div className="flex items-center space-x-2 w-full justify-center">
            <input
              type="text"
              placeholder="Search..."
              className="w-[200px] h-[32px] px-2 text-sm border border-gray-300 rounded-md"
            />
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <img src={Search.src} alt="Search Icon" />
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-6">
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <img src={Wishlist.src} alt="Wishlist Icon" />
            </div>
            <div className="w-[32px] h-[32px] flex justify-center items-center">
              <img src={Cart.src} alt="Cart Icon" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
