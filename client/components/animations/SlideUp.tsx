import { ReactNode } from "react";

interface SlideUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function SlideUp({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
}: SlideUpProps) {
  const style = {
    animation: `slideUp ${duration}s ease-out ${delay}s both`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
