import { FadeIn } from "../animations/FadeIn";
import { SlideUp } from "../animations/SlideUp";

export function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Regular Client",
      content:
        "SLAYE NAIL BAR has completely transformed how I experience nail care. The attention to detail and hygiene standards are unmatched. I've been a loyal client for three years!",
      rating: 5,
    },
    {
      name: "Jennifer Chen",
      role: "Bride",
      content:
        "The team did my bridal nails and my bridesmaids' nails. Everyone looked absolutely stunning. They made the whole experience so relaxing and special.",
      rating: 5,
    },
    {
      name: "Monica Rodriguez",
      role: "Business Professional",
      content:
        "I visit SLAYE NAIL BAR every two weeks for my gel manicures. The professionalism, clean environment, and artistic skill are why I keep coming back.",
      rating: 5,
    },
    {
      name: "Emily Watson",
      role: "Nail Art Enthusiast",
      content:
        "The custom nail art designs here are incredible. The artists listen to your vision and bring it to life with such precision. Truly a luxury experience!",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">
                Testimonials
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              What Our Clients Say
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Don't just take our word for it. Hear from our satisfied clients
              about their SLAYE NAIL BAR experience.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.1}>
              <div className="bg-background rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-accent fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-foreground/70 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author info */}
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-primary">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-foreground/50">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
