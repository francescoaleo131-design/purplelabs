import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function PortfolioSection() {
  return (
    /* Aggiunto 'pt-24 md:pt-32' per dare spazio sotto l'header fisso.
       Questo evita che i titoli finiscano sotto la barra di navigazione.
    */
    <section className="py-24 md:py-32 bg-black text-white w-full">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 md:mb-20">
          I nostri <span className="text-purple-400">lavori</span>
        </h2>
        
        {/* Grid responsive: 
            - 1 colonna su mobile (di default)
            - 2 colonne su tablet (md)
            - 3 colonne su desktop (lg)
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="w-full flex justify-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}