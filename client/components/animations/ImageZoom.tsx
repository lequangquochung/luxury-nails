import { ReactNode } from "react";

interface ImageZoomProps {
  children: ReactNode;
  className?: string;
}

export function ImageZoom({ children, className = "" }: ImageZoomProps) {
  return (
    <div className={`group cursor-pointer overflow-hidden ${className}`}>
      {children}
    </div>
  );
}
