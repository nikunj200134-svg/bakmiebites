export interface NavLink {
  label: string;
  href: string;
}

export const MAIN_NAV_LINKS: NavLink[] = [
  { label: 'About Ingredients', href: '/ingredients' },
  { label: 'Find a Store', href: '/find-a-store' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Sustainability', href: '/sustainability' },
];

export const FOOTER_SUPPORT_LINKS: NavLink[] = [
  { label: 'Contact Us', href: '#contact' },
  { label: 'Terms of Service', href: '/terms' },
  { label: 'Privacy Policy', href: '/privacy' },
];
