"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Jugadores activos", value: "26", change: "+2" },
  { label: "Presupuesto usado", value: "68%", change: "-3%" },
  { label: "Partidos este mes", value: "4", change: "+1" },
];

const players = [
  { name: "Álex Moreno", pos: "DC", status: "Disponible", rating: 8.2 },
  { name: "Carlos Ruiz", pos: "MC", status: "Lesionado", rating: 7.8 },
  { name: "David Torres", pos: "EX", status: "Disponible", rating: 7.5 },
  { name: "Jorge Vidal", pos: "PO", status: "Sancionado", rating: 8.5 },
];

const statusColor: Record<string, string> = {
  Disponible: "text-green-400 bg-green-400/10",
  Lesionado: "text-red-400 bg-red-400/10",
  Sancionado: "text-yellow-400 bg-yellow-400/10",
};

export function DashboardMock() {
  return (
    <div className="relative rounded-2xl border border-[#1F2937] bg-[#0D1117] p-4 shadow-2xl overflow-hidden">
      {/* Glow effect */}
      <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Header */}
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs text-[#9CA3AF]">Dashboard</p>
          <h3 className="text-sm font-semibold text-white">CD Ejemplo FC</h3>
        </div>
        <div className="flex gap-1">
          <div className="h-2.5 w-2.5 rounded-full bg-red-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-500/70" />
        </div>
      </div>

      {/* Stats row */}
      <div className="mb-4 grid grid-cols-3 gap-2">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="rounded-xl border border-[#1F2937] bg-[#111827] p-3"
          >
            <p className="text-[10px] text-[#9CA3AF]">{stat.label}</p>
            <p className="mt-1 text-lg font-bold text-white">{stat.value}</p>
            <p className="text-[10px] text-green-400">{stat.change}</p>
          </motion.div>
        ))}
      </div>

      {/* Mini bar chart */}
      <div className="mb-4 rounded-xl border border-[#1F2937] bg-[#111827] p-3">
        <p className="mb-3 text-xs font-medium text-[#9CA3AF]">Rendimiento mensual</p>
        <div className="flex items-end gap-1.5 h-16">
          {[65, 80, 55, 90, 70, 85, 60, 95, 75, 88, 72, 92].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              animate={{ height: `${h}%` }}
              transition={{ delay: 0.5 + i * 0.04, duration: 0.4 }}
              className="flex-1 rounded-sm bg-[#2563EB]/70"
              style={{ minHeight: 4 }}
            />
          ))}
        </div>
      </div>

      {/* Players table */}
      <div className="rounded-xl border border-[#1F2937] bg-[#111827] p-3">
        <p className="mb-2 text-xs font-medium text-[#9CA3AF]">Plantilla — estado</p>
        <div className="space-y-2">
          {players.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + i * 0.08 }}
              className="flex items-center justify-between"
            >
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#1F2937] text-[10px] font-bold text-white">
                  {p.pos}
                </div>
                <span className="text-xs text-white">{p.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <span
                  className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${statusColor[p.status]}`}
                >
                  {p.status}
                </span>
                <span className="text-xs font-semibold text-[#2563EB]">{p.rating}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
