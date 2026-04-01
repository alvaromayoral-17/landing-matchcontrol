"use client";

import { useState } from "react";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { Solution } from "@/components/sections/Solution";
import { Benefits } from "@/components/sections/Benefits";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { BookingModal } from "@/components/booking/BookingModal";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar openModal={openModal} />
      <main>
        <Hero openModal={openModal} />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing openModal={openModal} />
        <FinalCTA openModal={openModal} />
      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}
