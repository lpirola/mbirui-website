# Projeto Mbiru'i - Estrutura do Site

Este documento descreve a estrutura de conteúdo do site do projeto Mbiru'i, implementado em Astro + Markdown.

## Visão Geral

O site do Mbiru'i cumpre três funções principais:

1. **Memória institucional** - guarda produções, documentos, relatórios, fotos, equipe
2. **Vitrine pública** - explica o projeto de forma acessível, atrai colaboradores
3. **Ponto de acesso** - chatbot/app e contato

## Estrutura de Navegação

```
/
├── O Projeto
│   ├── Objetivos
│   ├── Visão, Missão e Valores
│   └── Projetos
├── Produções
│   ├── Livros
│   ├── Cartilhas
│   ├── Relatórios
│   └── Documentos
├── Pesquisa
│   └── Saúde Indígena
├── Artigos & Blog
├── Equipe
│   ├── Equipe Atual
│   ├── Equipes Anteriores
│   └── Colaboradores
├── Prêmios & Editais
├── Chatbot
└── Contato
```

## Content Collections

O conteúdo é organizado em `src/content/` com as seguintes collections:

### `projetos/`

Informações sobre cada projeto do Mbiru'i.

**Schema:**

- `title`: string - título do projeto
- `status`: 'ativo' | 'inativo' | 'concluido' - status atual
- `inicio`: string - ano de início
- `descricao_curta`: string - descrição resumida
- `descricao`: string (opcional) - descrição detalhada

**Exemplo:**

```md
---
title: Projeto Mbiru'i
status: ativo
inicio: '2025'
descricao_curta: IA para tradução e acesso à informação em saúde indígena
---
```

### `producoes/`

Livros, cartilhas, relatórios e documentos.

**Schema:**

- `title`: string - título
- `tipo`: 'livro' | 'cartilha' | 'relatorio' | 'documento' - tipo de produção
- `ano`: number - ano
- `arquivo`: string (opcional) - caminho para o arquivo PDF
- `descricao`: string (opcional) - descrição

**Exemplo:**

```md
---
title: Relatório Técnico – Modelo de Tradução
tipo: relatorio
ano: 2026
arquivo: /docs/relatorio-modelo-traducao.pdf
---
```

### `artigos/`

Artigos de blog, divulgação científica e relatos metodológicos.

**Schema:**

- `title`: string - título
- `autor`: string - autor
- `data`: date - data de publicação
- `excerpt`: string (opcional) - resumo
- `tags`: string[] (opcional) - tags
- `image`: string (opcional) - imagem de destaque

**Exemplo:**

```md
---
title: Desafios éticos da IA em idiomas indígenas
autor: Lucas Pirola
data: 2025-12-10
tags: ['ia', 'etica', 'idiomas-indigenas']
---
```

### `equipe/`

Informações sobre membros da equipe.

**Schema:**

- `nome`: string - nome completo
- `papel`: string - papel/função
- `periodo`: 'atual' | 'anterior' - período de atuação
- `foto`: string (opcional) - caminho para foto
- `bio`: string (opcional) - biografia

**Exemplo:**

```md
---
nome: Ida Viktoria Kolte
papel: Investigadora Principal
periodo: atual
foto: /img/equipe/ida.jpg
---
```

### `premios/`

Prêmios e editais contemplados.

**Schema:**

- `titulo`: string - título do prêmio/edital
- `ano`: number - ano
- `financiador`: string - financiador
- `descricao`: string (opcional) - descrição

**Exemplo:**

```md
---
titulo: Edital Inova Fiocruz
ano: 2024
financiador: Fiocruz
---
```

### `pesquisa/`

Conteúdos de pesquisa em saúde indígena.

**Schema:**

- `title`: string - título
- `area`: string (opcional) - área de pesquisa
- `descricao`: string (opcional) - descrição

**Exemplo:**

```md
---
title: Tuberculose e Saúde Indígena
---
```

### `pages/`

Conteúdo institucional fixo (objetivos, visão, missão, etc.).

**Schema:**

- `title`: string - título
- `order`: number (opcional) - ordem de exibição

## Homepage

A homepage (`src/pages/index.astro`) é **100% data-driven** e exibe:

1. **Hero** - identidade do projeto
2. **Projetos em destaque** (ativos, máx. 3)
3. **Produções recentes** (máx. 4, ordenadas por ano)
4. **Artigos e publicações** (máx. 3, ordenados por data)
5. **Equipe** (membros atuais)
6. **CTA** - chamada para colaboração

## Próximos Passos

### Estrutura de Páginas

Criar as páginas de listagem e detalhes:

- `/projetos/[slug].astro`
- `/producoes/[slug].astro`
- `/artigos/[slug].astro`
- `/equipe/[slug].astro`
- `/premios/[slug].astro`

### Páginas Institucionais

- `/projetos/index.astro` - lista de projetos
- `/producoes/index.astro` - lista de produções (com filtros por tipo)
- `/artigos/index.astro` - blog
- `/equipe/index.astro` - equipe completa
- `/premios/index.astro` - prêmios e editais

### Chatbot

- `/chatbot` - página explicativa e acesso

### Contato

- `/contato` - formulário de contato

## Vantagens da Estrutura

- ✅ Conteúdo versionável (Git)
- ✅ Fácil manutenção por não-técnicos
- ✅ Separação clara: conteúdo ≠ layout
- ✅ Escalável para anos de projeto
- ✅ Ideal para memória institucional

## Imagens

Organizar imagens em `public/img/`:

- `public/img/projeto/` - fotos do projeto
- `public/img/equipe/` - fotos da equipe
- `public/assets/` - imagens de destaque
