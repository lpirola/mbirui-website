# Projeto Mbiru'i

Site institucional do Projeto Mbiru'i em Astro, com páginas editoriais sobre pesquisa, equipe, resultados, produções e o chatbot de apoio em saúde indígena no WhatsApp.

## Escopo atual

O repositório concentra:

- o site público do projeto
- a página do produto do chatbot no WhatsApp
- a documentação pública das produções e resultados
- a integração conceitual com os workflows n8n mantidos em `../n8n`

## Produto: chatbot no WhatsApp

O chatbot apresenta uma arquitetura de RAG para mediação linguística em saúde indígena Guarani Kaiowá. No estado atual do projeto, a solução combina:

- WhatsApp como canal de entrada
- `n8n` como orquestrador dos fluxos
- OpenAI para embeddings e geração de respostas
- Pinecone como base vetorial
- Google Drive como repositório documental curado
- Evolution API como ponte operacional do atendimento via WhatsApp

### Pipelines do repositório `../n8n`

#### 1. Ingestão documental

Arquivo: `../n8n/workflow-indexacao-docs.json`

Fluxo principal:

1. `Google Drive Trigger`
2. `Normalize File Metadata`
3. `Download File`
4. `Load Binary Document`
5. `Split Document`
6. `OpenAI Embeddings`
7. `Pinecone Upsert Documents`

Esse workflow monitora documentos aprovados, transforma o conteúdo em chunks semânticos, gera embeddings e atualiza o índice vetorial usado pelo chatbot.

#### 2. Atendimento via Evolution / WhatsApp

Arquivo: `../n8n/workflow-chatbot-evolution.json`

Fluxo principal:

1. `Evolution Webhook`
2. `Extract Message`
3. `Enforce Idempotency`
4. `Should Reply?`
5. `Answer with RAG`
6. `Retrieve Knowledge`
7. `OpenAI Chat Model`
8. `Conversation Memory`
9. `Query Embeddings`
10. `Format Outbound Message`
11. `Send Evolution Reply`

Esse workflow recebe a mensagem, filtra eventos duplicados, recupera contexto validado no Pinecone e responde no canal do WhatsApp.

#### 3. Interface de teste no ecossistema n8n

Arquivo: `../n8n/workflow-chatbot-ui.json`

Fluxo principal:

1. `Chat Trigger`
2. `Extract Chat Input`
3. `Has Message?`
4. `Answer with RAG`
5. `Retrieve Knowledge`
6. `OpenAI Chat Model`
7. `Conversation Memory`
8. `Query Embeddings`
9. `Prepare Chat Response`

Esse fluxo serve para testes internos de conversa sem depender do canal da Evolution.

## Estudo de caso

O estudo de caso do chatbot está versionado no repositório e publicado para uso no site:

- origem editável: `./Estudo_de_Caso__Chatbot_com_RAG_para_Mediação_Ling.docx`
- cópia pública: `./public/docs/estudo-de-caso-chatbot-rag-guarani-kaiowa.docx`
- cadastro editorial: `./src/content/producoes/estudo-chatbot-rag-guarani-kaiowa.md`

## Estrutura principal

```text
.
├── public/
│   └── docs/
├── src/
│   ├── content/
│   │   ├── producoes/
│   │   ├── resultados/
│   │   ├── pesquisa/
│   │   └── equipe/
│   ├── pages/
│   │   ├── index.astro
│   │   ├── chatbot.astro
│   │   └── producoes/
│   └── utils/
└── ../n8n/
    ├── workflow-indexacao-docs.json
    ├── workflow-chatbot-evolution.json
    └── workflow-chatbot-ui.json
```

## Comandos

Todos os comandos devem ser executados na raiz do projeto.

| Comando | Ação |
| --- | --- |
| `npm install` | Instala dependências |
| `npm run dev` | Inicia o ambiente local |
| `npm run build` | Gera a versão de produção |
| `npm run preview` | Serve o build localmente |
| `npm run check` | Executa checagens do Astro |
| `npm run fix` | Formata e aplica correções automáticas |

## Atualização de conteúdo

Para atualizar o produto do chatbot e seus materiais:

1. Edite a página em `src/pages/chatbot.astro`.
2. Atualize o documento público em `public/docs/`.
3. Ajuste o cadastro editorial em `src/content/producoes/`.
4. Se a arquitetura operacional mudar, sincronize a descrição deste `README` com os workflows em `../n8n`.
