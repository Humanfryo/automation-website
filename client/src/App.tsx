import React from 'react';
import { Route, Switch } from 'wouter';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import BookCallButton from './components/BookCallButton';
import Home from './pages/Home';
import CaseStudyChannelFusion from './pages/CaseStudyChannelFusion';
import CaseStudyPrecisionNetworks from './pages/CaseStudyPrecisionNetworks';
import CaseStudyAustinAnswerPro from './pages/CaseStudyAustinAnswerPro';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const App = () => {
  return (
    <div className="bg-white min-h-screen font-sans">
      <Navbar />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/case-studies/channel-fusion-14-demos-90-days" component={CaseStudyChannelFusion} />
        <Route path="/case-studies/precision-networks-first-predictable-pipeline" component={CaseStudyPrecisionNetworks} />
        <Route path="/case-studies/austin-answer-pro-voice-ai-agent" component={CaseStudyAustinAnswerPro} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Blog} />

        {/* Fallback to Home for unknown routes */}
        <Route component={Home} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
