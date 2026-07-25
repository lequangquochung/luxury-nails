import { motion } from "framer-motion";

const registerUrl =
  "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/coupon-receive-v2";

export default function BookAppointment() {
  return (
    <div className=" flex items-center justify-center bg-background text-foreground">
      <section className="mx-auto w-full max-w-7xl px-6 py-16 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 text-4xl font-bold text-foreground sm:text-5xl font-logo-slaye"
        >
          Register & Receive Special Offers
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mx-auto mb-8 max-w-2xl text-base text-foreground/70"
        >
          Sign up to receive exclusive coupons and updates about our signature services. It
          only takes a moment — click the button below to open the registration page.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
        >
          <a
            href={registerUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-lg bg-gold-dark px-6 py-4 text-base font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:shadow-lg active:scale-95"
            style={{ textDecoration: "none" }}
          >
            Go to Registration
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div className="rounded-lg border border-border/60 bg-card/60 p-4 text-left">
            <img src="/imgs/slaye.jpg" alt="Luxury Slaye preview" className="mb-3 h-40 w-full rounded-md object-cover" />
            <h3 className="mb-2 text-lg font-semibold">Signature Experience</h3>
            <p className="text-sm text-foreground/70">Full restorative pedicure and manicure rituals, designed for relaxation and long-lasting wear.</p>
          </div>

          <div className="rounded-lg border border-border/60 bg-card/60 p-4 text-left">
            <img src="/imgs/deluxe.jpg" alt="Deluxe preview" className="mb-3 h-40 w-full rounded-md object-cover" />
            <h3 className="mb-2 text-lg font-semibold">Premium Ingredients</h3>
            <p className="text-sm text-foreground/70">We use high-quality scrubs, oils and paraffin treatments for nourishing care and a polished finish.</p>
          </div>

          <div className="rounded-lg border border-border/60 bg-card/60 p-4 text-left">
            <img src="/imgs/organic.jpg" alt="Organic preview" className="mb-3 h-40 w-full rounded-md object-cover" />
            <h3 className="mb-2 text-lg font-semibold">Customizable Services</h3>
            <p className="text-sm text-foreground/70">Choose from gel, regular, and enhancement options to match your style and durability needs.</p>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
