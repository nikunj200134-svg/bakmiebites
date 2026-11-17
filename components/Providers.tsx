'use client';

import React, { ReactNode } from 'react';
import { ContactProvider } from './ContactContext';
import { PopcornBurstEffect } from './PopcornBurstEffect';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ContactProvider>
      {children}
      <PopcornBurstEffect />
    </ContactProvider>
  );
}
