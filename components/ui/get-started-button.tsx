"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface GetStartedButtonProps {
  text?: string;
  onClick?: () => void;
  className?: string;
  size?: "default" | "sm" | "lg" | "xs";
}

export function GetStartedButton({
  text = "Reservar demo gratuita",
  onClick,
  className,
  size = "lg",
}: GetStartedButtonProps) {
  return (
    <Button
      className={`group relative overflow-hidden btn-glow cursor-pointer ${className ?? ""}`}
      size={size}
      onClick={onClick}
    >
      <span className="mr-8 transition-opacity duration-500 group-hover:opacity-0">
        {text}
      </span>
      <i className="absolute right-1 top-1 bottom-1 rounded-sm z-10 grid w-1/4 place-items-center transition-all duration-500 bg-primary-foreground/15 group-hover:w-[calc(100%-0.5rem)] group-active:scale-95">
        <ChevronRight size={16} strokeWidth={2} aria-hidden="true" />
      </i>
    </Button>
  );
}
