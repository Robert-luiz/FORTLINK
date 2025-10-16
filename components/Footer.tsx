"use client"
import { MessageCircle } from "lucide-react";

export default function Footer() {
  const phone = "551334228135";
  const message = "Olá! Gostaria de mais informações.";
  const link = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <footer className="bg-gradient-to-r from-[#010816] to-[#011637] text-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4 drop-shadow-[0_0_10px_#00B723]/70">
              Localização
            </h3>
            <p className="text-gray-300">
              Estr. Gentil Peres, n° 380 - Jardim Umuarama, Itanhaém - SP,
              11740-000
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 drop-shadow-[0_0_10px_#00B723]/70">
              Redes Sociasi
            </h3>
            <p className="text-gray-300">lorem</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 drop-shadow-[0_0_10px_#00B723]/70">
              Horário de funcionamento
            </h3>
            <p className="text-gray-300">Segunda à Sexat: 8:00 às 18:00,</p>
            <p className="text-gray-300">Sábado: 9:00 às 17:00</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 drop-shadow-[0_0_10px_#00B723]/70">
              Entre em contato:
            </h3>
            <div className="space-y-4">
              <button
                onClick={() => window.open(link, "_blank")}
                className="w-full text-xl flex justify-center items-center gap-2 font-bold p-4 rounded-lg bg-gradient-to-r from-[#00B723] to-[#00D109] hover:from-[#00D109] hover:to-[#00B723] transition ease-in-out duration-500 hover:cursor-pointer"
              >
                <MessageCircle className="w-5 h-5" />
                Fale conosco
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center border-t border-[#00D109] mt-8 py-12">
          <h3 className="text-lg font-bold">
            Desenvolvedores: Robert Luiz & Vitor Brito
          </h3>
        </div>
      </div>
    </footer>
  );
}
