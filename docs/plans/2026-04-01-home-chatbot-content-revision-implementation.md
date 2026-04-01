# Home And Chatbot Content Revision Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Revisar a home institucional e a pagina `/chatbot` para destacar melhor o chatbot no WhatsApp, melhorar os CTAs e reorganizar a narrativa publica do produto.

**Architecture:** A implementacao se concentra em duas paginas Astro existentes, com alteracoes exclusivamente editoriais e estruturais. A home permanece institucional, mas passa a introduzir o chatbot cedo e com CTA principal claro; a pagina `/chatbot` e reorganizada para funcionar como pagina de produto publico antes de aprofundar detalhes tecnicos.

**Tech Stack:** Astro, TypeScript frontmatter, Tailwind utility classes, content collections ja existentes

---

### Task 1: Reescrever o hero da home

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Atualizar o kicker, titulo, texto e CTAs do hero**

Substituir o bloco inicial por uma versao que:
- use `Projeto Mbiru'i` como kicker;
- mencione tuberculose, Guarani Kaiowa e WhatsApp logo no topo;
- mantenha o projeto como protagonista;
- troque o CTA principal para `Testar no WhatsApp`;
- troque o CTA secundario para `Entender o projeto`.

**Step 2: Verificar consistencia com a direcao editorial**

Confirmar que o texto:
- continua institucional;
- nao soa como landing puramente comercial;
- apresenta o chatbot como desdobramento publico do projeto.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite home hero around institutional message and WhatsApp CTA"
```

---

### Task 2: Inserir bloco de destaque do chatbot na home

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Criar nova secao logo apos o hero**

Adicionar um bloco com:
- titulo `Um caminho publico de acesso ja esta disponivel`
- texto curto sobre o chatbot como principal produto publico
- tres destaques:
  - `Funciona no WhatsApp`
  - `Usa fontes revisadas`
  - `Nao substitui atendimento profissional`
- dois CTAs:
  - `Testar no WhatsApp`
  - `Como funciona o chatbot`

**Step 2: Ajustar o layout para desktop e mobile**

Garantir que:
- o bloco fique cedo na leitura;
- os destaques sejam rapidamente escaneaveis;
- os CTAs fiquem visiveis sem competir com o hero.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: add chatbot highlight section to home"
```

---

### Task 3: Revisar rotulos de botoes e CTAs na home

**Files:**
- Modify: `src/pages/index.astro`
- Modify: `src/navigation.ts`

**Step 1: Atualizar rotulos editoriais da home**

Aplicar as trocas definidas no design:
- `Ler visao e missao` -> `Entender o projeto`
- `Ver pesquisa` -> `Conhecer a pesquisa`
- `Ver chatbot` -> `Como funciona o chatbot`
- `Baixar estudo de caso` -> `Ler estudo de caso`
- CTA de uso do produto -> `Testar no WhatsApp`

**Step 2: Revisar navegacao se necessario**

Se a navegacao principal ou rotulos relacionados ao chatbot estiverem desalinhados com a nova direcao, ajustar `src/navigation.ts`.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Commit**

```bash
git add src/pages/index.astro src/navigation.ts
git commit -m "feat: clarify home CTAs and navigation labels"
```

---

### Task 4: Reestruturar o hero da pagina `/chatbot`

**Files:**
- Modify: `src/pages/chatbot.astro`

**Step 1: Reescrever o topo da pagina como hero de produto**

Atualizar:
- kicker para `Chatbot no WhatsApp`
- titulo para `Um canal simples para acessar informacoes sobre tuberculose em Guarani Kaiowa.`
- texto de apoio com foco em publico, utilidade e limites
- CTA principal `Testar no WhatsApp`
- CTA secundario `Ler estudo de caso`

**Step 2: Remover ou reduzir linguagem excessivamente tecnica no topo**

Garantir que a arquitetura tecnica nao apareca antes da proposta de valor.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Commit**

```bash
git add src/pages/chatbot.astro
git commit -m "feat: rewrite chatbot page hero as public product intro"
```

---

### Task 5: Reorganizar a pagina `/chatbot` por perguntas do usuario

**Files:**
- Modify: `src/pages/chatbot.astro`

**Step 1: Ajustar os blocos existentes para responder primeiro a utilidade**

Reorganizar a pagina para esta ordem:
- o que faz
- para quem foi pensado
- como funciona
- quando usar
- quando nao usar
- por que confiar
- base tecnica e cientifica

**Step 2: Aproveitar o conteudo existente com nova hierarquia**

Reusar o que ja existe em:
- `productPoints`
- `usageSteps`
- `governancePoints`
- `pipelineCards`

Mas reposicionar `pipelineCards` e outros detalhes tecnicos para mais baixo na pagina.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Commit**

```bash
git add src/pages/chatbot.astro
git commit -m "feat: reorganize chatbot page around public product narrative"
```

---

### Task 6: Criar os blocos `quando usar`, `quando nao usar` e `por que confiar`

**Files:**
- Modify: `src/pages/chatbot.astro`

**Step 1: Adicionar secao `Quando usar`**

Incluir bullets equivalentes a:
- entender melhor a tuberculose;
- consultar informacoes iniciais em linguagem mais acessivel;
- apoiar conversas entre comunidade e agentes de saude.

**Step 2: Adicionar secao `Quando nao usar`**

Incluir bullets equivalentes a:
- situacoes de urgencia;
- diagnostico;
- substituicao de consulta ou avaliacao profissional.

**Step 3: Adicionar secao `Por que confiar`**

Incluir sinais de confianca:
- revisao humana;
- fontes aprovadas;
- limites explicitos;
- estudo de caso publico.

**Step 4: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 5: Commit**

```bash
git add src/pages/chatbot.astro
git commit -m "feat: add trust and usage guidance sections to chatbot page"
```

---

### Task 7: Reposicionar base tecnica e metadados

**Files:**
- Modify: `src/pages/chatbot.astro`
- Modify: `src/pages/index.astro`

**Step 1: Rebaixar a base tecnica na ordem visual**

Manter os blocos de stack e pipelines, mas abaixo dos blocos de utilidade, limites e confianca.

**Step 2: Atualizar metadados**

Ajustar `metadata.title` e `metadata.description` se necessario para refletir:
- saude indigena;
- tuberculose;
- Guarani Kaiowa;
- WhatsApp;
- uso publico do chatbot.

**Step 3: Rodar verificacao local**

Run: `npm run build`
Expected: build concluido sem erro.

**Step 4: Revisao final**

Run: `git diff -- src/pages/index.astro src/pages/chatbot.astro src/navigation.ts`
Expected: diff concentrado nas mudancas editoriais e estruturais aprovadas.

**Step 5: Commit**

```bash
git add src/pages/index.astro src/pages/chatbot.astro src/navigation.ts
git commit -m "feat: align home and chatbot page with public product narrative"
```
