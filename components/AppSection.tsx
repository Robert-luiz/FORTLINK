"use client"
import { MessageCircle } from "lucide-react";

export default function AppSection() {
  const phone = "551334228135";
  const message = "Olá! Gostaria de mais informações.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <section className="py-16 bg-white">
      <div className="w-full flex flex-col justify-center items-center container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-6 mb-8">
          <button
            onClick={() => window.open(link, "_blank")}
            className="text-xl flex items-center gap-2 font-bold p-4 rounded-lg bg-gradient-to-r from-[#00B723] to-[#00D109] hover:from-[#00D109] hover:to-[#00B723] transition ease-in-out duration-500 hover:cursor-pointer"
          >
            <MessageCircle className="w-5 h-5" />
                Whatsapp
          </button>
        </div>
        <div className="border-2 border-[#11e01b] drop-shadow-[0_0_5px_#00B723]/70 rounded-lg p-4">
          <img src="./qrCode.png" alt="" />
        </div>
      </div>
    </section>
  );
}
