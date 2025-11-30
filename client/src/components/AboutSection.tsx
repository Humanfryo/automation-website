import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AboutSection() {
  return (
    <section className="py-12 px-4 border-t border-border" id="about">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-muted-foreground leading-relaxed mb-6"
        >
          Published IEEE researcher specializing in business process automation 
          and multi-agent AI systems. I've delivered solutions for Fortune 500 
          pharmaceutical clients and growth-stage startups, with a track record 
          of measurable ROI from 90% efficiency gains to 10x revenue growth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center gap-2"
        >
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.open('https://linkedin.com/in/harirajashekar', '_blank')}
            aria-label="LinkedIn"
            data-testid="about-linkedin"
          >
            <Linkedin className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.open('https://github.com/harirajashekar', '_blank')}
            aria-label="GitHub"
            data-testid="about-github"
          >
            <Github className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-primary"
            onClick={() => window.location.href = 'mailto:haripxls@gmail.com'}
            aria-label="Email"
            data-testid="about-email"
          >
            <Mail className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
