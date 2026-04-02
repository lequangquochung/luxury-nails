import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";

export function Services() {
  const services = [
    {
      name: "Manicures",
      description: "Classic to gel, including signature treatments",
      features: ["French Polish", "Ombre Nails", "Gel Polish", "Spa Treatment"],
    },
    {
      name: "Pedicures",
      description: "Luxurious foot care and nail treatments",
      features: ["Spa Pedicure", "Gel Pedicure", "Foot Massage", "Custom Design"],
    },
    {
      name: "Nail Art",
      description: "Custom designs and artistic creations",
      features: ["Hand-Painted Design", "3D Art", "Stamping", "Special Effects"],
    },
    {
      name: "Extensions",
      description: "Long-lasting and natural-looking nails",
      features: ["Acrylic", "Gel Extensions", "Dip Powder", "Maintenance"],
    },
  ];

  return (
    <section id="services" className="py-12 md:py-20 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Our Premium Services
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              From classic elegance to artistic masterpieces, we offer comprehensive nail
              care solutions tailored to your desires.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1}>
              <div className="bg-background rounded-xl p-8 hover:shadow-xl transition-all duration-300 border border-border">
                <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                  {service.name}
                </h3>
                <p className="text-foreground/60 mb-6 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3">
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
      </div>
    </section>
  );
}
