import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
}: FadeInProps) {
  const style = {
    animation: `fadeIn ${duration}s ease-in-out ${delay}s both`,
  };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
