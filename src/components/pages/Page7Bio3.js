'use client';

import { useState } from 'react';
import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import PageShell from '@/components/ui/PageShell';
import PDFPopup from '@/components/ui/PDFPopup';

const CONTENT = {
  fr: {
    title: 'Plan de verdissement',
    body: "Le plan de verdissement du Port de Québec vise à atteindre 30% de canopée (couverture arborée) sur son territoire non industriel d'ici 2035 pour lutter contre les îlots de chaleur et améliorer la qualité de l'air. Cette initiative s'intègre à sa Vision 2035 pour une meilleure cohabitation ville-port.",
    pdfLabel: 'Plan de Verdissement',
    pdf: '/pdfs/PlandeVerdissement_25.pdf',
    closeLabel: 'FERMER',
  },
  en: {
    title: 'Greening plan',
    body: "The Port of Québec's greening plan aims to achieve 30% canopy cover (tree cover) on its non-industrial land by 2035 to combat heat islands and improve air quality. This initiative is part of its Vision 2035 for better city-port coexistence.",
    pdfLabel: 'Greening Plan',
    pdf: '/pdfs/PlandeVerdissement_25_EN_c.pdf',
    closeLabel: 'CLOSE',
  },
};

const IMAGES = [
  '/images/Verdissement1.jpg',
  '/images/Verdissement2.jpg',
  '/images/Verdissement3.jpg',
];

export default function Page7Bio3() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;
  const [showPdf, setShowPdf] = useState(false);

  return (
    <PageShell
      footer={showPdf && (
        <PDFPopup
          src={c.pdf}
          onClose={() => setShowPdf(false)}
          closeLabel={c.closeLabel}
        />
      )}
    >
      <Header title={c.title} />
      <div className="animate-fade-in stagger-1" style={{ marginBottom: 32 }}>
        <ImageGallery images={IMAGES} variant="A" />
      </div>
      <TextBlock maxHeight={400} className="animate-fade-in stagger-2">
        <p className="text-body">{c.body}</p>
      </TextBlock>
      <button
        className="btn-secondary animate-fade-in stagger-3"
        style={{ marginTop: 40, width: 'auto', padding: '24px 40px' }}
        onClick={() => setShowPdf(true)}
      >
        📄 {c.pdfLabel}
      </button>
    </PageShell>
  );
}
