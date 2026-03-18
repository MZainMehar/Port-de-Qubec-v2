'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: 'Certification Biosphère',
    body: "En 2024, le Port de Québec est devenu le premier port en Amérique à recevoir la certification Biosphere, une référence mondiale en développement durable. Cette distinction confirme son engagement envers les principes ESGDD et un avenir plus responsable.",
    link: 'https://www.biospheresustainable.com/fr/community/port-of-quebec/5615#',
    logoAlt: 'Logo Certification Biosphère',
  },
  en: {
    title: 'Biosphere Certification',
    body: "In 2024, the Port of Québec became the first port in the Americas to earn the Biosphere sustainable development certification, reaffirming its strong commitment to ESGDD principles and to a global community dedicated to responsible practices.",
    link: 'https://www.biospheresustainable.com/en/community/port-of-quebec/5615',
    logoAlt: 'Biosphere Certification Logo',
  },
};

export default function Page5() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
    }}>
      <div style={{ padding: '0 60px', flex: 1, overflowY: 'auto' }}>
        <Header title={c.title} />

        <TextBlock maxHeight={380} className="animate-fade-in stagger-1">
          <p className="text-body">{c.body}</p>
        </TextBlock>

        {/* Certification logo — clickable */}
        <div
          className="animate-fade-in stagger-2"
          style={{
            marginTop: 64,
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <a
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              padding: 24,
              border: '3px solid var(--port-light-blue)',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onTouchStart={(e) => e.currentTarget.style.transform = 'scale(0.97)'}
            onTouchEnd={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img
              src="/images/biosphere-logo.png"
              alt={c.logoAlt}
              style={{ width: 320, height: 'auto', objectFit: 'contain', display: 'block' }}
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.parentElement.innerHTML = `<div style="width:320px;height:160px;background:var(--port-blue);display:flex;align-items:center;justify-content:center;color:#fff;font-family:BlenderPro,sans-serif;font-size:28px;font-weight:700;letter-spacing:0.05em;">BIOSPHERE</div>`;
              }}
            />
          </a>
        </div>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>
    </div>
  );
}
