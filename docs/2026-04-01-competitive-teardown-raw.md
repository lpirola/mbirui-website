# Competitive Teardown Raw Notes

Date: 2026-04-01  
Scope: Public health chatbot teardown for Mbiru'i  
Comparison set: Ada Health, K Health, Wysa

## 1. Product framing for Mbiru'i

Source repo references:
- `/src/pages/chatbot.astro`
- `/src/pages/index.astro`

Observed product definition:
- WhatsApp-first chatbot
- RAG over curated documents
- Focus on tuberculosis information and linguistic mediation
- Built for Guarani Kaiowa public health context
- Explicitly not a replacement for clinical care

Key stack signals from site:
- n8n
- OpenAI
- Pinecone
- Google Drive
- Evolution API

Why this matters:
- Mbiru'i is closer to a mission-driven public health assistant than to a generic AI chatbot.
- Benchmarking against generic assistants would miss the trust, care-navigation, and conversational-health patterns that matter most.

## 2. Chosen competitors

### Ada Health
Reason:
- Strong benchmark for symptom checking, trust, clinical rigor, and patient guidance UX.

### K Health
Reason:
- Strong benchmark for moving from symptom intake into real care pathways and monetized clinical operations.

### Wysa
Reason:
- Strong benchmark for conversational UX, emotional safety, engagement, and always-on health support.

## 3. Validation checkpoint against skill requirements

Pricing data:
- Mbiru'i: yes
- Ada: partial public data, consumer app free, enterprise pricing not public
- K Health: yes
- Wysa: yes, public consumer freemium / premium signals

Reviews:
- Public app-store scale signals found for Ada, K Health, and Wysa
- Mbiru'i does not yet have app-store review volume because it is WhatsApp-first

Job / hiring signals:
- Ada: careers presence found
- K Health: Greenhouse job pages found
- Wysa: careers page with current openings found
- Mbiru'i: not applicable as a research/public-interest project in this repo

Constraint:
- This teardown relies on publicly accessible web evidence and app-store metadata. Some enterprise pricing and exact hiring counts are not fully public.

## 4. Evidence notes by competitor

### Mbiru'i

Evidence from repo:
- Product page states WhatsApp as primary entry point.
- Product page states documents go through human review before entering the vector database.
- Product page states support is informational and not a substitute for clinical care.
- Product page explains stack and pipeline structure publicly.

Strength signals:
- Strong cultural and linguistic adaptation
- Low-friction channel choice
- Clear public-interest mission
- Transparent about limits

Weakness signals:
- Limited public proof of usage, outcomes, and reliability
- Narrow product scope
- Limited visible trust stack compared with mature health products

### Ada Health

Evidence notes:
- Consumer health app and clinical AI positioning are public.
- Security and compliance material is publicly referenced.
- Large install / review footprint visible on app stores.
- Enterprise and life-sciences positioning is visible on public marketing pages.

Signals used:
- Strong clinical trust posture
- Large condition coverage
- Large assessment volume
- Strong B2B + consumer bridge

Interpretation:
- Ada sets the bar for trust, structure, and clinical-brand legitimacy.

### K Health

Evidence notes:
- Public app pricing found.
- Public telehealth and primary-care model clearly described.
- Public job-board pages indicate ongoing growth and structured clinical operations.
- Public app-store footprint is meaningful.

Signals used:
- Clear path from symptom understanding to care
- Strong monetization model
- Strong operational maturity

Interpretation:
- K Health sets the bar for care navigation and conversion into services.

### Wysa

Evidence notes:
- Public positioning around always-on conversational support and clinical safety.
- Public app-store footprint is meaningful.
- Public careers page indicates active hiring.
- Public FAQ includes security and data-handling claims.

Signals used:
- Strong emotional UX
- High conversational accessibility
- Good safety framing

Interpretation:
- Wysa sets the bar for health chatbot experience quality and engagement design.

## 5. 12-dimension scorecard

Scale:
- 1 = weak
- 3 = average
- 5 = best-in-class

| Dimension | Mbiru'i | Ada | K Health | Wysa |
|---|---:|---:|---:|---:|
| Features | 3 | 5 | 5 | 4 |
| Pricing | 5 | 4 | 3 | 3 |
| UX | 3 | 4 | 4 | 5 |
| Performance | 3 | 4 | 4 | 4 |
| Docs | 2 | 4 | 3 | 4 |
| Support | 2 | 3 | 4 | 3 |
| Integrations | 3 | 4 | 3 | 4 |
| Security | 2 | 5 | 3 | 4 |
| Scalability | 2 | 5 | 5 | 4 |
| Brand | 4 | 4 | 4 | 5 |
| Community | 2 | 2 | 2 | 3 |
| Innovation | 3 | 4 | 4 | 3 |
| Total | 31 | 49 | 44 | 41 |

## 6. Dimension notes

### Features
- Mbiru'i: focused scope, narrow but meaningful
- Ada: broad symptom and guidance coverage
- K Health: symptom assessment plus provider access
- Wysa: strong conversational self-help and support features

### Pricing
- Mbiru'i: free public access is a strategic advantage
- Ada: free app lowers entry friction
- K Health: paid care model creates higher barrier but stronger monetization
- Wysa: freemium is accessible but upsell-oriented

### UX
- Mbiru'i: simple entry, lighter product maturity
- Ada: polished consumer-health flow
- K Health: strong next-step clarity
- Wysa: strongest conversational warmth and habit design

### Docs
- Mbiru'i: public case study and product explanation exist, but depth is limited
- Ada / Wysa: stronger public documentation and evidence packaging
- K Health: moderate public product documentation

### Security
- Mbiru'i: visible responsible-use messaging, but limited formal public compliance posture
- Ada: strongest visible trust stack
- Wysa: strong privacy / safety messaging
- K Health: privacy is public, but visible trust marketing is less differentiated than Ada

### Scalability
- Mbiru'i: currently appears project-scoped
- Ada / K Health: clearly scaled organizations and products
- Wysa: scaled but in a narrower support category

## 7. Positioning map

Axes:
- X-axis: public-health specificity
- Y-axis: product maturity / care orchestration

Positions:
- Mbiru'i: high specificity, lower maturity
- Ada: lower specificity, high maturity
- K Health: lower specificity, high maturity
- Wysa: medium specificity, high conversational maturity

White-space insight:
- High-specificity + high-maturity remains open.

## 8. Pricing analysis

### Mbiru'i
- Model: free public access
- Strategic read: maximize access and trust, monetize institutionally if needed

### Ada
- Model: free consumer app + B2B / institutional partnerships
- Strategic read: acquisition and trust through free utility

### K Health
- Model: subscription + one-off visit
- Public price points observed:
  - $49 first month unlimited
  - $73 one-time visit
  - $449 annual

### Wysa
- Model: freemium + premium + enterprise
- Strategic read: high accessibility with layered monetization

Implication for Mbiru'i:
- Do not compete on consumer revenue.
- Package as deployable public-health infrastructure.

## 9. SWOT for Mbiru'i

### Strengths
- Deep contextual fit for Guarani Kaiowa use case
- Uses WhatsApp, a familiar interface
- Public-interest legitimacy
- Human-reviewed knowledge base

### Weaknesses
- Lower visible maturity than market leaders
- Limited public outcome proof
- Narrow use-case framing
- Limited visible trust and compliance stack

### Opportunities
- Expand from Q&A to navigation and referral
- Become a template for other low-resource language contexts
- Use evidence and productization to become partnership-ready

### Threats
- Larger players can outcompete on trust signaling
- Care-navigation products can outcompete on actionability
- Better conversational products can outcompete on experience quality

## 10. Recommended action plan

### Quick wins, 0-4 weeks
- Publish trust page with source policy, review workflow, privacy, and limitations
- Add guided entry points to WhatsApp
- Surface governance and evidence on the product page

### Medium-term, 1-3 months
- Add flow-based guidance for common use cases
- Instrument analytics
- Publish pilot outcomes or usage learnings

### Strategic, 3-12 months
- Package for institutional deployment
- Expand into referral and follow-up
- Pursue external validation of quality and safety

## 11. Source list

### Mbiru'i repo
- `/mnt/data/code/mbirui/production/website-astro/src/pages/chatbot.astro`
- `/mnt/data/code/mbirui/production/website-astro/src/pages/index.astro`

### Ada
- https://ada.com/app/
- https://about.ada.com/
- https://ada.com/contact/
- https://apps.apple.com/us/app/ada-check-your-health/id1099986434
- https://play.google.com/store/apps/details?id=com.ada.app

### K Health
- https://www.khealth.com/
- https://www.khealth.com/privacy-policy/
- https://boards.greenhouse.io/embed/job_app?token=5620402004
- https://apps.apple.com/us/app/k-health-primary-care/id1180400838
- https://play.google.com/store/apps/details?id=ai.kanghealth

### Wysa
- https://www.wysa.com/
- https://www.wysa.com/meet-wysa
- https://www.wysa.com/careers
- https://www.wysa.com/faq-clinical-program
- https://apps.apple.com/us/app/wysa-mental-wellbeing-ai/id1166585565
- https://play.google.com/store/apps/details?id=bot.touchkin

## 12. Caveats

- This is a directional teardown, not a procurement-grade vendor assessment.
- Some exact review counts, pricing tiers, and hiring counts may change over time.
- Mbiru'i is being compared against adjacent leaders because the market lacks a directly equivalent indigenous-language public-health chatbot benchmark with comparable visibility.
