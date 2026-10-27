import React, { useState } from 'react';
import { Terminal, Database, Layout, Server, Wrench, CheckCircle } from 'lucide-react';
import { TECH_CATEGORIES } from '../data/portfolioData';

export const TechStackSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'frontend':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'backend':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'devops':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      default:
        return <Terminal className="w-5 h-5 text-cyan-400" />;
    }
  };

  const displayedCategories = selectedCategory === 'all'
    ? TECH_CATEGORIES
    : TECH_CATEGORIES.filter((c) => c.id === selectedCategory);

  return (
    <section className="py-20 relative bg-slate-950/40 border-y border-white/5" id="tecnologias">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <Terminal className="w-3.5 h-3.5" />
              <span>Competências Técnicas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Tecnologias Dominadas & Arquitetura
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Foco em ferramentas de alta confiabilidade para engenharia de ponta a ponta com TypeScript, ecossistema Node.js e infraestrutura moderna.
            </p>
          </div>

          {/* Quick Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-900/80 border border-white/10 rounded-xl">
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                selectedCategory === 'all'
                  ? 'bg-cyan-500 text-slate-950 font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Todas
            </button>
            {TECH_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-slate-950 font-semibold'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {cat.title.split('&')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedCategories.map((category) => (
            <div
              key={category.id}
              className="glass-panel rounded-2xl p-6 sm:p-8 space-y-6 border border-white/10"
            >
              {/* Category Title & Icon */}
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 shrink-0">
                  {getCategoryIcon(category.id)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {category.title}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Table List (Tabular Clean Rows) */}
              <div className="divide-y divide-white/5 border-t border-white/10">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 group hover:bg-white/[0.02] px-2 -mx-2 rounded-lg transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-sm font-semibold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 pl-5 leading-normal">
                        {skill.context}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-auto shrink-0 pl-5 sm:pl-0">
                      <span className="text-[11px] font-mono text-slate-400">
                        {skill.yearsOfExp}
                      </span>
                      <span className="text-[11px] font-medium text-cyan-400 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/30">
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
