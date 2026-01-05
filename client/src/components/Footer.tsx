import { Download, Linkedin, Github, Mail } from "lucide-react";
import { SiUpwork } from "react-icons/si";
import { Button } from "@/components/ui/button";

function N8NIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="4" cy="12" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="16" cy="8" r="2" />
      <circle cx="16" cy="16" r="2" />
      <circle cx="21" cy="8" r="2" />
      <circle cx="21" cy="16" r="2" />
      <path d="M6 12h1" />
      <path d="M11 12h2c1 0 2-1 2-2v-2" />
      <path d="M11 12h2c1 0 2 1 2 2v2" />
      <path d="M18 8h1" />
      <path d="M18 16h1" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 mb-20">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; 2026 Hari Rajashekar
        </p>
        
        <div className="flex items-center gap-1">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-transparent font-mono text-xs uppercase tracking-wider rounded-none"
            onClick={() => console.log('Download resume clicked')}
            data-testid="footer-resume"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.open('https://www.linkedin.com/in/hari-rajashekar-81816818a/', '_blank')}
            data-testid="footer-linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.open('https://github.com/Humanfryo', '_blank')}
            data-testid="footer-github"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.location.href = 'mailto:haripxls@gmail.com'}
            data-testid="footer-email"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.open('https://www.upwork.com/freelancers/~0160930c7ee1c74265', '_blank')}
            data-testid="footer-upwork"
            aria-label="Upwork"
          >
            <SiUpwork className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.open('https://n8n.io/creators/hari', '_blank')}
            data-testid="footer-n8n"
            aria-label="N8N Creator Profile"
          >
            <N8NIcon className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </footer>
  );
}
