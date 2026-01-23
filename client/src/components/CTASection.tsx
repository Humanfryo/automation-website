import React from 'react';
import { ArrowRight, Twitter, Linkedin, Youtube } from 'lucide-react';

const CTASection = () => {
    return (
        <section className="py-32 bg-black relative flex flex-col items-center justify-center text-center overflow-hidden border-t border-gray-dark">
            {/* Glow effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10 max-w-4xl">
                <h2 className="text-4xl md:text-[56px] font-bold text-white mb-6 leading-tight">
                    Ready to Transform Your <br />
                    <span className="text-yellow">Revenue Operations?</span>
                </h2>
                <p className="text-xl text-off-white mb-12 max-w-2xl mx-auto">
                    Let's create something awesome together. Join 500+ companies scaling with Spartan Flow.
                </p>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full max-w-xl mx-auto mb-8">
                    <input
                        type="email"
                        placeholder="Enter your work email"
                        className="w-full h-14 bg-rich-black border border-gray-dark rounded px-6 text-white placeholder:text-gray-medium focus:outline-none focus:border-yellow transition-colors"
                    />
                    <button className="h-14 px-8 bg-yellow text-black font-semibold rounded whitespace-nowrap hover:bg-yellow-light transition-all flex items-center justify-center gap-2 w-full md:w-auto">
                        Get Started <ArrowRight size={20} />
                    </button>
                </div>

                <p className="text-sm text-gray-medium mb-12">
                    No credit card required • 14-day free trial • Setup in 5 minutes
                </p>

                <div className="flex gap-6 justify-center">
                    <a href="#" className="w-12 h-12 bg-rich-black rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Linkedin size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-rich-black rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="w-12 h-12 bg-rich-black rounded flex items-center justify-center text-white hover:text-yellow hover:border hover:border-yellow transition-all cursor-pointer">
                        <Youtube size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};
export default CTASection;
