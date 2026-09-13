# Design Rules (Anti-AI Slop Constraints)

These rules are constraints, not suggestions. Every element must be a deliberate choice.

## 1. Colour
- Choose ONE accent colour. Everything else is neutral, a single family of greys with a consistent temperature.
- A second colour is allowed only when it carries meaning: destructive, success, warning. Never for variety.
- Banned: blue to purple and indigo to violet gradients, anywhere.
- Banned: gradient text (background-clip: text). Headings are one solid colour.
- Banned: giving each feature, category, or section its own hue. Colour encodes meaning, not decoration.
- Accent usage target: under 10% of the visible surface.

## 2. Depth and separation
- Banned: a drop shadow on anything that is not genuinely floating above the page. Cards, sections, images, inputs, badges, and static buttons get no shadow.
- Shadows are permitted only on elements that truly overlay: dropdowns, popovers, modals, toasts. Keep them tight and low-opacity (e.g. 0 1px 3px rgba(0,0,0,0.08)).
- Separate blocks with a 1px border, a background step, or whitespace. Whitespace is the preferred separator.
- Pick one border-radius value and one border colour, and use them consistently.

## 3. Icons and UI
- Banned: sparkle icons (sparkles, ai shimmer glyphs) in buttons, badges, logos, nav, or headings.
- Banned: emoji used as UI interface elements. No emoji in headings, buttons, feature lists, badges, navigation, or empty states.
- Banned: any container around an icon (no tinted rounded square, circle, or chip). The icon sits directly on the background at text size.
- Use monochrome SVG icons inheriting currentColor, sized to the text beside it.

## 4. Typography and copy
- Banned hype words: unleash, supercharge, elevate, transform, revolutionise, empower, seamless, effortless, effortlessly, cutting-edge, game-changing, next-level, unlock, harness, robust, leverage, powerful, delve, paradigm, synergy.
- Banned: the em dash in UI copy. Use two sentences, or a comma.
- Say what the product does in concrete nouns and real numbers.
- One type family (system sans-serif and monospace). A real scale (12, 14, 16, 20, 24, 32, 48px).
- Body text is left-aligned. Sentence case for headings and buttons.

## 5. Motion
- Banned: hover glow, box-shadow blooms, scale above 1.02, card lifting on hover.
- Banned: sliding arrows inside buttons or looping idle motion.
- Transitions: opacity, background colour, or border colour only, at 120 to 160ms.
- Respect prefers-reduced-motion.

## 6. Scale and proportion
- Hero headline: 40 to 56px on desktop, 28 to 34px on mobile.
- Body text 15 to 16px. Secondary text 13 to 14px. Minimum 12px.
- Buttons 36 to 44px tall.
- Content max-width 1100 to 1280px. Text columns capped at ~65 to 70 characters.
- Spacing rhythm: multiples of 4px.
