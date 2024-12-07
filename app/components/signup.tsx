"use client";

export default function SignupPage() {
  return (
    <div className="flex min-h-screen">
      {/* Left Section - Placeholder for Image */}
      <div className="hidden lg:flex flex-1 bg-gray-200 justify-center items-center">
        {/* Add your image here */}
        <div className="text-xl font-medium text-gray-500">
          Placeholder for Image
        </div>
      </div>

      {/* Right Section - Signup Form */}
      <div className="flex flex-1 flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-sm mx-auto w-full">
          <h2 className="text-3xl font-semibold mb-4">Create an account</h2>
          <p className="text-gray-600 mb-8">Enter your details below</p>

          {/* Signup Form */}
          <form>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
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

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full mt-6 bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
            >
              Create Account
            </button>
          </form>

          {/* Google Signup Button */}
          <button
            type="button"
            className="w-full mt-4 flex items-center justify-center border border-gray-300 py-2 px-4 rounded-lg hover:bg-gray-100"
          >
            <img
              src="/google-icon.svg"
              alt="Google Icon"
              className="w-5 h-5 mr-2"
            />
            Sign up with Google
          </button>

          {/* Already Have Account */}
          <div className="mt-6 text-center text-gray-600">
            Already have an account?{" "}
            <a href="#" className="text-red-500 hover:underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
