import { Link } from "wouter";
import { Facebook, Instagram, Twitter, MapPin, Clock } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-white pt-16 pb-8 rounded-t-[3rem] mt-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="font-display text-4xl font-bold text-primary">
              LeCorn.
            </Link>
            <p className="text-gray-400 max-w-xs">
              Big flavour, sunny snacks. Bringing premium popcorn and sweetcorn to the streets of the UK.
            </p>
            <div className="flex gap-4 pt-2">
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-primary hover:text-black transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Explore</h3>
            <ul className="space-y-3">
              {[
                { label: "Our Menu", href: "/menu" },
                { label: "Franchise Opportunities", href: "/franchise" },
                { label: "Contact Us", href: "/contact" },
                { label: "Privacy Policy", href: "#" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors text-lg">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary mb-6">Visit Us</h3>
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Locations</h4>
                  <p className="text-gray-400">Hastings Seafront Market</p>
                  <p className="text-gray-400">St Leonards Warrior Square</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-accent shrink-0" />
                <div>
                  <h4 className="font-bold text-white mb-1">Opening Hours</h4>
                  <p className="text-gray-400">Sat - Sun: 9:00 AM - 4:00 PM</p>
                  <p className="text-gray-400">Event days vary</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} LeCorn. All rights reserved.</p>
          <p>Made with 🌽 & ☀️ in the UK.</p>
        </div>
      </div>
    </footer>
  );
}
