import { motion } from "framer-motion";

export function Hero() {
  return (
    <section className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden border border-yellow-100" style={{
      backgroundImage: `url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1600&h=900&fit=crop')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/50 -z-10" />

      <div className="max-w-7xl mx-auto w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
            Slayenail
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-white/90 mb-6 max-w-2xl mx-auto font-light drop-shadow-md"
        >
          Premium artistry meets exceptional care. Discover the art of elegant nail design
          and indulge in a sanctuary of relaxation.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <button className="bg-primary text-primary-foreground px-10 py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-lg font-semibold">
            Book Your Appointment
          </button>
          <button className="border-2 border-primary text-primary px-10 py-4 bg-background rounded-lg hover:text-white hover:bg-primary/5 transition-all duration-300 hover:shadow-lg hover:border-white hover:-translate-y-0.5 active:scale-95 text-lg font-semibold">
            View Our Services
          </button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
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
