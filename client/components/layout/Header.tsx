import { useState } from "react";
import { motion } from "framer-motion";

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string, closeMenu?: () => void) {
  const id = href.replace('#', '');
  const el = document.getElementById(id);
  if (el) {
    e.preventDefault();
    const rect = el.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const targetY = rect.top + scrollTop - 70; // Offset for sticky header
    window.scrollTo({
      top: targetY,
      behavior: 'smooth',
    });
    if (closeMenu) closeMenu();
  }
}

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white text-sm font-serif font-bold">LS</span>
          </div>
          <span className="text-xl font-serif font-semibold text-primary hidden sm:inline">
            Slayenail
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileTap={{ scale: 0.93, x: 8 }}
              className="text-foreground/70 hover:text-primary transition-all duration-300 text-sm font-medium hover:scale-110 origin-center"
              onClick={e => scrollToSection(e, item.href)}
            >
              {item.label}
            </motion.a>
          ))}
          <a
            href="tel:1234567890"
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:scale-95 text-sm font-medium flex items-center justify-center"
            style={{ textDecoration: 'none' }}
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col space-y-1.5 w-6 h-6"
          aria-label="Toggle menu"
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-primary block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-primary block"
          />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="block text-foreground/70 hover:text-primary transition-colors duration-200 font-medium"
                  onClick={e => scrollToSection(e, item.href, () => setIsOpen(false))}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="tel:1234567890"
                className="w-full bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all duration-200 font-medium flex items-center justify-center"
                style={{ textDecoration: 'none' }}
                onClick={() => setIsOpen(false)}
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}
