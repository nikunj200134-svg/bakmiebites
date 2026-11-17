'use client';

import React, { useState } from 'react';

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpenId?: string | null;
  allowMultiple?: boolean;
}

export function Accordion({ items, defaultOpenId = null, allowMultiple = false }: AccordionProps) {
  const [openIds, setOpenIds] = useState<string[]>(defaultOpenId ? [defaultOpenId] : []);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) => (prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]));
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      {items.map((item) => {
        const isOpen = openIds.includes(item.id);
        return (
          <div
            key={item.id}
            className="rounded-[20px] border-3 border-[var(--ink)] bg-[var(--white)] overflow-hidden shadow-xs transition-shadow"
          >
            <button
              type="button"
              onClick={() => toggle(item.id)}
              aria-expanded={isOpen}
              aria-controls={`accordion-panel-${item.id}`}
              id={`accordion-btn-${item.id}`}
              className="w-full p-4 flex items-center justify-between font-display text-[17px] md:text-[19px] text-[var(--ink)] uppercase text-left cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)]"
            >
              <span>{item.title}</span>
              <span className="w-8 h-8 rounded-full border-2 border-[var(--ink)] flex items-center justify-center font-bold text-lg bg-[var(--yellow)] flex-shrink-0 ml-3">
                {isOpen ? '−' : '+'}
              </span>
            </button>
            {isOpen && (
              <div
                id={`accordion-panel-${item.id}`}
                role="region"
                aria-labelledby={`accordion-btn-${item.id}`}
                className="p-4 pt-0 border-t border-[var(--ink)]/10 font-body text-sm text-[var(--ink)]/85 leading-relaxed"
              >
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
