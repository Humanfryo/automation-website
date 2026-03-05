import React, { useState } from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import HowItWorksVideo from '../components/HowItWorksVideo';
import PainPoints from '../components/PainPoints';
import TechnologyDifferentiator from '../components/TechnologyDifferentiator';
import HowItWorks from '../components/HowItWorks';
import ClientResults from '../components/ClientResults';
import Guarantee from '../components/Guarantee';
import Qualification from '../components/Qualification';
import Testimonials from '../components/Testimonials';
import FounderSection from '../components/FounderSection';
import Integrations from '../components/Integrations';
import LeadMagnetSection from '../components/LeadMagnetSection';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';
import LeadMagnetModal from '../components/LeadMagnetModal';

const Home = () => {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [leadMagnetSource, setLeadMagnetSource] = useState("Direct");

  const handleOpenLeadMagnet = (source: string) => {
    setLeadMagnetSource(source);
    setIsLeadMagnetOpen(true);
  };

  React.useEffect(() => {
    // Add smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({
              behavior: 'smooth'
            });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* 1. Hero */}
      <Hero onOpenLeadMagnet={() => handleOpenLeadMagnet("Hero CTA")} />

      {/* How It Works Video (New) */}
      <HowItWorksVideo />

      <TrustBar />

      {/* 2. Pain Points */}
      <PainPoints />

      {/* 3. Tech Differentiator */}
      <TechnologyDifferentiator />

      {/* 4. Client Results / Case Studies (Moved UP - Proof First) */}
      <ClientResults />

      {/* 5. How It Works (Moved DOWN) */}
      <HowItWorks />

      {/* 6. Guarantee (Moved UP - De-risk) */}
      <Guarantee />

      {/* 7. Qualification (Moved UP - Filter) */}
      <Qualification />

      {/* 8. Testimonials (Moved DOWN - Validation) */}
      <Testimonials />

      {/* 9. Founder Section (Moved DOWN - Credibility) */}
      <FounderSection />

      {/* 10. Integrations */}
      <Integrations />

      {/* 11. Lead Magnet (PDF Download) Section */}
      <LeadMagnetSection onOpenModal={() => handleOpenLeadMagnet("Mid-Page CTA")} />

      {/* 12. FAQ (New) */}
      <FAQ />

      {/* 13. Final CTA */}
      <FinalCTA onOpenLeadMagnet={() => handleOpenLeadMagnet("Final CTA")} />

      <LeadMagnetModal
        isOpen={isLeadMagnetOpen}
        onClose={() => setIsLeadMagnetOpen(false)}
        source={leadMagnetSource}
      />
    </div>
  );
};

export default Home;
