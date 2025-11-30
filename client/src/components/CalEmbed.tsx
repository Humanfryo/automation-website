import { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

declare global {
  interface Window {
    Cal?: any;
  }
}

export default function CalEmbed() {
  useEffect(() => {
    (function (C: any, A: string, L: string) {
      let p = function (a: any, ar: any) { a.q.push(ar); };
      let d = C.document;
      C.Cal = C.Cal || function () {
        let cal = C.Cal;
        let ar = arguments;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          d.head.appendChild(d.createElement("script")).src = A;
          cal.loaded = true;
        }
        if (ar[0] === L) {
          const api = function () { p(api, arguments); };
          const namespace = ar[1];
          (api as any).q = (api as any).q || [];
          if (typeof namespace === "string") {
            cal.ns[namespace] = cal.ns[namespace] || api;
            p(cal.ns[namespace], ar);
            p(cal, ["initNamespace", namespace]);
          } else p(cal, ar);
          return;
        }
        p(cal, ar);
      };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    window.Cal("init", "15min", { origin: "https://app.cal.com" });
    window.Cal.ns["15min"]("ui", {
      "theme": "dark",
      "hideEventTypeDetails": false,
      "layout": "month_view"
    });
  }, []);

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
        className="border border-border bg-card p-8 md:p-12 flex flex-col items-center justify-center text-center"
        data-testid="cal-embed-container"
      >
        <div className="w-20 h-20 border border-primary/30 flex items-center justify-center mb-6">
          <Calendar className="w-8 h-8 text-primary" />
        </div>
        
        <h3 className="text-xl font-heading font-bold mb-2">
          15-Minute Discovery Call
        </h3>
        <p className="text-muted-foreground text-sm mb-6 max-w-md">
          Quick intro call to understand your automation needs and explore how I can help scale your business.
        </p>
        
        <Button
          className="gradient-primary rounded-none font-mono uppercase tracking-wider h-12 px-8"
          data-cal-link="humanfryo/15min"
          data-cal-namespace="15min"
          data-cal-config='{"layout":"month_view","theme":"dark"}'
          data-testid="cal-book-button"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a Call
        </Button>
      </div>
    </motion.div>
  );
}
