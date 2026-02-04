import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'O Projeto',
      links: [
        {
          text: 'Objetivos',
          href: getPermalink('/about'),
        },
        {
          text: 'Visão e Missão',
          href: getPermalink('/sobre'),
        },
        {
          text: 'Projetos',
          href: getPermalink('/projetos'),
        }
      ]
    },
    {
      text: 'Produções',
      links: [
        {
          text: 'Livros',
          href: getPermalink('/producoes'),
        },
        {
          text: 'Cartilhas',
          href: getPermalink('/producoes/cartilhas'),
        },
        {
          text: 'Relatórios',
          href: getPermalink('/producoes/relatorios'),
        }
      ]
    },
    {
      text: 'Pesquisa',
      href: getPermalink('/pesquisa'),
      links: [
        {
          text: 'Saúde Indígena',
          href: getPermalink('/pesquisa/saude-indigena'),
        }
      ]
    },
    {
      text: 'Equipe',
      href: getPermalink('/equipe'),
      links: [
        {
          text: 'Equipe Atual',
          href: getPermalink('/equipe/atual'),
        },
        {
          text: 'Colaboradores',
          href: getPermalink('/equipe/colaboradores'),
        }
      ]
    },
    {
      text: 'Artigos',
      href: getPermalink('/artigos'),
    },
    {
      text: 'Prêmios',
      href: getPermalink('/premios'),
    }
  ],
  actions: [
    { 
      text: 'Chatbot', 
      href: getPermalink('/chatbot'), 
      variant: 'primary'
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Features', href: '#' },
        { text: 'Security', href: '#' },
        { text: 'Team', href: '#' },
        { text: 'Enterprise', href: '#' },
        { text: 'Customer stories', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Resources', href: '#' },
      ],
    },
    {
      title: 'Platform',
      links: [
        { text: 'Developer API', href: '#' },
        { text: 'Partners', href: '#' },
        { text: 'Atom', href: '#' },
        { text: 'Electron', href: '#' },
        { text: 'AstroWind Desktop', href: '#' },
      ],
    },
    {
      title: 'Support',
      links: [
        { text: 'Docs', href: '#' },
        { text: 'Community Forum', href: '#' },
        { text: 'Professional Services', href: '#' },
        { text: 'Skills', href: '#' },
        { text: 'Status', href: '#' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: '#' },
        { text: 'Blog', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'Press', href: '#' },
        { text: 'Inclusion', href: '#' },
        { text: 'Social Impact', href: '#' },
        { text: 'Shop', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/arthelokyo/astrowind' },
  ],
  footNote: `
    Made by <a class="text-blue-600 underline dark:text-muted" href="https://github.com/arthelokyo"> Arthelokyo</a> · All rights reserved.
  `,
};
