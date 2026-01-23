import React from 'react';
import { ArrowRight, Twitter, Linkedin, Youtube, CheckCircle } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 md:py-[120px] bg-black relative flex flex-col items-center justify-center text-center overflow-hidden border-t border-gray-dark">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">
                <div className="inline-flex items-center gap-2 bg-[#1A1A1A] border border-gray-dark rounded-full px-4 py-1.5 mb-8 animate-fade-in-up">
                    <div className="w-2 h-2 rounded-full bg-yellow animate-pulse"></div>
                    <span className="text-[#A0A0A0] text-xs font-bold uppercase tracking-widest">Join 500+ Companies Automating Revenue Ops</span>
                </div>

                <h2 className="text-5xl md:text-[64px] font-bold text-white mb-8 leading-[1.1]">
                    Ready to Transform Your <br />
                    <span className="text-yellow">Revenue Operations?</span>
                </h2>

                <p className="text-xl md:text-2xl text-[#A0A0A0] mb-16 max-w-3xl mx-auto leading-relaxed">
                    Let's create something awesome together. Scalable, secure, and built for enterprise.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-xl mx-auto mb-10">
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full h-14 bg-[#1A1A1A] border border-gray-dark rounded px-6 text-white text-lg placeholder:text-[#737373] focus:outline-none focus:border-yellow focus:ring-1 focus:ring-yellow transition-all"
                    />
                    <button className="h-14 px-10 bg-yellow text-black text-lg font-bold rounded whitespace-nowrap hover:bg-[#FFC933] hover:shadow-[0_4px_20px_rgba(255,184,0,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                        Get Started <ArrowRight size={22} strokeWidth={2.5} />
                    </button>
                </div>

                <div className="flex items-center justify-center gap-6 text-sm text-[#737373] mb-16">
                    <span className="flex items-center gap-2"><CheckCircle size={16} /> No credit card required</span>
                    <span className="flex items-center gap-2"><CheckCircle size={16} /> 5-min setup</span>
                    <span className="flex items-center gap-2"><CheckCircle size={16} /> Cancel anytime</span>
                </div>

                <div className="flex gap-8 justify-center">
                    <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer shadow-lg hover:shadow-yellow/10">
                        <Linkedin size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer shadow-lg hover:shadow-yellow/10">
                        <Twitter size={24} />
                    </a>
                    <a href="#" className="w-14 h-14 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer shadow-lg hover:shadow-yellow/10">
                        <Youtube size={24} />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default CTASection;
