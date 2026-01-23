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
    <div className="bg-black min-h-screen font-sans selection:bg-yellow selection:text-black text-lg">
      {/* Navbar with Sticky "Book a Demo" */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-xl border-b border-gray-dark/50">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 bg-yellow transform rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_15px_#FFB800]"></div>
            <span className="text-white font-bold text-xl tracking-tight">Spartan Flow</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-[#A0A0A0]">
              <a href="#" className="hover:text-yellow transition-colors">Platform</a>
              <a href="#" className="hover:text-yellow transition-colors">Solutions</a>
              <a href="#" className="hover:text-yellow transition-colors">Pricing</a>
            </div>
            <button className="hidden md:flex bg-yellow text-black border border-yellow px-6 py-2.5 rounded font-bold hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
              Book a Demo
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />

        {/* Featured Work Section */}
        <section className="py-32 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <h2 className="text-5xl md:text-[64px] font-bold text-white mb-6 relative inline-block pb-2">
                  Featured Work
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow origin-left transform scale-x-50"></span>
                </h2>
                <p className="text-[#A0A0A0] text-xl max-w-xl">
                  See how enterprise leaders are using Spartan Flow to automate complex revenue workflows.
                </p>
              </div>
              <button className="text-yellow text-base font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                View All Case Studies <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <FeatureCard
                category="SPOTLIGHT"
                title="AI Voice Agent for Home Services"
                description="Automated booking scheduling handling 300+ calls daily."
                metric="90%"
                subMetric="Time Reduction"
                tags={['VAPI', 'MAKE.COM', 'OPENAI']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Waves size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
                  </div>
                }
              />
              <FeatureCard
                category="NEW"
                title="Multi-Agent Revenue System"
                description="5 specialized AI agents handling prospecting & outreach."
                metric="18x"
                subMetric="Revenue Growth"
                tags={['N8N', 'GMAIL', 'APOLLO']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Network size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
                  </div>
                }
              />
              <FeatureCard
                category="ENTERPRISE"
                title="CRM Workflow Automation"
                description="Bi-directional sync between Salesforce & HubSpot."
                metric="127%"
                subMetric="ROI Increase"
                tags={['SALESFORCE', 'HUBSPOT', 'SQL']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Activity size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
                  </div>
                }
              />
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
