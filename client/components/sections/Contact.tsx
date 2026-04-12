import { SlideUp } from "../animations/SlideUp";
import { FadeIn } from "../animations/FadeIn";

export function Contact() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-background px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <SlideUp>
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-4">
              <span className="text-accent font-medium text-sm">Contact</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
              Get In Touch
            </h2>
            <p className="text-lg text-gold-light max-w-2xl mx-auto">
              Ready to experience luxury nail care? Book your appointment or visit us today.
            </p>
          </SlideUp>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <SlideUp>
            <div className="space-y-6">
              {/* Address */}
              <FadeIn>
                <div className="flex gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 transition-transform duration-300 hover:scale-110">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Location
                    </h3>
                    <p className="text-gold-light">
                      11702 Retail Dr, Wake Forest, NC 27587, United States
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Phone */}
              <FadeIn delay={0.1}>
                <div className="flex gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 transition-transform duration-300 hover:scale-110">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Phone
                    </h3>
                    <p className="text-gold-light">
                      <a href="tel:+19195562000" className="hover:text-[hsl(var(--primary-hover))] transition-colors">
                        +1 (919) 556-2000
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Email */}
              <FadeIn delay={0.2}>
                <div className="flex gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 transition-transform duration-300 hover:scale-110">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-1">
                      Email
                    </h3>
                    <p className="text-gold-light">
                      <a href="mailto:Slayenailbar@gmail.com" className="hover:text-[hsl(var(--primary-hover))] transition-colors">
                        Slayenailbar@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </FadeIn>

              {/* Hours */}
              <FadeIn delay={0.3}>
                <div className="flex gap-4 transition-all duration-300 hover:translate-x-2 cursor-pointer">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-accent/10 transition-transform duration-300 hover:scale-110">
                      <svg
                        className="h-6 w-6 text-primary"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">
                      Hours
                    </h3>
                    <div className="text-gold-light space-y-1 text-sm">
                      <p>Mon - Fri: 10:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 6:00 PM</p>
                      <p>Sunday: 12:00 PM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </SlideUp>

          {/* Google Maps Embed */}
          <SlideUp>
            <div className="rounded-xl overflow-hidden h-96 border border-border shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3229.2122696946617!2d-78.5440563!3d35.966235499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ac516df6b51175%3A0x183d8ff2b6b44886!2sNAIL%20KITCHEN%20-%20WAKE%20FOREST!5e0!3m2!1sen!2s!4v1775574405779!5m2!1sen!2s" width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full" />
            </div>
          </SlideUp>
        </div>
      </div>
    </section>
  );
}
