'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import VideoPlayer from '@/components/ui/VideoPlayer';
import PageShell from '@/components/ui/PageShell';

const CONTENT = {
  fr: {
    title: 'Retombées économiques des croisières',
    video: '/videos/CSL_v07b.mp4',
    paragraphs: [
      "Les croisières ont généré plus de 330 M$ en retombées économiques au Québec en 2024, dont 172 M$ dans la Capitale‑Nationale.",
      "Elles ont soutenu environ 2 300 emplois liés directement et indirectement à l'industrie.",
      "Avec plus de 150 000 passagers annuels et une dépense moyenne élevée, les croisiéristes représentent un levier majeur pour l'économie locale.",
    ],
    source: "*Source Étude de retombées économiques des croisières sur le Saint-Laurent 2024 - Aviseo conseils",
  },
  en: {
    title: 'Economic Impacts of Cruises',
    video: '/videos/CSL_EN_v01.mp4',
    paragraphs: [
      "Cruises generated more than $330 million in economic spinoffs in Québec in 2024, including $172 million in the region of Québec.",
      "They supported approximately 2,300 jobs directly and indirectly related to the industry.",
      "With more than 150,000 passengers annually and high average spending, cruise passengers represent a major boost to the local economy.",
    ],
    source: "*Source: Economic Impact Study of Cruises on the St. Lawrence 2024 – Aviseo Consulting",
  },
};

export default function Page2() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <PageShell>
      <Header title={c.title} />
      <div className="animate-fade-in stagger-1" style={{ marginBottom: 40 }}>
        <VideoPlayer src={c.video} controls loop={false} />
      </div>
      <TextBlock maxHeight={500} className="animate-fade-in stagger-2">
        {c.paragraphs.map((p, i) => (
          <p key={i} className="text-body" style={{ marginBottom: 32 }}>{p}</p>
        ))}
        <p className="text-source" style={{ marginTop: 16 }}>{c.source}</p>
      </TextBlock>
    </PageShell>
  );
}
