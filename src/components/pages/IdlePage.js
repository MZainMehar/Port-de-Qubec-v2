'use client';

import { useApp, PAGES } from '@/lib/AppContext';
import { useRef, useEffect } from 'react';

export default function IdlePage() {
  const { navigate } = useApp();
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        background: '#000',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onClick={() => navigate(PAGES.LANGUAGE)}
    >
      {/* Video background */}
      <video
        ref={videoRef}
        src="/videos/Intro.mp4"
        loop
        muted
        playsInline
        autoPlay
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Tap / click prompt overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingBottom: 120,
        background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)',
        zIndex: 2,
      }}>
        {/* Bilingual tap prompt */}
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontFamily: 'BlenderPro, sans-serif',
            fontWeight: 700,
            fontSize: 52,
            color: '#fff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            textShadow: '0 2px 16px rgba(0,0,0,0.6)',
            animation: 'pulse 2.5s ease-in-out infinite',
          }}>
            TOUCHEZ POUR COMMENCER
          </p>
          <p style={{
            fontFamily: 'BlenderPro, sans-serif',
            fontWeight: 400,
            fontSize: 38,
            color: 'rgba(255,255,255,0.75)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
            marginTop: 16,
            textShadow: '0 2px 12px rgba(0,0,0,0.5)',
            animation: 'pulse 2.5s ease-in-out 0.3s infinite',
          }}>
            TOUCH TO START
          </p>
        </div>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.8; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
