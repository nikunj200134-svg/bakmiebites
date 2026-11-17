'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ContactModal } from './ContactModal';

interface ContactContextType {
  openContact: (flavour?: string) => void;
  closeContact: () => void;
}

const ContactContext = createContext<ContactContextType>({
  openContact: () => {},
  closeContact: () => {},
});

export function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [flavour, setFlavour] = useState<string | undefined>(undefined);

  const openContact = (selectedFlavour?: string) => {
    setFlavour(selectedFlavour);
    setIsOpen(true);
  };

  const closeContact = () => {
    setIsOpen(false);
    setFlavour(undefined);
  };

  return (
    <ContactContext.Provider value={{ openContact, closeContact }}>
      {children}
      <ContactModal isOpen={isOpen} onClose={closeContact} flavour={flavour} />
    </ContactContext.Provider>
  );
}

export function useContact() {
  return useContext(ContactContext);
}
