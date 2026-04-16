import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";
import { Link } from "react-router-dom";

export function Services() {
  const services = [
    {
      name: "Luxury Slaye Pedicure",
      category: "Pedicure Packages",
      price: "Regular $90 | Gel $110",
      description: "Our most complete pedicure ritual with restorative care, massage, and finishing treatments.",
      features: ["6-step package", "Callus treatment", "Collagen or paraffin", "20 min massage"],
    },
    {
      name: "Signature Manicure",
      category: "Manicure Packages",
      price: "Regular $47 | Gel $60",
      description: "A polished manicure option with exfoliation, moisture, and a refined finish.",
      features: ["Sugar scrub", "Hot towel", "Paraffin or collagen gloves", "5 min massage"],
    },
    {
      name: "Dipping Powder",
      category: "Nail Enhancement",
      price: "From $55+",
      description: "A durable enhancement option for natural nails, tip sets, and redo appointments.",
      features: ["Natural nails $55+", "With tip $60+", "Removal and redo $60+", "Longwear finish"],
    },
    {
      name: "Add-Ons & Extras",
      category: "Finishing Options",
      price: "From $5+",
      description: "Customize your set with shape, chrome, french details, callus treatment, and more.",
      features: ["Special shape $5+", "French $10+", "Chrome $15+", "Extra massage $15+"],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Signature Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Signature picks from the full menu
            </h2>
            <p className="text-lg text-gold-light max-w-2xl mx-auto">
              A quick look at the real menu, with signature packages, enhancements,
              and finishing options before you open the full service page.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1} className="h-full">
              <div className="h-full bg-background rounded-xl p-8 border border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col">
                <div className="inline-flex rounded-full border border-primary/20 px-3 py-1 text-[11px] uppercase tracking-[0.24em] text-primary/80">
                  {service.category}
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                  {service.name}
                </h3>
                <div className="mb-4 text-sm font-semibold text-primary">{service.price}</div>
                <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="mt-auto space-y-3 pt-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground/70">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 text-center">
          <SlideUp>
            <Link
              to="/our-services"
              className="inline-flex items-center justify-center rounded-md border border-primary/30 bg-background px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/10"
            >
              View Full Service Menu
            </Link>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
