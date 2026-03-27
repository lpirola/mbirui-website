# Design de Conteúdo do Site Mbiru'i

**Data:** 2026-03-27

**Objetivo**

Reestruturar o site do Projeto Mbiru'i usando o conteúdo de `Materiais para o site` como fonte principal para páginas editoriais e uma galeria temática, mantendo clareza institucional e reduzindo risco editorial.

## Decisão de arquitetura

A arquitetura aprovada é híbrida:

- páginas editoriais principais para explicar o projeto de forma clara;
- uso do acervo de fotos, slides e materiais públicos como apoio visual e documental;
- galeria separada por temas, sem expor a estrutura bruta das pastas.

Essa abordagem evita transformar o site em arquivo desorganizado e permite publicar com consistência mesmo antes de uma curadoria completa de todo o acervo.

## Estrutura aprovada

- `Home`
- `Pesquisa`
- `Resultados`
- `Equipe`
- `Contato`
- `Galeria`

## Página por página

### Home

Objetivo: apresentar o projeto em uma leitura rápida e orientar a navegação.

Blocos:

- parágrafo institucional curto;
- dois cards principais: `IA / Mbiru'i` e `mNGS`;
- chamada para a página `Pesquisa`;
- chamada para `Resultados`;
- chamada para `Galeria`;
- chamada final para `Contato`.

Fontes:

- síntese editorial do arquivo `Materiais para o site/Ideias para o site Mbirui.docx`;
- textos institucionais já existentes em `src/content`;
- uma ou duas imagens fortes do acervo aprovado.

### Pesquisa

Objetivo: separar com clareza os dois eixos do programa.

Blocos:

- introdução curta sobre o programa de pesquisa;
- seção `IA / Mbiru'i` com objetivo, problema enfrentado, abordagem e estado atual;
- seção `mNGS` com objetivo, contexto, abordagem e formação/capacitação;
- bloco final explicando como os dois eixos se conectam.

Fontes:

- materiais de `Materiais para o site/Slides`;
- fotos de `Processo de mNGS`, `Capacitação dos AIS`, `TRabalho com os bolsistas`;
- textos existentes em `src/content/pesquisa`.

### Resultados

Objetivo: reunir entregas, apresentações, circulação pública e materiais acessíveis.

Blocos:

- introdução curta;
- `Apresentações e PDFs`;
- `Workshops e eventos`;
- `Materiais públicos`;
- `Instagram e presença pública`;
- destaques visuais do acervo ligados à circulação pública do projeto.

Fontes:

- PDFs e apresentações da pasta `Materiais para o site/Slides`;
- registros visuais de `Congressos`, `Evento Brasília dez 2025`, `Workshop estigma AIS Bororo`;
- links públicos curados manualmente.

### Equipe

Objetivo: apresentar o grupo de forma simples e institucional.

Blocos:

- introdução curta sobre a composição interdisciplinar;
- listagem com `nome + função + instituição`;
- foto somente quando adequada para publicação;
- bloco opcional de parceiros institucionais.

Fontes:

- `src/content/equipe`;
- eventual complemento manual de instituição e função.

### Contato

Objetivo: centralizar colaboração e contato institucional.

Blocos:

- texto curto de convite para contato;
- formulário simples;
- e-mail institucional principal em destaque;
- bloco opcional com temas de contato.

Fontes:

- conteúdo institucional validado manualmente.

### Galeria

Objetivo: mostrar o acervo visual de forma editorial, organizada e segura.

Blocos/agrupamentos:

- `Trabalho de campo`
- `Capacitações e formação`
- `Congressos e apresentações`
- `Eventos e encontros`
- `Aldeias e território`
- `Produtos e materiais`

Critérios:

- usar legendas curtas e editoriais;
- iniciar com seleção enxuta por categoria;
- excluir material com autorização pendente.

## Mapeamento inicial do acervo

- `Evento rezadores Amambai 2025`: `Galeria` e apoio visual de `Pesquisa`
- `TRabalho com os bolsistas`: `Pesquisa` e `Galeria`
- `Treinamento mNGS San Francisco fevereiro 2024`: `Pesquisa` e `Galeria`
- `Capacitação dos AIS`: `Pesquisa`, `Resultados` e `Galeria`
- `Evento Brasília dez 2025`: `Resultados` e `Galeria`
- `Congressos`: `Resultados` e `Galeria`
- `Processo de mNGS`: `Pesquisa` e `Galeria`
- `produtos dos projetos`: `Resultados`
- `Fotos aldeia em geral`: `Galeria` e apoio institucional
- `Slides`: base documental de `Pesquisa` e `Resultados`

## Regras editoriais aprovadas

- não publicar números conflitantes sem validação;
- não afirmar pioneirismo no Brasil sem referência verificável;
- não apresentar entregas em andamento como concluídas;
- não usar `Materiais para o site/Fotos/Fotos autorizacao pendente`;
- converter nomes de arquivos em linguagem editorial apropriada.

## Impacto esperado no código

- revisão da home em `src/pages/index.astro`;
- revisão das páginas institucionais existentes em `src/pages/pesquisa/index.astro`, `src/pages/producoes/index.astro`, `src/pages/equipe/index.astro` e `src/pages/contact.astro`;
- criação de nova rota para galeria;
- possível criação de nova coleção em `src/content/config.ts` para organizar itens da galeria e resultados;
- ajuste da navegação em `src/navigation.ts`;
- inclusão de ativos publicados em `public/` para evitar dependência direta de caminhos com espaços e arquivos ainda não curados.
