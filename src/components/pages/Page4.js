'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import VideoPlayer from '@/components/ui/VideoPlayer';
import ImageGallery from '@/components/ui/ImageGallery';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: 'Étalement de la saison – Croisières hivernales',
    paragraphs: [
      "Le Port de Québec a fièrement accueilli Le Commandant Charcot, navire d'exploration polaire de PONANT EXPLORATIONS, lors de son voyage inaugural hivernal sur le Saint-Laurent en 2025.",
      "Cette visite marquante a souligné les avancées en innovation dans le secteur des croisières, soutenu le développement du tourisme hivernal et contribué à l'extension de la saison des croisières aux mois d'hiver.",
    ],
  },
  en: {
    title: 'Season Extension – Winter Cruises',
    paragraphs: [
      "In 2025, the Port of Québec welcomed Le Commandant Charcot during its inaugural winter voyage on the St. Lawrence.",
      "This milestone visit advanced winter tourism, cruise innovation, and extended the cruise season.",
    ],
  },
};

const IMAGES = ['/images/Photo Etalement de la saison - Croisières hivernales.jpg'];

export default function Page4() {
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

        {/* Video */}
        <div className="animate-fade-in stagger-1" style={{ marginBottom: 24 }}>
          <VideoPlayer src="/videos/PortQc_PremiereCroisiere2025_V1.1.mp4" controls />
        </div>

        {/* Image */}
        <div className="animate-fade-in stagger-2" style={{ marginBottom: 32 }}>
          <ImageGallery images={IMAGES} variant="A" />
        </div>

        <TextBlock maxHeight={380} className="animate-fade-in stagger-3">
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-body" style={{ marginBottom: 28 }}>{p}</p>
          ))}
        </TextBlock>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>
    </div>
  );
}
