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
            className="bg-rich-black border border-gray-dark p-8 relative group cursor-default"
            whileHover={{
                y: -8,
                boxShadow: "0 0 30px rgba(253, 183, 44, 0.2)",
                borderColor: "#FDB72C"
            }}
            transition={{ duration: 0.3 }}
        >
            <div className="text-[13px] text-gray-lightest uppercase tracking-widest mb-4 font-semibold">
                {label}
            </div>
            <div className="text-[64px] font-bold text-yellow leading-none mb-4 tracking-tighter">
                {value}
            </div>
            <div className="text-gray-lightest text-base font-normal">
                {description}
            </div>
        </motion.div>
    );
};

export default MetricCard;
