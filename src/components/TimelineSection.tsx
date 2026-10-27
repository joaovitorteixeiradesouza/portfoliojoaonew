import React, { useState } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';
import { TIMELINE_ITEMS } from '../data/portfolioData';

export const TimelineSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  const filteredItems = TIMELINE_ITEMS.filter((item) => item.type === activeTab);

  return (
    <section className="py-20 relative" id="trajetoria">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Trajetória e Formação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Histórico Profissional & Acadêmico
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-400 max-w-2xl">
              Caminho trilhado em desenvolvimento de software, entregas de impacto em produção e constante especialização em engenharia de sistemas.
            </p>
          </div>

          {/* Interactive Toggle between Experience and Education */}
          <div className="inline-flex p-1 bg-slate-900 border border-white/10 rounded-xl">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'experience'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experiência Profissional</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 text-xs font-medium rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Formação & Certificados</span>
            </button>
          </div>
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {filteredItems.map((item, idx) => (
            <div key={item.id} className="relative group">
              {/* Milestone Bullet Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-slate-950 border-2 border-cyan-400 group-hover:scale-125 transition-transform shadow-md shadow-cyan-500/30" />

              {/* Card Container */}
              <div className="glass-panel rounded-2xl p-6 sm:p-8 space-y-4 border border-white/10">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-4">
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {item.roleOrDegree}
                    </h3>
                    <div className="text-sm font-medium text-cyan-400 mt-0.5">
                      {item.companyOrInstitution}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 font-mono">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.period}</span>
                    </span>
                    <span className="text-slate-700">·</span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-500" />
                      <span>{item.location}</span>
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">
                    Principais Conquistas & Entregas:
                  </span>
                  <ul className="space-y-2">
                    {item.highlights.map((highlight, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-3 border-t border-white/5 text-xs text-slate-400 font-mono">
                  <span className="text-slate-500">Stacks:</span>
                  {item.skills.map((skill, sIdx) => (
                    <span key={skill} className="text-slate-300">
                      {skill}
                      {sIdx < item.skills.length - 1 ? ' ·' : ''}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
