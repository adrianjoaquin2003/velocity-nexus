import { Link } from "react-router-dom";
import { Zap, Instagram, Linkedin, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded flex items-center justify-center">
                <Zap className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-display font-bold text-lg tracking-wider">
                FSAE<span className="text-primary">EV</span>
              </span>
            </Link>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Pushing the boundaries of electric motorsport engineering. Building the future, one race at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-wider uppercase text-foreground">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {["About Us", "The Car", "Team Structure", "Get Involved"].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase().replace(/\s/g, "-").replace("about-us", "about").replace("get-involved", "involved")}`}
                  className="text-muted-foreground hover:text-primary transition-colors font-body text-sm"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-wider uppercase text-foreground">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="mailto:fsae@university.edu"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
              >
                <Mail className="w-4 h-4" />
                fsae@university.edu
              </a>
              <div className="flex items-center gap-2 text-muted-foreground font-body text-sm">
                <MapPin className="w-4 h-4" />
                Engineering Building, Room 101
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-4">
            <h4 className="font-display text-sm tracking-wider uppercase text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground font-body text-sm">
            © {new Date().getFullYear()} FSAE EV Racing Team. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-muted-foreground font-body text-xs">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span>POWERED BY INNOVATION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
