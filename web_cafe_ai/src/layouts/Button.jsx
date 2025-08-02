import React from "react";

const Button = ({ title, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`
        px-6 py-2
        border-2 border-red-500
        text-red-500
        bg-transparent
        hover:bg-red-500 hover:text-white
        transition-colors duration-300
        rounded-full
        font-medium
        text-sm
        cursor-pointer
        ${className}
      `}
    >
      {title}
    </button>
  );
};

export default Button;