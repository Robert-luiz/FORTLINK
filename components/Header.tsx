"use client";

import { useState } from "react";
import HeaderButton from "./HeaderButton";
import Modal from "./Modal";
import PreRegistrationForm from "./PreRegistrationForm";

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const onContractClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  return (
    <header className="bg-gradient-to-r from-[#010816] to-[#001A41] border-b border-gray-200 sticky top-0 z-50">
      <nav className=" mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img
            className="w-[200px]  drop-shadow-[0_0_10px_#00B723]/70"
            src="/logo-fortlink.png"
            alt=""
          />
        </div>
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="font-bold text-white hover:text-[#00B723] transition-all duration-300 "
            >
              Home
            </a>
            <a
              href="#"
              className="font-bold text-white hover:text-[#00B723] transition-all duration-300"
            >
              Planos
            </a>
            <a
              href="#"
              className="font-bold text-white hover:text-[#00B723] transition-all duration-300"
            >
              Sobre nós
            </a>
            <a
              href="#"
              className="font-bold text-white hover:text-[#00B723] transition-all duration-300"
            >
              Serviços
            </a>
          </div>
          <div className="text-center">
            <HeaderButton onClick={onContractClick}>Contratar</HeaderButton>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
              <PreRegistrationForm onClose={handleCloseModal} />
            </Modal>
          </div>
        </div>
      </nav>
    </header>
  );
}
