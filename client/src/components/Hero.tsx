import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import MetricBadge from "./MetricBadge";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-16 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        data-testid="hero-name"
      >
        HARI RAJASHEKAR
      </motion.h1>
      
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="text-lg md:text-xl text-primary font-medium mb-6"
        data-testid="hero-title"
      >
        AI-Powered Automation Specialist
      </motion.p>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-10"
      >
        <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
          I Build Automation Systems That Scale Your Business
        </p>
        <p className="text-muted-foreground text-sm md:text-base mt-2">
          Voice AI agents. Multi-agent architectures. CRM workflows.
          From concept to deployment, I create automation that saves time,
          cuts costs, and drives revenue.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-10"
      >
        <MetricBadge label="Booking Time Reduction" value="90%" delay={0.4} />
        <MetricBadge label="Revenue Growth" value="10x" delay={0.5} />
        <MetricBadge label="System Uptime" value="99.8%" delay={0.6} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <Link href="/contact">
          <Button size="lg" className="min-w-[160px]" data-testid="cta-lets-talk">
            Let's Talk
          </Button>
        </Link>
        <Button 
          variant="ghost" 
          size="lg"
          className="text-muted-foreground hover:text-foreground"
          onClick={() => console.log('Download resume')}
          data-testid="cta-resume"
        >
          <Download className="w-4 h-4 mr-2" />
          Download Resume
        </Button>
      </motion.div>
    </section>
  );
}
