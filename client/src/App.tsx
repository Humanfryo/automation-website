import React from 'react';
import { Route, Switch } from 'wouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookCallButton from './components/BookCallButton';
import Home from './pages/Home';
import CaseStudyPrecisionParts from './pages/CaseStudyPrecisionParts';
import CaseStudyPackagingDistributor from './pages/CaseStudyPackagingDistributor';
import CaseStudyChemicalDistributor from './pages/CaseStudyChemicalDistributor';
import Contact from './pages/Contact';

const App = () => {
  return (
    <div className="bg-black min-h-screen font-sans selection:bg-primary selection:text-black">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/case-studies/precision-parts-47-meetings-90-days" component={CaseStudyPrecisionParts} />
        <Route path="/case-studies/packaging-distributor-q2-pipeline-6-weeks" component={CaseStudyPackagingDistributor} />
        <Route path="/case-studies/chemical-distributor-6-month-growth-engine" component={CaseStudyChemicalDistributor} />
        <Route path="/contact" component={Contact} />

        {/* Fallback to Home for unknown routes */}
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
