'use client';

import { useApp } from '@/lib/AppContext';

export default function BackButton({ label, onBack }) {
  const { goBack, language } = useApp();
  const defaultLabel = language === 'fr' ? '← RETOUR' : '← BACK';
  const handleClick = onBack || goBack;

  return (
    <button className="btn-back" onClick={handleClick} aria-label="Go back">
      {label || defaultLabel}
    </button>
  );
}
