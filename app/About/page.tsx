import React from "react";
import AboutImg from "../images/Side Image (1).png";
import member1 from "../images/Frame 874.png";
import member2 from "../images/Frame 875.png";
import member3 from "../images/Frame 876.png";
const OurStory = () => {
  return (
    <section className="w-full bg-gray-50 py-12 px-4">
      {/* Container */}
      <div className="max-w-[1170px] mx-auto">
        {/* Our Story */}
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h2 className="text-2xl font-bold mb-4">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Launched in 2015, Exclusive is South Asia’s premier online
              shopping marketplace with an active presence in Bangladesh.
              Supported by a wide range of tailored marketing, data, and service
              solutions, Exclusive has 10,500 sellers and 300 brands and serves
              3 million customers across the region.
            </p>
            <p className="text-gray-600">
              Exclusive has more than 1 million products to offer, growing at a
              very fast pace. Exclusive offers a diverse assortment in
              categories ranging from consumer.
            </p>
          </div>
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className=" rounded-md">
              <img src={AboutImg.src} alt="" />
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="flex flex-wrap gap-4 justify-between mt-40">
          {/* Stat 1 */}
          <div className="w-[270px] h-[230px] bg-white text-gray-800 rounded-md shadow-md flex flex-col items-center justify-center">
            <span className="text-2xl">🛒</span>
            <h3 className="text-xl font-bold">10.5k</h3>
            <p className="text-sm text-center">Sellers active on our site</p>
          </div>
          {/* Stat 2 */}
          <div className="w-[270px] h-[230px] bg-red-500 text-white rounded-md shadow-md flex flex-col items-center justify-center">
            <span className="text-2xl">💰</span>
            <h3 className="text-xl font-bold">33k</h3>
            <p className="text-sm text-center">Monthly Product Sale</p>
          </div>
          {/* Stat 3 */}
          <div className="w-[270px] h-[230px] bg-white text-gray-800 rounded-md shadow-md flex flex-col items-center justify-center">
            <span className="text-2xl">👥</span>
            <h3 className="text-xl font-bold">45.5k</h3>
            <p className="text-sm text-center">Customer active in our site</p>
          </div>
          {/* Stat 4 */}
          <div className="w-[270px] h-[230px] bg-white text-gray-800 rounded-md shadow-md flex flex-col items-center justify-center">
            <span className="text-2xl">📈</span>
            <h3 className="text-xl font-bold">25k</h3>
            <p className="text-sm text-center">Annual gross sale in our site</p>
          </div>
        </div>

        {/* Team Section */}
        <div className="flex flex-wrap justify-center gap-16 mt-12">
          {/* Member 1 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md w-[300px]">
            <div className="w-[300px] h-[430px] bg-gray-300 mb-4">
                <img className="w-full h-full" src={member1.src} alt="" />
            </div>
            <h4 className="text-lg font-bold">Tom Cruise</h4>
            <p className="text-sm text-gray-500">Founder & Chairman</p>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                T
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                I
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                L
              </div>
            </div>
          </div>
          {/* Member 2 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md w-[300px]">
            <div className="w-[300px] h-[430px] bg-gray-300 mb-4">
                <img className="w-full h-full" src={member2.src} alt="" />
            </div>
            <h4 className="text-lg font-bold">Emma Watson</h4>
            <p className="text-sm text-gray-500">Managing Director</p>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                T
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                I
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                L
              </div>
            </div>
          </div>
          {/* Member 3 */}
          <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-md w-[300px]">
            <div className="w-[300px] h-[430px] bg-gray-300 mb-4">
                <img className="w-full h-full" src={member3.src} alt="" />
            </div>
            <h4 className="text-lg font-bold">Will Smith</h4>
            <p className="text-sm text-gray-500">Product Designer</p>
            <div className="flex gap-2 mt-4">
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                T
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                I
              </div>
              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300">
                L
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
