'use client';

import { useApp, PAGES } from '@/lib/AppContext';

export default function LanguagePage() {
  const { navigate, setLanguage } = useApp();

  const choose = (lang) => {
    setLanguage(lang);
    navigate(PAGES.MENU);
  };

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url("/images/pattern-port.png")',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '60px',
      gap: 64,
    }}>
      {/* Port logo area */}
      <div style={{ textAlign: 'center', marginBottom: 16 }}>
        <img
          src="/images/logo-port.png"
          alt="Port de Québec"
          style={{ height: 100, objectFit: 'contain' }}
          onError={(e) => { e.target.style.display = 'none'; }}
        />
      </div>

      <div style={{ textAlign: 'center' }}>
        <h1 style={{
          fontFamily: 'BlenderPro, sans-serif',
          fontWeight: 700,
          fontSize: 68,
          color: 'var(--port-dark)',
          letterSpacing: '0.02em',
          lineHeight: 1.1,
        }}>
          Choisissez votre langue
        </h1>
        <p style={{
          fontFamily: 'BlenderPro, sans-serif',
          fontSize: 40,
          color: 'var(--port-dark)',
          marginTop: 16,
        }}>
          Choose your language
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%', maxWidth: 600 }}>
        <button
          className="btn-primary animate-fade-in stagger-2"
          onClick={() => choose('fr')}
        >
          FRANÇAIS
        </button>
        <button
          className="btn-secondary animate-fade-in stagger-3"
          style={{ color: 'var(--port-dark)', borderColor: 'var(--port-dark)' }}
          onClick={() => choose('en')}
        >
          ENGLISH
        </button>
      </div>
    </div>
  );
}
