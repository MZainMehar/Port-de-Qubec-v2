'use client';

import { useState, useRef } from 'react';

/**
 * ImageGallery
 * variant: 'A' — 1 large + thumbnails row
 * variant: 'B' — 1 large left + side column right
 */
export default function ImageGallery({ images = [], variant = 'A', className = '' }) {
  const [active, setActive] = useState(0);
  const startXRef = useRef(null);

  if (!images.length) return null;

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (startXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - startXRef.current;
    if (Math.abs(diff) > 40) {
      if (diff < 0) setActive(i => Math.min(i + 1, images.length - 1));
      else          setActive(i => Math.max(i - 1, 0));
    }
    startXRef.current = null;
  };

  if (variant === 'B') {
    const [main, ...rest] = images;
    return (
      <div className={`gallery-b ${className}`}>
        {/* Main image */}
        <div
          className="gallery-main"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onClick={() => setActive(0)}
          style={{ cursor: 'default', aspectRatio: '4/3' }}
        >
          <img src={images[active]?.src || images[active]} alt={images[active]?.alt || ''} />
        </div>
        {/* Side column */}
        <div className="gallery-side">
          {images.slice(1).map((img, idx) => (
            <div
              key={idx}
              className="gallery-side-item"
              onClick={() => setActive(idx + 1)}
              style={{
                border: active === idx + 1 ? '3px solid var(--port-light-blue)' : '3px solid transparent',
                transition: 'border-color 0.2s',
                aspectRatio: '4/3',
              }}
            >
              <img
                src={img?.src || img}
                alt={img?.alt || ''}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Variant A (default)
  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Main */}
      <div
        className="gallery-main"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        style={{ aspectRatio: '16/9' }}
      >
        <img src={images[active]?.src || images[active]} alt={images[active]?.alt || ''} />
        {/* Swipe indicator dots */}
        {images.length > 1 && (
          <div style={{
            position: 'absolute', bottom: 16, left: '50%', transform: 'translateX(-50%)',
            display: 'flex', gap: 8,
          }}>
            {images.map((_, i) => (
              <div key={i} style={{
                width: 10, height: 10, borderRadius: '50%',
                background: i === active ? '#fff' : 'rgba(255,255,255,0.4)',
                transition: 'background 0.2s',
              }} />
            ))}
          </div>
        )}
      </div>
      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="gallery-thumbs">
          {images.map((img, idx) => (
            <div
              key={idx}
              className={`gallery-thumb ${active === idx ? 'active' : ''}`}
              onClick={() => setActive(idx)}
            >
              <img src={img?.src || img} alt={img?.alt || ''} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
