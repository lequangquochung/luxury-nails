import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background text-gold-dark mt-0 border-t border-gold bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-serif font-semibold dark drop-shadow">SLAYE NAIL BAR</span>
            </div>
            <p className="text-sm opacity-90">
              Premium nail care and artistry for the discerning client.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <motion.a
                  href="#about"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => scrollToSectionFooter(e, '#about')}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => scrollToSectionFooter(e, '#services')}
                >
                  Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#gallery"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => scrollToSectionFooter(e, '#gallery')}
                >
                  Gallery
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => scrollToSectionFooter(e, '#contact')}
                >
                  Contact
                </motion.a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Mon - Sat: 9:30 AM - 7:00 PM</li>
              <li>Sunday: 10:30 AM - 5:00 PM</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>
                <a href="tel:+15551234567" className="hover:opacity-100 transition-opacity">
                  (555) 123-4567
                </a>
              </li>
              <li>
                <a href="mailto:Slayenailbar@gmail.com" className="hover:opacity-100 transition-opacity">
                  Slayenailbar@gmail.com
                </a>
              </li>
              <li>11702 Retail Dr, Wake Forest, NC 27587, United States</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; {currentYear} SLAYE NAIL BAR. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="https://www.instagram.com/slayenailbar" target="blank" className="hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block">
                Instagram
              </a>
              <a href="https://www.facebook.com/Slayenailbar" target="blank" className="hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
function scrollToSectionFooter(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - 70;
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
  }
}
