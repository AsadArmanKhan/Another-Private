import React from "react";

const Card = () => {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-gray-100 p-4 rounded-2xl overflow-hidden">
      {/* Left Sidebar */}
      <div className="w-80 bg-white rounded-2xl shadow-md p-6 flex flex-col">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Category</h2>
        <div className="h-1 w-16 bg-teal-400 mb-6 rounded-full"></div>

        {[
          { label: "Laptops", icon: "💻", count: 1 },
          { label: "PC & Computers", icon: "🖥️", count: 2 },
          { label: "Cell Phones", icon: "📱", count: 3 },
          { label: "Tablets", icon: "💾", count: 4 },
          { label: "Cameras", icon: "📷", count: 5 },
        ].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between bg-white rounded-xl border p-4 mb-4 shadow hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">{item.icon}</span>
              <span className="text-gray-800 font-medium">{item.label}</span>
            </div>
            <div className="w-6 h-6 bg-teal-400 text-white rounded-full flex items-center justify-center text-sm font-bold">
              {item.count}
            </div>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="flex-1 ml-6 rounded-2xl overflow-hidden relative">
        <div
          className="w-full h-full min-h-[500px] bg-cover bg-center rounded-2xl flex flex-col justify-center items-start p-10"
          style={{
            backgroundImage: "url('./frontend/public/img')", // Replace with your image path
          }}
        >
          <h1 className="text-white text-5xl font-bold leading-snug drop-shadow-md">
            Don’t miss amazing <br /> grocery deals
          </h1>
          <p className="text-white text-lg mt-6 mb-4 drop-shadow-md">
            Sign up for the daily newsletter
          </p>
          <div className="flex bg-white rounded-full shadow-md overflow-hidden items-center px-4 py-2 w-full max-w-md">
            <svg
              className="text-gray-400 mr-2 w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M4 4h16v16H4z" stroke="none" />
              <path d="M4 4l8 8 8-8" />
            </svg>
            <input
              type="email"
              placeholder="Your email address"
              className="border-none focus:ring-0 focus:outline-none flex-1"
            />
            <button className="bg-teal-500 hover:bg-teal-600 text-white rounded-full px-6 py-2 text-sm font-semibold">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
