import React from 'react';
import { Route, Switch } from 'wouter';
import Footer from './components/Footer';
import Home from './pages/Home';
import CaseStudyPrecisionParts from './pages/CaseStudyPrecisionParts';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-yellow selection:text-black text-lg">
      {/* Navbar with Sticky "Book a Call" */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-xl border-b border-gray-dark/50">
        <div className="container mx-auto px-4 h-24 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer group">
            <a href="/" className="flex items-center gap-3">
              <div className="w-6 h-6 bg-yellow transform rotate-45 group-hover:rotate-180 transition-transform duration-500 shadow-[0_0_15px_#FFB800]"></div>
              <span className="text-white font-bold text-xl tracking-tight">Spartan Flow</span>
            </a>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-widest text-[#A0A0A0]">
              <a href="/#how-it-works" className="hover:text-yellow transition-colors">How It Works</a>
              <a href="#" className="hover:text-yellow transition-colors">Industries We Serve</a>
              <a href="/#results" className="hover:text-yellow transition-colors">Results</a>
            </div>
            <button className="hidden md:flex bg-yellow text-black border border-yellow px-6 py-2.5 rounded font-bold hover:bg-white hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all transform hover:-translate-y-0.5">
              Book a Call
            </button>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path="/" component={Home} />
        <Route path="/case-studies/precision-parts-47-meetings-90-days" component={CaseStudyPrecisionParts} />

        {/* Fallback to Home for unknown routes */}
        <Route component={Home} />
      </Switch>

      <Footer />
    </div>
  );
};

export default App;
