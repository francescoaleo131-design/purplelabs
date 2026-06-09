import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export function PortfolioSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16">
          I nostri <span className="text-purple-400">lavori</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}