"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SOLUTION } from "@/lib/constants";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Settings, Zap, Layout, BarChart2, Users, Search } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Personalización",
    date: "Módulo 1",
    content:
      "Software a medida de tu club. No una plantilla genérica. Cada módulo se configura según tus procesos, categorías y estructura interna.",
    category: "Configuración",
    icon: Settings,
    relatedIds: [2, 3],
    status: "completed" as const,
    energy: 100,
  },
  {
    id: 2,
    title: "Automatización",
    date: "Módulo 2",
    content:
      "Alertas automáticas, scraping de datos de BeSoccer, importación de estadísticas y reportes generados solos. Cero trabajo manual.",
    category: "Automatización",
    icon: Zap,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Todo en uno",
    date: "Módulo 3",
    content:
      "Plantilla, finanzas, rivales, ojeadores, patrocinadores y redes sociales. Todo conectado y visible desde un solo panel de control.",
    category: "Integración",
    icon: Layout,
    relatedIds: [1, 2, 4],
    status: "completed" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "Análisis rival",
    date: "Módulo 4",
    content:
      "Informes tácticos detallados con datos de BeSoccer. Estadísticas de temporada, patrones de juego y preparación de partidos automatizada.",
    category: "Análisis",
    icon: BarChart2,
    relatedIds: [3, 5],
    status: "in-progress" as const,
    energy: 70,
  },
  {
    id: 5,
    title: "Gestión plantilla",
    date: "Módulo 5",
    content:
      "Control total de contratos, rendimiento y lesiones. Seguimiento individual de cada jugador con métricas actualizadas en tiempo real.",
    category: "Plantilla",
    icon: Users,
    relatedIds: [4, 6],
    status: "in-progress" as const,
    energy: 60,
  },
  {
    id: 6,
    title: "Red ojeadores",
    date: "Módulo 6",
    content:
      "Sistema de scouting integrado con informes de ojeadores, seguimiento de candidatos y gestión completa del proceso de captación.",
    category: "Scouting",
    icon: Search,
    relatedIds: [5, 1],
    status: "pending" as const,
    energy: 40,
  },
];

export function Solution() {
  return (
    <section id="producto" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-4 text-center"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
          >
            {SOLUTION.title}
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mt-4 text-sm text-[#9CA3AF]"
          >
            Haz clic en cada módulo para explorar sus capacidades
          </motion.p>
        </motion.div>

        <RadialOrbitalTimeline timelineData={timelineData} />
      </div>
    </section>
  );
}
