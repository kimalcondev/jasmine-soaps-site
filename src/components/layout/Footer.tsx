import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-teal-dark text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-jasmine-gold flex items-center justify-center">
                <span className="text-foreground font-display font-bold text-lg">J</span>
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold">Jasmine Soaps</h3>
                <p className="text-xs text-primary-foreground/70">& Detergents Limited</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Leading manufacturer of premium quality soaps and detergents for household and industrial use.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {["Home", "Our Services", "About Us", "Contact Us"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase().replace(" ", "-").replace("our-", "").replace("-us", "")}`}
                    className="text-sm text-primary-foreground/80 hover:text-jasmine-gold transition-colors"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-3">
              {["Laundry Detergents", "Industrial Cleaners", "Hand Soaps", "Dishwashing Liquids"].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/80">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-jasmine-gold mt-0.5 flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">
                  Industrial Area, Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-jasmine-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">+254 700 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-jasmine-gold flex-shrink-0" />
                <span className="text-sm text-primary-foreground/80">info@jasminesoaps.co.ke</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} Jasmine Soaps & Detergents Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
