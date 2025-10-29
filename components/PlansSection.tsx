"use client";
import { title } from "process";
import PlanCard from "./PlanCard";
import { useState } from "react";
import Modal from "./Modal";
import PreRegistrationForm from "./PreRegistrationForm";

export default function PlansSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>();

  const handleSelectPlan = (planName: string) => {
    setSelectedPlan(planName); 
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setSelectedPlan(undefined); 
    setIsModalOpen(false);
  };

  const plans = [
    {
      title: "",
      speed: "300 MEGA",
      price: "R$ 79,90",
      features: [
        "Lorem Express",
        "Lorem Ipsum",
        "Lorem Premium",
        "Lorem Ipsum",
        "Lorem 24h",
        "Lorem Ipsum",
      ],
    },
    {
      title: "",
      speed: "600 MEGA",
      price: "R$ 99,90",
      features: [
        "Lorem Express",
        "Lorem Ipsum",
        "Lorem Premium",
        "Lorem Ipsum",
        "Lorem 24h",
        "Lorem Ipsum",
      ],
      isPopular: true,
    },
    {
      title: "",
      speed: "1000 MEGA",
      price: "R$ 129,90",
      features: [
        "Lorem Express",
        "Lorem Ipsum",
        "Lorem Premium",
        "Lorem Ipsum",
        "Lorem 24h",
        "Lorem Ipsum",
      ],
    },
  ];

  return (
    <section className="w-full bg-[url(/plans.jpg)] bg-cover bg-center bg-no-repeat py-16 sm:py-24">
      <div className="container w-full mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400">
            Planos de Internet
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Escolha o plano perfeito para você e navegue com ultravelocidade.
          </p>
        </div>
        <div className="flex flex-col justify-between items-center gap-8 md:flex md:flex-col md:items-center md:px-16 md:gap-8 lg:flex-row lg:items-stretch lg:px-0 lg:gap-6 xl:gap-8 2xl:gap-12">
          {plans.map((plan, index) => (
            <PlanCard
              onSelect={() => handleSelectPlan(plan.speed)}
              key={index}
              {...plan}
            />
          ))}
        </div>
      </div>
      {selectedPlan && (
        <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
          <PreRegistrationForm
            onClose={handleCloseModal}
            selectedPlan={selectedPlan}
          />
        </Modal>
      )}
    </section>
  );
}
