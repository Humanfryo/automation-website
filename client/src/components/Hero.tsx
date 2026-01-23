import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import MetricCard from './MetricCard';

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-yellow/5 via-transparent to-transparent opacity-50 pointer-events-none animate-pulse"></div>
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10 cursor-default text-center">

        {/* Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-yellow shadow-[0_0_10px_#FFB800]"></div>
          <span className="text-sm uppercase tracking-[0.2em] text-gray-lightest font-bold">
            Enterprise AI Automation
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-6xl md:text-[88px] font-bold text-white leading-[1.05] tracking-tight max-w-[1200px] mb-8"
        >
          Automate & Scale <br />
          <span className="text-white">Revenue Operations</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-[#A0A0A0] max-w-[800px] font-normal leading-relaxed mb-16"
        >
          Voice AI agents, multi-agent systems, and CRM workflows used by Fortune 500 companies.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col md:flex-row items-center gap-6 mb-24"
        >
          <button className="bg-yellow text-black h-16 text-lg px-10 rounded font-bold flex items-center gap-3 hover:scale-[1.02] hover:shadow-[0_4px_20px_rgba(255,184,0,0.3)] transition-all">
            Book a Demo <ArrowRight size={22} strokeWidth={2.5} />
          </button>

          <button className="bg-transparent border border-yellow/50 text-white h-16 text-lg px-10 rounded font-medium flex items-center gap-3 hover:bg-yellow/10 transition-all">
            <FileText size={22} /> View Case Studies
          </button>
        </motion.div>

        {/* Metric Cards - Moved 500+ Companies here */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-[1200px]"
        >
          <MetricCard label="REVENUE IMPACT" value="$500K+" description="Monthly pipeline ROI" />
          <MetricCard label="ADOPTION" value="500+" description="Enterprise companies" />
          <MetricCard label="EFFICIENCY" value="99.8%" description="AI accuracy rate" />
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
