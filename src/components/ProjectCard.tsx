"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function ProjectCard({ project }: { project: any }) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group relative bg-black/40 border border-purple-500/10 rounded-2xl p-1 overflow-hidden backdrop-blur-md"
    >
      {/* Effetto bordo brillante all'hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-fuchsia-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative bg-black rounded-xl overflow-hidden">
        <div className="relative h-48 w-full overflow-hidden">
          <Image 
            src={project.image} 
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">{project.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag: string) => (
              <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-purple-300 bg-purple-950/30 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}