'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: "Plan d'action Tourisme Durable",
    paragraphs: [
      "Le Port de Québec vise à décarboner et réduire l'impact environnemental des croisières grâce à l'électrification, une meilleure gestion des flux et une transition énergétique.",
      "Il souhaite maximiser les retombées locales et l'acceptabilité sociale, en renforçant les liens avec les citoyens, les commerçants et les communautés.",
      "Le Port entend devenir un leader en tourisme durable, par la formation, l'innovation, des partenariats stratégiques et une communication transparente de ses engagements.",
    ],
  },
  en: {
    title: 'Sustainable Tourism Action Plan',
    paragraphs: [
      "The Port of Québec aims to decarbonize and reduce the environmental impact of cruises through electrification, better water management, and energy transition.",
      "It seeks to maximize local benefits and social acceptability by strengthening ties with citizens, businesses, and communities.",
      "The Port intends to become a leader in sustainable tourism through training, innovation, strategic partnerships, and transparent communication of its commitments.",
    ],
  },
};

const IMAGES = [
  '/images/Plan d action tourisme durable.jpg',
];

export default function Page1() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background: '#fff',
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto',
    }}>
      <div style={{ padding: '0 60px', flex: 1 }}>
        <Header title={c.title} />

        {/* Image */}
        <div className="animate-fade-in stagger-1" style={{ marginBottom: 40 }}>
          <ImageGallery images={IMAGES} variant="A" />
        </div>

        {/* Text */}
        <TextBlock maxHeight={680} className="animate-fade-in stagger-2">
          {c.paragraphs.map((p, i) => (
            <p key={i} className="text-body" style={{ marginBottom: 32 }}>{p}</p>
          ))}
        </TextBlock>
      </div>

      {/* Back */}
      <div style={{
        padding: '32px 60px 48px',
        flexShrink: 0,
        borderTop: '2px solid #e2e5e8',
        marginTop: 24,
      }}>
        <BackButton />
      </div>
    </div>
  );
}
