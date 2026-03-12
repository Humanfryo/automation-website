import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import BookCallButton from "./BookCallButton";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [location] = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "How It Works", href: "#how-it-works" },
        { name: "Results", href: "#results" },
        { name: "About", href: "#about" },
        { name: "FAQ", href: "#faq" },
    ];

    const handleLinkClick = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3"
                    : "bg-white py-5"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between max-w-6xl">
                {/* Logo */}
                <Link href="/">
                    <a className="text-[1.35rem] font-heading font-bold text-primary-500 tracking-tight hover:opacity-80 transition-opacity">
                        Spartanflow
                    </a>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Link href="/blog">
                        <a className="text-sm font-medium text-gray-600 hover:text-primary-500 transition-colors">
                            Blog
                        </a>
                    </Link>
                    <BookCallButton className="bg-primary-500 text-white hover:bg-primary-600 font-semibold px-5 py-2.5 rounded-lg transition-all text-sm shadow-sm">
                        Book a Strategy Call
                    </BookCallButton>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-gray-700 hover:text-primary-500 transition-colors"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={cn(
                    "fixed inset-0 bg-white z-40 md:hidden flex flex-col items-center justify-center gap-8 transition-transform duration-300 ease-in-out",
                    isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                {navLinks.map((link) => (
                    <a
                        key={link.name}
                        href={link.href}
                        onClick={handleLinkClick}
                        className="text-xl font-heading font-semibold text-gray-800 hover:text-primary-500 transition-colors"
                    >
                        {link.name}
                    </a>
                ))}
                <Link href="/blog">
                    <a
                        onClick={handleLinkClick}
                        className="text-xl font-heading font-semibold text-gray-800 hover:text-primary-500 transition-colors"
                    >
                        Blog
                    </a>
                </Link>
                <div onClick={handleLinkClick}>
                    <BookCallButton className="bg-primary-500 text-white hover:bg-primary-600 font-semibold text-lg px-8 py-3.5 rounded-lg shadow-md">
                        Book a Strategy Call
                    </BookCallButton>
                </div>
            </div>
        </nav>
    );
}
