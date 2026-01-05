import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Download, ArrowRight } from "lucide-react";
import { SiLinkedin, SiUpwork } from "react-icons/si";
import MetricBadge from "./MetricBadge";
import hariImage from "@assets/1724367522958_1767642079072.jpeg";

function N8NIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="12" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="16" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="21" cy="8" r="2" />
      <circle cx="21" cy="16" r="2" />
      <path d="M6 12h1" />
      <path d="M11 12h2c1 0 2-1 2-2v-2" />
      <path d="M11 12h2c1 0 2 1 2 2v2" />
      <path d="M18 8h1" />
      <path d="M18 16h1" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col items-center justify-center px-4 py-20 text-center relative">
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <img 
            src={hariImage} 
            alt="Hari Rajashekar" 
            className="w-32 h-32 md:w-40 md:h-40 mx-auto object-cover border-4 border-primary"
            style={{ borderRadius: '50%' }}
            data-testid="hero-image"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-lg md:text-xl text-primary font-mono uppercase tracking-[0.2em] mb-3"
          data-testid="hero-greeting"
        >
          Hey, I'm Hari
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <a
            href="https://www.linkedin.com/in/hari-rajashekar-81816818a"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-linkedin"
            aria-label="LinkedIn Profile"
          >
            <SiLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://www.upwork.com/freelancers/~0160930c7ee1c74265"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-upwork"
            aria-label="Upwork Profile"
          >
            <SiUpwork className="w-5 h-5" />
          </a>
          <a
            href="https://n8n.io/creators/hari"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            data-testid="link-n8n"
            aria-label="N8N Creator Profile"
          >
            <N8NIcon className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight mb-6"
          data-testid="hero-name"
        >
          I help businesses automate & scale
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-12"
        >
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
            Voice AI agents, multi-agent systems, and CRM workflows that actually work.
            I love turning complex problems into elegant automation solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-6 mb-14"
        >
          <MetricBadge 
            label="SAVED"
            value="$500K+" 
            subtext="Fortune 500 pharma compliance"
            delay={0.4} 
          />
          <MetricBadge 
            label="BOOSTED"
            value="10x" 
            subtext="$60 → $600/month donations"
            delay={0.5} 
          />
          <MetricBadge 
            label="UPTIME"
            value="99.8%" 
            subtext="50+ countries (Roche devices)"
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
              Let's Chat
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
