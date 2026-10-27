import React, { useEffect } from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Activity, AlertCircle } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-project-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-white/15 rounded-2xl shadow-2xl text-slate-100 my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky Header with Close Button */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-6 py-4 bg-slate-900/95 backdrop-blur-md border-b border-white/10">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider font-mono text-cyan-400 font-semibold">
              Detalhamento Técnico de Projeto
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs text-slate-400 font-mono capitalize">
              {project.category}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            aria-label="Fechar detalhes do projeto (Esc)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          {/* Main Title & Tagline */}
          <div>
            <h2
              id="modal-project-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight"
            >
              {project.title}
            </h2>
            <p className="mt-2 text-base text-slate-300 leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Project Screenshot / Visual Banner */}
          <div className="relative rounded-xl overflow-hidden border border-white/10 bg-slate-950 aspect-video group">
            <img
              src={project.imageUrl}
              alt={`Interface do projeto ${project.title}`}
              className="w-full h-full object-cover object-top"
              referrerPolicy="no-referrer"
            />
            {/* Impact Metric Banner */}
            <div className="absolute bottom-3 left-3 right-3 sm:right-auto px-4 py-2.5 rounded-lg bg-slate-950/90 backdrop-blur-md border border-cyan-500/30 text-xs text-slate-200 flex items-center gap-2">
              <Activity className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="font-mono font-medium text-cyan-200">
                {project.metrics}
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors shadow-md shadow-cyan-500/20"
              >
                <span>Acessar Demonstração</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 hover:text-white border border-white/10 rounded-lg transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Ver Código no GitHub</span>
              </a>
            )}
          </div>

          {/* Description & Overview */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Layers className="w-4 h-4 text-cyan-400" />
              <span>Visão Geral do Sistema</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Architecture Deep Dive */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-white/10 space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider flex items-center gap-2">
              <Cpu className="w-4 h-4 text-indigo-400" />
              <span>Decisões e Arquitetura de Software</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.architectureDetails}
            </p>
          </div>

          {/* Challenges Solved */}
          <div className="p-5 rounded-xl bg-slate-950/70 border border-amber-500/20 space-y-2">
            <h3 className="text-sm font-semibold text-amber-300 uppercase tracking-wider flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-amber-400" />
              <span>Desafio Crítico de Engenharia Superado</span>
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {project.challengesSolved}
            </p>
          </div>

          {/* Key Features List */}
          <div className="space-y-3">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
              Funcionalidades Entregues
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/[0.03] p-3 rounded-lg border border-white/5"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies Used (Clean unboxed tags) */}
          <div className="space-y-3 pt-2 border-t border-white/10">
            <h3 className="text-xs uppercase tracking-wider font-semibold text-slate-400">
              Stack Tecnológica Empregada
            </h3>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-xs text-slate-300">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="font-mono text-cyan-300 bg-cyan-950/40 px-2 py-1 rounded border border-cyan-800/30">
                    {tech}
                  </span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-slate-600 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-end px-6 py-4 bg-slate-900/95 border-t border-white/10">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-lg transition-colors"
          >
            Fechar Janela
          </button>
        </div>
      </div>
    </div>
  );
};
