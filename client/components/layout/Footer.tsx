import { motion } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const navigateToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    if (location.pathname === "/") {
      scrollToSectionFooter(e, href);
      return;
    }

    e.preventDefault();
    navigate(`/${href}`);
  };

  const navigateToRoute = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
  ) => {
    e.preventDefault();
    navigate(href);
  };

  return (
    <footer className="bg-muted text-gold-dark mt-0 border-t border-gold">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
        <div className="mb-8 grid grid-cols-1 gap-8 text-center sm:text-left md:grid-cols-2 xl:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="mb-4 flex items-center justify-center space-x-2 sm:justify-start">
              <span className="text-2xl font-logo-slaye text-gold-dark drop-shadow">SLAYE</span>
              <span className="text-base font-logo-nailbar tracking-[0.28em] text-gold-dark drop-shadow">NAIL BAR</span>
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
                  href="/our-services"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToRoute(e, '/our-services')}
                >
                  Full Menu
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="/policies"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToRoute(e, '/policies')}
                >
                  Policies
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#about"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToSection(e, '#about')}
                >
                  About
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#services"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToSection(e, '#services')}
                >
                  Signature Services
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#gallery"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToSection(e, '#gallery')}
                >
                  Gallery
                </motion.a>
              </li>
              <li>
                <motion.a
                  href="#contact"
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block"
                  onClick={e => navigateToSection(e, '#contact')}
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
                <a href="tel:+19195562000" className="hover:opacity-100 transition-opacity">
                  (919) 556 2000
                </a>
              </li>
              <li>
                <a href="mailto:slayenailbar@gmail.com" className="hover:opacity-100 transition-opacity">
                  slayenailbar@gmail.com
                </a>
              </li>
              <li>11702 Retail Dr, Wake Forest, NC 27587, United States</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm opacity-90 lg:flex-row lg:text-left">
            <p>&copy; {currentYear} SLAYE NAIL BAR. All rights reserved.</p>
            <div className="mt-0 flex flex-wrap justify-center gap-6 lg:justify-end">
              <a href="https://www.instagram.com/slayenailbar" target="_blank" rel="noreferrer" className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:opacity-100">
                Instagram
              </a>
              <a href="https://www.facebook.com/Slayenailbar" target="_blank" rel="noreferrer" className="inline-block transition-all duration-300 hover:-translate-y-0.5 hover:scale-110 hover:opacity-100">
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
