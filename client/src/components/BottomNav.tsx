import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Home, Briefcase, Mail } from "lucide-react";

const navItems = [
  { path: "/", label: "Home", icon: Home },
  { path: "/projects", label: "Projects", icon: Briefcase },
  { path: "/contact", label: "Contact", icon: Mail },
];

export default function BottomNav() {
  const [location] = useLocation();

  return (
    <nav 
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/90 backdrop-blur-xl border-t border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-md mx-auto px-4">
        <ul className="flex items-center justify-around py-2">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <motion.div
                    className={`flex flex-col items-center px-6 py-3 transition-colors ${
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5 mb-1.5" />
                    <span className="text-[10px] font-mono uppercase tracking-wider">{item.label}</span>
                    <div className="h-[2px] mt-2 w-8 flex items-center justify-center">
                      {isActive && (
                        <motion.div
                          layoutId="activeTab"
                          className="w-full h-full bg-primary"
                          transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                      )}
                    </div>
                  </motion.div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
