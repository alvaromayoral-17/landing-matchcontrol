"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { PRICING, PRICING_ADDONS, PRICING_SAVINGS } from "@/lib/constants";
import { GetStartedButton } from "@/components/ui/get-started-button";

interface PricingProps {
  openModal: () => void;
}

export function Pricing({ openModal }: PricingProps) {
  return (
    <section id="precios" className="py-24">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-12 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {PRICING.title}
          </motion.h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-8 md:grid-cols-3"
        >
          {PRICING.plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-2 border-[#2563EB] bg-blue-500/5"
                  : "glass-card"
              }`}
            >
              {/* Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-[#2563EB] px-4 py-1 text-xs font-bold text-white tracking-wide">
                    {plan.badge}
                  </span>
                </div>
              )}

              <h3 className="text-xl font-bold text-white">{plan.name}</h3>

              {/* Pricing */}
              <div className="mt-4 mb-6">
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-white">
                    {plan.implementation}
                  </span>
                  <span className="text-sm text-[#9CA3AF]">implementación</span>
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="text-xl font-bold text-[#2563EB]">
                    {plan.monthly}
                  </span>
                </div>
              </div>

              {/* Features */}
              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-0.5 shrink-0 text-[#2563EB]"
                    />
                    <span className="text-sm text-[#9CA3AF]">{feature}</span>
                  </li>
                ))}
              </ul>

              <GetStartedButton
                text={plan.cta}
                onClick={openModal}
                className="w-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Add-ons Section */}
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold text-white text-center mb-10"
          >
            Complementa tu plan
          </motion.h3>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-8 md:grid-cols-3"
          >
            {PRICING_ADDONS.map((addon) => (
              <motion.div
                key={addon.name}
                variants={fadeInUp}
                className="glass-card rounded-2xl p-8"
              >
                <h4 className="text-lg font-bold text-white mb-2">
                  {addon.name}
                </h4>
                <p className="text-xl font-extrabold text-[#2563EB] mb-6">
                  {addon.price}
                </p>

                <ul className="space-y-2">
                  {addon.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check
                        size={14}
                        className="mt-1 shrink-0 text-[#2563EB]"
                      />
                      <span className="text-xs text-[#9CA3AF]">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Savings Message */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-[#9CA3AF] mb-4">
            {PRICING_SAVINGS.message}
          </p>
          <p className="text-xs text-[#6B7280]">
            Sin permanencia · Soporte incluido · Puedes cancelar cuando quieras
          </p>
        </motion.div>
      </div>
    </section>
  );
}
