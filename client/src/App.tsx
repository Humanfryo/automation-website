import Engine from "./components/Engine";
import FAQ from "./components/FAQ";
import FinalCTA from "./components/FinalCTA";
import Footer from "./components/Footer";
import Founders from "./components/Founders";
import Guarantee from "./components/Guarantee";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Integrations from "./components/Integrations";
import Nav from "./components/Nav";
import Problem from "./components/Problem";
import Results from "./components/Results";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Engine />
        <Results />
        <Guarantee />
        <Testimonials />
        <Founders />
        <Integrations />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
