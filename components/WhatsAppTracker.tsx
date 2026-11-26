'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

// Envia o evento "whatsapp_click" ao GTM sempre que alguém clica em um link do WhatsApp (wa.me).
export default function WhatsAppTracker() {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.('a[href*="wa.me"]') as HTMLAnchorElement | null;
      if (!link) return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'whatsapp_click',
        link_text: (link.getAttribute('aria-label') || link.textContent || '').trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    };
    document.addEventListener('click', onClick, true);
    return () => document.removeEventListener('click', onClick, true);
  }, []);

  return null;
}
