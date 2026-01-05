import CalEmbed from "@/components/CalEmbed";
import ContactInfo from "@/components/ContactInfo";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <main className="min-h-screen py-20 px-4 relative">
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      <a 
        href="#contact-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground"
      >
        Skip to contact options
      </a>

      <div className="max-w-3xl mx-auto relative z-10" id="contact-content">
        <CalEmbed />

        <ContactInfo />
        
        <div className="mt-8">
          <Footer />
        </div>
      </div>
    </main>
  );
}
