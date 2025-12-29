import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Franchise", href: "/franchise" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative z-50">
          <img 
            src="/lecorn-logo.png" 
            alt="LeCorn Logo" 
            className="h-12 md:h-16 w-auto group-hover:brightness-110 transition-all duration-300"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "font-bold text-lg hover:text-accent transition-colors relative",
                location === link.href ? "text-accent" : "text-foreground"
              )}
            >
              {link.name}
              {location === link.href && (
                <span className="absolute -bottom-1 left-0 w-full h-1 bg-primary rounded-full" />
              )}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary flex items-center gap-2">
            <ShoppingBag className="w-5 h-5" />
            <span>Order Now</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative z-50 p-2 text-foreground hover:text-accent transition-colors"
        >
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>

        {/* Mobile Menu Overlay */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center gap-8 transition-all duration-300 md:hidden",
            isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-3xl font-display font-bold hover:text-accent transition-colors",
                location === link.href ? "text-accent" : "text-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="btn-primary w-48 mt-4"
          >
            Order Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
