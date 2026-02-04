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
      title: 'O Projeto',
      links: [
        { text: 'Objetivos', href: getPermalink('/about') },
        { text: 'Visão e Missão', href: getPermalink('/sobre') },
        { text: 'Projetos', href: getPermalink('/projetos') },
        { text: 'Equipe', href: getPermalink('/equipe') },
      ],
    },
    {
      title: 'Produções',
      links: [
        { text: 'Livros', href: getPermalink('/producoes') },
        { text: 'Cartilhas', href: getPermalink('/producoes/cartilhas') },
        { text: 'Relatórios', href: getPermalink('/producoes/relatorios') },
        { text: 'Artigos', href: getPermalink('/artigos') },
      ],
    },
    {
      title: 'Pesquisa',
      links: [
        { text: 'Saúde Indígena', href: getPermalink('/pesquisa/saude-indigena') },
        { text: 'Estratégias de Prevenção', href: getPermalink('/pesquisa/estrategias-prevencao') },
        { text: 'Tuberculose', href: getPermalink('/pesquisa/tuberculose') },
      ],
    },
    {
      title: 'Colaboração',
      links: [
        { text: 'Chatbot', href: getPermalink('/chatbot') },
        { text: 'Prêmios', href: getPermalink('/premios') },
        { text: 'Contato', href: getPermalink('/contato') },
        { text: 'Quero Colaborar', href: getPermalink('/colaborar') },
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
      href: 'https://portal.fiocruz.br/' 
    },
    { 
      ariaLabel: 'Instagram', 
      icon: 'tabler:brand-instagram', 
      href: '#' 
    },
    { 
      ariaLabel: 'WhatsApp', 
      icon: 'tabler:brand-whatsapp', 
      href: '#' 
    },
    { 
      ariaLabel: 'E-mail', 
      icon: 'tabler:mail', 
      href: 'mailto:mbirui@fiocruz.br' 
    },
  ],
  footNote: `
    © ${new Date().getFullYear()} Projeto Mbiru'i · 
    Desenvolvido por <a class="text-primary underline dark:text-accent" href="https://portal.fiocruz.br/">Fiocruz</a> · 
    Todos os direitos reservados.
  `,
};
