'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import PageShell from '@/components/ui/PageShell';

const CONTENT = {
  fr: {
    title: "Récolte d'ADN environnemental",
    body: "Les inventaires réalisés par récolte d'ADN environnemental permettent de détecter la présence d'espèces aquatiques de façon non-invasive, c'est-à-dire sans avoir à les capturer ou les observer. En filtrant des échantillons d'eau, il est possible de détecter la présence d'espèces exotiques envahissantes, de surveiller la présence d'espèces menacées et de suivre l'évolution de la biodiversité dans le fleuve Saint-Laurent qui nous est si précieux. Cette acquisition de données est essentielle pour une gestion durable du territoire portuaire.",
  },
  en: {
    title: 'Environmental DNA Sampling',
    body: "Inventories conducted through environmental DNA sampling allow for the detection of aquatic species in a non-invasive way, that is, without having to capture or observe them. By filtering water samples, it is possible to detect the presence of invasive exotic species, monitor the presence of threatened species and track the evolution of biodiversity in the St-Lawrence River, which is so precious to us. This data collection is essential for sustainable management of the port area.",
  },
};

const IMAGES = ['/images/Recolte Adn environnemental.jpg'];

export default function Page7Bio4() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <PageShell>
      <Header title={c.title} />
      <div className="animate-fade-in stagger-1" style={{ marginBottom: 32 }}>
        <ImageGallery images={IMAGES} variant="A" />
      </div>
      <TextBlock maxHeight={680} className="animate-fade-in stagger-2">
        <p className="text-body">{c.body}</p>
      </TextBlock>
    </PageShell>
  );
}
