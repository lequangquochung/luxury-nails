import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
  const location = useLocation();
  const navigate = useNavigate();
  const bookingUrl = "https://customer.fozito.com/store/242b63c6-3466-447a-8b00-0941827b8a9b/booking-v3";

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.hash]);

  const goToRoute = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    closeMenu?: () => void,
  ) => {
    e.preventDefault();
    navigate(href);
    if (closeMenu) {
      closeMenu();
    }
  };

  const navigateToSection = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    href: string,
    closeMenu?: () => void,
  ) => {
    if (location.pathname === "/") {
      scrollToSection(e, href, closeMenu);
      return;
    }

    e.preventDefault();
    navigate(`/${href}`);
    if (closeMenu) {
      closeMenu();
    }
  };

  const navItems = [
    { label: "About", href: "#about", type: "section" as const },
    { label: "Signature Services", href: "#services", type: "section" as const },
    { label: "Gallery", href: "#gallery", type: "section" as const },
    { label: "Contact", href: "#contact", type: "section" as const },
    { label: "Full Menu", href: "/our-services", type: "route" as const },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/90">
      <nav className="relative mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:h-16 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group relative z-20 flex min-w-0 items-center space-x-2">
          <img
            src="/imgs/logo-top-1.png"
            alt="SLAYE NAIL BAR Logo"
            className="h-9 w-9 object-contain drop-shadow-lg sm:h-10 sm:w-10"
            style={{ marginRight: 8 }}
          />
          <span className="hidden text-xl font-logo-slaye text-gold-dark drop-shadow sm:inline">
            SLAYE
          </span>
          <span className="ml-2 hidden text-lg font-logo-nailbar tracking-widest text-gold-dark sm:inline">
            NAIL BAR
          </span>
        </Link>

        <div className="pointer-events-none absolute inset-x-14 left-1/2 -translate-x-1/2 lg:hidden">
          <span className="block truncate text-center text-[10px] font-logo-nailbar tracking-[0.24em] text-gold-dark sm:text-xs sm:tracking-[0.28em]">
            SLAYE NAIL BAR
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-4 lg:flex xl:gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              whileTap={{ scale: 0.93, x: 8 }}
              className="origin-center text-xs font-medium text-gold-dark transition-all duration-300 hover:scale-105 hover:text-gold xl:text-sm"
              onClick={(e) => {
                if (item.type === "route") {
                  goToRoute(e, item.href);
                  return;
                }
                navigateToSection(e, item.href);
              }}
            >
              {item.label}
            </motion.a>
          ))}
          <a
            className="flex items-center justify-center rounded-md bg-gold-dark px-5 py-2 text-sm font-medium text-background transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold hover:shadow-lg active:scale-95"
            href={bookingUrl}
            style={{ textDecoration: 'none' }}
            target="_blank"
            rel="noreferrer"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-20 flex h-6 w-6 shrink-0 flex-col space-y-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <motion.span
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gold-dark block"
          />
          <motion.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            className="w-6 h-0.5 bg-gold-dark block"
          />
          <motion.span
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            className="w-6 h-0.5 bg-gold-dark block"
          />
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 right-0 top-full border-b border-border bg-background shadow-xl lg:hidden"
          >
            <div className="mx-auto max-w-7xl space-y-4 px-4 py-4 sm:px-6">
              {navItems.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  whileTap={{ scale: 0.93, x: 8 }}
                  className="block rounded-lg border border-border/60 px-4 py-3 text-base font-medium text-foreground transition-colors duration-200 hover:bg-muted hover:text-gold"
                  onClick={(e) => {
                    if (item.type === "route") {
                      goToRoute(e, item.href, () => setIsOpen(false));
                      return;
                    }
                    navigateToSection(e, item.href, () => setIsOpen(false));
                  }}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href={bookingUrl}
                className="flex w-full items-center justify-center rounded-lg bg-gold-dark px-6 py-3 font-medium text-background shadow-lg transition-all duration-200 hover:bg-gold"
                style={{ textDecoration: 'none' }}
                target="_blank"
                rel="noreferrer"
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
