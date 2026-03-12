import React from 'react';
import CalEmbed from "@/components/CalEmbed";
import ContactInfo from "@/components/ContactInfo";

export default function Contact() {
  React.useEffect(() => {
    document.title = "Book a Strategy Call | Spartan Flow - Schedule Your Free Consultation";
  }, []);

  return (
    <main className="min-h-screen bg-white py-24 px-4">
      <a
        href="#contact-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded"
      >
        Skip to contact options
      </a>

      <div className="max-w-3xl mx-auto" id="contact-content">
        <CalEmbed />
        <ContactInfo />
      </div>
    </main>
  );
}
