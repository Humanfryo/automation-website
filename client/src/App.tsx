import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeatureCard from './components/FeatureCard';
import IntegrationGrid from './components/IntegrationGrid';
import Testimonial from './components/Testimonial';
import CTASection from './components/CTASection';
import Footer from './components/Footer';
import { ArrowRight, Factory, Wrench, Package } from 'lucide-react';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-yellow selection:text-black text-lg">
      {/* Navbar with Sticky "Book a Call" */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-dark/50">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <div className="w-6 h-6 bg-yellow transform rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_15px_#FFB800]"></div>
            <span className="text-white font-bold text-xl tracking-tight">Spartan Flow</span>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-[#A0A0A0]">
              <a href="#how-it-works" className="hover:text-yellow transition-colors">How It Works</a>
              <a href="#" className="hover:text-yellow transition-colors">Industries We Serve</a>
              <a href="#results" className="hover:text-yellow transition-colors">Results</a>
            </div>
            <button className="hidden md:flex bg-yellow text-black border border-yellow px-6 py-2.5 rounded font-bold hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />

        {/* Featured Work / Client Results Section */}
        <section className="py-32 bg-black relative">
          <div className="container mx-auto px-4">
            <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                <h2 className="text-5xl md:text-[64px] font-bold text-white mb-6 relative inline-block pb-2">
                  Client Results
                  <span className="absolute bottom-1 left-0 w-full h-1 bg-yellow origin-left transform scale-x-50"></span>
                </h2>
                <p className="text-[#A0A0A0] text-xl max-w-xl">
                  See how manufacturing leaders are filling their pipelines with qualified buyers.
                </p>
              </div>
              <button className="text-yellow text-base font-bold uppercase tracking-wide flex items-center gap-2 hover:gap-3 transition-all">
                View All Results <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              <FeatureCard
                category="SPOTLIGHT"
                title="47 Meetings Booked in 90 Days"
                description="Industrial equipment manufacturer went from spending 60% of sales time prospecting to getting 15 qualified meetings per month."
                metric="47 Meetings"
                subMetric="90 Days • $35M Company"
                tags={['INDUSTRIAL EQUIPMENT', 'PRECISION PARTS', 'B2B']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Factory size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
                  </div>
                }
              />
              <FeatureCard
                category="SPOTLIGHT"
                title="Q2 Pipeline Filled in 6 Weeks"
                description="Packaging distributor increased from 2 meetings/month to 12 meetings/month with 85% show rate."
                metric="12 Meetings/Mo"
                subMetric="85% Show Rate • $50M Company"
                tags={['PACKAGING', 'DISTRIBUTION', 'INDUSTRIAL']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Package size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
                  </div>
                }
              />
              <FeatureCard
                category="SPOTLIGHT"
                title="$2M Pipeline Created in 6 Months"
                description="Specialty chemical manufacturer with no formal prospecting process generated 60+ meetings and closed 8 deals."
                metric="$2M Pipeline"
                subMetric="60+ Meetings • $75M Company"
                tags={['CHEMICALS', 'MANUFACTURING', 'SPECIALTY']}
                visual={
                  <div className="text-yellow opacity-90 flex flex-col items-center gap-2">
                    <Wrench size={80} strokeWidth={1} className="drop-shadow-[0_0_15px_rgba(255,184,0,0.5)]" />
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
