'use client';

import { useState } from 'react';
import { useApp } from '@/lib/AppContext';
import Header from '@/components/ui/Header';
import TextBlock from '@/components/ui/TextBlock';
import ImageGallery from '@/components/ui/ImageGallery';
import BackButton from '@/components/ui/BackButton';
import PDFPopup from '@/components/ui/PDFPopup';

const CONTENT = {
  fr: {
    title: 'Vision Ville-Port 2026-2035',
    body: "Cette Vision commune sur dix ans ambitionne de faire de Québec un pôle portuaire et maritime durable et innovant, en renforçant la synergie entre la Ville et le Port au bénéfice des citoyens, des communautés riveraines et des acteurs économiques. Elle traduit une volonté partagée de réaliser des projets structurants, dont la modernisation des infrastructures portuaires, essentielle pour soutenir la compétitivité et la prospérité régionale.",
    pdfLabel: 'Vision Ville-Port 2026-2035',
    pdf: '/pdfs/vision-ville-port-2026-2035.pdf',
    closeLabel: 'FERMER',
  },
  en: {
    title: 'Ville-Port vision 2026-2035',
    body: "This ten-year joint Vision aims to make Québec City a sustainable and innovative port and maritime hub by strengthening the synergy between the City and the Port for the benefit of citizens, riverside communities, and economic stakeholders. It demonstrates a commitment to implementing transformative projects – including the modernization of port infrastructure, which is crucial for supporting regional competitiveness and prosperity.",
    pdfLabel: 'Vision Ville-Port 2026-2035',
    pdf: '/pdfs/vision-ville-port-2026-2035.pdf',
    closeLabel: 'CLOSE',
  },
};

const IMAGES = ['/images/Menu principal - photo Vision Ville-Port.jpg'];

export default function Page6() {
  const { language } = useApp();
  const c = CONTENT[language] || CONTENT.fr;
  const [showPdf, setShowPdf] = useState(false);

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

        <TextBlock maxHeight={460} className="animate-fade-in stagger-2">
          <p className="text-body">{c.body}</p>
        </TextBlock>

        {/* PDF Link button */}
        <button
          className="btn-secondary animate-fade-in stagger-3"
          style={{ marginTop: 40, width: 'auto', padding: '24px 40px' }}
          onClick={() => setShowPdf(true)}
        >
          📄 {c.pdfLabel}
        </button>
      </div>

      <div style={{ padding: '32px 60px 48px', flexShrink: 0, borderTop: '2px solid #e2e5e8' }}>
        <BackButton />
      </div>

      {showPdf && (
        <PDFPopup
          src={c.pdf}
          onClose={() => setShowPdf(false)}
          closeLabel={c.closeLabel}
        />
      )}
    </div>
  );
}
