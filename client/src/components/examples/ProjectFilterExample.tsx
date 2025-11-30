import { useState } from 'react';
import ProjectFilter from '../ProjectFilter';

export default function ProjectFilterExample() {
  const [activeFilter, setActiveFilter] = useState<"all" | "AUTOMATION" | "AI PRODUCT" | "RESEARCH">("all");
  
  return (
    <div className="p-4">
      <ProjectFilter activeFilter={activeFilter} onFilterChange={setActiveFilter} />
      <p className="text-muted-foreground text-sm mt-4">
        Active filter: {activeFilter}
      </p>
    </div>
  );
}
