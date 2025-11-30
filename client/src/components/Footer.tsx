import { Download, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10 mb-20">
      <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground font-mono">
          &copy; 2024 Hari Rajashekar
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
            onClick={() => window.open('https://linkedin.com/in/harirajashekar', '_blank')}
            data-testid="footer-linkedin"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="text-muted-foreground hover:text-primary hover:bg-transparent rounded-none"
            onClick={() => window.open('https://github.com/harirajashekar', '_blank')}
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
        </div>
      </div>
    </footer>
  );
}
