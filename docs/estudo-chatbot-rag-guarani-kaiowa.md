# Estudo de Caso: Chatbot com RAG para Mediação Linguística na Saúde Indígena Guarani Kaiowá

## Resumo

Este estudo de caso descreve o desenvolvimento e a implementação de um chatbot baseado em Geração Aumentada por Recuperação (RAG) para mitigar barreiras linguísticas enfrentadas pelo povo indígena Guarani Kaiowá no contato com Agentes Indígenas de Saúde (AIS). Em muitos contextos, esses profissionais não dominam a língua materna da comunidade, o que compromete a precisão do acolhimento, do diagnóstico inicial e da orientação em saúde. A solução tecnológica combina WhatsApp, Evolution API, n8n, OpenAI, Pinecone e Google Drive em uma arquitetura modular de baixo custo.

O sistema opera com duas pipelines principais e uma terceira pipeline de teste. A primeira faz a ingestão e a vetorização de documentos em formato Markdown armazenados e revisados no Google Drive. A segunda realiza a recuperação semântica e a geração de respostas contextualizadas para o canal do WhatsApp. A terceira reproduz a experiência conversacional em uma interface interna do ecossistema n8n para testes e validação. Os resultados preliminares indicam que a estruturação rigorosa dos dados, a revisão humana antes da indexação e a separação entre ingestão e atendimento são fatores centrais para a confiabilidade do sistema.

## 1. Introdução

A saúde indígena no Brasil, particularmente entre o povo Guarani Kaiowá no Mato Grosso do Sul, é marcada por desafios que ultrapassam a infraestrutura biomédica. Um dos fatores críticos é a barreira linguística. Embora o Subsistema de Atenção à Saúde Indígena (SasiSUS) proponha uma atenção diferenciada, a comunicação entre pacientes que falam predominantemente Guarani Kaiowá e Agentes Indígenas de Saúde que nem sempre possuem fluência na língua local produz lacunas no entendimento de sintomas, dosagens de medicamentos e orientações preventivas.

Nesse cenário, tecnologias de Processamento de Linguagem Natural (PLN) e Grandes Modelos de Linguagem (LLMs) surgem como ferramentas potenciais para mediação linguística e apoio à decisão. Este trabalho apresenta um sistema baseado em RAG para responder com base em documentos curados por especialistas, tradutores e lideranças indígenas, reduzindo a dependência de respostas livres sem lastro documental.

## 2. Metodologia e Arquitetura do Sistema

A arquitetura foi projetada para ser modular, de baixo custo e atualizável por equipes não técnicas. A solução se organiza em torno de cinco componentes: Google Drive como repositório documental, n8n como orquestrador, OpenAI para embeddings e geração de respostas, Pinecone como banco de dados vetorial e Evolution API como integração com o WhatsApp.

### 2.1 Gestão de conhecimento e revisão documental

Os dados do chatbot são organizados no Google Drive em uma estrutura que separa documentos em revisão, documentos aprovados e materiais de base semântica. Esse fluxo garante que apenas conteúdos validados alimentem o índice vetorial. A organização proposta é:

| Pasta | Descrição do conteúdo | Status |
| --- | --- | --- |
| `01_Em_Revisao` | Rascunhos de traduções, glossários e FAQs em Markdown | Pendente de validação linguística e técnica |
| `02_Aprovadas` | Documentos revisados por linguistas e profissionais de saúde | Pronto para ingestão |
| `03_Dicionarios` | Traduções termo a termo e expressões culturais | Base semântica estável |

### 2.2 Pipelines de automação no n8n

O n8n atua como o núcleo operacional do sistema. No estado atual do repositório, as pipelines estão distribuídas da seguinte forma:

#### Pipeline 1. Ingestão documental

Arquivo: `workflow-indexacao-docs.json`

Sequência principal:

1. `Google Drive Trigger`
2. `Normalize File Metadata`
3. `Download File`
4. `Load Binary Document`
5. `Split Document`
6. `OpenAI Embeddings`
7. `Pinecone Upsert Documents`

Essa pipeline monitora documentos aprovados, baixa o arquivo, transforma o conteúdo em documento legível pelo fluxo, fragmenta o texto em unidades semanticamente úteis, gera embeddings e publica os vetores no Pinecone com metadados da fonte.

#### Pipeline 2. Recuperação e resposta no WhatsApp

Arquivo: `workflow-chatbot-evolution.json`

Sequência principal:

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

Quando um usuário envia uma dúvida pelo WhatsApp, o fluxo extrai a mensagem, evita respostas duplicadas, decide se o evento deve ser respondido e aciona o agente RAG. O Pinecone recupera trechos relevantes dos documentos aprovados, e o modelo da OpenAI elabora a resposta com base nesse contexto. Em seguida, a mensagem é formatada e enviada de volta pela Evolution API.

#### Pipeline 3. Interface interna de teste

Arquivo: `workflow-chatbot-ui.json`

Sequência principal:

1. `Chat Trigger`
2. `Extract Chat Input`
3. `Has Message?`
4. `Answer with RAG`
5. `Retrieve Knowledge`
6. `OpenAI Chat Model`
7. `Conversation Memory`
8. `Query Embeddings`
9. `Prepare Chat Response`

Essa terceira pipeline replica a lógica conversacional em um ambiente de teste, permitindo validação da experiência e do comportamento do agente sem depender do canal externo do WhatsApp.

## 3. Desenvolvimento do Estudo de Caso

O estudo de caso foi estruturado em torno de um dicionário de sintomas e queixas traduzido para contextos de uso em saúde. Termos que descrevem tipos específicos de dor, mal-estar ou sinais clínicos e que não possuem equivalência direta em português são complementados por descrições culturais registradas em Markdown.

A adoção de arquivos Markdown com títulos, subtítulos e organização semântica melhora a recuperação de contexto no RAG. Em vez de recuperar apenas palavras isoladas, o sistema passa a localizar blocos interpretativos mais completos sobre a forma como sintomas e doenças são expressos no universo Guarani Kaiowá.

O Pinecone foi adotado como banco vetorial pela facilidade de integração com os nós do n8n, pela simplicidade operacional e pela capacidade de responder rapidamente em fluxos de atendimento quase em tempo real.

## 4. Considerações Éticas e Limitações

A implementação de IA em contextos indígenas exige cautela. A soberania de dados e a proteção do conhecimento tradicional demandam controle de acesso, revisão humana constante e delimitação clara de quais materiais podem ou não ser indexados. Neste projeto, a revisão documental anterior à ingestão funciona como uma camada de governança essencial.

Uma limitação importante é a dependência de conectividade para acessar modelos em nuvem e serviços externos. Em aldeias com infraestrutura precária, isso pode restringir a disponibilidade do sistema. Iterações futuras podem incorporar modelos menores executados localmente em dispositivos móveis ou estratégias híbridas de sincronização offline.

## 5. Conclusão

O uso de RAG orquestrado por n8n demonstra ser uma via viável para construir tecnologias assistivas de baixo custo para línguas minoritárias. Ao focar na mediação entre Guarani Kaiowá e agentes de saúde, o chatbot não substitui o profissional humano, mas atua como um tradutor técnico e cultural apoiado por base documental revisada. A separação entre ingestão, atendimento e teste, aliada à estruturação rigorosa dos dados em Markdown, se mostrou central para a confiabilidade do sistema.

## Referências

1. ATENA EDITORA. Barreiras linguísticas, acesso, equidade e atenção primária à saúde nas populações indígenas. 2025.
2. ROTHMAN, D. RAG-Driven Generative AI: Build custom retrieval augmented generation pipelines with LlamaIndex and Pinecone. 2024.
3. FIOCRUZ. Seminário Direito à Saúde e o Bem Viver (Tekoporã). 2026.
