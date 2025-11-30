import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
      whileHover={{ y: -4 }}
      className="h-full"
    >
      <Card 
        className="h-full overflow-hidden border-border hover:border-primary transition-colors duration-300 group"
        data-testid={`project-card-${project.id}`}
      >
        <div className="relative aspect-video overflow-hidden">
          {project.image ? (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-primary/40" />
              </div>
            </div>
          )}
          <Badge 
            variant="secondary" 
            className="absolute top-3 left-3 bg-primary/20 text-primary border-0 text-xs"
          >
            {project.category}
          </Badge>
        </div>
        
        <CardContent className="p-5 space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="space-y-1">
            <div className="font-mono text-xl font-bold text-primary">
              {project.primaryMetric}
            </div>
            {project.secondaryMetric && (
              <div className="text-xs text-muted-foreground">
                {project.secondaryMetric}
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-2">
            {project.techStack.slice(0, 4).map((tech) => (
              <span 
                key={tech}
                className="text-xs px-2 py-1 border border-border rounded text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          {project.cta && (
            <Button 
              variant="ghost" 
              className="w-full justify-between text-primary hover:text-primary hover:bg-primary/10 px-0"
              onClick={handleCTAClick}
              data-testid={`cta-${project.id}`}
            >
              {project.cta}
              {project.link ? (
                <ExternalLink className="w-4 h-4" />
              ) : (
                <ArrowRight className="w-4 h-4" />
              )}
            </Button>
          )}
        </CardContent>
      </Card>
    </motion.div>
  );
}
