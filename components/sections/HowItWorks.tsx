"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HOW_IT_WORKS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {HOW_IT_WORKS.title}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative grid gap-8 md:grid-cols-3"
        >
          {/* Connector line */}
          <div className="absolute top-10 left-1/6 right-1/6 hidden h-px bg-gradient-to-r from-transparent via-[#1F2937] to-transparent md:block" />

          {HOW_IT_WORKS.steps.map((step) => (
            <motion.div
              key={step.number}
              variants={fadeInUp}
              className="relative flex flex-col items-center text-center"
            >
              {/* Step number */}
              <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-blue-500/30 bg-blue-500/10">
                <span className="text-xl font-extrabold text-[#2563EB]">
                  {step.number}
                </span>
              </div>

              <h3 className="mb-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="text-sm leading-relaxed text-[#9CA3AF]">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
