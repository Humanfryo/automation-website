import React from 'react';
import { motion } from 'framer-motion';
import { SiSalesforce, SiHubspot, SiGooglecalendar, SiCalendly } from 'react-icons/si';
import { BsCalendarEvent } from 'react-icons/bs'; // Proxy for Cal.com
import { Mail } from 'lucide-react';

const integrations = [
    { name: 'Calendly', icon: SiCalendly },
    { name: 'Cal.com', icon: BsCalendarEvent },
    { name: 'Google Calendar', icon: SiGooglecalendar },
    { name: 'Salesforce', icon: SiSalesforce },
    { name: 'HubSpot', icon: SiHubspot },
    { name: 'Outlook', icon: Mail },
];

const IntegrationGrid = () => {
    return (
        <section className="py-24 bg-black relative border-t border-gray-dark border-b">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-20">
                    <h2 className="text-4xl md:text-[56px] font-bold text-white mb-6">
                        Integrates with Your <span className="text-yellow">Calendar & CRM</span>
                    </h2>
                    <p className="text-xl text-[#A0A0A0] mt-4 font-medium">
                        We work with the tools you already use. No complicated setup required.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 max-w-[1200px] mx-auto">
                    {integrations.map((tool, index) => (
                        <motion.div
                            key={index}
                            className="aspect-square bg-[#1A1A1A] border border-gray-dark rounded-lg flex flex-col items-center justify-center p-6 group cursor-default relative z-10 transition-all hover:bg-rich-black hover:border-yellow"
                            whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(255, 184, 0, 0.1)' }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <tool.icon className="text-[#A0A0A0] group-hover:text-yellow transition-colors w-12 h-12 mb-4" />
                            <span className="text-sm font-bold text-[#737373] group-hover:text-white transition-colors tracking-wider">{tool.name}</span>
                        </motion.div>
                    ))}
                </div>

                <p className="mt-16 text-[#A0A0A0] text-sm">
                    Calendar link integration included in all plans. Full CRM integration available in Enterprise tier.
                </p>
            </div>
        </section>
    );
};
export default IntegrationGrid;
