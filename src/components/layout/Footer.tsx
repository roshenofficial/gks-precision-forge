import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/gks-logo.png";

const navigation = {
  main: [
    { name: "Home", href: "/" },
    { name: "Capabilities", href: "/capabilities" },
    { name: "Clients", href: "/clients" },
    { name: "Quality", href: "/quality" },
    { name: "About", href: "/about" },
    { name: "Awards", href: "/awards" },
    { name: "Contact", href: "/contact" },
  ],
  certifications: [
    "IATF16949:2016",
    "ISO 9001:2015",
  ],
};

export function Footer() {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3">
              <img className="h-12 w-auto" src={logo} alt="GKS Logo" />
              <div>
                <span className="font-display font-bold text-xl text-accent-foreground">Geekay's</span>
                <span className="block text-xs text-accent-foreground/70 font-medium -mt-1">Engineering Works</span>
              </div>
            </Link>
            <p className="mt-4 text-sm text-accent-foreground/80 leading-relaxed">
              Precision machining excellence since 1995. Trusted Tier-3 supplier delivering zero-defect components for world-class automotive manufacturers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-accent-foreground/80 hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-accent-foreground/80">
                  No. 9-A, Developed Plot, SIDCO Industrial Estate, Ambattur, Chennai – 600098, Tamil Nadu, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+919876543210" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <a href="mailto:info@geekayseng.com" className="text-sm text-accent-foreground/80 hover:text-primary transition-colors">
                  info@geekayseng.com
                </a>
              </li>
            </ul>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="font-display font-bold text-lg mb-4 text-primary">Certifications</h3>
            <ul className="space-y-2">
              {navigation.certifications.map((cert) => (
                <li key={cert} className="text-sm text-accent-foreground/80">
                  {cert}
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-sm text-accent-foreground/60">GST: 33AADFG6951H1ZG</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-accent-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-accent-foreground/60">
              © {new Date().getFullYear()} Geekay's Engineering Works. All rights reserved.
            </p>
            <p className="text-sm text-accent-foreground/60">
              Precision Engineering Since 1995
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
