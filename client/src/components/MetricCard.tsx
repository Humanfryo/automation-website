import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
    label: string;
    value: string;
    description: string;
}

const MetricCard: React.FC<MetricCardProps> = ({ label, value, description }) => {
    return (
        <motion.div
            className="bg-[#151515] border border-gray-dark p-10 relative group cursor-default rounded"
            whileHover={{
                y: -8,
                boxShadow: "0 4px 20px rgba(255, 184, 0, 0.15)",
                borderColor: "#FFB800"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-sm text-[#A0A0A0] uppercase tracking-widest mb-4 font-semibold">
                {label}
            </div>
            <div className="text-[64px] font-bold text-yellow leading-none mb-4 tracking-tighter shadow-yellow-glow">
                {value}
            </div>
            <div className="text-white text-lg font-normal">
                {description}
            </div>
        </motion.div>
    );
};

export default MetricCard;
