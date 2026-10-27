import React from 'react';
import { ArrowDown, Github, Linkedin, MessageSquare, Mail, Check, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onCopyEmail, emailCopied }) => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" id="sobre">
      {/* Subtle ambient lighting effect in the background */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-cyan-600/10 blur-[130px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-indigo-600/10 blur-[120px] rounded-full pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Screen 2-Column Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Typographic Hierarchy & Actions */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status & Kicker */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-800/40 px-3 py-1.5 rounded-md backdrop-blur-md">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{PERSONAL_INFO.availability}</span>
              <span className="text-cyan-700">·</span>
              <span className="text-slate-400">{PERSONAL_INFO.location}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] text-balance">
              Engenharia de software com foco em{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                performance, escala e clareza.
              </span>
            </h1>

            {/* Bio Prose */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Olá, sou <span className="font-semibold text-white">{PERSONAL_INFO.name}</span>. Desenvolvo sistemas robustos de ponta a ponta — desde arquiteturas de microsserviços e bancos de dados transacionais até interfaces web refinadas e reativas.
            </p>

            {/* Primary & Secondary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#projetos"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-lg shadow-cyan-500/20 active:scale-95"
              >
                <span>Explorar Projetos</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-medium text-slate-200 bg-slate-900/90 hover:bg-slate-850 hover:text-white border border-white/10 rounded-lg transition-all hover:border-cyan-500/40 active:scale-95"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" />
                <span>WhatsApp Direto</span>
              </a>

              <button
                type="button"
                onClick={onCopyEmail}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-300 bg-slate-900/60 hover:bg-slate-800 border border-white/10 rounded-lg transition-all hover:text-white active:scale-95"
                title="Copiar email para área de transferência"
              >
                {emailCopied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-300 text-xs">Copiado</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-slate-400" />
                    <span className="text-xs">Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Proof Channels */}
            <div className="pt-3 flex items-center gap-4 text-xs text-slate-400">
              <span className="text-slate-500">Conecte-se:</span>
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-slate-700">·</span>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>Email</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Container & Portrait */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md aspect-square rounded-2xl p-2 bg-gradient-to-b from-white/10 via-white/5 to-transparent border border-white/10 shadow-2xl shadow-black/60 group">
              {/* Corner accent glow */}
              <div
                className="absolute -top-3 -right-3 w-28 h-28 bg-cyan-500/20 rounded-full blur-2xl group-hover:bg-cyan-500/30 transition-all pointer-events-none"
                aria-hidden="true"
              />

              {/* Portrait image container with measured contrast scrim */}
              <div className="relative w-full h-full rounded-xl overflow-hidden bg-slate-900 border border-white/10">
                <img
                  src={PERSONAL_INFO.avatarUrl}
                  alt={`Retrato profissional de ${PERSONAL_INFO.name}`}
                  className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="eager"
                />
                {/* Subtle bottom gradient for readability */}
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent">
                  <p className="text-sm font-semibold text-white">{PERSONAL_INFO.name}</p>
                  <p className="text-xs text-slate-300 font-mono">Full Stack Engineer · TypeScript & Node</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width KPI / Metrics Strip (Placed below the 2-column hero split) */}
        <div className="mt-14 pt-8 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {PERSONAL_INFO.stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tabular-nums tracking-tight bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
