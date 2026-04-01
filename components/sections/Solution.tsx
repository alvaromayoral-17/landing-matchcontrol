"use client";

import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight, staggerContainer } from "@/lib/animations";
import { SOLUTION } from "@/lib/constants";

export function Solution() {
  return (
    <section id="producto" className="py-24">
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
            {SOLUTION.title}
          </motion.h2>
        </motion.div>

        <div className="flex flex-col gap-16">
          {SOLUTION.features.map((feature, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={feature.title}
                className={`flex flex-col items-center gap-10 md:flex-row ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Visual placeholder */}
                <motion.div
                  variants={isEven ? slideInLeft : slideInRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex-1"
                >
                  <div className="glass-card flex h-64 items-center justify-center rounded-2xl">
                    <div className="text-center">
                      <div className="mb-3 text-5xl">{feature.icon}</div>
                      <p className="text-sm text-[#9CA3AF]">Vista previa del módulo</p>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={isEven ? slideInRight : slideInLeft}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex-1"
                >
                  <span className="mb-3 inline-block rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400">
                    {feature.badge}
                  </span>
                  <h3 className="mb-3 text-2xl font-bold text-white">{feature.title}</h3>
                  <p className="text-base leading-relaxed text-[#9CA3AF]">
                    {feature.description}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
