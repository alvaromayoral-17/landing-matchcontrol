"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PROBLEM } from "@/lib/constants";

export function Problem() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {PROBLEM.title}
          </motion.h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {PROBLEM.cards.map((card) => (
            <motion.div
              key={card.title}
              variants={fadeInUp}
              whileHover={{ scale: 1.02, borderColor: "rgba(37,99,235,0.4)" }}
              className="glass-card rounded-2xl p-6 transition-all duration-300"
            >
              <div className="mb-4 text-3xl">{card.icon}</div>
              <h3 className="mb-2 text-lg font-semibold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-[#9CA3AF]">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 rounded-2xl border border-blue-500/20 bg-blue-500/5 p-8 text-center"
        >
          <p className="text-lg font-medium text-[#9CA3AF] md:text-xl">
            <span className="text-white">&ldquo;</span>
            {PROBLEM.stat}
            <span className="text-white">&rdquo;</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
