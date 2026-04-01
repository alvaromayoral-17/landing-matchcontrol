"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import { ContactForm } from "./ContactForm";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [submitted, setSubmitted] = useState(false);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  const handleSuccess = () => setSubmitted(true);

  const handleClose = () => {
    onClose();
    // Reset submitted state after animation
    setTimeout(() => setSubmitted(false), 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative z-10 w-full max-w-lg rounded-2xl border border-[#1F2937] bg-[#0D1117] p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 rounded-lg p-1.5 text-[#9CA3AF] transition-colors hover:bg-[#1F2937] hover:text-white"
            >
              <X size={18} />
            </button>

            {submitted ? (
              /* Success state */
              <div className="py-8 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-500/10">
                  <CheckCircle className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  ¡Solicitud enviada!
                </h3>
                <p className="text-[#9CA3AF]">
                  Nos pondremos en contacto contigo en menos de 24 horas para
                  confirmar la sesión.
                </p>
                <button
                  onClick={handleClose}
                  className="mt-6 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            ) : (
              /* Form state */
              <>
                <div className="mb-6">
                  <h2 className="text-xl font-bold text-white">
                    Reserva tu demo gratuita
                  </h2>
                  <p className="mt-1 text-sm text-[#9CA3AF]">
                    45 minutos · Sin compromiso · Sin instalación previa
                  </p>
                </div>
                <ContactForm onSuccess={handleSuccess} />
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
