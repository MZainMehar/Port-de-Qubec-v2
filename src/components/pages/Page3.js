'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import VideoPlayer from '@/components/ui/VideoPlayer';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: 'Forum des croisières Québec',
    body: "Le Port de Québec organise chaque année le Forum sur les croisières internationales de Québec. Ce forum réunit plus d'une centaine de personnes du secteur touristique et portuaire, mais également des groupes citoyens et des membres de la communauté. Les participants se rencontrent autour de conférences et d'ateliers au cours desquels ils apportent des solutions créatives aux besoins futurs du secteur des croisières. L'objectif de ce forum est d'améliorer les pratiques en priorisant un développement responsable, coordonné et durable de la destination.",
  },
  en: {
    title: 'Québec Cruise Forum',
    body: "Every year, the Port of Québec organizes the Forum sur les croisières internationales de Québec, an international cruise forum. It brings together over a hundred people from the tourism and port sectors, as well as citizen groups and community members. Participants meet for conferences and workshops, during which they come up with creative solutions to the future needs of the cruise industry. The forum aims to improve practices by prioritizing responsible, coordinated, and sustainable development of the destination.",
  },
};

export default function Page3() {
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

        <div className="animate-fade-in stagger-1" style={{ marginBottom: 40 }}>
          <VideoPlayer src="/videos/ForumCroisieres2024.mp4" controls />
        </div>

        <TextBlock maxHeight={620} className="animate-fade-in stagger-2">
          <p className="text-body">{c.body}</p>
        </TextBlock>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>
    </div>
  );
}
