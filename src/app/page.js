'use client';

import { AppProvider } from '@/lib/AppContext';
import KioskApp from '@/components/KioskApp';

export default function Home() {
  return (
    <AppProvider>
      <KioskApp />
    </AppProvider>
  );
}
