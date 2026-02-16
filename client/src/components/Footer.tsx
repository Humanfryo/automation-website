import { Shield, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          {/* Column 1: Company Info */}
          <div>
            <Link href="/">
              <a className="flex items-center gap-2 group mb-4">
                <Shield className="w-6 h-6 text-primary fill-primary/10" />
                <span className="text-lg font-bold tracking-tight text-white">
                  Spartan Flow
                </span>
              </a>
            </Link>
            <p className="text-sm text-secondary-foreground mb-6 max-w-xs">
              B2B Appointment Setting for Industrial Companies. We help you fill your pipeline with qualified buyers.
            </p>
            <div className="flex items-center gap-2 text-sm text-white hover:text-primary transition-colors cursor-pointer">
              <Mail size={16} />
              <a href="mailto:hello@spartanflow.com">hello@spartanflow.com</a>
            </div>
          </div>

          {/* Column 2: Product */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li><a href="#how-it-works" className="hover:text-primary transition-colors">How It Works</a></li>
              <li><a href="#results" className="hover:text-primary transition-colors">Results</a></li>
              <li><a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">The $312/Meeting Framework</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#book" className="hover:text-primary transition-colors">Book a Strategy Call</a></li>
            </ul>
          </div>

          {/* Column 4: Company */}
          <div>
            <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-secondary-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-secondary-foreground/60">
          <p>© 2026 Spartan Flow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary transition-colors"><Linkedin size={18} /></a>
            <a href="#" className="hover:text-primary transition-colors"><Twitter size={18} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
