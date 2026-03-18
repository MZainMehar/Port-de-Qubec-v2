'use client';

import { useApp, PAGES } from '@/lib/AppContext';
import Artboard from '@/components/layout/Artboard';
import IdleBar from '@/components/ui/IdleBar';

import IdlePage      from '@/components/pages/IdlePage';
import LanguagePage  from '@/components/pages/LanguagePage';
import MenuPage      from '@/components/pages/MenuPage';
import Page1         from '@/components/pages/Page1';
import Page2         from '@/components/pages/Page2';
import Page3         from '@/components/pages/Page3';
import Page4         from '@/components/pages/Page4';
import Page5         from '@/components/pages/Page5';
import Page6         from '@/components/pages/Page6';
import Page7         from '@/components/pages/Page7';
import Page7Bio1     from '@/components/pages/Page7Bio1';
import Page7Bio2     from '@/components/pages/Page7Bio2';
import Page7Bio3     from '@/components/pages/Page7Bio3';
import Page7Bio4     from '@/components/pages/Page7Bio4';

const PAGE_MAP = {
  [PAGES.IDLE]:       IdlePage,
  [PAGES.LANGUAGE]:   LanguagePage,
  [PAGES.MENU]:       MenuPage,
  [PAGES.PAGE_1]:     Page1,
  [PAGES.PAGE_2]:     Page2,
  [PAGES.PAGE_3]:     Page3,
  [PAGES.PAGE_4]:     Page4,
  [PAGES.PAGE_5]:     Page5,
  [PAGES.PAGE_6]:     Page6,
  [PAGES.PAGE_7]:     Page7,
  [PAGES.PAGE_7_BIO_1]: Page7Bio1,
  [PAGES.PAGE_7_BIO_2]: Page7Bio2,
  [PAGES.PAGE_7_BIO_3]: Page7Bio3,
  [PAGES.PAGE_7_BIO_4]: Page7Bio4,
};

export default function KioskApp() {
  const { currentPage } = useApp();
  const PageComponent = PAGE_MAP[currentPage] || IdlePage;

  return (
    <Artboard>
      <div style={{ position: 'absolute', inset: 0 }}>
        <PageComponent key={currentPage} />
        <IdleBar />
      </div>
    </Artboard>
  );
}
