'use client';

import { useEffect, useRef, useState } from 'react';

const ARTBOARD_W = 1080;
const ARTBOARD_H = 1920;

export default function Artboard({ children }) {
  const [scale, setScale] = useState(1);
  const [offsetX, setOffsetX] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    function recalc() {
      const vw = window.innerWidth;
      const vh = window.innerHeight;
      const scaleByWidth  = vw / ARTBOARD_W;
      const scaleByHeight = vh / ARTBOARD_H;
      const s = Math.min(scaleByWidth, scaleByHeight);
      setScale(s);
      // Centre horizontally
      const scaledW = ARTBOARD_W * s;
      setOffsetX((vw - scaledW) / 2);
    }
    recalc();
    window.addEventListener('resize', recalc);
    return () => window.removeEventListener('resize', recalc);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <div
        ref={containerRef}
        className="artboard"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          position: 'absolute',
          top: 0,
          left: offsetX,
          width: ARTBOARD_W,
          height: ARTBOARD_H,
        }}
      >
        {children}
      </div>
    </div>
  );
}
