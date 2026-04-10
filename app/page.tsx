"use client";

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

const CALENDAR_URL = "https://calendar.app.google/vmoyf7sfxRtQwA55A";

export default function Home() {
  const openCalendar = () => window.open(CALENDAR_URL, "_blank");

  return (
    <>
      <Navbar openModal={openCalendar} />
      <main>
        <Hero openModal={openCalendar} />
        <Problem />
        <Solution />
        <Benefits />
        <HowItWorks />
        <Testimonials />
        <Pricing openModal={openCalendar} />
        <FinalCTA openModal={openCalendar} />
      </main>
      <Footer />
    </>
  );
}
