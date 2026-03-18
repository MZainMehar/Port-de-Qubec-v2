'use client';

import { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';

const AppContext = createContext(null);

export const PAGES = {
  IDLE: 'idle',
  LANGUAGE: 'language',
  MENU: 'menu',
  PAGE_1: 'page_1',
  PAGE_2: 'page_2',
  PAGE_3: 'page_3',
  PAGE_4: 'page_4',
  PAGE_5: 'page_5',
  PAGE_6: 'page_6',
  PAGE_7: 'page_7',
  PAGE_7_BIO_1: 'page_7_bio_1',
  PAGE_7_BIO_2: 'page_7_bio_2',
  PAGE_7_BIO_3: 'page_7_bio_3',
  PAGE_7_BIO_4: 'page_7_bio_4',
};

const IDLE_TIMEOUT_MS = 60_000; // 60 seconds

export function AppProvider({ children }) {
  const [currentPage, setCurrentPage] = useState(PAGES.IDLE);
  const [language, setLanguage] = useState('fr'); // 'fr' | 'en'
  const [history, setHistory] = useState([]);
  const [idleSeconds, setIdleSeconds] = useState(IDLE_TIMEOUT_MS / 1000);
  const idleTimerRef = useRef(null);
  const idleCountRef = useRef(null);

  const goToIdle = useCallback(() => {
    setCurrentPage(PAGES.IDLE);
    setHistory([]);
  }, []);

  const resetIdleTimer = useCallback(() => {
    // Clear existing
    if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    if (idleCountRef.current) clearInterval(idleCountRef.current);

    // Don't run idle timer on the idle page itself
    setIdleSeconds(IDLE_TIMEOUT_MS / 1000);

    idleCountRef.current = setInterval(() => {
      setIdleSeconds(prev => {
        if (prev <= 1) {
          clearInterval(idleCountRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    idleTimerRef.current = setTimeout(() => {
      goToIdle();
    }, IDLE_TIMEOUT_MS);
  }, [goToIdle]);

  const navigate = useCallback((page) => {
    setHistory(prev => [...prev, currentPage]);
    setCurrentPage(page);
    resetIdleTimer();
  }, [currentPage, resetIdleTimer]);

  const goBack = useCallback(() => {
    setHistory(prev => {
      const newHistory = [...prev];
      const prevPage = newHistory.pop();
      if (prevPage !== undefined) setCurrentPage(prevPage);
      return newHistory;
    });
    resetIdleTimer();
  }, [resetIdleTimer]);

  // Touch / click activity — reset timer on any interaction
  useEffect(() => {
    const handler = () => {
      if (currentPage !== PAGES.IDLE) {
        resetIdleTimer();
      }
    };
    window.addEventListener('touchstart', handler, { passive: true });
    window.addEventListener('mousedown', handler, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handler);
      window.removeEventListener('mousedown', handler);
    };
  }, [currentPage, resetIdleTimer]);

  // Start/stop idle timer based on page
  useEffect(() => {
    if (currentPage === PAGES.IDLE) {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (idleCountRef.current) clearInterval(idleCountRef.current);
      setIdleSeconds(IDLE_TIMEOUT_MS / 1000);
    } else {
      resetIdleTimer();
    }
    return () => {
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      if (idleCountRef.current) clearInterval(idleCountRef.current);
    };
  }, [currentPage]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <AppContext.Provider value={{
      currentPage,
      language,
      setLanguage,
      navigate,
      goBack,
      goToIdle,
      idleSeconds,
      totalIdleSeconds: IDLE_TIMEOUT_MS / 1000,
      PAGES,
    }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used inside AppProvider');
  return ctx;
}
