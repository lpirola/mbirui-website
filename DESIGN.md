# Design System - Projeto Mbiru'i

## Product Context

- **What this is:** A marketing-first institutional site for Projeto Mbiru'i, presenting research, public outputs, partnerships, and field-grounded work at the intersection of tuberculosis, Indigenous health, Guarani-Kaiowá language, and AI.
- **Who it's for:** Indigenous health agents in the field, researchers, institutional partners, and philanthropic stakeholders evaluating the work.
- **Space/industry:** Public health research, Indigenous health, language technology, and philanthropic/institutional communication.
- **Project type:** Marketing site with institutional portal characteristics.

## Aesthetic Direction

- **Direction:** Editorial / Institutional with organic texture
- **Decoration level:** Intentional
- **Mood:** Grounded, serious, and human. The site should feel credible enough for academic and philanthropic audiences while staying close to territory, language, and care rather than drifting into generic health-tech branding.
- **Reference sites:** https://indigenoustbhistory.ca/, https://www.georgeinstitute.org/units/aboriginal-and-torres-strait-islander-health-program, https://mila.quebec/en/ai4humanity/applied-projects/first-languages-ai-reality, https://gihc-us.org/, https://www.whyactnow.ca/

## Typography

- **Display/Hero:** `Fraunces` - gives the site editorial gravity and memorability without feeling luxurious or ornamental.
- **Body:** `Instrument Sans` - modern, highly readable, and calm enough for long institutional copy.
- **UI/Labels:** `Instrument Sans` - keeps navigation, buttons, and metadata consistent with the body voice.
- **Data/Tables:** `IBM Plex Mono` - gives metrics, labels, and structured evidence a disciplined research texture and supports tabular communication.
- **Code:** `IBM Plex Mono`
- **Loading:** Google Fonts for `Fraunces` and `Instrument Sans`; self-host or CDN-load `IBM Plex Mono` consistently with the rest of the stack.
- **Scale:** `12px / 0.75rem` meta, `14px / 0.875rem` small UI, `16px / 1rem` body, `20px / 1.25rem` lead, `28px / 1.75rem` section intro, `40px / 2.5rem` section title, `56px / 3.5rem` hero, `72px / 4.5rem` large campaign moments.

## Color

- **Approach:** Balanced
- **Primary:** `#204A43` - deep forest used for primary actions, section anchors, and trust-bearing surfaces.
- **Secondary:** `#8C4A2F` - terra cotta for emphasis, editorial accents, and warmth.
- **Accent / evidence:** `#123C69` - reserved for links, scientific proof points, data states, and system emphasis.
- **Neutrals:** `#FBFAF7`, `#F5F1E8`, `#DED3BE`, `#655D55`, `#2A2622` - warm paper-to-bark scale for surfaces and text.
- **Semantic:** success `#2D6A4F`, warning `#A3651A`, error `#9C2F2F`, info `#123C69`
- **Dark mode:** In dark mode, shift surfaces to warm charcoal, keep contrast high, and reduce saturation of accent colors by roughly 10-20% so the interface stays sober rather than glowing.

## Spacing

- **Base unit:** `8px`
- **Density:** Comfortable
- **Scale:** `2xs(4)` `xs(8)` `sm(12)` `md(16)` `lg(24)` `xl(32)` `2xl(48)` `3xl(64)` `4xl(96)`

## Layout

- **Approach:** Hybrid
- **Grid:** `4` columns on mobile, `8` on tablet, `12` on desktop. Marketing sections can break the grid compositionally, but research lists, archives, and team/results surfaces should stay disciplined.
- **Max content width:** `1180px`
- **Border radius:** `sm: 8px`, `md: 14px`, `lg: 24px`, `xl: 36px`, `pill: 999px`

## Motion

- **Approach:** Intentional
- **Easing:** enter `cubic-bezier(0.18, 0.9, 0.22, 1)`, exit `cubic-bezier(0.55, 0, 0.75, 0.2)`, move `cubic-bezier(0.2, 0.7, 0.2, 1)`
- **Duration:** micro `80-120ms`, short `160-220ms`, medium `260-360ms`, long `420-560ms`

## Safe Choices

- Maintain a clear institutional navigation with fast access to project, research, outputs, team, and contact.
- Keep body typography and UI patterns straightforward so the site stays legible for public-health and academic audiences.
- Use the clinical blue sparingly for proof and interaction states so the site still reads as research-grade.

## Risks

- Use a serif display face in a health/AI context to avoid the usual generic sans-serif startup look.
- Lead with earth-forward tones instead of defaulting to medical blue, so the work feels grounded in territory and people.
- Introduce subtle texture and motif language so the site gains identity without leaning on folkloric or decorative cliches.

## Decisions Log

| Date       | Decision                      | Rationale                                                                                                                                                              |
| ---------- | ----------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 2026-03-28 | Initial design system created | Created by `/design-consultation` from repo context plus competitive research across Indigenous health, TB memory/storytelling, and Indigenous language AI references. |
