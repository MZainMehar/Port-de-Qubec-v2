'use client';

import { useApp } from '@/lib/AppContext';
import { PAGES } from '@/lib/AppContext';

export default function IdleBar() {
  const { idleSeconds, totalIdleSeconds, currentPage } = useApp();
  if (currentPage === PAGES.IDLE) return null;

  const pct = (idleSeconds / totalIdleSeconds) * 100;

  return (
    <div style={{
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 6,
      background: 'rgba(0,0,0,0.1)',
      zIndex: 999,
    }}>
      <div
        className="idle-bar"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
