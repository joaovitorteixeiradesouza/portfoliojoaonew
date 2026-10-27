import React, { useState } from 'react';
import { ArrowUpRight, Github, Code2, Eye } from 'lucide-react';
import { Project, PROJECTS } from '../data/portfolioData';

interface ProjectsSectionProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todos os Projetos' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'frontend', label: 'Frontend UI' },
    { id: 'api', label: 'Segurança & Auth' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section className="py-20 relative" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <Code2 className="w-3.5 h-3.5" />
              <span>Portfólio de Software</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Projetos de Engenharia & Aplicações
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Sistemas desenvolvidos com foco em robustez estrutural, tolerância a falhas, contratos type-safe e código de fácil manutenção.
            </p>
          </div>

          {/* Interactive Filter Tabs (Segmented control) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/90 border border-white/10 rounded-xl backdrop-blur-md self-start md:self-auto">
            {categories.map((cat) => {
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                    isActive
                      ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, idx) => (
            <article
              key={project.id}
              className={`group flex flex-col justify-between rounded-2xl overflow-hidden glass-panel glass-panel-hover border border-white/10 transition-all duration-300 ${
                idx === 0 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div>
                {/* Visual Thumbnail */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 border-b border-white/10 cursor-pointer"
                  onClick={() => onSelectProject(project)}
                >
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Hover Overlay Quick Action */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-slate-950/50 backdrop-blur-xs">
                    <span className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-slate-900/90 border border-cyan-500/50 rounded-lg shadow-xl">
                      <Eye className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Ver Arquitetura Completa</span>
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 space-y-3">
                  {/* Clean unboxed metadata with dot separators (ZERO-PILL RULE) */}
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                    <span className="text-cyan-400 capitalize">{project.category}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span>{project.technologies[0]}</span>
                    <span aria-hidden="true" className="text-slate-600">·</span>
                    <span className="text-emerald-400 truncate">{project.metrics.split('·')[0]}</span>
                  </div>

                  <h3
                    className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors cursor-pointer"
                    onClick={() => onSelectProject(project)}
                  >
                    {project.title}
                  </h3>

                  <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">
                    {project.tagline}
                  </p>
                </div>
              </div>

              {/* Technologies list & footer buttons */}
              <div className="p-6 pt-0 space-y-4">
                {/* Tech text list */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400 font-mono">
                  {project.technologies.slice(0, 4).map((tech, i) => (
                    <span key={tech} className="text-slate-300">
                      {tech}
                      {i < Math.min(project.technologies.length, 4) - 1 ? ' ·' : ''}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="text-slate-500">
                      +{project.technologies.length - 4} mais
                    </span>
                  )}
                </div>

                {/* Interactive Card Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-3">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
                  >
                    <span>Ficha Técnica</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                        title="Ver Repositório no GitHub"
                        aria-label={`GitHub do ${project.title}`}
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-white/10 transition-colors"
                        title="Acessar Demonstração"
                        aria-label={`Demo de ${project.title}`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
