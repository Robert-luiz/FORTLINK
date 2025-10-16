import React from 'react';

const VisitUs: React.FC = () => {
  const googleMapsUrl = 'https://maps.app.goo.gl/gg4bkbVDaY3J6Fsy5';

  return (
    <section className="bg-gradient-to-br from-[#020e24] to-[#001A41] min-h-screen flex items-center justify-center bg-white p-6 sm:p-8 lg:p-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          
          <div className="w-full flex flex-col justify-between items-start md:w-1/2 lg:w-7/12 text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#23c12b] drop-shadow-[0_0_3px_#00B723]/70 leading-tight tracking-tighter">
              Onde estamos localizados
            </h1>
            <h2 className="mt-2 text-2xl font-semibold sm:text-3xl text-gray-500">
              Venha nos fazer uma visita
            </h2>
            <p className="mt-6 mb-8 text-lg text-white text-justify max-w-xl mx-auto md:mx-0">
              Nosso escritório está convenientemente localizado na Cesp, de fácil acesso por transporte público e com estacionamento nas proximidades.
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold rounded-lg text-lg transition-all duration-300 p-2 hover:animate-pulse hover:cursor-pointer bg-gradient-to-r from-[#00B723] to-[#00D109] text-[#020e24] hover:from-[#00D109] hover:to-[#00B723] drop-shadow-[0_0_3px_#00B723]/70"
              aria-label="Ver nossa localização no Google Maps"
            >
              Ver no mapa
            </a>
          </div>

          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative aspect-[4/3] bg-gray-200 rounded-2xl shadow-lg " aria-label="Espaço reservado para imagem ou mapa do local">
              <img className='w-full h-auto hover:cursor-pointer hover:scale-[1.02] transition-transform duration-500 ease-in-out rounded-2xl' src="./loc.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUs;
