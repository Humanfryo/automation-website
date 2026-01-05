import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionDivider from "./SectionDivider";

export default function AboutSection() {
  return (
    <section className="py-16 px-4" id="about">
      <div className="max-w-[1400px] mx-auto">
        <SectionDivider className="mb-12" />
        
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-muted-foreground text-lg leading-relaxed mb-8"
          >
            I'm a published IEEE researcher who genuinely loves solving complex automation 
            challenges. Whether it's Fortune 500 pharma clients or scrappy startups, 
            I bring the same energy: build systems that actually work and deliver real results.
            Let's create something awesome together.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center gap-1"
          >
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
              onClick={() => window.open('https://linkedin.com/in/harirajashekar', '_blank')}
              aria-label="LinkedIn"
              data-testid="about-linkedin"
            >
              <Linkedin className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
              onClick={() => window.open('https://github.com/harirajashekar', '_blank')}
              aria-label="GitHub"
              data-testid="about-github"
            >
              <Github className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
              onClick={() => window.location.href = 'mailto:haripxls@gmail.com'}
              aria-label="Email"
              data-testid="about-email"
            >
              <Mail className="w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
