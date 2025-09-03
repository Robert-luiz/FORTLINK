import React from "react";
import PrepaidSectionCard from "./PrepaidSectionCard";

export default function PrepaidSection() {
  const Prepaiplans = [
    {
      title: "",
      speed: "FORT PLAY",
      price: "R$ 79,90",
      features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium"],
    },
    {
      title: "",
      speed: "300 MEGA",
      price: "R$ 79,90",
      features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium"],
    },
    {
      title: "",
      speed: "600 MEGA",
      price: "R$ 99,90",
      features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium"],
      isPopular: true,
    },
    {
      title: "",
      speed: "1000 MEGA",
      price: "R$ 129,90",
      features: ["Lorem Express", "Lorem Ipsum", "Lorem Premium"],
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[#020e24] to-[#1f519c]">
            Outros Planos
          </h2>
          <p className="mt-4 text-lg text-[#12305c] max-w-2xl mx-auto">
            Encontre o plano pré-pago ideal para você, com flexibilidade e
            controle total sobre seu consumo.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-8 md:flex md:flex-col md:items-center md:px-16 md:gap-8 lg:flex-row lg:items-stretch lg:px-0 lg:gap-6 xl:gap-8 2xl:gap-12">
          {Prepaiplans.map((plan, index) => (
            <PrepaidSectionCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
}
