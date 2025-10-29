import React from 'react';

interface HeaderButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export default function HeaderButton({ onClick, children }: HeaderButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full bg-[#00B723] inline-flex items-center justify-center px-6 py-2 overflow-hidden font-bold text-white uppercase transition ease-in-out duration-500 rounded-lg hover:transition hover:duration-300 hover:cursor-pointer group hover:bg-gradient-to-r from-[#00B723] to-[#00D109] hover:shadow-lg hover:shadow-[#00D109]/30"
    >
        {children}
    </button>
  );
}