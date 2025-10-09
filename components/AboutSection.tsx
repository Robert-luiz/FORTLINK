import React from "react";
import { CheckIcon } from "./icons/CheckIcon";

const AboutUs: React.FC = () => {
  const values = [
    {
      title: "Inovação Constante",
      description:
        "Buscamos continuamente novas maneiras de resolver problemas e agregar valor.",
    },
    {
      title: "Foco no Cliente",
      description: "Nossos clientes estão no centro de tudo o que fazemos.",
    },
    {
      title: "Integridade e Transparência",
      description:
        "Agimos com honestidade e clareza em todas as nossas interações.",
    },
  ];

  return (
    <section className=" min-h-screen flex items-center justify-cente text-[#12305c] p-6 sm:p-8 lg:p-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
          <div className="w-full md:w-1/2 lg:w-5/12 transform hover:scale-[1.02] transition-transform duration-500 ease-in-out">
            <div className="relative aspect-[4/3] shadow-2xl shadow-sky-900/40 rounded-2xl">
              <img
                src="https://picsum.photos/800/600?grayscale"
                alt="Nossa equipe trabalhando em projetos inovadores"
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-sky-500/10 rounded-2xl mix-blend-multiply"></div>
            </div>
          </div>

          <div className="w-full md:w-1/2 lg:w-7/12">
            <span className="italic text-lg text-[#12305c] font-semibold">
              Sobre Nós
            </span>
            <h1 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-[#23c12b] drop-shadow-[0_0_3px_#00B723]/70 leading-tight">
              Construindo o Futuro da Tecnologia.
            </h1>
            <p className="mt-2 text-lg text-[#12305c] text-justify indent-10">
              Nossa empresa nasceu em 2017 com a missão de levar Internet de
              qualidade e de alta velocidade para a região do Jardim Coronel, em
              Itanhaém, já, que o local não tinha provedor que oferecesse esse
              serviço. Somos a primeira provedora de Internet licenciada pela
              Anatel e com tecnologia fibra óptica dessa região! Além de
              qualidade na conexão, também prezamos pelo atendimento! Agilidade
              e eficácia é o que levamos para nossos clientes! FORT é nosso
              compromisso com sua conexão de qualidade e velocidade!
            </p>
            <ul className="mt-4 space-y-4">
              {values.map((value, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <CheckIcon className="h-6 w-6 text-[#23c12b]" />
                  </div>
                  <div className="w-full">
                    <h3 className="font-bold text-[#23c12b] border-b border-[#23c12b]">
                      <span className="text-lg">{value.title}</span>
                    </h3>
                    <p className="text-[#23c12b] text-sm mt-1">
                      <span className="text-[#12305c]">{value.description}</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
