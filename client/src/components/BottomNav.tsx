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
      className="fixed bottom-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-lg border-t border-border"
      aria-label="Main navigation"
    >
      <div className="max-w-md mx-auto px-4">
        <ul className="flex items-center justify-around py-3">
          {navItems.map((item) => {
            const isActive = location === item.path;
            const Icon = item.icon;
            
            return (
              <li key={item.path}>
                <Link href={item.path}>
                  <motion.div
                    className={`flex flex-col items-center gap-1 px-4 py-2 rounded-md transition-colors relative ${
                      isActive 
                        ? "text-primary" 
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                    whileTap={{ scale: 0.95 }}
                    data-testid={`nav-${item.label.toLowerCase()}`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-xs font-medium">{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      />
                    )}
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
