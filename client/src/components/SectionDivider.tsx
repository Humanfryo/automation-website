import { motion } from "framer-motion";

interface SectionDividerProps {
  className?: string;
}

export default function SectionDivider({ className = "" }: SectionDividerProps) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={`flex items-center justify-center py-8 ${className}`}
    >
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="w-2 h-2 bg-primary mx-4 rotate-45" />
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-border to-transparent" />
    </motion.div>
  );
}
