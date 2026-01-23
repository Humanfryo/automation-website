import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Bot, Box, Share2, Cloud, Shield, Layers } from 'lucide-react';

const integrations = [
    { name: 'Salesforce', icon: Cloud },
    { name: 'HubSpot', icon: Share2 },
    { name: 'Slack', icon: MessageSquare },
    { name: 'Zapier', icon: Zap },
    { name: 'OpenAI', icon: Bot },
    { name: 'Notion', icon: Box },
    { name: 'Stripe', icon: Shield },
    { name: 'Jira', icon: Layers },
];

const IntegrationGrid = () => {
    return (
        <section className="py-24 bg-rich-black relative border-t border-gray-dark border-b">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-[56px] font-bold text-white mb-6 relative inline-block pb-2">
                        Works With Your Entire Stack
                        <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-yellow"></span>
                    </h2>
                    <p className="text-xl text-gray-lightest max-w-2xl mx-auto mt-6">
                        Seamlessly connect with your existing tools and platforms for unified automation.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto">
                    {integrations.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="w-20 h-20 md:w-28 md:h-28 bg-black border border-gray-dark rounded-lg flex flex-col items-center justify-center gap-3 group cursor-default relative z-10 transition-colors"
                            whileHover={{ scale: 1.1, borderColor: '#FDB72C' }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <tool.icon className="text-gray-medium group-hover:text-yellow transition-colors w-6 h-6 md:w-8 md:h-8" strokeWidth={1.5} />
                            <span className="text-[10px] md:text-xs uppercase font-bold text-gray-medium group-hover:text-white transition-colors tracking-wider">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-16">
                    <p className="text-gray-lightest mb-4">Connect to 50+ tools out of the box</p>
                    <button className="text-yellow font-semibold hover:underline decoration-2 underline-offset-4 text-sm uppercase tracking-wide">View all integrations →</button>
                </div>
            </div>
        </section>
    );
};
export default IntegrationGrid;
