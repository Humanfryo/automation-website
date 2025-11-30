import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const contactItems = [
  {
    icon: Mail,
    label: "EMAIL",
    value: "haripxls@gmail.com",
    href: "mailto:haripxls@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LINKEDIN",
    value: "/in/harirajashekar",
    href: "https://linkedin.com/in/harirajashekar",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "/harirajashekar",
    href: "https://github.com/harirajashekar",
  },
  {
    icon: MapPin,
    label: "LOCATION",
    value: "Austin, Texas",
    href: null,
  },
];

export default function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-t border-border"
    >
      {contactItems.map((item) => {
        const Icon = item.icon;
        const content = (
          <div 
            className="flex flex-col items-center text-center group"
            data-testid={`contact-${item.label.toLowerCase()}`}
          >
            <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors mb-2" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider mb-1">
              {item.label}
            </span>
            <span className="text-sm text-foreground group-hover:text-primary transition-colors">
              {item.value}
            </span>
          </div>
        );

        if (item.href) {
          return (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="hover-elevate rounded-md p-2"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={item.label} className="p-2">
            {content}
          </div>
        );
      })}
    </motion.div>
  );
}
