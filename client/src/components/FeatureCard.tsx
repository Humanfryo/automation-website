import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface FeatureCardProps {
    category: string;
    title: string;
    description: string;
    metric: string;
    subMetric: string;
    tags: string[];
    visual?: React.ReactNode;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ category, title, description, metric, subMetric, tags, visual }) => {
    return (
        <motion.div
            className="bg-rich-black border border-gray-dark rounded-lg p-8 relative overflow-hidden group hover:border-yellow transition-colors duration-300 flex flex-col h-full"
            whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(253, 183, 44, 0.15)' }}
        >
            {/* Badge */}
            <div className="flex justify-between items-start mb-6">
                <span className="bg-yellow text-black text-[11px] font-bold uppercase py-1.5 px-3 rounded-sm tracking-widest">
                    {category}
                </span>
                <div className="text-gray-medium group-hover:text-yellow transition-colors">
                    {/* Optional Icon */}
                </div>
            </div>

            {/* Visual Block */}
            <div className="h-48 w-full bg-black/50 rounded border border-gray-dark mb-6 flex items-center justify-center relative overflow-hidden group-hover:border-yellow/30 transition-colors">
                {visual ? visual : (
                    <div className="flex flex-col items-center gap-2">
                        <div className="w-12 h-12 rounded-full border border-gray-medium flex items-center justify-center">
                            <div className="w-2 h-2 bg-yellow rounded-full animate-pulse"></div>
                        </div>
                        <span className="text-xs text-gray-medium uppercase tracking-wider">Visualization</span>
                    </div>
                )}
            </div>

            <h3 className="text-2xl font-semibold text-white mb-4">
                {title}
            </h3>

            <p className="text-gray-lightest text-base mb-6 flex-grow leading-relaxed">
                {description}
            </p>

            <div className="mb-6">
                <div className="text-3xl font-bold text-yellow mb-1">{metric}</div>
                <div className="text-sm text-gray-lightest">{subMetric}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-8">
                {tags.map((tag, i) => (
                    <span key={i} className="text-[11px] text-gray-lightest bg-gray-dark px-3 py-1.5 rounded-full uppercase tracking-wide">
                        {tag}
                    </span>
                ))}
            </div>

            <div className="mt-auto pt-6 border-t border-gray-dark/50">
                <button className="text-yellow text-sm font-bold uppercase tracking-wide flex items-center gap-2 group-hover:gap-3 transition-all hover:underline decoration-2 underline-offset-4">
                    View Case Study <ArrowRight size={16} />
                </button>
            </div>
        </motion.div>
    );
};

export default FeatureCard;
