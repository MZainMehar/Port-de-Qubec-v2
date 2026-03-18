'use client';

import { useApp } from '@/lib/AppContext';

export default function FinishButton({ label }) {
  const { goToIdle, language } = useApp();
  const defaultLabel = language === 'fr' ? 'TERMINER' : 'FINISH';

  return (
    <button className="btn-finish" onClick={goToIdle} aria-label="Return to home">
      {label || defaultLabel}
    </button>
  );
}
