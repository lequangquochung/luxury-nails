import { ReactNode } from "react";

interface ImageZoomProps {
  children: ReactNode;
  className?: string;
}

export function ImageZoom({ children, className = "" }: ImageZoomProps) {
  return (
    <div className={`overflow-hidden ${className} group cursor-pointer`}>
      <div className="transform transition-transform duration-400 group-hover:scale-105">
        {children}
      </div>
    </div>
  );
}
