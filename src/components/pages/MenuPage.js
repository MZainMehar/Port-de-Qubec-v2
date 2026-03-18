'use client';

import { useApp, PAGES } from '@/lib/AppContext';
import FinishButton from '@/components/ui/FinishButton';

/* SVG chevron icon, designed to be perfectly centered in a 48x48 circle with no font-metric offset */
function ChevronIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'block' }}
    >
      <path
        d="M7 4L13 10L7 16"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const MENU_ITEMS = {
  fr: [
    { id: PAGES.PAGE_1, title: "Plan d'action Tourisme Durable",                  thumb: '/images/thumbs/plan-action.jpg' },
    { id: PAGES.PAGE_2, title: 'Retombées économiques des croisières',             thumb: '/images/thumbs/retombees.jpg' },
    { id: PAGES.PAGE_3, title: 'Forum des croisières Québec',                      thumb: '/images/thumbs/forum.jpg' },
    { id: PAGES.PAGE_4, title: 'Étalement de la saison – Croisières hivernales',   thumb: '/images/thumbs/etalement.jpg' },
    { id: PAGES.PAGE_5, title: 'Certification Biosphère',                          thumb: '/images/thumbs/biosphere.jpg' },
    { id: PAGES.PAGE_6, title: 'Vision Ville-Port 2026-2035',                      thumb: '/images/thumbs/vision.jpg' },
    { id: PAGES.PAGE_7, title: 'Biodiversité',                                     thumb: '/images/thumbs/biodiversite.jpg' },
  ],
  en: [
    { id: PAGES.PAGE_1, title: 'Sustainable Tourism Action Plan',                  thumb: '/images/thumbs/plan-action.jpg' },
    { id: PAGES.PAGE_2, title: 'Economic Impacts of Cruises',                      thumb: '/images/thumbs/retombees.jpg' },
    { id: PAGES.PAGE_3, title: 'Québec Cruise Forum',                              thumb: '/images/thumbs/forum.jpg' },
    { id: PAGES.PAGE_4, title: 'Season Extension – Winter Cruises',                thumb: '/images/thumbs/etalement.jpg' },
    { id: PAGES.PAGE_5, title: 'Biosphere Certification',                          thumb: '/images/thumbs/biosphere.jpg' },
    { id: PAGES.PAGE_6, title: 'Ville-Port vision 2026-2035',                      thumb: '/images/thumbs/vision.jpg' },
    { id: PAGES.PAGE_7, title: 'Greening',                                         thumb: '/images/thumbs/biodiversite.jpg' },
  ],
};

export default function MenuPage() {
  const { navigate, language } = useApp();
  const items = MENU_ITEMS[language] || MENU_ITEMS.fr;
  const heading = language === 'fr' ? 'Choisissez une initiative' : 'Choose an initiative';

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: '#f5f7f9',
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* Top bar */}
      <div style={{
        background: 'var(--port-blue)',
        padding: '32px 60px',
        flexShrink: 0,
      }}>
        <h1 style={{
          fontFamily: 'BlenderPro, sans-serif',
          fontWeight: 700,
          fontSize: 56,
          color: '#fff',
          letterSpacing: '0.02em',
          display: 'flex',
          justifyContent: 'center',
        }}>
          {heading}
        </h1>
      </div>

      {/* Cards Grid — 2 columns */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '32px 60px',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: 30,
        alignContent: 'start',
      }}>
        {items.map((item, idx) => (
          <div
            key={item.id}
            className={`menu-card animate-fade-in stagger-${idx + 1}`}
            onClick={() => navigate(item.id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              background: '#fff',
              borderRadius: 20,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              border: '2px solid transparent',
              overflow: 'hidden',
              height: '100%',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--port-blue)';
              e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,45,114,0.15)';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'transparent';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {/* Thumbnail */}
            <div style={{
              width: '100%',
              height: 200,
              background: 'var(--port-gray)',
              overflow: 'hidden',
              flexShrink: 0,
            }}>
              <img
                src={item.thumb}
                alt={item.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.5s ease',
                  display: 'block',
                }}
                onMouseEnter={(e) => { e.target.style.transform = 'scale(1.05)'; }}
                onMouseLeave={(e) => { e.target.style.transform = 'scale(1)'; }}
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.style.background = 'var(--port-gray)';
                }}
              />
            </div>

            {/* Content row — title + arrow bubble */}
            <div style={{
              padding: '24px 24px 24px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flex: 1,
              gap: 20,
            }}>
              <span style={{
                fontFamily: 'BlenderPro, sans-serif',
                fontWeight: 600,
                fontSize: 24,
                color: '#1a1f2e',
                lineHeight: 1.3,
                flex: 1,
              }}>
                {item.title}
              </span>

              {/* Arrow bubble — SVG child means zero font-metric offset, always centred */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: '#f0f2f5',
                  color: 'var(--port-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                  transition: 'background 0.2s ease, color 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--port-blue)';
                  e.currentTarget.style.color = '#fff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#f0f2f5';
                  e.currentTarget.style.color = 'var(--port-blue)';
                }}
              >
                <ChevronIcon />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* TERMINER / FINISH */}
      <div style={{
        padding: '24px 60px 40px',
        flexShrink: 0,
        display: 'flex',
        justifyContent: 'center',
        background: '#f5f7f9',
        borderTop: '2px solid #e2e5e8',
      }}>
        <FinishButton />
      </div>
    </div>
  );
}