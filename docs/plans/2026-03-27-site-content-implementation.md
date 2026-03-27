# Site Content Refresh Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reestruturar o site do Projeto Mbiru'i com nova home, páginas editoriais de pesquisa/resultados/equipe/contato e uma galeria temática baseada em `Materiais para o site`.

**Architecture:** O conteúdo continuará dirigido por Astro Content Collections e páginas `.astro`, mas passará a usar uma camada de curadoria explícita para resultados e galeria. O acervo bruto em `Materiais para o site` não será referenciado diretamente nas páginas públicas; os materiais publicados serão selecionados e copiados para caminhos estáveis em `public/` e representados por frontmatter estruturado em `src/content`.

**Tech Stack:** Astro 5, Astro Content Collections, TypeScript, Tailwind CSS, Markdown, ativos estáticos em `public/`.

---

### Task 1: Inventariar o acervo publicável

**Files:**
- Review: `Materiais para o site/`
- Create: `docs/plans/2026-03-27-site-content-inventory.md`

**Step 1: Mapear os grupos do acervo**

Listar pastas de fotos, slides e arquivos públicos com observações de uso editorial.

**Step 2: Marcar exclusões editoriais**

Registrar explicitamente que `Materiais para o site/Fotos/Fotos autorizacao pendente` fica fora da publicação.

**Step 3: Separar materiais por destino**

Classificar cada item inicial como `pesquisa`, `resultados`, `galeria` ou `nao_publicar`.

**Step 4: Revisar inventário**

Verificar se cada seção do site tem insumo suficiente para publicar sem texto improvisado.

**Step 5: Commit**

```bash
git add docs/plans/2026-03-27-site-content-inventory.md
git commit -m "docs: add site content inventory"
```

### Task 2: Ajustar o schema de conteúdo

**Files:**
- Modify: `src/content/config.ts`
- Create: `src/content/resultados/`
- Create: `src/content/galeria/`

**Step 1: Definir schema de resultados**

Adicionar uma coleção `resultados` com campos mínimos:

```ts
title: z.string(),
categoria: z.enum(['apresentacao', 'pdf', 'workshop', 'material-publico', 'instagram']),
ano: z.number(),
arquivo: z.string().optional(),
link: z.string().url().optional(),
descricao: z.string().optional(),
destaque: z.boolean().optional(),
imagem: z.string().optional(),
```

**Step 2: Definir schema da galeria**

Adicionar uma coleção `galeria` com campos mínimos:

```ts
title: z.string(),
categoria: z.enum(['trabalho-de-campo', 'capacitacoes', 'congressos', 'eventos', 'territorio', 'produtos']),
imagem: z.string(),
alt: z.string(),
ordem: z.number().optional(),
descricao: z.string().optional(),
```

**Step 3: Registrar as novas coleções**

Atualizar `export const collections` para incluir `resultados` e `galeria`.

**Step 4: Validar tipagem**

Run: `npm run check`
Expected: sucesso sem erros de schema.

**Step 5: Commit**

```bash
git add src/content/config.ts src/content/resultados src/content/galeria
git commit -m "feat: add content collections for resultados and galeria"
```

### Task 3: Publicar ativos selecionados em caminhos estáveis

**Files:**
- Create: `public/media/resultados/`
- Create: `public/media/galeria/`

**Step 1: Selecionar o lote inicial**

Escolher um conjunto mínimo de arquivos para publicar:

- 4 a 8 itens para `Resultados`
- 24 a 48 imagens para `Galeria`

**Step 2: Padronizar nomes de arquivos**

Renomear os arquivos copiados para slugs sem espaços e sem acentos.

**Step 3: Copiar os ativos**

Copiar somente o material aprovado para `public/media/resultados/` e `public/media/galeria/`.

**Step 4: Verificar referências**

Confirmar que os caminhos públicos funcionam com o formato `/media/...`.

**Step 5: Commit**

```bash
git add public/media/resultados public/media/galeria
git commit -m "feat: publish curated site media assets"
```

### Task 4: Criar o conteúdo estruturado de Resultados

**Files:**
- Create: `src/content/resultados/*.md`

**Step 1: Criar entradas de apresentações e PDFs**

Criar arquivos Markdown individuais para os materiais públicos já confirmados.

Exemplo:

```md
---
title: Apresentação institucional do projeto
categoria: apresentacao
ano: 2025
arquivo: /media/resultados/apresentacao-institucional.pdf
descricao: Síntese pública do projeto apresentada em evento institucional.
destaque: true
---
```

**Step 2: Criar entradas de workshops e materiais públicos**

Adicionar arquivos para workshops, convites e materiais de circulação.

**Step 3: Criar entradas de presença pública**

Adicionar links externos confirmados, como Instagram, usando `link`.

**Step 4: Revisar coerência editorial**

Verificar que nenhuma entrada trate algo em andamento como concluído.

**Step 5: Commit**

```bash
git add src/content/resultados
git commit -m "feat: add curated resultados content"
```

### Task 5: Criar o conteúdo estruturado da Galeria

**Files:**
- Create: `src/content/galeria/*.md`

**Step 1: Criar arquivos por imagem**

Criar uma entrada por imagem selecionada com categoria, título e `alt` editorial.

Exemplo:

```md
---
title: Capacitação de AIS para coleta em mNGS
categoria: capacitacoes
imagem: /media/galeria/capacitacao-ais-coleta-mngs-amambai.jpeg
alt: Profissionais e agentes indígenas de saúde durante atividade de capacitação em coleta para mNGS.
ordem: 10
descricao: Atividade formativa realizada com agentes indígenas de saúde em Amambai.
---
```

**Step 2: Agrupar por temas**

Garantir cobertura mínima para todas as categorias aprovadas.

**Step 3: Revisar legendas**

Substituir títulos baseados em nome de arquivo por legendas institucionais curtas.

**Step 4: Validar conteúdo**

Run: `npm run check`
Expected: sucesso na leitura das coleções.

**Step 5: Commit**

```bash
git add src/content/galeria
git commit -m "feat: add gallery content entries"
```

### Task 6: Reestruturar a Home

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Reduzir a introdução**

Trocar o hero atual por um texto institucional curto, focado em missão e navegação.

**Step 2: Destacar dois eixos**

Adicionar dois cards para `IA / Mbiru'i` e `mNGS`, cada um com descrição curta e link para `Pesquisa`.

**Step 3: Inserir atalhos editoriais**

Adicionar blocos curtos com links para `Resultados`, `Galeria` e `Contato`.

**Step 4: Preservar CTA relevante**

Manter o CTA do chatbot apenas se ainda fizer sentido editorial na home.

**Step 5: Verificar a página**

Run: `npm run check`
Expected: página compila sem erro.

**Step 6: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: simplify homepage around key project areas"
```

### Task 7: Reescrever a página de Pesquisa

**Files:**
- Modify: `src/pages/pesquisa/index.astro`
- Optionally modify: `src/content/pesquisa/*.md`

**Step 1: Substituir listagem genérica**

Trocar a listagem atual por uma página editorial com duas seções principais.

**Step 2: Criar seção IA / Mbiru'i**

Incluir objetivo, problema, abordagem e estágio atual com base no material validado.

**Step 3: Criar seção mNGS**

Incluir objetivo, contexto, abordagem e frente de capacitação.

**Step 4: Conectar os dois eixos**

Adicionar um bloco curto explicando a complementaridade entre linguagem, cuidado e diagnóstico.

**Step 5: Revisar conteúdo auxiliar**

Atualizar ou remover entradas antigas de `src/content/pesquisa` se gerarem conflito com a nova narrativa.

**Step 6: Commit**

```bash
git add src/pages/pesquisa/index.astro src/content/pesquisa
git commit -m "feat: rewrite pesquisa page around two research axes"
```

### Task 8: Transformar Produções em Resultados editoriais

**Files:**
- Modify: `src/pages/producoes/index.astro`
- Optionally create: `src/pages/resultados.astro`

**Step 1: Decidir rota final**

Escolher entre:

- manter `/producoes` e mudar o texto da página para `Resultados`;
- criar `/resultados` e deixar `/producoes` como compatibilidade.

Recomendação: criar `/resultados` e redirecionar a navegação para ela.

**Step 2: Consumir a coleção `resultados`**

Trocar a dependência da coleção `producoes` pela nova coleção `resultados` na página editorial principal.

**Step 3: Organizar por categoria**

Renderizar grupos para `Apresentações e PDFs`, `Workshops e eventos`, `Materiais públicos` e `Instagram e presença pública`.

**Step 4: Adicionar destaques visuais**

Usar imagens opcionais de resultados para quebrar a página e reforçar circulação pública.

**Step 5: Commit**

```bash
git add src/pages/producoes/index.astro src/pages/resultados.astro src/navigation.ts
git commit -m "feat: add editorial resultados page"
```

### Task 9: Reestruturar Equipe

**Files:**
- Modify: `src/content/equipe/*.md`
- Modify: `src/pages/equipe/index.astro`

**Step 1: Enriquecer frontmatter**

Adicionar `instituicao` em cada membro ativo.

**Step 2: Simplificar a renderização**

Mostrar `nome`, `função` e `instituição` com hierarquia visual simples.

**Step 3: Revisar bios**

Encurtar bios longas para evitar ruído na listagem.

**Step 4: Validar consistência**

Garantir que toda pessoa listada tenha ao menos `nome`, `papel` e `instituicao`.

**Step 5: Commit**

```bash
git add src/content/equipe src/pages/equipe/index.astro src/content/config.ts
git commit -m "feat: update equipe page with institutions"
```

### Task 10: Reescrever Contato

**Files:**
- Modify: `src/pages/contact.astro`
- Optionally modify: `src/navigation.ts`

**Step 1: Traduzir e recontextualizar**

Substituir o conteúdo genérico em inglês por conteúdo institucional em português.

**Step 2: Manter formulário simples**

Preservar nome, e-mail e mensagem, ajustando labels e textos de apoio.

**Step 3: Destacar e-mail institucional**

Exibir o endereço principal como canal prioritário.

**Step 4: Remover blocos irrelevantes**

Eliminar telefone e endereço fictícios se não houver dados reais aprovados.

**Step 5: Commit**

```bash
git add src/pages/contact.astro src/navigation.ts
git commit -m "feat: localize contact page for institutional use"
```

### Task 11: Criar a página de Galeria

**Files:**
- Create: `src/pages/galeria.astro`

**Step 1: Ler a coleção `galeria`**

Buscar os itens com `getCollection('galeria')`.

**Step 2: Agrupar por categoria**

Renderizar seções para cada grupo temático aprovado.

**Step 3: Exibir grid responsivo**

Montar uma grade com imagem, título e legenda curta, sem exagero de texto.

**Step 4: Garantir acessibilidade**

Usar `alt` editorial em todas as imagens e hierarquia correta de headings.

**Step 5: Verificar a página**

Run: `npm run check`
Expected: rota compila e a coleção é resolvida.

**Step 6: Commit**

```bash
git add src/pages/galeria.astro
git commit -m "feat: add themed gallery page"
```

### Task 12: Ajustar navegação e links institucionais

**Files:**
- Modify: `src/navigation.ts`
- Optionally modify: `src/pages/about.astro`
- Optionally modify: `src/content/pages/*.md`

**Step 1: Atualizar menu principal**

Garantir links claros para `Pesquisa`, `Resultados`, `Equipe`, `Galeria` e `Contato`.

**Step 2: Limpar links quebrados ou irrelevantes**

Remover categorias que não terão página pública no primeiro lançamento.

**Step 3: Ajustar footer**

Espelhar a nova arquitetura do site no rodapé.

**Step 4: Revisar permalinks**

Confirmar que não restaram links para rotas inexistentes, como seções antigas ou placeholders.

**Step 5: Commit**

```bash
git add src/navigation.ts src/pages/about.astro src/content/pages
git commit -m "feat: align navigation with new content architecture"
```

### Task 13: Verificar, revisar e polir

**Files:**
- Review: `src/pages/`
- Review: `src/content/`

**Step 1: Rodar validação geral**

Run: `npm run check`
Expected: sem erros.

**Step 2: Rodar build**

Run: `npm run build`
Expected: build completa com geração de rotas novas.

**Step 3: Revisar visualmente**

Run: `npm run dev`
Expected: validar manualmente `/, /pesquisa, /resultados ou /producoes, /equipe, /contact ou /contato, /galeria`.

**Step 4: Revisar risco editorial**

Confirmar antes do merge:

- sem números divergentes;
- sem afirmações de pioneirismo sem fonte;
- sem imagens de autorização pendente;
- sem conteúdo placeholder em inglês.

**Step 5: Commit**

```bash
git add .
git commit -m "feat: publish curated editorial structure for site"
```
