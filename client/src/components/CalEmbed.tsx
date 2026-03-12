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
      "theme": "light",
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
        <h2 className="text-3xl md:text-4xl font-heading font-bold tracking-tight text-gray-900 mb-4">
          Let's Talk Strategy
        </h2>
        <div className="w-16 h-[2px] bg-primary-500 mb-4" />
        <p className="text-gray-600 leading-relaxed">
          Pick a time that works and let's explore how Spartan Flow can fill your pipeline with qualified meetings.
        </p>
      </div>

      <div
        className="border border-gray-200 bg-gray-50 rounded-xl p-8 md:p-12 flex flex-col items-center justify-center text-center"
        data-testid="cal-embed-container"
      >
        <div className="w-16 h-16 bg-primary-50 border border-primary-200 rounded-lg flex items-center justify-center mb-5">
          <Calendar className="w-7 h-7 text-primary-500" />
        </div>

        <h3 className="text-xl font-heading font-bold text-gray-900 mb-2">
          15-Minute Strategy Call
        </h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md">
          No pressure. Just a conversation about your pipeline goals and how we might be able to help.
        </p>

        <Button
          className="bg-accent-500 text-white hover:bg-accent-600 font-semibold px-8 py-3 rounded-lg"
          data-cal-link="hari-rajashekar-ssactw/15min"
          data-cal-namespace="15min"
          data-cal-config='{"layout":"month_view","theme":"light"}'
          data-testid="cal-book-button"
        >
          <Calendar className="w-4 h-4 mr-2" />
          Schedule a Call
        </Button>
      </div>
    </motion.div>
  );
}
