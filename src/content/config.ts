import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),
      canonical: z.string().url().optional(),
      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),
      description: z.string().optional(),
      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),
      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const projetosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    status: z.enum(['ativo', 'inativo', 'concluido']),
    inicio: z.string(),
    descricao_curta: z.string(),
    descricao: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const producoesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tipo: z.enum(['livro', 'cartilha', 'relatorio', 'documento']),
    ano: z.number(),
    arquivo: z.string().optional(),
    descricao: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const artigosCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    autor: z.string(),
    data: z.date(),
    excerpt: z.string().optional(),
    tags: z.array(z.string()).optional(),
    image: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const equipeCollection = defineCollection({
  schema: z.object({
    nome: z.string(),
    papel: z.string(),
    periodo: z.enum(['atual', 'anterior']),
    foto: z.string().optional(),
    bio: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const premiosCollection = defineCollection({
  schema: z.object({
    titulo: z.string(),
    ano: z.number(),
    financiador: z.string(),
    descricao: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const pesquisaCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    area: z.string().optional(),
    descricao: z.string().optional(),
    metadata: metadataDefinition(),
  }),
});

const pagesCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    order: z.number().optional(),
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  projetos: projetosCollection,
  producoes: producoesCollection,
  artigos: artigosCollection,
  equipe: equipeCollection,
  premios: premiosCollection,
  pesquisa: pesquisaCollection,
  pages: pagesCollection,
};
