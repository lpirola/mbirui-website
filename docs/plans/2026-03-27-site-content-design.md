# Design de Conteúdo do Site Mbiru'i

**Data:** 2026-03-27

## System Audit

- **UI scope:** alto. O plano altera a home, a navegação principal e a hierarquia das páginas institucionais.
- **DESIGN.md:** não existe no repositório. A revisão foi calibrada pelo conteúdo já publicado e por `MBIRUI_STRUCTURE.md`.
- **Padrões existentes a reaproveitar:** conteúdo em Astro Content Collections, páginas editoriais curtas, navegação institucional, CTA para chatbot e contato.

## Step 0

**Nota inicial:** 5/10 em completude de design.

O plano anterior cobria bem `Pesquisa`, `Resultados` e `Galeria`, mas não refletia com clareza a principal necessidade institucional do site: acesso rápido a objetivos, projetos, produções, equipe, colaboradores, visão institucional, artigos, prêmios, chatbot e contato para novas colaborações.

**O que seria 10/10 para este plano:** uma arquitetura de informação curta, institucional e escaneável, em que a home funcione como portal de acesso e não como narrativa longa; com prioridade explícita para os blocos de conteúdo que o usuário quer encontrar sem esforço.

## Direção aprovada

O site deve continuar com conteúdo amplo, mas em uma forma mais sucinta e mais fácil de percorrer.

Princípio central:

- manter o conteúdo;
- reduzir o texto introdutório;
- transformar a home em um hub de acesso rápido;
- usar páginas internas para aprofundamento;
- tratar galeria e materiais visuais como apoio editorial, não como centro da navegação.

## Arquitetura aprovada

### Navegação principal

- `Início`
- `O Projeto`
- `Produções`
- `Pesquisa`
- `Equipe`
- `Artigos e Blog`
- `Prêmios e Editais`
- `Chatbot / Aplicativo`
- `Contato`

### Estrutura do conteúdo

```text
/
├── Início
│   ├── Objetivos do projeto
│   ├── Conheça os projetos
│   ├── Produções do projeto
│   ├── Pesquisas em saúde indígena
│   ├── Equipe e colaboradores
│   ├── Visão, missão e valores
│   ├── Artigos e blog
│   ├── Prêmios e editais contemplados
│   ├── Chatbot / aplicativo
│   └── Contato para colaboração
├── O Projeto
│   ├── Objetivos
│   ├── Projetos
│   └── Visão, missão e valores
├── Produções
│   ├── Livros
│   ├── Cartilhas
│   ├── Relatórios
│   └── Documentos
├── Pesquisa
│   └── Pesquisas em saúde indígena
├── Equipe
│   ├── Equipe atual
│   ├── Equipe anterior
│   └── Colaboradores
├── Artigos e Blog
├── Prêmios e Editais
├── Chatbot / Aplicativo
└── Contato
```

## Hierarquia da home

### Objetivo da home

Apresentar o projeto em poucos blocos, com leitura rápida e links claros para aprofundamento.

### Ordem visual obrigatória

1. identidade do projeto + frase curta de contexto;
2. atalhos para os núcleos mais importantes;
3. resumo institucional do que o projeto faz;
4. portas de entrada para pesquisa, produções, equipe, artigos, prêmios, chatbot e contato;
5. convite final para colaboração.

### Estrutura da home

#### 1. Hero curto

Conteúdo:

- nome do projeto;
- frase institucional curta;
- 2 CTAs no máximo:
  - `Conheça os projetos`
  - `Fale com a equipe` ou `Acesse o chatbot`

Regra:

- evitar hero longo;
- evitar texto explicativo demais;
- a home deve orientar, não esgotar o conteúdo.

#### 2. Acesso rápido

Bloco obrigatório logo no início com links para:

- `Objetivos do projeto`
- `Conheça os projetos`
- `Produções`
- `Pesquisas em saúde indígena`
- `Equipe`
- `Colaboradores`
- `Artigos e blog`
- `Prêmios e editais`
- `Chatbot / aplicativo`
- `Contato`

Regra:

- usar títulos curtos;
- 1 linha de apoio por item, no máximo;
- priorizar escaneabilidade.

#### 3. O Projeto

Bloco curto com:

- objetivos do projeto;
- visão, missão e valores;
- link para página interna com os projetos.

Regra:

- máximo de 3 microblocos;
- não duplicar textos longos já existentes em páginas internas.

#### 4. Conheça os projetos

Bloco com projetos ativos ou prioritários.

Cada item deve mostrar:

- nome;
- síntese de uma frase;
- link para detalhes.

Regra:

- mostrar poucos projetos na home;
- a listagem completa fica na página interna.

#### 5. Produções do projeto

Bloco com quatro portas de entrada:

- `Livros`
- `Cartilhas`
- `Relatórios`
- `Documentos`

Cada tipo deve exibir:

- breve descrição;
- 1 a 3 itens de destaque;
- link para ver mais.

#### 6. Pesquisas em saúde indígena

Bloco curto com os eixos ou temas de pesquisa.

Deve responder rapidamente:

- o que está sendo pesquisado;
- por que isso importa;
- onde aprofundar.

#### 7. Equipe e colaboradores

Separar em três grupos:

- `Equipe atual`
- `Equipe anterior`
- `Colaboradores`

Regra:

- a home mostra apenas uma amostra;
- a página interna concentra a listagem completa.

#### 8. Artigos e blog

Mostrar os conteúdos mais recentes com:

- título;
- data;
- resumo curto.

#### 9. Prêmios e editais contemplados

Bloco institucional curto para fortalecer legitimidade pública.

Cada item deve mostrar:

- nome do edital ou prêmio;
- ano;
- instituição relacionada, quando houver.

#### 10. Chatbot / aplicativo

Bloco de acesso rápido e direto.

Deve responder:

- o que é;
- para quem serve;
- como acessar.

Regra:

- evitar transformar esse bloco em texto promocional;
- priorizar botão claro.

#### 11. Contato para novas colaborações

Bloco final orientado a atração de parceiros, pesquisadores e colaboradores em saúde indígena e inovação.

Deve conter:

- convite curto;
- e-mail principal;
- formulário simples ou link de contato;
- indicação de temas possíveis de colaboração.

## Páginas internas

### O Projeto

Objetivo:

- concentrar `Objetivos`, `Projetos` e `Visão, missão e valores`.

### Produções

Objetivo:

- organizar o acervo publicado por tipo, não apenas por cronologia.

Estrutura:

- `Livros`
- `Cartilhas`
- `Relatórios`
- `Documentos`

### Pesquisa

Objetivo:

- reunir pesquisas em saúde indígena com linguagem clara e menos dependente de jargão técnico na abertura.

### Equipe

Objetivo:

- apresentar equipe atual, equipe anterior e colaboradores sem misturar papéis.

### Artigos e Blog

Objetivo:

- funcionar como área de atualização e reflexão pública do projeto.

### Prêmios e Editais

Objetivo:

- registrar reconhecimentos e financiamentos já contemplados.

### Chatbot / Aplicativo

Objetivo:

- oferecer acesso direto ao produto e contextualização mínima.

### Contato

Objetivo:

- canalizar novas colaborações, dúvidas institucionais e conexões com saúde indígena e inovação.

## Interação e estados

| Área      | Loading                          | Empty                                            | Error                              | Success                          | Partial                                                     |
| --------- | -------------------------------- | ------------------------------------------------ | ---------------------------------- | -------------------------------- | ----------------------------------------------------------- |
| Projetos  | skeleton curto                   | informar que novos projetos serão adicionados    | mensagem breve + link para contato | lista visível com CTA            | mostrar apenas os projetos disponíveis                      |
| Produções | placeholders de lista            | explicar ausência de publicações naquele tipo    | mensagem curta + contato           | itens e link para página interna | mostrar itens disponíveis por categoria                     |
| Artigos   | placeholders                     | informar que os textos serão publicados em breve | mensagem curta                     | lista cronológica curta          | mostrar apenas os últimos artigos                           |
| Equipe    | skeleton de cards/lista          | explicar ausência temporária de perfis           | mensagem curta                     | grupos por período/papel         | exibir apenas equipe atual se o restante não estiver pronto |
| Prêmios   | placeholder simples              | informar ausência de editais publicados          | mensagem curta                     | lista institucional              | exibir somente prêmios confirmados                          |
| Chatbot   | botão com estado de carregamento | informar indisponibilidade temporária            | oferecer contato alternativo       | acesso direto                    | mostrar link alternativo                                    |
| Contato   | estado de envio                  | orientar e-mail alternativo                      | mensagem de erro clara             | confirmação de envio             | formulário + e-mail exposto                                 |

## Regras de escrita

- títulos curtos e institucionais;
- uma ideia principal por bloco;
- frases introdutórias com no máximo 2 linhas;
- evitar repetir o mesmo texto na home e na página interna;
- cada bloco da home deve terminar com uma ação clara;
- cortar qualquer texto que não ajude o usuário a entender ou acessar algo.

## AI Slop Risk

### Nota inicial

4/10.

O risco anterior estava em transformar a home em uma sequência longa de blocos editoriais com muitas chamadas equivalentes, o que dilui prioridade.

### Correção aplicada

- a home deixa de girar em torno de `Pesquisa + Resultados + Galeria`;
- a prioridade passa a ser acesso rápido aos núcleos institucionais;
- `Galeria` vira apoio editorial, não eixo principal;
- cada seção tem um único papel;
- a navegação principal passa a refletir exatamente a taxonomia desejada.

### Nota após correção

8/10.

Ainda depende da implementação manter essa disciplina de concisão.

## Responsive e acessibilidade

- no mobile, o bloco `Acesso rápido` deve abrir já na primeira dobra ou imediatamente após o hero;
- links principais devem ter área de toque mínima de `44px`;
- usar landmarks claros para `nav`, `main`, `footer` e seções principais;
- headings devem respeitar hierarquia sem saltos;
- listas de equipe, produções e prêmios devem continuar legíveis sem depender de cards grandes;
- evitar excesso de colunas na home em telas pequenas;
- chatbot e contato precisam continuar acessíveis sem scroll excessivo.

## O que já existe

- `MBIRUI_STRUCTURE.md` já aponta a arquitetura institucional correta e deve servir como referência;
- `src/content/producoes`, `src/content/pesquisa`, `src/content/equipe`, `src/content/artigos`, `src/content/premios` já sustentam a organização por tema;
- `src/navigation.ts` já foi movido parcialmente para uma lógica de acesso rápido e deve ser alinhado ao menu final aprovado.

## Não está em escopo

- transformar a galeria em seção principal da navegação;
- manter uma home longa com explicações extensas por eixo de pesquisa;
- tratar resultados e galeria como principal porta de entrada do site;
- inventar novas categorias que não respondam às necessidades institucionais listadas.

## Impacto esperado no código

- reescrever a home como portal sucinto de acesso rápido em `src/pages/index.astro`;
- criar ou consolidar página `O Projeto` para reunir `Objetivos`, `Projetos` e `Visão, missão e valores`;
- garantir que `Produções` fique organizada por `livros`, `cartilhas`, `relatórios` e `documentos`;
- ajustar `Equipe` para separar atual, anterior e colaboradores;
- manter `Artigos e Blog`, `Prêmios e Editais`, `Chatbot / Aplicativo` e `Contato` como entradas de primeiro nível;
- reduzir o peso editorial de `Galeria`, usando-a como apoio visual e não como destino prioritário.

## Completion Summary

```text
+====================================================================+
|         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
+====================================================================+
| System Audit         | sem DESIGN.md, UI scope alto                |
| Step 0               | 5/10; foco em concisão e acesso rápido      |
| Pass 1  (Info Arch)  | 4/10 → 9/10                                 |
| Pass 2  (States)     | 3/10 → 8/10                                 |
| Pass 3  (Journey)    | 5/10 → 8/10                                 |
| Pass 4  (AI Slop)    | 4/10 → 8/10                                 |
| Pass 5  (Design Sys) | 5/10 → 7/10                                 |
| Pass 6  (Responsive) | 4/10 → 8/10                                 |
| Pass 7  (Decisions)  | 6 resolvidas, 0 em aberto                   |
+--------------------------------------------------------------------+
| NOT in scope         | escrito (4 itens)                           |
| What already exists  | escrito                                     |
| Decisions made       | 6 adicionadas ao plano                      |
| Decisions deferred   | 0                                           |
| Overall design score | 5/10 → 8/10                                 |
+====================================================================+
```

**Status:** DONE_WITH_CONCERNS

**Concerns:**

- sem `DESIGN.md`, a coerência visual ainda depende de disciplina na implementação;
- a navegação atual do código ainda carrega vestígios da arquitetura anterior e precisa ser alinhada a este plano;
- a home já implementada parece mais longa do que esta revisão recomenda.
