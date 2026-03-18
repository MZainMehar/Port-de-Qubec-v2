'use client';

import BackButton from '@/components/ui/BackButton';

/**
 * PageShell
 * Drop-in wrapper for all content pages.
 * Renders BackButton at the TOP and BOTTOM automatically.
 *
 * Props:
 *   children    — page content (scrollable)
 *   background  — optional bg color (default #fff)
 *   footer      — optional overlay element rendered outside scroll
 *                 (use for PDFPopup so it sits above everything)
 *
 * Usage:
 *   <PageShell>
 *     <Header ... />
 *     ...content...
 *   </PageShell>
 *
 *   <PageShell footer={showPdf && <PDFPopup ... />}>
 *     ...
 *   </PageShell>
 */
export default function PageShell({ children, background = '#fff', footer }) {
  return (
    <div style={{
      position: 'absolute',
      inset: 0,
      background,
      display: 'flex',
      flexDirection: 'column',
    }}>

      {/* ── Back button — TOP ── */}
      <div style={{
        padding: '32px 60px 24px',
        flexShrink: 0,
        borderBottom: '2px solid #e2e5e8',
      }}>
        <BackButton />
      </div>

      {/* ── Scrollable page content ── */}
      <div style={{
        padding: '0 60px',
        flex: 1,
        overflowY: 'auto',
      }}>
        {children}
      </div>

      {/* ── Back button — BOTTOM ── */}
      <div style={{
        padding: '32px 60px 48px',
        flexShrink: 0,
        borderTop: '2px solid #e2e5e8',
      }}>
        <BackButton />
      </div>

      {/* ── Portal slot for full-screen overlays (PDFPopup etc.) ── */}
      {footer}

    </div>
  );
}
