import { motion } from "framer-motion";

export default function CalEmbed() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      <div className="mb-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Book a Free Consultation
        </h2>
        <p className="text-muted-foreground">
          Let's discuss how automation can transform your business. 
          Choose a time that works for you.
        </p>
      </div>

      <div 
        className="aspect-[4/3] md:aspect-[3/2] w-full rounded-md border border-border bg-card flex items-center justify-center"
        data-testid="cal-embed-container"
      >
        {/* todo: remove mock functionality - replace with actual Cal.com embed */}
        {/* 
          To integrate Cal.com, add their embed script or React component:
          <Cal 
            calLink="harirajashekar/consultation"
            style={{ width: "100%", height: "100%" }}
            config={{ theme: "dark" }}
          />
        */}
        <div className="text-center p-8">
          <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center">
            <svg 
              className="w-8 h-8 text-primary" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
              />
            </svg>
          </div>
          <p className="text-muted-foreground text-sm">
            Cal.com booking widget will appear here
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Book directly into my calendar
          </p>
        </div>
      </div>
    </motion.div>
  );
}
