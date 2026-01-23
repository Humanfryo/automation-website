import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText } from 'lucide-react';
import MetricCard from './MetricCard';

const Hero = () => {
  return (
    <section className="relative bg-black min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

      <div className="container mx-auto px-4 flex flex-col items-center relative z-10 cursor-default">

        {/* Profile Badge - Placeholder */}
        {/* <div className="w-[120px] h-[120px] rounded-full border-[3px] border-yellow flex items-center justify-center mb-10 overflow-hidden bg-rich-black">
           <span className="text-4xl">🚀</span> 
        </div> */}

        {/* Small Intro */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-6"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-yellow"></div>
          <span className="text-[13px] uppercase tracking-[0.15em] text-gray-lightest font-semibold">
            AI-POWERED AUTOMATION • EST 2024
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl md:text-[80px] font-bold text-white text-center leading-[1.1] tracking-tight max-w-[1000px] mb-8"
        >
          We Help Businesses <br />
          <span className="text-white">Automate & Scale</span> <br />
          <span className="text-white">Revenue Operations</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-off-white text-center max-w-[700px] font-normal leading-relaxed mb-16 opacity-90"
        >
          Voice AI agents, multi-agent systems, and CRM workflows that actually work. We turn complex problems into elegant automation solutions.
        </motion.p>

        {/* Metric Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1100px] mb-20"
        >
          <MetricCard label="REVENUE" value="$500K+" description="Pipeline ROI (proven compliance)" />
          <MetricCard label="EFFICIENCY" value="10x" description="Faster workflows vs manual" />
          <MetricCard label="ACCURACY" value="99%" description="AI agent precision rate" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-5"
        >
          <button className="bg-yellow text-black h-14 px-8 rounded text-base font-semibold flex items-center justify-center gap-2 hover:bg-yellow-light transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(253,183,44,0.3)]">
            LET'S CHAT <ArrowRight size={20} />
          </button>

          <button className="bg-transparent border-2 border-gray-dark text-white h-14 px-8 rounded text-base font-semibold flex items-center justify-center gap-2 hover:border-yellow hover:bg-yellow/5 transition-all hover:text-white">
            <FileText size={20} /> VIEW CASE STUDIES
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
