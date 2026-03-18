'use client';

import { useApp, PAGES } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: 'Biodiversité',
    items: [
      { id: PAGES.PAGE_7_BIO_1, label: 'Ruches',                                                   thumb: '/images/THUMB - Ruches_1 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_2, label: "Nichoir hirondelle de rivage",                              thumb: '/images/THUMB - PQC_HIRONDELLES-27 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_3, label: 'Plan de Verdissement',                                     thumb: '/images/THUMB -Verdissement3 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_4, label: "Récolte d'ADN environnemental",                             thumb: '/images/THUMB - Recolte Adn environnemental - Copy.jpg' },
    ],
  },
  en: {
    title: 'Greening',
    items: [
      { id: PAGES.PAGE_7_BIO_1, label: 'Beehives',                                                  thumb: '/images/THUMB - Ruches_1 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_2, label: 'Bank Swallow Nesting Boxes',                               thumb: '/images/THUMB - PQC_HIRONDELLES-27 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_3, label: 'Greening',                                                  thumb: '/images/THUMB -Verdissement3 - Copy.jpg' },
      { id: PAGES.PAGE_7_BIO_4, label: 'Environmental DNA Sampling — St. Lawrence River',          thumb: '/images/THUMB - Recolte Adn environnemental - Copy.jpg' },
    ],
  },
};

export default function Page7() {
  const { language, navigate } = useApp();
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

        {/* Featured hero thumb */}
        <div className="animate-fade-in stagger-1" style={{ marginBottom: 40 }}>
          <img
            src="/images/Verdissement3.jpg"
            alt={c.title}
            style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
            onError={(e) => { e.target.style.background = 'var(--port-gray)'; e.target.src = ''; }}
          />
        </div>

        {/* 2×2 Grid */}
        <div className="bio-grid animate-fade-in stagger-2">
          {c.items.map((item) => (
            <div
              key={item.id}
              className="bio-card"
              onClick={() => navigate(item.id)}
            >
              <div className="bio-card-img">
                <img
                  src={item.thumb}
                  alt={item.label}
                  onError={(e) => {
                    e.target.parentElement.style.background = 'var(--port-gray)';
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="bio-card-label">{item.label}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>
    </div>
  );
}
