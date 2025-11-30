import { Button } from "@/components/ui/button";

type Category = "all" | "AUTOMATION" | "AI PRODUCT" | "RESEARCH";

interface ProjectFilterProps {
  activeFilter: Category;
  onFilterChange: (filter: Category) => void;
}

const filters: { value: Category; label: string }[] = [
  { value: "all", label: "All" },
  { value: "AUTOMATION", label: "Automation" },
  { value: "AI PRODUCT", label: "AI Products" },
  { value: "RESEARCH", label: "Research" },
];

export default function ProjectFilter({ activeFilter, onFilterChange }: ProjectFilterProps) {
  return (
    <div className="flex flex-wrap gap-3 mb-10" role="group" aria-label="Filter projects">
      {filters.map((filter) => (
        <Button
          key={filter.value}
          variant={activeFilter === filter.value ? "default" : "outline"}
          size="sm"
          className={`rounded-none font-mono text-xs uppercase tracking-wider ${
            activeFilter === filter.value 
              ? "gradient-primary border-0" 
              : "border-border hover:border-primary hover:text-primary"
          }`}
          onClick={() => onFilterChange(filter.value)}
          data-testid={`filter-${filter.value.toLowerCase().replace(' ', '-')}`}
        >
          {filter.label}
        </Button>
      ))}
    </div>
  );
}
