'use client';

import React, { useEffect, useState } from 'react';
import { Phone, Mail } from 'lucide-react';
import { Modal } from '@/components/ui/Modal';
import { getWhatsAppUrl, getGmailDesktopUrl, getMailtoUrl, isMobileDevice } from '@/lib/contact';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  flavour?: string;
}

export function ContactModal({ isOpen, onClose, flavour }: ContactModalProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(isMobileDevice());
  }, []);

  const whatsappHref = getWhatsAppUrl(flavour);
  const emailHref = isMobile ? getMailtoUrl(flavour) : getGmailDesktopUrl(flavour);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="GET IN TOUCH"
      subtitle="We respond quickly on WhatsApp & Email"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        {/* Green WhatsApp Us Button */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setTimeout(onClose, 300)}
          className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[#00C853] hover:bg-[#00B248] text-white font-display text-[15px] md:text-[16px] uppercase tracking-wide transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
        >
          <Phone className="w-4 h-4 fill-white" />
          <span>WHATSAPP US</span>
        </a>

        {/* Maroon Open Gmail Button */}
        <a
          href={emailHref}
          target={isMobile ? undefined : '_blank'}
          rel={isMobile ? undefined : 'noopener noreferrer'}
          onClick={() => setTimeout(onClose, 300)}
          className="flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-2xl bg-[var(--ink)] hover:bg-[var(--orange-red)] text-white font-display text-[15px] md:text-[16px] uppercase tracking-wide transition-all shadow-sm active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
        >
          <Mail className="w-4 h-4" />
          <span>OPEN GMAIL</span>
        </a>
      </div>
    </Modal>
  );
}
