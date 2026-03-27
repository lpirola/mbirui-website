import { getPermalink } from './utils/permalinks';
import { chatbotWhatsappUrl } from './utils/chatbot';
import type { CallToAction } from './types';

type HeaderLink = {
  text?: string;
  href?: string;
  links?: HeaderLink[];
};

type FooterLink = {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
};

type FooterSection = {
  title?: string;
  links: FooterLink[];
};

export const headerData = {
  links: [
    { text: 'Início', href: getPermalink('/') },
    { text: 'Pesquisa', href: getPermalink('/pesquisa') },
    { text: 'Resultados', href: getPermalink('/resultados') },
    { text: 'Equipe', href: getPermalink('/equipe') },
    { text: 'Galeria', href: getPermalink('/galeria') },
    { text: 'Contato', href: getPermalink('/contato') },
  ],
  actions: [{ text: 'Chatbot', href: chatbotWhatsappUrl, variant: 'primary' }] satisfies CallToAction[],
} satisfies {
  links: HeaderLink[];
  actions: CallToAction[];
};

export const footerData = {
  links: [
    {
      title: 'Projeto',
      links: [
        { text: 'Início', href: getPermalink('/') },
        { text: 'Pesquisa', href: getPermalink('/pesquisa') },
        { text: 'Resultados', href: getPermalink('/resultados') },
      ],
    },
    {
      title: 'Conteúdo',
      links: [
        { text: 'Galeria', href: getPermalink('/galeria') },
        { text: 'Equipe', href: getPermalink('/equipe') },
        { text: 'Contato', href: getPermalink('/contato') },
      ],
    },
    {
      title: 'Acesso rápido',
      links: [
        { text: 'Chatbot', href: chatbotWhatsappUrl },
        { text: 'Projetos', href: getPermalink('/projetos') },
        { text: 'Prêmios', href: getPermalink('/premios') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Termos de Uso', href: getPermalink('/terms') },
    { text: 'Política de Privacidade', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Fiocruz',
      icon: 'tabler:building-hospital',
      href: 'https://portal.fiocruz.br/',
    },
    {
      ariaLabel: 'WhatsApp',
      icon: 'tabler:brand-whatsapp',
      href: chatbotWhatsappUrl,
    },
    {
      ariaLabel: 'E-mail',
      icon: 'tabler:mail',
      href: 'mailto:mbirui@fiocruz.br',
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} Projeto Mbiru'i · 
    Conteúdo institucional e acervo curado para circulação pública.
  `,
} satisfies {
  links: FooterSection[];
  secondaryLinks: FooterLink[];
  socialLinks: FooterLink[];
  footNote: string;
};
