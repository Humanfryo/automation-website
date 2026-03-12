import React from 'react';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import PainPoints from '../components/PainPoints';
import HowItWorksVideo from '../components/HowItWorksVideo';
import TechnologyDifferentiator from '../components/TechnologyDifferentiator';
import HowItWorks from '../components/HowItWorks';
import ClientResults from '../components/ClientResults';
import Guarantee from '../components/Guarantee';
import Testimonials from '../components/Testimonials';
import FounderSection from '../components/FounderSection';
import Integrations from '../components/Integrations';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

const Home = () => {
  React.useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = anchor.getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Hero onOpenLeadMagnet={() => {}} />
      <TrustBar />
      <PainPoints />
      <HowItWorksVideo />
      <HowItWorks />
      <TechnologyDifferentiator />
      <ClientResults />
      <Guarantee />
      <Testimonials />
      <FounderSection />
      <Integrations />
      <FAQ />
      <FinalCTA />
    </div>
  );
};

export default Home;
