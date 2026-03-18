'use client';

import { useEffect } from 'react';

/**
 * NoRightClick
 * Blocks the browser context menu across the entire app.
 * Must be a Client Component since it uses a DOM event listener.
 * Render it once inside RootLayout — it renders no visible UI.
 */
export default function NoRightClick() {
  useEffect(() => {
    const block = (e) => e.preventDefault();
    document.addEventListener('contextmenu', block);
    return () => document.removeEventListener('contextmenu', block);
  }, []);

  return null;
}
