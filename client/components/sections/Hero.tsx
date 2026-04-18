import { motion } from "framer-motion";

function scrollToServices() {
  const el = document.getElementById("services");
  if (el) {
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - 70; // Offset for sticky header
    window.scrollTo({
      top: targetY,
      behavior: "smooth",
    });
  }
}

export function Hero() {
  return (
    <section className="relative flex min-h-[calc(100svh-56px)] items-center justify-center overflow-hidden px-4 py-12 sm:min-h-[calc(100svh-64px)] sm:px-6 sm:py-16 lg:px-8" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&h=900&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="mx-auto w-full max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold leading-[1.05] text-white drop-shadow-lg sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block font-logo-slaye sm:inline">SLAYE </span>
            <span className="mt-2 block font-logo-nailbar text-3xl tracking-[0.22em] sm:mt-0 sm:inline sm:text-inherit sm:tracking-normal">NAIL BAR</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mb-8 max-w-2xl text-base font-light text-white/90 drop-shadow-md sm:text-lg md:text-2xl"
        >
          Premium artistry meets exceptional care. Discover the art of elegant nail design
          and indulge in a sanctuary of relaxation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
        >
          <a
            href="https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3"
            target="_blank"
            rel="noreferrer"
            style={{ textDecoration: 'none' }}
            className="w-full rounded-lg bg-gold-dark px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:shadow-lg active:scale-95 sm:w-auto sm:min-w-[240px]"
          >
            Book Your Appointment
          </a>
          <button
            className="w-full rounded-lg border-2 border-gold-dark bg-background px-6 py-4 text-base font-semibold text-gold-dark transition-all duration-300 hover:-translate-y-0.5 hover:text-gold hover:shadow-lg active:scale-95 sm:w-auto sm:min-w-[240px]"
            onClick={scrollToServices}
          >
            View Signature Services
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center"
          >
            <span className="text-sm text-white/70 mb-2">Scroll to explore</span>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
