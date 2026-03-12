import { Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
    return (
        <footer className="bg-gray-900 pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8 mb-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <Link href="/">
                            <a className="text-xl font-heading font-bold text-white tracking-tight hover:opacity-80 transition-opacity mb-4 inline-block">
                                Spartanflow
                            </a>
                        </Link>
                        <p className="text-sm text-gray-400 mb-5 max-w-xs leading-relaxed">
                            B2B appointment setting for growth-focused companies. We fill your pipeline with qualified decision-makers.
                        </p>
                        <a
                            href="mailto:hello@spartanflow.com"
                            className="inline-flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                        >
                            <Mail size={14} />
                            hello@spartanflow.com
                        </a>
                    </div>

                    {/* Column 2: Product */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                            Product
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#how-it-works" className="text-gray-400 hover:text-white transition-colors">How It Works</a></li>
                            <li><a href="#results" className="text-gray-400 hover:text-white transition-colors">Results</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Resources */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                            Resources
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
                            <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Book a Strategy Call</a></Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Company */}
                    <div>
                        <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-5">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link href="/contact"><a className="text-gray-400 hover:text-white transition-colors">Contact Us</a></Link></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Spartan Flow. All rights reserved.</p>
                    <div className="flex gap-4">
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="LinkedIn">
                            <Linkedin size={16} />
                        </a>
                        <a href="#" className="text-gray-500 hover:text-white transition-colors" aria-label="Twitter">
                            <Twitter size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
