export default function ProductSection() {
  return (
    <div className="flex flex-wrap justify-center lg:justify-between gap-8 w-full max-w-[1170px] mx-auto mt-12">
      {/* Left Side - Thumbnail Images */}
      <div className="flex flex-col items-center gap-4">
        <div className="w-[70px] h-[70px] bg-gray-300 rounded-md"></div>
        <div className="w-[70px] h-[70px] bg-gray-300 rounded-md"></div>
        <div className="w-[70px] h-[70px] bg-gray-300 rounded-md"></div>
        <div className="w-[70px] h-[70px] bg-gray-300 rounded-md"></div>
      </div>

      {/* Center - Main Product Image */}
      <div className="w-[500px] h-[500px] bg-gray-300 rounded-md"></div>

      {/* Right Side - Product Details */}
      <div className="w-full lg:w-[450px]">
        <h2 className="text-2xl font-bold mb-2">Havic HV G-92 Gamepad</h2>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-yellow-500">★★★★★</span>
          <span className="text-sm text-gray-500">(150 Reviews)</span>
          <span className="text-sm text-green-500">In Stock</span>
        </div>
        <p className="text-xl font-semibold mb-4">$192.00</p>
        <p className="text-sm text-gray-500 mb-4">
          PlayStation 5 Controller Skin High quality vinyl with air channel
          adhesive for easy bubble free install & mess free removal. Pressure
          sensitive.
        </p>

        {/* Colors */}
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">Colours:</h3>
          <div className="flex gap-2">
            <div className="w-6 h-6 rounded-full bg-gray-500 border-2 border-gray-700"></div>
            <div className="w-6 h-6 rounded-full bg-red-500 border-2 border-gray-700"></div>
          </div>
        </div>

        {/* Sizes */}
        <div className="mb-4">
          <h3 className="text-sm font-bold mb-2">Size:</h3>
          <div className="flex gap-2">
            <button className="w-10 h-10 border border-gray-300 rounded-md text-sm">
              XS
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-md text-sm">
              S
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-md text-sm bg-red-500 text-white">
              M
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-md text-sm">
              L
            </button>
            <button className="w-10 h-10 border border-gray-300 rounded-md text-sm">
              XL
            </button>
          </div>
        </div>

        {/* Quantity and Buy Now */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex items-center border border-gray-300 rounded-md">
            <button className="w-8 h-8 flex justify-center items-center">
              -
            </button>
            <input
              type="text"
              defaultValue="2"
              className="w-10 h-8 text-center border-none outline-none"
            />
            <button className="w-8 h-8 flex justify-center items-center">
              +
            </button>
          </div>
          <button className="bg-red-500 text-white py-2 px-6 rounded-md">
            Buy Now
          </button>
        </div>

        {/* Delivery Options */}
        <div className="border-t border-gray-200 pt-4">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
            <div>
              <h4 className="text-sm font-bold">Free Delivery</h4>
              <p className="text-xs text-gray-500">
                Enter your postal code for Delivery Availability
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
            <div>
              <h4 className="text-sm font-bold">Return Delivery</h4>
              <p className="text-xs text-gray-500">
                Free 30 Days Delivery Returns. Details
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
