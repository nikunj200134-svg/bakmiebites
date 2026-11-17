import { WHATSAPP_NUMBER, CONTACT_EMAIL, BRAND_NAME } from './siteConfig';

export { WHATSAPP_NUMBER, CONTACT_EMAIL, BRAND_NAME };
export const OWNER_EMAIL = CONTACT_EMAIL;

export function getWhatsAppUrl(flavour?: string): string {
  const text = flavour
    ? `Hi Bakmiebites team, I'd like to know more about ${flavour} popcorn.`
    : `Hi Bakmiebites team, I'd like to know more about your popcorn.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

export function getEmailSubject(): string {
  return 'Enquiry from Bakmiebites website';
}

export function getEmailBody(flavour?: string): string {
  if (flavour) {
    return `Hi Bakmiebites team,\n\nI'd like to know more about ${flavour} popcorn.\n\nThanks,`;
  }
  return `Hi Bakmiebites team,\n\nI'd like to know more about your popcorn.\n\nThanks,`;
}

export function getGmailDesktopUrl(flavour?: string): string {
  const su = encodeURIComponent(getEmailSubject());
  const body = encodeURIComponent(getEmailBody(flavour));
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT_EMAIL}&su=${su}&body=${body}`;
}

export function getMailtoUrl(flavour?: string): string {
  const su = encodeURIComponent(getEmailSubject());
  const body = encodeURIComponent(getEmailBody(flavour));
  return `mailto:${CONTACT_EMAIL}?subject=${su}&body=${body}`;
}

export function isMobileDevice(): boolean {
  if (typeof window === 'undefined') return false;
  return /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent);
}

export function openWhatsApp(flavour?: string) {
  const url = getWhatsAppUrl(flavour);
  window.open(url, '_blank', 'noopener,noreferrer');
}

export function openEmail(flavour?: string) {
  if (isMobileDevice()) {
    window.location.href = getMailtoUrl(flavour);
  } else {
    window.open(getGmailDesktopUrl(flavour), '_blank', 'noopener,noreferrer');
  }
}
