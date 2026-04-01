"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { GetStartedButton } from "@/components/ui/get-started-button";
import { NAV_LINKS } from "@/lib/constants";
import { LogoSVG } from "@/components/LogoSVG";

interface NavbarProps {
  openModal: () => void;
}

export function Navbar({ openModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-[#1F2937] bg-[#080B14]/90 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <LogoSVG className="h-8 w-auto" />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-[#9CA3AF] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <GetStartedButton text="Reservar demo" size="default" onClick={openModal} />
        </div>

        {/* Mobile hamburger */}
        <Sheet>
          <SheetTrigger className="flex items-center justify-center rounded-lg p-2 text-[#9CA3AF] hover:text-white md:hidden">
            <Menu size={20} />
          </SheetTrigger>
          <SheetContent side="right" className="border-[#1F2937] bg-[#0D1117] w-72">
            <div className="mt-8 flex flex-col gap-6">
              <LogoSVG className="h-7 w-auto" />
              <nav className="flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base text-[#9CA3AF] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <GetStartedButton text="Reservar demo" onClick={openModal} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </motion.header>
  );
}
