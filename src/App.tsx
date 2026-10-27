/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProjectsSection } from './components/ProjectsSection';
import { TechStackSection } from './components/TechStackSection';
import { TimelineSection } from './components/TimelineSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { Toast } from './components/Toast';
import { PERSONAL_INFO, Project } from './data/portfolioData';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [emailCopied, setEmailCopied] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(PERSONAL_INFO.email);
      } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = PERSONAL_INFO.email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setEmailCopied(true);
      setToastMessage('E-mail copiado para a área de transferência!');
      setTimeout(() => {
        setEmailCopied(false);
      }, 3000);
      setTimeout(() => {
        setToastMessage(null);
      }, 4000);
    } catch {
      setToastMessage(`E-mail: ${PERSONAL_INFO.email}`);
      setTimeout(() => setToastMessage(null), 4000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#070B12] text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Fixed Navigation Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />

        {/* Featured Projects with Filters */}
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />

        {/* Mastered Technologies & Architecture Matrix */}
        <TechStackSection />

        {/* Career & Academic Timeline */}
        <TimelineSection />

        {/* Contact and Direct Channels */}
        <ContactSection onCopyEmail={handleCopyEmail} emailCopied={emailCopied} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage || ''}
        isVisible={Boolean(toastMessage)}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}
