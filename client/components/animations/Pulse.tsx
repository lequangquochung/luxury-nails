import { ReactNode } from "react";

interface PulseProps {
  children: ReactNode;
  className?: string;
}

export function Pulse({ children, className = "" }: PulseProps) {
  return (
    <div className={`${className}`}>
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }
        .pulse-animation {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
      `}</style>
      <div className="pulse-animation">{children}</div>
    </div>
  );
}
