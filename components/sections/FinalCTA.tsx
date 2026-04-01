"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { FINAL_CTA } from "@/lib/constants";
import { GetStartedButton } from "@/components/ui/get-started-button";

interface FinalCTAProps {
  openModal: () => void;
}

export function FinalCTA({ openModal }: FinalCTAProps) {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#2563EB] via-[#4f46e5] to-[#7c3aed] p-12 text-center"
        >
          {/* Decorative orbs */}
          <div className="absolute -top-16 -left-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />
          <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full bg-white/5 blur-2xl" />

          <motion.h2
            variants={fadeInUp}
            className="relative text-3xl font-extrabold text-white sm:text-4xl"
          >
            {FINAL_CTA.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="relative mt-4 text-lg text-blue-100"
          >
            {FINAL_CTA.subtitle}
          </motion.p>

          <motion.div variants={fadeInUp} className="relative mt-8">
            <GetStartedButton
              text={FINAL_CTA.cta}
              onClick={openModal}
              className="bg-white text-[#2563EB] hover:bg-white/90"
            />
          </motion.div>

          <motion.p
            variants={fadeInUp}
            className="relative mt-6 text-sm text-blue-200"
          >
            {FINAL_CTA.subtext}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
