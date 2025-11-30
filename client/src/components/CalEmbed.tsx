import { motion } from "framer-motion";
import { Calendar } from "lucide-react";

export default function CalEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight mb-4">
          Book a Free Consultation
        </h2>
        <div className="w-16 h-[2px] bg-primary mb-4" />
        <p className="text-muted-foreground leading-relaxed">
          Let's discuss how automation can transform your business. 
          Choose a time that works for you.
        </p>
      </div>

      <div 
        className="aspect-[4/3] md:aspect-[3/2] w-full border border-border bg-card flex items-center justify-center relative overflow-hidden"
        data-testid="cal-embed-container"
      >
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        {/* todo: remove mock functionality - replace with actual Cal.com embed */}
        {/* 
          To integrate Cal.com, add their embed script or React component:
          <Cal 
            calLink="harirajashekar/consultation"
            style={{ width: "100%", height: "100%" }}
            config={{ theme: "dark" }}
          />
        */}
        <div className="text-center p-8 relative z-10">
          <div className="w-20 h-20 mx-auto mb-6 border border-primary/30 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm font-mono uppercase tracking-wider mb-2">
            Cal.com Integration
          </p>
          <p className="text-xs text-muted-foreground">
            Book directly into my calendar
          </p>
        </div>
      </div>
    </motion.div>
  );
}
