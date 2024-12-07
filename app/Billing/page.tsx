export default function BillingSection() {
  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-50 p-4">
      <div className="flex flex-col lg:flex-row w-full max-w-[1170px] lg:h-[840px] bg-white shadow-lg">
        {/* Left Section: Billing Details */}
        <div className="flex-1 p-6 lg:p-8">
          <h2 className="text-lg font-semibold mb-4">Billing Details</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name*"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Company Name"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Street Address*"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Apartment, floor, etc. (optional)"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Town/City*"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="text"
              placeholder="Phone Number*"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <input
              type="email"
              placeholder="Email Address*"
              className="w-full border border-gray-300 p-3 rounded"
            />
            <div className="flex items-center gap-2">
              <input type="checkbox" id="save-info" className="h-4 w-4" />
              <label htmlFor="save-info" className="text-sm">
                Save this information for faster check-out next time
              </label>
            </div>
          </form>
        </div>

        {/* Right Section: Order Summary */}
        <div className="flex-1 bg-gray-100 p-6 lg:p-8">
          <div className="space-y-4">
            {/* Product 1 */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 bg-gray-300"></div>
              <span className="text-sm">LCD Monitor</span>
              <span className="font-medium">$650</span>
            </div>
            {/* Product 2 */}
            <div className="flex items-center justify-between">
              <div className="w-16 h-16 bg-gray-300"></div>
              <span className="text-sm">H1 Gamepad</span>
              <span className="font-medium">$1100</span>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span className="font-medium">$1750</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping:</span>
              <span className="font-medium">Free</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Total:</span>
              <span className="font-medium">$1750</span>
            </div>
          </div>

          <hr className="my-6 border-gray-300" />

          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <input type="radio" id="bank" name="payment" />
              <label htmlFor="bank" className="text-sm">
                Bank
              </label>
            </div>
            <div className="flex items-center gap-2">
              <input type="radio" id="cod" name="payment" />
              <label htmlFor="cod" className="text-sm">
                Cash on delivery
              </label>
            </div>
          </div>

          <div className="space-y-4 mt-6">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="text"
                placeholder="Coupon Code"
                className="flex-1 border border-gray-300 p-3 rounded"
              />
              <button className="bg-red-500 text-white px-6 py-3 rounded">
                Apply Coupon
              </button>
            </div>
            <button className="w-full bg-red-500 text-white px-6 py-3 rounded">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
