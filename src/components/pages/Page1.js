'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import PageShell from '@/components/ui/PageShell';

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
      "The Port of Québec aims to decarbonize and reduce the environmental impact of cruises through electrification, better traffic management, and energy transition.",
      "It seeks to maximize local benefits and social acceptability by strengthening ties with citizens, businesses, and communities.",
      "The Port intends to become a leader in sustainable tourism through training, innovation, strategic partnerships, and transparent communication of its commitments.",
    ],
  },
};

const IMAGES = ['/images/Plan d action tourisme durable.jpg'];

export default function Page1() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <PageShell>
      <Header title={c.title} whitespace="no-wrap" letterSpacing="-0.02em" />
      <div className="animate-fade-in stagger-1" style={{ marginBottom: 40 }}>
        <ImageGallery images={IMAGES} variant="A" />
      </div>
      <TextBlock maxHeight={680} className="animate-fade-in stagger-2">
        {c.paragraphs.map((p, i) => (
          <p key={i} className="text-body" style={{ marginBottom: 32 }}>{p}</p>
        ))}
      </TextBlock>
    </PageShell>
  );
}
