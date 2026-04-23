import { motion } from "framer-motion";
import { CalendarDays, Phone } from "lucide-react";

const bookingUrl = "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3";
const callUrl = "tel:+19195562000";

export function FloatingBookingButton() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay: 0.15 }}
      className="fixed bottom-4 right-4 z-[70] flex flex-col items-center gap-2 sm:bottom-5 sm:right-5 sm:gap-3"
    >
      <motion.a
        href={callUrl}
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.26),transparent_38%),linear-gradient(135deg,rgba(212,175,55,0.98),rgba(191,146,20,0.95))] text-primary-foreground shadow-[0_14px_34px_rgba(0,0,0,0.26)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(239,68,68,0.24)] sm:h-14 sm:w-14"
        aria-label="Call the salon"
        title="Call the salon"
        style={{ textDecoration: "none" }}
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-primary/35"
          animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-primary/25"
          animate={{ scale: [1, 1.75], opacity: [0.38, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
        />
        <motion.span
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.2 }}
          className="pointer-events-none absolute right-[calc(100%+0.6rem)] top-2 hidden h-9 -translate-y-1/2 items-center rounded-full border border-primary/20 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.28),transparent_42%),linear-gradient(135deg,rgba(212,175,55,0.96),rgba(191,146,20,0.94))] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] leading-none text-primary-foreground opacity-0 shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out group-hover:flex group-hover:opacity-100 group-focus-visible:flex group-focus-visible:opacity-100 sm:h-10 sm:px-5"
        >
          <span className="mr-2 block h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.18)]" />
          <span className="whitespace-nowrap">Call</span>
          <span className="absolute -right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r border-t border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.96),rgba(239,68,68,0.82))]" />
        </motion.span>
        <span className="sr-only">Call Now</span>
        <span className="absolute right-1 top-1 z-10 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.18)]" />
        <div className="relative z-10 flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(239,68,68,0.12))] backdrop-blur sm:h-10 sm:w-10">
          <Phone className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
        </div>
      </motion.a>

      <motion.a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        whileHover={{ y: -3, scale: 1.04 }}
        whileTap={{ scale: 0.98 }}
        className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-primary/25 bg-[radial-gradient(circle_at_30%_30%,rgba(239,68,68,0.26),transparent_38%),linear-gradient(135deg,rgba(212,175,55,0.98),rgba(191,146,20,0.95))] text-primary-foreground shadow-[0_14px_34px_rgba(0,0,0,0.26)] transition-shadow duration-300 hover:shadow-[0_20px_44px_rgba(239,68,68,0.24)] sm:h-14 sm:w-14"
        aria-label="Book an appointment"
        title="Book an appointment"
        style={{ textDecoration: "none" }}  
      >
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-primary/35"
          animate={{ scale: [1, 1.55], opacity: [0.45, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut" }}
        />
        <motion.span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-full border border-primary/25"
          animate={{ scale: [1, 1.75], opacity: [0.38, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 1.1 }}
        />
        <motion.span
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut", delay: 0.28 }}
          className="pointer-events-none absolute right-[calc(100%+0.6rem)] top-2 hidden h-9 -translate-y-1/2 items-center rounded-full border border-primary/20 bg-[radial-gradient(circle_at_top_left,rgba(239,68,68,0.28),transparent_42%),linear-gradient(135deg,rgba(212,175,55,0.96),rgba(191,146,20,0.94))] px-4 text-[11px] font-semibold uppercase tracking-[0.18em] leading-none text-primary-foreground opacity-0 shadow-[0_14px_32px_rgba(0,0,0,0.22)] transition-all duration-300 ease-out group-hover:flex group-hover:opacity-100 group-focus-visible:flex group-focus-visible:opacity-100 sm:h-10 sm:px-5"
        >
          <span className="mr-2 block h-2.5 w-2.5 shrink-0 rounded-full bg-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.18)]" />
          <span className="whitespace-nowrap">Booking</span>
          <span className="absolute -right-1.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 rotate-45 border-r border-t border-primary/20 bg-[linear-gradient(135deg,rgba(212,175,55,0.96),rgba(239,68,68,0.82))]" />
        </motion.span>
        <span className="sr-only">Book Now</span>
        <span className="absolute right-1 top-1 z-10 h-2 w-2 rounded-full bg-red-500 shadow-[0_0_0_3px_rgba(239,68,68,0.18)]" />
        <div className="relative z-10 flex h-[2.125rem] w-[2.125rem] items-center justify-center rounded-full border border-white/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.16),rgba(239,68,68,0.12))] backdrop-blur sm:h-10 sm:w-10">
          <CalendarDays className="h-[1.125rem] w-[1.125rem] sm:h-5 sm:w-5" />
        </div>
      </motion.a>
    </motion.div>
  );
}