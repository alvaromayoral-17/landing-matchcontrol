"use client";

import { useState } from "react";
import { GetStartedButton } from "@/components/ui/get-started-button";

interface ContactFormProps {
  onSuccess: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [form, setForm] = useState({
    club: "",
    name: "",
    role: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Error al enviar");
      onSuccess();
    } catch {
      setError("No se pudo enviar el formulario. Inténtalo de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-lg border border-[#1F2937] bg-[#0D1117] px-4 py-3 text-sm text-[#F9FAFB] placeholder-[#9CA3AF] focus:outline-none focus:border-[#2563EB] transition-colors";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
            Nombre del club *
          </label>
          <input
            name="club"
            required
            value={form.club}
            onChange={handleChange}
            placeholder="CD Ejemplo FC"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
            Tu nombre *
          </label>
          <input
            name="name"
            required
            value={form.name}
            onChange={handleChange}
            placeholder="Juan García"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
            Cargo
          </label>
          <input
            name="role"
            value={form.role}
            onChange={handleChange}
            placeholder="Director Deportivo"
            className={inputClass}
          />
        </div>
        <div>
          <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
            Teléfono
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+34 600 000 000"
            className={inputClass}
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
          Email *
        </label>
        <input
          name="email"
          type="email"
          required
          value={form.email}
          onChange={handleChange}
          placeholder="juan@clubejemplo.es"
          className={inputClass}
        />
      </div>
      <div>
        <label className="block mb-1 text-xs text-[#9CA3AF] font-medium uppercase tracking-wide">
          Mensaje (opcional)
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={3}
          placeholder="Cuéntanos brevemente qué necesitáis..."
          className={`${inputClass} resize-none`}
        />
      </div>
      {error && (
        <p className="text-sm text-red-400">{error}</p>
      )}
      <GetStartedButton
        text={loading ? "Enviando..." : "Solicitar demo gratuita"}
        className="w-full"
        size="lg"
      />
    </form>
  );
}
