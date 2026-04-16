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
    { text: 'Visão e Missão', href: '/#visao-missao' },
    { text: 'Pesquisa', href: '/#pesquisa' },
    // { text: 'Produções', href: '/#producoes' },
    { text: 'Prêmios', href: '/#premios' },
    { text: 'Equipe', href: '/#equipe' },
    { text: 'Contato', href: '/#contato' },
  ],
  actions: [
    {
      text: 'Testar no WhatsApp',
      href: chatbotWhatsappUrl,
      target: '_blank',
      variant: 'primary',
      icon: 'tabler:brand-whatsapp',
    },
  ] satisfies CallToAction[],
} satisfies {
  links: HeaderLink[];
  actions: CallToAction[];
};

export const footerData = {
  links: [
    {
      title: 'Navegação',
      links: [
        { text: 'Visão e Missão', href: '/#visao-missao' },
        { text: 'Pesquisa', href: '/#pesquisa' },
        // { text: 'Produções', href: '/#producoes' },
        { text: 'Prêmios', href: '/#premios' },
        { text: 'Equipe', href: '/#equipe' },
        { text: 'Contato', href: '/#contato' },
      ],
    },
    {
      title: 'Acesso',
      links: [
        { text: 'Testar no WhatsApp', href: chatbotWhatsappUrl },
        { text: 'Como funciona o chatbot', href: getPermalink('/chatbot') },
        { text: 'E-mail institucional', href: 'mailto:contato@mbirui.ia.br' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Termos de Uso', href: getPermalink('/terms') },
        { text: 'Política de Privacidade', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'contato@mbirui.ia.br', href: 'mailto:contato@mbirui.ia.br' },
    { text: 'Testar no WhatsApp', href: chatbotWhatsappUrl },
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
      href: 'mailto:contato@mbirui.ia.br',
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} Projeto Mbiru'i ·
    Plataforma institucional de pesquisa, memória e colaboração em saúde indígena.
  `,
} satisfies {
  links: FooterSection[];
  secondaryLinks: FooterLink[];
  socialLinks: FooterLink[];
  footNote: string;
};
