import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Zap, Bot, Box, Share2, Cloud, Shield, Layers, Database, Globe, Lock, Cpu, Server, Wifi, Code, GitBranch } from 'lucide-react';

const integrations = [
    { name: 'Salesforce', icon: Cloud },
    { name: 'HubSpot', icon: Share2 },
    { name: 'Slack', icon: MessageSquare },
    { name: 'Zapier', icon: Zap },
    { name: 'OpenAI', icon: Bot },
    { name: 'Notion', icon: Box },
    { name: 'Stripe', icon: Shield },
    { name: 'Jira', icon: Layers },
    { name: 'Postgres', icon: Database },
    { name: 'Webhooks', icon: Globe },
    { name: 'Auth0', icon: Lock },
    { name: 'AWS', icon: Server },
    { name: 'Grafana', icon: Activity }, // Assuming Activity fits
    { name: 'Python', icon: Code },
    { name: 'GitHub', icon: GitBranch },
    { name: 'API', icon: Wifi },
];

import { Activity } from 'lucide-react';

const IntegrationGrid = () => {
    return (
        <section className="py-32 bg-black relative border-t border-gray-dark border-b">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-24">
                    <h2 className="text-5xl md:text-[64px] font-bold text-white mb-6">
                        Works With Your <span className="text-yellow">Entire Stack</span>
                    </h2>
                    <p className="text-xl text-[#A0A0A0] mt-4 font-medium uppercase tracking-widest">
                        Connects to 150+ tools out of the box
                    </p>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-8 max-w-[1400px] mx-auto">
                    {integrations.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="aspect-square bg-[#1A1A1A] border border-gray-dark rounded-lg flex flex-col items-center justify-center p-6 group cursor-default relative z-10 transition-all hover:bg-rich-black"
                            whileHover={{ scale: 1.05, borderColor: '#FFB800', boxShadow: '0 0 20px rgba(255, 184, 0, 0.1)' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.02 }}
                        >
                            <tool.icon className="text-[#A0A0A0] group-hover:text-yellow transition-colors w-10 h-10 mb-3" strokeWidth={1.5} />
                            <span className="text-[10px] uppercase font-bold text-[#737373] group-hover:text-white transition-colors tracking-wider">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-20">
                    <button className="bg-transparent border border-gray-dark text-white hover:border-yellow px-8 py-4 rounded font-bold uppercase tracking-wide transition-all hover:bg-yellow/10">
                        View Integration Library
                    </button>
                </div>
            </div>
        </section>
    );
};
export default IntegrationGrid;
