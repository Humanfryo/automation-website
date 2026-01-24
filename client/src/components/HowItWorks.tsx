import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Settings, Rocket, CheckCircle } from 'lucide-react';

const steps = [
    {
        icon: Calendar,
        title: "1. Strategy Session",
        description: "We learn your ideal customer profile, deal size, and sales process",
        timeline: "Week 1"
    },
    {
        icon: Settings,
        title: "2. Infrastructure Setup",
        description: "We build dedicated email infrastructure and optimize for deliverability",
        timeline: "Week 1-3"
    },
    {
        icon: Rocket,
        title: "3. Campaign Launch",
        description: "We send 500 personalized emails per week to qualified manufacturing buyers",
        timeline: "Week 4+"
    },
    {
        icon: CheckCircle,
        title: "4. Meetings Start Flowing",
        description: "You see 8-12 qualified meetings per month on your calendar",
        timeline: "Week 5+"
    }
];

const HowItWorks = () => {
    return (
        <section id="how-it-works" className="py-24 bg-black relative border-t border-gray-dark">
            <div className="container mx-auto px-4">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">How It Works</h2>
                    <p className="text-[#A0A0A0] text-xl max-w-2xl mx-auto">
                        Four simple steps to fill your pipeline with qualified manufacturing buyers
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-[#1A1A1A] border border-gray-dark p-8 rounded-lg relative hover:border-yellow transition-colors group"
                        >
                            <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center mb-6 text-black group-hover:scale-110 transition-transform">
                                <step.icon size={24} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                            <p className="text-[#A0A0A0] mb-6 leading-relaxed flex-grow">{step.description}</p>
                            <div className="pt-4 border-t border-gray-dark/50 text-sm font-bold text-yellow uppercase tracking-wider">
                                {step.timeline}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <button className="text-yellow text-lg font-bold uppercase tracking-wide hover:underline decoration-2 underline-offset-4">
                        Book Your Strategy Call →
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
