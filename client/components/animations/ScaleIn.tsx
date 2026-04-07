import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.6,
  className = "",
}: ScaleInProps) {
  const style = {
    animation: `scaleIn ${duration}s ease-out ${delay}s both`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
