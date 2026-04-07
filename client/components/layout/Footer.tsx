export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground mt-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary text-lg font-serif font-bold">LS</span>
              </div>
              <span className="text-xl font-serif font-semibold">Luxe Nails</span>
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
                <a href="#about" className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:opacity-100 transition-all duration-300 hover:translate-x-1 inline-block">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-semibold mb-4">Hours</h4>
            <ul className="space-y-2 text-sm opacity-90">
              <li>Mon - Fri: 10am - 7pm</li>
              <li>Saturday: 10am - 6pm</li>
              <li>Sunday: 12pm - 5pm</li>
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
                <a href="mailto:hello@luxenails.com" className="hover:opacity-100 transition-opacity">
                  hello@luxenails.com
                </a>
              </li>
              <li>123 Main St, New York, NY</li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm opacity-90">
            <p>&copy; {currentYear} Luxe Nails. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block">
                Instagram
              </a>
              <a href="#" className="hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block">
                Facebook
              </a>
              <a href="#" className="hover:opacity-100 transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 inline-block">
                TikTok
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
