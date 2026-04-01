import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ImageZoomProps {
  children: ReactNode;
  className?: string;
}

export function ImageZoom({ children, className = "" }: ImageZoomProps) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className={`overflow-hidden ${className}`}
    >
      {children}
    </motion.div>
  );
}
