"use client";
import SideImg from "../images/Side Image.png";

export default function LoginPage() {
  return (
    <div className="flex min-h-[60vh] mt-5">
      {/* Left Section - Image */}
      <div className="hidden lg:flex flex-1 bg-gray-100 justify-center items-center">
        <div className="text-xl font-medium text-gray-500">
          <img
            className="w-full h-full object-contain"
            src={SideImg.src}
            alt="Shopping Cart and Mobile"
          />
        </div>
      </div>

      {/* Right Section - Login Form */}
      <div className="flex flex-1 flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-sm mx-auto w-full">
          <h2 className="text-3xl font-semibold mb-4">Log in to Exclusive</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          {/* Login Form */}
          <form>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Email or Phone Number"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Log in
            </button>
          </form>

          {/* Forgot Password */}
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span></span>
            <a href="#" className="text-red-500 hover:underline">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
