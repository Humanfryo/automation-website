import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-dark pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-6 h-6 bg-yellow transform rotate-45"></div>
              <span className="text-white font-bold text-xl tracking-tight">Spartan Flow</span>
            </div>
            <p className="text-gray-medium text-sm mb-6 max-w-xs leading-relaxed">
              Enterprise AI Automation for modern revenue teams. Scalable, secure, and ready for compliant workflows.
            </p>
            <div className="text-gray-medium text-xs">
              Powered by Embarqi
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-semibold mb-6">Product</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Enterprise</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-lightest hover:text-yellow text-sm transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Stay Updated</h4>
            <div className="flex flex-col gap-3">
              <input type="email" placeholder="Email address" className="bg-rich-black border border-gray-dark px-4 py-2 text-sm text-white focus:border-yellow outline-none rounded-sm transition-colors" />
              <button className="bg-yellow text-black text-sm font-bold py-2 rounded-sm hover:bg-yellow-light transition-colors">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-dark flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-medium text-xs">
            © 2024 Spartan Flow. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-gray-medium hover:text-white text-xs transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-medium hover:text-white text-xs transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-medium hover:text-white text-xs transition-colors">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
