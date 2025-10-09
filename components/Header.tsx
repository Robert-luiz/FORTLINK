import WireframeImage from "./WireframeImage";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-[#010816] to-[#001A41] border-b border-gray-200 sticky top-0 z-50">
      <nav className=" mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img className="w-[200px]  drop-shadow-[0_0_10px_#00B723]/70" src="/logo-fortlink.png" alt="" />
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
          <div className="rounded-tl-2xl rounded-br-2xl bg-[#00D109] hover:scale-[1.01] hover:rounded-full transition-all duration-200 ">
            <button className="w-full font-bold uppercase bg-gradient-to-r from-[#000000] to-[#071a37] text-[#00D109] hover:text-[#1ff647]  px-4 py-2 rounded-tl-3xl rounded-br-3xl hover:rounded-bl-3xl hover:rounded-tr-3xl hover:cursor-pointer transition-all duration-200">
              contratar
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
