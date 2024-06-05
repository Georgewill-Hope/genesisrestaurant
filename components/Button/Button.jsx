"use client";

const Button = ({ text, ability }) => {
  
  return (
    <button
      className="bg-gradient-to-br from-genesis-red via-black to-genesis-red w-max py-2.5 lg:py-3.5 px-2 lg:px-4 border-none outline-none font-semibold rounded-md text-white text-sm md:text-base"
      onClick={ability}
    >
      {text}
    </button>
  );
};

export default Button;
