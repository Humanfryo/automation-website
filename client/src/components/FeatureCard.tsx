import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'wouter';

interface FeatureCardProps {
    category: string;
    title: string;
    description: string;
    metric: string;
    subMetric: string;
    tags: string[];
    visual?: React.ReactNode;
    link?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ category, title, description, metric, subMetric, tags, visual, link }) => {
    const [, setLocation] = useLocation();

    return (
        <motion.div
            className={`bg-rich-black border border-gray-dark rounded-lg p-8 md:p-10 relative overflow-hidden group hover:border-yellow transition-all duration-300 flex flex-col h-full shadow-[0_8px_32px_rgba(0,0,0,0.4)] ${link ? 'cursor-pointer' : ''}`}
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(255, 184, 0, 0.15)' }}
            onClick={() => link && setLocation(link)}
        >
            {/* Badge */}
            <div className="flex justify-between items-start mb-8">
                <span className="bg-yellow text-black text-xs font-bold uppercase py-1.5 px-3 rounded-sm tracking-widest shadow-[0_0_15px_rgba(255,184,0,0.3)]">
                    {category}
                </span>
            </div>

            {/* Visual Block - Larger Icon Area */}
            <div className="h-56 w-full bg-black/40 rounded border border-gray-dark mb-8 flex items-center justify-center relative overflow-hidden group-hover:border-yellow/30 transition-colors">
                {visual ? (
                    <div className="transform group-hover:scale-110 transition-transform duration-500">
                        {visual}
                    </div>
                ) : (
                    <div className="w-16 h-16 bg-yellow rounded-full animate-pulse shadow-[0_0_30px_#FFB800]"></div>
                )}
            </div>

            <h3 className="text-3xl font-bold text-white mb-4 leading-tight">
                {title}
            </h3>

            <p className="text-[#A0A0A0] text-lg mb-8 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="mb-8 p-6 bg-black/30 rounded border border-gray-dark/50">
                <div className="text-4xl md:text-5xl font-bold text-yellow mb-2 shadow-yellow-glow leading-tight">{metric}</div>
                <div className="text-sm text-[#A0A0A0] font-medium uppercase tracking-wide">{subMetric}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => (
                    <span key={i} className="text-xs text-white bg-gray-dark px-3 py-1.5 rounded-sm uppercase tracking-wide border border-transparent group-hover:border-gray-500 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-dark/50">
                {link ? (
                    <Link href={link} className="text-yellow text-base font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Case Study <ArrowRight size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                    </Link>
                ) : (
                    <button className="text-yellow text-base font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-4 transition-all">
                        View Case Study <ArrowRight size={20} className="group-hover:drop-shadow-[0_0_8px_rgba(255,184,0,0.8)]" />
                    </button>
                )}
            </div>
        </motion.div>
    );
};

export default FeatureCard;
