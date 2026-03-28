# Landing Content Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Reorganizar a experiência pública do site do Projeto Mbiru'i em torno de uma landing principal mais clara e de uma página de produto do chatbot mais orientada a ação.

**Architecture:** A implementação será concentrada em três pontos: reescrita editorial da home, transformação da página `/chatbot` em página de produto e simplificação da navegação para reforçar a estratégia `landing-first`. O conteúdo continuará vindo de Astro pages e content collections já existentes, mas a hierarquia textual e os CTAs mudarão para reduzir dispersão e aumentar clareza.

**Tech Stack:** Astro 5, TypeScript, Astro Content Collections, Tailwind CSS

---

### Task 1: Reescrever o hero e a abertura da landing

**Files:**

- Modify: `src/pages/index.astro`

**Step 1: Substituir a copy do hero**

Trocar a abertura atual por uma versão mais concreta, mencionando saúde indígena, tuberculose, Guarani Kaiowá e WhatsApp logo no topo.

Copy-base:

```ts
title: 'Saúde indígena, linguagem e tecnologia para ampliar o acesso à informação sobre tuberculose.';
text: "O Projeto Mbiru'i articula pesquisa aplicada, tradução, formação e colaboração em território para apoiar o cuidado em saúde entre comunidades Guarani e Kaiowá. Entre seus desdobramentos públicos está um agente no WhatsApp que explica tuberculose em Guarani Kaiowá.";
```

**Step 2: Adicionar CTAs no hero**

Inserir dois botões logo abaixo do texto:

- principal: `Testar no WhatsApp`
- secundário: `Entender o projeto`

O CTA principal deve usar `chatbotWhatsappUrl`.

**Step 3: Ajustar o bloco lateral**

Manter a tese pública, mas simplificar a redação para funcionar como apoio ao hero, não como bloco concorrente.

**Step 4: Validar a página**

Run: `npm run check`
Expected: sucesso sem erros de build ou tipagem em `src/pages/index.astro`.

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite landing hero around clearer public narrative"
```

### Task 2: Inserir a seção do problema e reorganizar a narrativa da home

**Files:**

- Modify: `src/pages/index.astro`

**Step 1: Criar a seção `O problema`**

Adicionar uma seção curta após o hero explicando:

- barreiras linguísticas;
- desigualdade no acesso à informação e diagnóstico;
- contexto Guarani e Kaiowá em Mato Grosso do Sul;
- papel dos AIS.

**Step 2: Reorganizar `Como o Mbiru'i funciona` como `A resposta do projeto`**

Trocar a leitura atual de etapas por dois eixos principais:

- `IA e linguagem`
- `Pesquisa aplicada e cuidado`

Se necessário, manter um terceiro bloco menor para circulação pública, mas somente se isso não voltar a dispersar a narrativa.

**Step 3: Ajustar a ordem das seções**

Garantir esta ordem na home:

1. Hero
2. O problema
3. A resposta do projeto
4. Produto em destaque
5. Como o projeto trabalha
6. Evidências e resultados
7. Equipe e rede ou contato final

**Step 4: Validar a página**

Run: `npm run check`
Expected: home compila e a nova hierarquia não introduz erros.

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: reorganize landing narrative around problem and response"
```

### Task 3: Transformar o chatbot em destaque de produto dentro da home

**Files:**

- Modify: `src/pages/index.astro`

**Step 1: Criar bloco de produto na landing**

Adicionar uma seção própria para o chatbot com as mensagens obrigatórias:

- fala Guarani Kaiowá;
- funciona no WhatsApp;
- explica tuberculose;
- apoia circulação de informação;
- não substitui atendimento profissional.

**Step 2: Repetir o CTA principal**

Incluir botão `Testar no WhatsApp` dentro da seção de produto.

**Step 3: Reduzir ou remover a seção `Entradas principais`**

Substituir a lógica de links de saída por um bloco mais útil para a landing, como:

- `Use e conheça`
- `Comece pelo agente`
- `Veja evidências e resultados`

**Step 4: Validar a página**

Run: `npm run check`
Expected: nenhuma regressão estrutural na home.

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: highlight whatsapp agent as primary public action"
```

### Task 4: Reescrever a página `/chatbot` como página de produto

**Files:**

- Modify: `src/pages/chatbot.astro`

**Step 1: Reescrever o hero da página**

Substituir o título e o texto atuais por uma proposta mais específica:

```ts
title: 'Um agente no WhatsApp para explicar tuberculose em Guarani Kaiowá.';
text: "Desenvolvido no contexto do Projeto Mbiru'i, o agente apoia a circulação de informação em saúde de forma mais acessível, em um canal simples de usar no dia a dia.";
```

**Step 2: Reestruturar as seções**

Organizar a página nesta ordem:

1. Hero
2. O que ele faz
3. Para quem foi pensado
4. Como usar
5. Uso responsável
6. Sobre o projeto

**Step 3: Reescrever os cards de valor**

Trocar os três itens genéricos atuais por mensagens concretas, por exemplo:

- `Explica informações sobre tuberculose em linguagem mais acessível`
- `Responde em Guarani Kaiowá`
- `Funciona pelo WhatsApp, em um canal já conhecido`

**Step 4: Reforçar o CTA**

Manter o botão `Abrir no WhatsApp` no topo e repetir o mesmo CTA perto do fim da página.

**Step 5: Validar a página**

Run: `npm run check`
Expected: página do chatbot compila sem erros.

**Step 6: Commit**

```bash
git add src/pages/chatbot.astro
git commit -m "feat: turn chatbot page into product-focused experience"
```

### Task 5: Simplificar a navegação para reforçar a estratégia `landing-first`

**Files:**

- Modify: `src/navigation.ts`

**Step 1: Revisar o header**

Reduzir a ênfase em páginas internas e aproximar a navegação desta direção:

- `Projeto`
- `Como funciona`
- `Resultados`
- `Contato`

Se o layout permitir, adicionar ação destacada:

- `Testar no WhatsApp`

**Step 2: Revisar o footer**

Manter links institucionais úteis, mas alinhar os rótulos à nova narrativa pública.

**Step 3: Garantir consistência com os CTAs das páginas**

Confirmar que o WhatsApp aparece como principal caminho de ação pública tanto no header quanto no footer.

**Step 4: Validar navegação**

Run: `npm run check`
Expected: navegação compila sem erros de tipagem.

**Step 5: Commit**

```bash
git add src/navigation.ts
git commit -m "feat: simplify navigation around landing-first experience"
```

### Task 6: Fazer uma revisão editorial final da experiência pública

**Files:**

- Modify: `src/pages/index.astro`
- Modify: `src/pages/chatbot.astro`
- Modify: `src/navigation.ts`

**Step 1: Revisar repetições e abstrações**

Eliminar termos excessivamente vagos como:

- `circulação pública` quando não acrescentar precisão;
- `ferramenta pública` sem explicar utilidade concreta;
- `arquitetura de trabalho` quando uma formulação mais simples bastar.

**Step 2: Verificar consistência editorial**

Confirmar que:

- a home explica o projeto inteiro;
- o chatbot aparece cedo como principal chamada pública;
- missão, visão e valores estão dissolvidos na narrativa;
- páginas internas ficam em papel secundário.

**Step 3: Validar o site**

Run: `npm run check`
Expected: sucesso geral.

**Step 4: Revisar diff**

Run: `git diff -- src/pages/index.astro src/pages/chatbot.astro src/navigation.ts`
Expected: mudanças restritas à organização editorial e navegação definida.

**Step 5: Commit**

```bash
git add src/pages/index.astro src/pages/chatbot.astro src/navigation.ts
git commit -m "refactor: align public site content with landing-first strategy"
```
