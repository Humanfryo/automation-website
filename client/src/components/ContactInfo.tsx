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
    value: "/in/hari-rajashekar",
    href: "https://www.linkedin.com/in/hari-rajashekar-81816818a/",
  },
  {
    icon: Github,
    label: "GITHUB",
    value: "/Humanfryo",
    href: "https://github.com/Humanfryo",
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
      className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-t border-border mt-12"
    >
      {contactItems.map((item) => {
        const Icon = item.icon;
        const content = (
          <div 
            className="flex flex-col items-center text-center group"
            data-testid={`contact-${item.label.toLowerCase()}`}
          >
            <div className="w-12 h-12 border border-border group-hover:border-primary flex items-center justify-center mb-3 transition-colors">
              <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </div>
            <span className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-mono mb-1">
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
              className="block"
            >
              {content}
            </a>
          );
        }

        return (
          <div key={item.label}>
            {content}
          </div>
        );
      })}
    </motion.div>
  );
}
