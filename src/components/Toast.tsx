import React from 'react';
import { CheckCircle2, X } from 'lucide-react';

interface ToastProps {
  message: string;
  isVisible: boolean;
  onClose: () => void;
}

export const Toast: React.FC<ToastProps> = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-4 py-3 bg-slate-900 border border-cyan-500/40 text-slate-100 rounded-xl shadow-2xl shadow-cyan-950/50 text-xs animate-in slide-in-from-bottom-5 duration-200">
      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
      <span className="font-medium">{message}</span>
      <button
        onClick={onClose}
        className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/10 transition-colors ml-1"
        aria-label="Fechar notificação"
      >
        <X className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
