import React from 'react';
import Hero from './components/Hero';
import FeatureCard from './components/FeatureCard';
import IntegrationGrid from './components/IntegrationGrid';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { ArrowRight, Waves, Activity, Network } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-yellow selection:text-black">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gray-dark/50">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-5 h-5 bg-yellow transform rotate-45"></div>
            <span className="text-white font-bold text-lg tracking-tight">Spartan Flow</span>
          </div>
          <button className="hidden md:flex bg-transparent text-yellow border border-yellow/50 px-5 py-2 rounded text-sm font-semibold hover:bg-yellow hover:text-black transition-all">
            Book a Demo
          </button>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Featured Work Section */}
        <section className="py-24 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="mb-20">
              <h2 className="text-4xl md:text-[56px] font-bold text-white mb-6 relative inline-block pb-2">
                Featured Work
                <span className="absolute bottom-0 left-0 w-24 h-1 bg-yellow"></span>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard
                category="SPOTLIGHT"
                title="AI Voice Agent for Home Services"
                description="Automated booking and scheduling system handling 300+ calls daily with near-human latency."
                metric="90%"
                subMetric="Time Reduction"
                tags={['VAPI', 'MAKE.COM', 'OPENAI']}
                visual={
                  <div className="text-yellow opacity-80 flex flex-col items-center gap-2">
                    <Waves size={48} />
                  </div>
                }
              />
              <FeatureCard
                category="NEW"
                title="Multi-Agent Revenue System"
                description="Orchestrated 5 specialized AI agents to handle prospecting, enrichment, and outreach."
                metric="18x"
                subMetric="Revenue Growth"
                tags={['N8N', 'GMAIL', 'APOLLO']}
                visual={
                  <div className="text-yellow opacity-80 flex flex-col items-center gap-2">
                    <Network size={48} />
                  </div>
                }
              />
              <FeatureCard
                category="ENTERPRISE"
                title="CRM Workflow Automation"
                description="Complete bi-directional sync between Salesforce, HubSpot, and custom databases."
                metric="127%"
                subMetric="ROI Increase"
                tags={['SALESFORCE', 'HUBSPOT', 'SQL']}
                visual={
                  <div className="text-yellow opacity-80 flex flex-col items-center gap-2">
                    <Activity size={48} />
                  </div>
                }
              />
            </div>

            <div className="mt-20 flex justify-center">
              <button className="text-yellow text-base font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all hover:bg-yellow/10 px-6 py-3 rounded">
                View All Projects <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </section>

        <IntegrationGrid />
        <Testimonial />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
