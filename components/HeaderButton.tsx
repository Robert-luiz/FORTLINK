import React from 'react';

interface HeaderButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function HeaderButton({ onClick, children }: HeaderButtonProps) {
  return (
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white uppercase transition-all duration-300 ease-in-out rounded-lg group"
    >
      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#00D109] to-[#00B723] rounded-lg"></span>
      <span className="absolute bottom-0 right-0 w-full h-full transition-all duration-500 ease-in-out transform scale-0 bg-black rounded-lg group-hover:scale-100"></span>
      <span className="relative text-black group-hover:text-white transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}