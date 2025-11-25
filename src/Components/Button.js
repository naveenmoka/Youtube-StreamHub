import React from "react";

const Button = ({ name, active = false }) => {
  return (
    <div>
      <button
        className={`px-4 py-2 text-sm rounded-full whitespace-nowrap transition
      ${
        active
          ? "bg-gray-300 text-black font-medium border border-gray-300 shadow-md transition-all duration-300"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:shadow-lg hover:scale-105 transition-all duration-300"
      }


      `}
      >
        {name}
      </button>
    </div>
  );
};

export default Button;
