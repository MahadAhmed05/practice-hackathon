import React from "react";

function Footer() {
  return (
    // <div className="w-full bg-white">
    //   {/* Top Features Section */}
    //   <div className="w-[1308px] mx-auto py-8 flex justify-between items-center">
    //     {/* Feature Box 1 */}
    //     <div className="flex flex-col items-center text-center">
    //       <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
    //         {/* Icon Placeholder */}
    //         <span className="text-xl">🚚</span>
    //       </div>
    //       <h3 className="text-lg font-bold">FREE AND FAST DELIVERY</h3>
    //       <p className="text-sm text-gray-600">
    //         Free delivery for all orders over $140
    //       </p>
    //     </div>

    //     {/* Feature Box 2 */}
    //     <div className="flex flex-col items-center text-center">
    //       <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
    //         {/* Icon Placeholder */}
    //         <span className="text-xl">🎧</span>
    //       </div>
    //       <h3 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
    //       <p className="text-sm text-gray-600">
    //         Friendly 24/7 customer support
    //       </p>
    //     </div>

    //     {/* Feature Box 3 */}
    //     <div className="flex flex-col items-center text-center">
    //       <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
    //         {/* Icon Placeholder */}
    //         <span className="text-xl">💰</span>
    //       </div>
    //       <h3 className="text-lg font-bold">MONEY BACK GUARANTEE</h3>
    //       <p className="text-sm text-gray-600">
    //         We return money within 30 days
    //       </p>
    //     </div>
    //   </div>

    //   {/* Footer Section */}
    //   <footer className="w-full bg-black text-white py-12">
    //     <div className="w-[1308px] mx-auto grid grid-cols-5 gap-8">
    //       {/* Exclusive Column */}
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Exclusive</h3>
    //         <p className="text-sm mb-4">Get 10% off your first order</p>
    //         <form className="flex items-center border border-white rounded-md overflow-hidden">
    //           <input
    //             type="email"
    //             placeholder="Enter your email"
    //             className="w-full p-2 bg-transparent text-white placeholder-gray-400 outline-none"
    //           />
    //           <button className="p-2 bg-white text-black">→</button>
    //         </form>
    //       </div>

    //       {/* Support Column */}
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Support</h3>
    //         <p className="text-sm mb-2">
    //           111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
    //         </p>
    //         <p className="text-sm mb-2">exclusive@gmail.com</p>
    //         <p className="text-sm">+88015-88888-9999</p>
    //       </div>

    //       {/* Account Column */}
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Account</h3>
    //         <ul className="space-y-2">
    //           <li className="text-sm">My Account</li>
    //           <li className="text-sm">Login / Register</li>
    //           <li className="text-sm">Cart</li>
    //           <li className="text-sm">Wishlist</li>
    //           <li className="text-sm">Shop</li>
    //         </ul>
    //       </div>

    //       {/* Quick Link Column */}
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Quick Link</h3>
    //         <ul className="space-y-2">
    //           <li className="text-sm">Privacy Policy</li>
    //           <li className="text-sm">Terms Of Use</li>
    //           <li className="text-sm">FAQ</li>
    //           <li className="text-sm">Contact</li>
    //         </ul>
    //       </div>

    //       {/* Improved Download App Column */}
    //       <div>
    //         <h3 className="text-lg font-bold mb-4">Download App</h3>
    //         <p className="text-sm mb-4">Save $3 with App New User Only</p>
    //         <div className="flex items-start gap-4">
    //           <img
    //             src="/google-play.png"
    //             alt="Google Play"
    //             className="w-32 h-auto"
    //           />
    //           <img
    //             src="/app-store.png"
    //             alt="App Store"
    //             className="w-32 h-auto"
    //           />
    //         </div>
    //         <p className="text-sm text-gray-400 mt-6">Follow Us:</p>
    //         <div className="flex items-center gap-4 mt-2">
    //           <a
    //             href="#"
    //             className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
    //           >
    //             <span className="text-white">F</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
    //           >
    //             <span className="text-white">T</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
    //           >
    //             <span className="text-white">I</span>
    //           </a>
    //           <a
    //             href="#"
    //             className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
    //           >
    //             <span className="text-white">L</span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Footer Bottom */}
    //     <div className="w-full text-center text-gray-500 text-sm mt-8">
    //       © Copyright Rimel 2022. All right reserved
    //     </div>
    //   </footer>
    // </div>

    <div className="w-full bg-white">
      {/* Top Features Section */}
      <div className="w-full max-w-[1308px] mx-auto py-8 px-4 flex flex-col lg:flex-row justify-between items-center gap-8">
        {/* Feature Box 1 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon Placeholder */}
            <span className="text-xl">🚚</span>
          </div>
          <h3 className="text-lg font-bold">FREE AND FAST DELIVERY</h3>
          <p className="text-sm text-gray-600">
            Free delivery for all orders over $140
          </p>
        </div>

        {/* Feature Box 2 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon Placeholder */}
            <span className="text-xl">🎧</span>
          </div>
          <h3 className="text-lg font-bold">24/7 CUSTOMER SERVICE</h3>
          <p className="text-sm text-gray-600">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Feature Box 3 */}
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mb-4">
            {/* Icon Placeholder */}
            <span className="text-xl">💰</span>
          </div>
          <h3 className="text-lg font-bold">MONEY BACK GUARANTEE</h3>
          <p className="text-sm text-gray-600">
            We return money within 30 days
          </p>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-black text-white py-12 px-4">
        <div className="w-full max-w-[1308px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {/* Exclusive Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Exclusive</h3>
            <p className="text-sm mb-4">Get 10% off your first order</p>
            <form className="flex items-center border border-white rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-2 bg-transparent text-white placeholder-gray-400 outline-none"
              />
              <button className="p-2 bg-white text-black">→</button>
            </form>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <p className="text-sm mb-2">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </p>
            <p className="text-sm mb-2">exclusive@gmail.com</p>
            <p className="text-sm">+88015-88888-9999</p>
          </div>

          {/* Account Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Account</h3>
            <ul className="space-y-2">
              <li className="text-sm">My Account</li>
              <li className="text-sm">Login / Register</li>
              <li className="text-sm">Cart</li>
              <li className="text-sm">Wishlist</li>
              <li className="text-sm">Shop</li>
            </ul>
          </div>

          {/* Quick Link Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Link</h3>
            <ul className="space-y-2">
              <li className="text-sm">Privacy Policy</li>
              <li className="text-sm">Terms Of Use</li>
              <li className="text-sm">FAQ</li>
              <li className="text-sm">Contact</li>
            </ul>
          </div>

          {/* Improved Download App Column */}
          <div>
            <h3 className="text-lg font-bold mb-4">Download App</h3>
            <p className="text-sm mb-4">Save $3 with App New User Only</p>
            <div className="flex flex-wrap gap-4">
              <img
                src="/google-play.png"
                alt="Google Play"
                className="w-32 h-auto"
              />
              <img
                src="/app-store.png"
                alt="App Store"
                className="w-32 h-auto"
              />
            </div>
            <p className="text-sm text-gray-400 mt-6">Follow Us:</p>
            <div className="flex items-center gap-4 mt-2">
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <span className="text-white">F</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <span className="text-white">T</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <span className="text-white">I</span>
              </a>
              <a
                href="#"
                className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-full hover:bg-gray-600"
              >
                <span className="text-white">L</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="w-full text-center text-gray-500 text-sm mt-8">
          © Copyright Rimel 2022. All right reserved
        </div>
      </footer>
    </div>
  );
}

export default Footer;
