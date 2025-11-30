import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

interface MetricBadgeProps {
  label: string;
  value: string;
  delay?: number;
}

function AnimatedNumber({ value, delay }: { value: string; delay: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericMatch = value.match(/^([\d.]+)/);
    if (numericMatch) {
      const targetNum = parseFloat(numericMatch[1]);
      const suffix = value.replace(numericMatch[1], '');
      const duration = 1.5;
      
      const timer = setTimeout(() => {
        let start = 0;
        const startTime = Date.now();
        
        const updateNumber = () => {
          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = targetNum * eased;
          
          if (targetNum >= 10) {
            setDisplayValue(Math.round(current) + suffix);
          } else {
            setDisplayValue(current.toFixed(1) + suffix);
          }
          
          if (progress < 1) {
            requestAnimationFrame(updateNumber);
          } else {
            setDisplayValue(value);
          }
        };
        
        requestAnimationFrame(updateNumber);
      }, delay * 1000);
      
      return () => clearTimeout(timer);
    } else {
      setDisplayValue(value);
    }
  }, [value, delay]);
  
  return <span>{displayValue}</span>;
}

export default function MetricBadge({ label, value, delay = 0 }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center px-8 py-5 border border-border bg-card corner-brackets"
      data-testid={`metric-badge-${label.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2 font-mono">
        {label}
      </span>
      <span className="text-3xl md:text-4xl font-mono font-bold text-primary tracking-tight">
        <AnimatedNumber value={value} delay={delay + 0.5} />
      </span>
    </motion.div>
  );
}
