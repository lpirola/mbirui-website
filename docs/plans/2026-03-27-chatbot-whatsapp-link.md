# Chatbot WhatsApp Link Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Direcionar os CTAs de acesso ao chatbot para um link único de WhatsApp com saudação em guarani kaiowá.

**Architecture:** Centralizar o link e a mensagem em um utilitário simples para evitar duplicação entre a home e a página do chatbot. Atualizar os CTAs para consumir essa constante e alinhar a cópia da página ao novo fluxo.

**Tech Stack:** Astro, TypeScript, páginas `.astro`

---

### Task 1: Centralizar link do WhatsApp

**Files:**

- Create: `src/utils/chatbot.ts`

**Step 1: Criar constante da saudação**

Definir a saudação em guarani kaiowá em uma constante exportada.

**Step 2: Criar URL codificada**

Montar a URL `https://wa.me/5512991806970?text=...` usando `encodeURIComponent`.

### Task 2: Atualizar CTA da home

**Files:**

- Modify: `src/pages/index.astro`

**Step 1: Importar utilitário**

Importar `chatbotWhatsappUrl` no frontmatter.

**Step 2: Trocar href do botão principal**

Atualizar o CTA "Acessar o chatbot" para abrir o WhatsApp direto.

### Task 3: Atualizar página do chatbot

**Files:**

- Modify: `src/pages/chatbot.astro`

**Step 1: Importar utilitário**

Importar `chatbotWhatsappUrl` no frontmatter.

**Step 2: Trocar botão e texto auxiliar**

Apontar o botão para o WhatsApp e substituir a mensagem "acessível em breve" por uma cópia coerente com o novo fluxo.

### Task 4: Verificação

**Files:**

- Verify: `src/utils/chatbot.ts`
- Verify: `src/pages/index.astro`
- Verify: `src/pages/chatbot.astro`

**Step 1: Rodar verificação estática**

Run: `npm run check:astro`

Expected: verificação concluída sem erros relacionados às páginas alteradas.
