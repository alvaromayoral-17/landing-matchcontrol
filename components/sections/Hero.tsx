"use client";

import { motion } from "framer-motion";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HERO } from "@/lib/constants";
import { DashboardMock } from "@/components/sections/DashboardMock";

interface HeroProps {
  openModal: () => void;
}

export function Hero({ openModal }: HeroProps) {
  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16">
      {/* Background grid + radial glow */}
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(37,99,235,0.15),transparent)]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row lg:gap-12">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex-1 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div variants={fadeInUp} className="mb-6 inline-flex">
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-400">
                +20 clubes en lista de espera
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Digitaliza la gestión de{" "}
              <span className="gradient-text">tu club de fútbol</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={fadeInUp}
              className="mt-6 max-w-xl text-lg leading-relaxed text-[#9CA3AF] lg:max-w-none"
            >
              {HERO.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start"
            >
              <GetStartedButton
                text={HERO.ctaPrimary}
                onClick={openModal}
                size="lg"
              />
              <a
                href="#como-funciona"
                className="flex items-center gap-2 text-sm font-medium text-[#9CA3AF] transition-colors hover:text-white"
              >
                {HERO.ctaSecondary}
              </a>
            </motion.div>

            {/* Social proof */}
            <motion.p
              variants={fadeInUp}
              className="mt-8 text-xs text-[#9CA3AF]"
            >
              {HERO.socialProof}
            </motion.p>
          </motion.div>

          {/* Right — Dashboard mock */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 w-full"
          >
            <DashboardMock />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
