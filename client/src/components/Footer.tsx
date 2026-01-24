import React from 'react';
import { Linkedin, Twitter, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-dark pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-yellow transform rotate-45"></div>
              <span className="text-white font-bold text-xl tracking-tight">Spartan Flow</span>
            </div>
            <p className="text-white font-bold text-sm mb-6 leading-relaxed">
              Appointment Setting for Industrial Companies
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-[#A0A0A0] hover:text-yellow transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="text-[#A0A0A0] hover:text-yellow transition-colors"><Twitter size={20} /></a>
              <a href="#" className="text-[#A0A0A0] hover:text-yellow transition-colors"><Youtube size={20} /></a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Professional Setup</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Rapid Start</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Enterprise</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#how-it-works" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">How It Works</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Industries We Serve</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">FAQ</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">About Us</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Terms of Service</a></li>
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Industries</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Industrial Equipment</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Precision Parts</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Chemical Manufacturing</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Packaging & Distribution</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Automotive Parts</a></li>
              <li><a href="#" className="text-[#A0A0A0] hover:text-yellow text-sm transition-colors">Supply Chain</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-dark flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-[#555] text-xs">
            © 2024 SpartanFlow. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[#555] text-xs font-bold uppercase tracking-widest">
            Powered by Embarqi
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-[#555] hover:text-white text-xs transition-colors">Privacy</a>
            <a href="#" className="text-[#555] hover:text-white text-xs transition-colors">Terms</a>
            <a href="#" className="text-[#555] hover:text-white text-xs transition-colors">Cookies</a>
          </div>
        </div>

        <div className="mt-8 text-center max-w-3xl mx-auto">
          <p className="text-[#444] text-xs leading-relaxed">
            SpartanFlow specializes in appointment setting for mid-market industrial companies ($10M-$100M revenue)—manufacturing, distribution, and supply chain. We generate 8-12 qualified meetings per month so your sales team can focus on closing deals.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
