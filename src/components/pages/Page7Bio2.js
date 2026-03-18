'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import BackButton from '@/components/ui/BackButton';

const CONTENT = {
  fr: {
    title: 'Nichoir hirondelle de rivage',
    body: "En 2014, on dénombrait une trentaine de nichées d'hirondelles de rivage à la Baie de Beauport, sur le territoire du Port. L'habitat naturel de basse hauteur était atypique pour cette espèce et exposait la colonie aux prédateurs, aux marées et aux intempéries. En 2015, le Port de Québec a décidé de construire le premier nichoir artificiel pour les hirondelles de rivage en Amérique du Nord. S'inspirant des modèles européens, le projet pilote a remporté un franc succès, et l'ensemble de la colonie y a niché dès la première année. Depuis, la taille de la colonie ne cesse d'augmenter et plus de 228 nichées ont été dénombrées en 2023. Les utilisateurs de la Baie de Beauport peuvent donc admirer cette superbe colonie tout au long de la saison de nidification, qui se déroule de la mi-mai à la fin août.",
  },
  en: {
    title: 'Bank Swallow Nesting Boxes',
    body: "In 2014, some 30 bank swallow broods were counted on Port property at the Baie de Beauport. The low-lying natural habitat was unusual for this species and exposed the colony to predators, tides, and bad weather. In 2015, the Port of Québec decided to build North America's first artificial nesting box for bank swallows, inspired by European models. The pilot project was a resounding success, with the entire colony nesting there from the very first year. Since then, the colony has grown steadily, with over 228 broods counted in 2023. Baie de Beauport users can admire this superb colony throughout the nesting season, which runs from mid-May to the end of August.",
  },
};

const IMAGES = [
  '/images/PQC_HIRONDELLES-27.jpg',
  '/images/PQC_HIRONDELLES-47.jpg',
  '/images/hirondelles_1.jpg',
  '/images/nichoir hirondelles 2019_9.jpg',
];

export default function Page7Bio2() {
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

        <div className="animate-fade-in stagger-1" style={{ marginBottom: 32 }}>
          <ImageGallery images={IMAGES} variant="A" />
        </div>

        <TextBlock maxHeight={560} className="animate-fade-in stagger-2">
          <p className="text-body">{c.body}</p>
        </TextBlock>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>
    </div>
  );
}
