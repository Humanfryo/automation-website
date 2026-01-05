import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface MetricBadgeProps {
  label: string;
  value: string;
  subtext: string;
  delay?: number;
}

function AnimatedNumber({ value, delay }: { value: string; delay: number }) {
  const [displayValue, setDisplayValue] = useState("0");
  
  useEffect(() => {
    const numericMatch = value.match(/([\d.]+)/);
    if (numericMatch) {
      const targetNum = parseFloat(numericMatch[1]);
      const prefix = value.substring(0, value.indexOf(numericMatch[1]));
      const suffix = value.substring(value.indexOf(numericMatch[1]) + numericMatch[1].length);
      const duration = 1.5;
      
      const timer = setTimeout(() => {
        const startTime = Date.now();
        
        const updateNumber = () => {
          const elapsed = (Date.now() - startTime) / 1000;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = targetNum * eased;
          
          if (targetNum >= 10) {
            setDisplayValue(prefix + Math.round(current) + suffix);
          } else {
            setDisplayValue(prefix + current.toFixed(1) + suffix);
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
  
  return <span className="text-[#f6ca46]">{displayValue}</span>;
}

export default function MetricBadge({ label, value, subtext, delay = 0 }: MetricBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center justify-center px-10 py-8 border border-border bg-card corner-brackets min-w-[220px]"
      data-testid={`metric-badge-${label.toLowerCase()}`}
    >
      <span 
        className="text-[10px] uppercase tracking-[0.1em] font-semibold mb-4"
        style={{ color: '#A3A3A3' }}
      >
        {label}
      </span>
      <span 
        className="text-5xl md:text-[56px] font-mono font-bold tracking-tight mb-3"
        style={{ color: '#10B981' }}
      >
        <AnimatedNumber value={value} delay={delay + 0.5} />
      </span>
      <span 
        className="text-[13px] font-sans text-center leading-relaxed"
        style={{ color: '#A3A3A3' }}
      >
        {subtext}
      </span>
    </motion.div>
  );
}
