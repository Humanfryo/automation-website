import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import MetricBadge from "./MetricBadge";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold tracking-tight mb-6"
          data-testid="hero-name"
        >
          HARI RAJASHEKAR
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-primary font-mono uppercase tracking-[0.2em] mb-8"
          data-testid="hero-title"
        >
          AI-Powered Automation Specialist
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-light">
            I Build Automation Systems That Scale Your Business
          </p>
          <p className="text-muted-foreground text-sm md:text-base mt-3 leading-relaxed">
            Voice AI agents. Multi-agent architectures. CRM workflows.
            From concept to deployment, I create automation that saves time,
            cuts costs, and drives revenue.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-14"
        >
          <MetricBadge 
            label="$500K+ SAVED" 
            value="$500K+" 
            subtext="Fortune 500 pharma"
            delay={0.4} 
          />
          <MetricBadge 
            label="10x REVENUE" 
            value="10x" 
            subtext="$60 → $600/mo"
            delay={0.5} 
          />
          <MetricBadge 
            label="99.8% UPTIME" 
            value="99.8%" 
            subtext="50+ countries"
            delay={0.6} 
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="/contact">
            <Button 
              size="lg" 
              className="min-w-[180px] h-14 text-base font-mono uppercase tracking-wider gradient-primary border-0 rounded-none hover:opacity-90 transition-opacity" 
              data-testid="cta-lets-talk"
            >
              Let's Talk
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
          <Button 
            variant="outline" 
            size="lg"
            className="min-w-[180px] h-14 text-base font-mono uppercase tracking-wider rounded-none border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
            onClick={() => console.log('Download resume')}
            data-testid="cta-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
