import React, { useState } from 'react';
import { Mail, MessageSquare, Linkedin, Github, Send, CheckCircle2, Copy, Check, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ContactSectionProps {
  onCopyEmail: () => void;
  emailCopied: boolean;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onCopyEmail, emailCopied }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus('error');
      setErrorMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setStatus('error');
      setErrorMessage('Por favor, insira um endereço de e-mail válido.');
      return;
    }

    setStatus('sending');

    // Simulate reliable dispatch with immediate confirmation
    setTimeout(() => {
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 800);
  };

  return (
    <section className="py-20 relative bg-slate-950/60 border-t border-white/5" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
                <Mail className="w-3.5 h-3.5" />
                <span>Canais Diretos</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Vamos Conversar sobre o seu Projeto?
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Estou aberto a oportunidades como desenvolvedor de sistemas full stack, posições remotas ou consultoria técnica de software. Fique à vontade para me mandar uma mensagem direta ou usar o formulário.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-3 pt-2">
              {/* WhatsApp direct card */}
              <a
                href={PERSONAL_INFO.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-panel glass-panel-hover border border-emerald-500/20 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Resposta Rápida</div>
                    <div className="text-sm font-semibold text-white group-hover:text-emerald-300 transition-colors">
                      WhatsApp Corporativo
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Email direct card */}
              <div className="flex items-center justify-between p-4 rounded-xl glass-panel border border-white/10 group">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs text-slate-400 font-mono">E-mail Profissional</div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm font-semibold text-white hover:text-cyan-400 transition-colors block truncate"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={onCopyEmail}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-colors shrink-0 ml-2"
                  title="Copiar endereço de e-mail"
                >
                  {emailCopied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* LinkedIn direct card */}
              <a
                href={PERSONAL_INFO.linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-panel glass-panel-hover border border-white/10 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 group-hover:scale-110 transition-transform">
                    <Linkedin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Rede Profissional</div>
                    <div className="text-sm font-semibold text-white group-hover:text-indigo-300 transition-colors">
                      LinkedIn / Conectar
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-indigo-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* GitHub card */}
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl glass-panel glass-panel-hover border border-white/10 group transition-all"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-2.5 rounded-lg bg-slate-800 text-slate-300 group-hover:scale-110 transition-transform">
                    <Github className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">Repositórios & Commits</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                      github.com/joaovitorsouza
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-1">
                Enviar Mensagem
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                Preencha o formulário e retornarei o contato em até 24 horas úteis.
              </p>

              {status === 'success' ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    Mensagem Recebida com Sucesso!
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Obrigado pelo contato, João Vitor Souza responderá o mais breve possível no seu e-mail. Caso prefira agilidade máxima, clique também no botão de WhatsApp.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-4 px-4 py-2 text-xs font-semibold text-slate-900 bg-emerald-400 rounded-lg hover:bg-emerald-300 transition-colors"
                  >
                    Enviar Outra Mensagem
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {status === 'error' && (
                    <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/30 text-xs text-red-200">
                      {errorMessage}
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-slate-300">
                        Seu Nome <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Ex: Ana Silva"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-xs font-semibold text-slate-300">
                        Seu E-mail <span className="text-cyan-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Ex: ana@empresa.com"
                        required
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Ex: Oportunidade Full Stack / Projeto Web"
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-slate-300">
                      Mensagem <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Descreva brevemente sua necessidade, escopo do projeto ou vaga em aberto..."
                      required
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-white/10 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-950 bg-gradient-to-r from-cyan-400 to-cyan-300 rounded-lg hover:from-cyan-300 hover:to-cyan-200 transition-all shadow-lg shadow-cyan-500/20 disabled:opacity-50 cursor-pointer active:scale-[0.99]"
                  >
                    {status === 'sending' ? (
                      <span>Enviando Mensagem...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensagem Profissional</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
