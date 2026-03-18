'use client';

export default function PDFPopup({ src, onClose, closeLabel = 'FERMER' }) {
  return (
    <div className="pdf-overlay animate-fade-in-fast">
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <button className="pdf-close" onClick={onClose}>{closeLabel}</button>
      </div>
      <div className="pdf-container">
        <iframe src={src} title="PDF Viewer" />
      </div>
    </div>
  );
}
