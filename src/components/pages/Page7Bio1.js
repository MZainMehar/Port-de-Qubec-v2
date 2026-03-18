'use client';

import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import PageShell from '@/components/ui/PageShell';

const CONTENT = {
  fr: {
    title: 'Ruches',
    body: "Deux ruches sont présentes sur le territoire portuaire et servent, entre autres, à sensibiliser la communauté au rôle essentiel des pollinisateurs. En effet, les pollinisateurs jouent un rôle crucial dans les écosystèmes et sont indispensables à l'agriculture; les fruits, légumes et céréales que nous consommons sont le résultat du dur labeur des pollinisateurs! L'abeille domestique (𝘈𝘱𝘪𝘴 𝘮𝘦𝘭𝘭𝘪𝘧𝘦𝘳𝘢), retrouvée dans les ruches du Port, fait partie des 350 espèces de pollinisateurs que l'on retrouve au Québec.",
  },
  en: {
    title: 'Beehives',
    body: "Two beehives are present on Port property, and they serve, among other things, to raise the community's awareness of the essential role of pollinators. They play a crucial role in the ecosystems and are indispensable to agriculture; the fruits, vegetables, and grains we consume are the result of the hard work of pollinators! The domestic bee (𝘈𝘱𝘪𝘴 𝘮𝘦𝘭𝘭𝘪𝘧𝘦𝘳𝘢), found in the Port's hives, is among the 350 species of pollinators found in Québec.",
  },
};

const IMAGES = [
  '/images/Atelier_miel1.jpg',
  '/images/Atelier_miel2.jpg',
  '/images/Ruches.jpg',
  '/images/Ruches_1.jpg',
];

export default function Page7Bio1() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;

  return (
    <PageShell>
      <Header title={c.title} />
      {/* Video commented out as per your original */}
      {/* <div className="animate-fade-in stagger-1" style={{ marginBottom: 24 }}>
        <VideoPlayer src="/videos/Nichoir.mp4" controls />
      </div> */}
      <div className="animate-fade-in stagger-2" style={{ marginBottom: 32 }}>
        <ImageGallery images={IMAGES} variant="A" />
      </div>
      <TextBlock maxHeight={400} className="animate-fade-in stagger-3">
        <p className="text-body">{c.body}</p>
      </TextBlock>
    </PageShell>
  );
}
