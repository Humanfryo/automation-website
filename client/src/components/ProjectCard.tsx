import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";

export interface Project {
  id: string;
  category: "AUTOMATION" | "AI PRODUCT" | "RESEARCH";
  title: string;
  description: string;
  primaryMetric: string;
  secondaryMetric?: string;
  techStack: string[];
  image?: string;
  cta?: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const handleCTAClick = () => {
    if (project.link) {
      window.open(project.link, '_blank');
    } else {
      console.log(`CTA clicked for: ${project.title}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="h-full group"
    >
      <div 
        className="h-full bg-card border border-border relative overflow-hidden transition-all duration-300 hover:border-primary/50"
        data-testid={`project-card-${project.id}`}
      >
        <div className="absolute top-0 left-0 z-10">
          <div className="bg-primary text-primary-foreground text-[10px] uppercase tracking-wider font-mono px-3 py-1.5">
            {project.category}
          </div>
        </div>

        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
              <div className="w-20 h-20 border border-primary/30 flex items-center justify-center">
                <div className="w-8 h-8 bg-primary/20" />
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
        </div>
        
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-lg font-heading font-bold text-foreground mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div className="space-y-1 pt-2 border-t border-border">
            <div className="font-mono text-2xl font-bold text-primary tracking-tight">
              {project.primaryMetric}
            </div>
            {project.secondaryMetric && (
              <div className="text-xs text-muted-foreground font-mono">
                {project.secondaryMetric}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="text-[10px] uppercase tracking-wider px-2 py-1 border border-border text-muted-foreground font-mono"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.cta && (
            <Button 
              variant="ghost" 
              className="w-full justify-between text-primary hover:text-primary hover:bg-primary/5 px-0 mt-2 rounded-none"
              onClick={handleCTAClick}
              data-testid={`cta-${project.id}`}
            >
              <span className="font-mono text-sm uppercase tracking-wider">{project.cta}</span>
              {project.link ? (
                <ExternalLink className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Button>
          )}
        </div>

        <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
}
