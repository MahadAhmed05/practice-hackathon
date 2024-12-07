"use client";
import Link from "next/link";
export default function CartSection() {
  return (
    <div className="mx-auto border border-gray-200 p-4 w-full h-auto lg:w-[1170px] lg:h-[840px] sm:w-[100%] sm:h-auto">
      {/* Table Section */}
      <table className="w-full border-collapse mb-6">
        <thead>
          <tr className="border-b">
            <th className="text-left py-3 px-4 font-semibold">Product</th>
            <th className="text-left py-3 px-4 font-semibold">Price</th>
            <th className="text-left py-3 px-4 font-semibold">Quantity</th>
            <th className="text-left py-3 px-4 font-semibold">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {/* Product Row 1 */}
          <tr className="border-b">
            <td className="py-4 px-4 flex items-center">
              <div
                className="w-16 h-16 bg-gray-300 mr-4 flex items-center justify-center"
                style={{ backgroundColor: "#f0f0f0" }}
              >
                {/* Placeholder for Image */}
                IMG
              </div>
              LCD Monitor
            </td>
            <td className="py-4 px-4">$650</td>
            <td className="py-4 px-4">
              <select className="border border-gray-300 px-2 py-1 rounded">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td className="py-4 px-4">$650</td>
          </tr>

          {/* Product Row 2 */}
          <tr className="border-b">
            <td className="py-4 px-4 flex items-center">
              <div
                className="w-16 h-16 bg-gray-300 mr-4 flex items-center justify-center"
                style={{ backgroundColor: "#d0d0d0" }}
              >
                {/* Placeholder for Image */}
                IMG
              </div>
              H1 Gamepad
            </td>
            <td className="py-4 px-4">$550</td>
            <td className="py-4 px-4">
              <select className="border border-gray-300 px-2 py-1 rounded">
                <option>01</option>
                <option>02</option>
                <option>03</option>
              </select>
            </td>
            <td className="py-4 px-4">$1100</td>
          </tr>
        </tbody>
      </table>

      {/* Buttons */}
      <div className="flex justify-between items-center mb-6">
        <button className="border border-gray-400 px-4 py-2 rounded">
          Return To Shop
        </button>
        <button className="border border-gray-400 px-4 py-2 rounded">
          Update Cart
        </button>
      </div>

      {/* Coupon & Cart Summary */}
      <div className="flex flex-wrap justify-between">
        {/* Coupon Section */}
        <div className="flex-1 border border-gray-300 p-4 mr-4 mb-4 lg:mb-0">
          <h3 className="font-semibold mb-4">Coupon Code</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Coupon Code"
              className="border border-gray-300 px-4 py-2 rounded w-full mr-2"
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
              Apply Coupon
            </button>
          </div>
        </div>

        {/* Cart Total Section */}
        <div className="w-full lg:w-1/3 border border-gray-300 p-4">
          <h3 className="font-semibold mb-4">Cart Total</h3>
          <div className="mb-2 flex justify-between">
            <span>Subtotal:</span>
            <span>$1750</span>
          </div>
          <div className="mb-4 flex justify-between">
            <span>Shipping:</span>
            <span>Free</span>
          </div>
          <div className="mb-4 flex justify-between font-semibold">
            <span>Total:</span>
            <span>$1750</span>
          </div>
          <Link href="../Billing">
            <button className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
