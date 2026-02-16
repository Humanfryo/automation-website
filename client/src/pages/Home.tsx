import React, { useState } from 'react';
import Hero from '../components/Hero';
import FounderSection from '../components/FounderSection';
import SocialProof from '../components/SocialProof';
import HowItWorks from '../components/HowItWorks';
import Guarantee from '../components/Guarantee';
import ClientResults from '../components/ClientResults';
import DetailedCaseStudies from '../components/DetailedCaseStudies';
import Testimonials from '../components/Testimonials';
import Integrations from '../components/Integrations';
import Qualification from '../components/Qualification';
import FinalCTA from '../components/FinalCTA';
import LeadMagnetModal from '../components/LeadMagnetModal';
import LeadMagnetSection from '../components/LeadMagnetSection';

const Home = () => {
  const [isLeadMagnetOpen, setIsLeadMagnetOpen] = useState(false);
  const [leadMagnetSource, setLeadMagnetSource] = useState("");

  React.useEffect(() => {
    document.title = "Spartan Flow - Appointment Setting for Industrial Companies | B2B Lead Generation";
  }, []);

  const openLeadMagnet = (source: string) => {
    setLeadMagnetSource(source);
    setIsLeadMagnetOpen(true);
  };

  return (
    <main className="bg-black">
      <Hero onOpenLeadMagnet={() => openLeadMagnet("Hero CTA")} />
      <FounderSection />
      <SocialProof />
      <HowItWorks />
      <Guarantee />
      <ClientResults />
      <DetailedCaseStudies />
      <Testimonials />
      <LeadMagnetSection onOpenModal={() => openLeadMagnet("Mid-Page CTA")} />
      <Integrations />
      <Qualification />
      <FinalCTA />

      <LeadMagnetModal
        isOpen={isLeadMagnetOpen}
        onClose={() => setIsLeadMagnetOpen(false)}
        source={leadMagnetSource}
      />
    </main>
  );
};

export default Home;
