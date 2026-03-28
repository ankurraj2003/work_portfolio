"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"a"> {
  variant?: "filled" | "glass";
  children: React.ReactNode;
  className?: string;
  href?: string;
}

export default function Button({
  variant = "glass",
  children,
  className,
  href,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer";

  const variantClasses = {
    filled:
      "bg-black text-white hover:bg-neutral-800",
    glass:
      "glass-pill text-black/80 hover:bg-white/70 hover:text-black",
  };

  return (
    <motion.a
      href={href}
      className={cn(baseClasses, variantClasses[variant], className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      transition={{ duration: 0.2 }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
