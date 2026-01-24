import React from 'react';
import { ArrowRight, Linkedin, Twitter, Youtube, CheckCircle } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 md:py-[120px] bg-black relative flex flex-col items-center justify-center text-center overflow-hidden border-t border-gray-dark">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-yellow/5 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-5xl">

                <h2 className="text-5xl md:text-[64px] font-bold text-white mb-8 leading-[1.1]">
                    Ready to Fill Your Pipeline with <br />
                    <span className="text-yellow">Qualified Buyers?</span>
                </h2>

                <p className="text-xl md:text-2xl text-off-white mb-16 max-w-3xl mx-auto leading-relaxed">
                    Book a 15-minute strategy call. We'll discuss your target market, deal size, and show you exactly how we'll generate 8-12 meetings per month. Zero pressure, zero risk.
                </p>

                <div className="flex flex-col items-center gap-6 mb-12">
                    <button className="h-16 px-10 bg-yellow text-black text-lg font-bold rounded whitespace-nowrap hover:bg-[#FFC933] hover:shadow-[0_4px_20px_rgba(255,184,0,0.25)] hover:scale-[1.02] transition-all flex items-center justify-center gap-3 w-full md:w-auto">
                        Book Your Strategy Call <ArrowRight size={22} strokeWidth={2.5} />
                    </button>
                    <p className="text-[#A0A0A0] text-sm font-medium">
                        💡 Most clients see their first meetings by Week 5
                    </p>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 text-sm text-[#A0A0A0] font-medium mb-16">
                    <span className="flex items-center gap-2"><CheckCircle size={18} className="text-yellow" /> 60-day money-back guarantee</span>
                    <span className="flex items-center gap-2"><CheckCircle size={18} className="text-yellow" /> No setup required from your team</span>
                    <span className="flex items-center gap-2"><CheckCircle size={18} className="text-yellow" /> Manufacturing-focused targeting</span>
                </div>

                <div className="flex gap-8 justify-center">
                    <a href="#" className="w-12 h-12 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-[#1A1A1A] rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default CTASection;
