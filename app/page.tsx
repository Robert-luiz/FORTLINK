import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import PlansSection from "@/components/PlansSection";
import PrepaidSection from "@/components/PrepaidSection";
import GamerPlanSection from "@/components/GamerPlanSection";
import AboutSection from "@/components/AboutSection";
import WorkWithUsSection from "@/components/WorkWithUsSection";
import AppSection from "@/components/AppSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <PlansSection />
      <PrepaidSection />
      <GamerPlanSection />
      <AboutSection />
      <WorkWithUsSection />
      <AppSection />
      <Footer />
    </div>
  );
}
