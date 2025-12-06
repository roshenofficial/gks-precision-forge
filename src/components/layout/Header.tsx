import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/gks-logo.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Capabilities", href: "/capabilities" },
  { name: "Clients", href: "/clients" },
  { name: "Quality", href: "/quality" },
  { name: "About", href: "/about" },
  { name: "Awards", href: "/awards" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="container-wide section-padding !py-0" aria-label="Global">
        <div className="flex items-center justify-between h-20">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3">
              <img className="h-12 w-auto" src={logo} alt="GKS Logo" />
              <div className="hidden sm:block">
                <span className="font-display font-bold text-xl text-foreground">Geekay's</span>
                <span className="block text-xs text-muted-foreground font-medium -mt-1">Engineering Works</span>
              </div>
            </Link>
          </div>
          
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-semibold leading-6 transition-colors duration-200 ${
                  location.pathname === item.href
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919876543210" className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
            </Button>
            <Button size="sm" asChild>
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>
        </div>
      </nav>
      
      {/* Mobile menu */}
      <div className={`lg:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="fixed inset-0 z-50" onClick={() => setMobileMenuOpen(false)} />
        <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-background px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-border">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
              <img className="h-10 w-auto" src={logo} alt="GKS Logo" />
              <span className="font-display font-bold text-lg text-foreground">Geekay's</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-border">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 transition-colors ${
                      location.pathname === item.href
                        ? "text-primary bg-secondary"
                        : "text-foreground hover:bg-secondary"
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6 space-y-3">
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+919876543210" className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    +91 98765 43210
                  </a>
                </Button>
                <Button className="w-full" asChild>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Get a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
