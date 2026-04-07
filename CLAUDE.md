# CLAUDE.md — ScreenDiet

## Product Name

**ScreenDiet**  
**Tagline:** Turn your screen time into art.

---

## Product Overview

ScreenDiet is a lightweight web app that transforms screen time data into beautiful, shareable visual cards.

The product is inspired by the social and visual appeal of products like Spotify Wrapped, Apple Music Replay, and annual recap experiences, but focused on a simple, fast use case:
users manually select apps, assign usage durations, choose a theme, and export a polished card they want to post on social media.

This is not a productivity dashboard.  
This is not a digital wellness tracker.  
This is a **viral card generator for screen time culture**.

The core value is speed, aesthetics, and shareability.

---

## Core Problem

People are often curious, amused, or embarrassed by their screen time.

They already share:
- screen time screenshots
- tweets about being addicted to TikTok
- memes about wasting time online
- “I need help” style posts about usage habits

But the default screen time UI from phones is:
- ugly
- repetitive
- not branded
- not fun
- not optimized for sharing

Everyone has the same boring screenshot.

Users want:
- something prettier
- something more expressive
- something more customizable
- something social-ready
- something they can post to stories, tweets, and group chats

---

## Product Promise

ScreenDiet should let a user go from idea to exported card in under 30 seconds.

The product must feel:
- fast
- fun
- visual
- playful
- social-first
- low-friction

Core promise:

**Select apps → assign time → choose a theme → export a viral-looking card.**

---

## Product Positioning

Do not position this as:
- a serious wellness app
- a phone analytics dashboard
- a screen time tracker
- a parental control product
- a self-improvement platform

Position it as:
- a social card generator
- a shareable screen time creator
- a wrapped-style visual tool
- an internet-native self-expression product

Good positioning phrases:
- Turn your screen time into art
- Your screen time, but actually shareable
- Wrapped energy for your digital habits
- Make your screen time screenshot worth posting
- Beautiful screen time cards in seconds

---

## Target Users

### 1. Gen Z users
People who already post story cards, memes, trends, and aesthetic self-data.

### 2. Millennial social users
Users who enjoy playful self-reporting and social identity through apps and habits.

### 3. Twitter / X users
People who post ironic or humorous content about how much time they spend online.

### 4. TikTok / Instagram users
People who want highly visual, mobile-friendly share assets.

### 5. Meme and trend participants
Users who like participating in lightweight viral content formats.

---

## Product Vision

ScreenDiet should become the easiest and most fun way to turn personal app usage into a visual identity object.

A user should be able to:
1. choose their apps
2. assign usage time
3. pick a date range label
4. choose a visual theme
5. instantly preview the card
6. export it as an image
7. share it anywhere
8. unintentionally promote the product through a watermark or brand mention

Long term, the product can evolve into:
- seasonal recap cards
- animated exports
- social trend templates
- auto-generated weekly reports
- public gallery or social discovery
- creator theme packs
- collaborative or challenge-based sharing

But the MVP should remain very simple.

---

## Viral Loop

The product should be designed with built-in shareability.

Every exported free card should include a subtle but visible brand reference such as:
- `screendiet.app`
- `Made with ScreenDiet`
- small logo + domain footer

The viral loop works like this:
1. user creates a card
2. user shares it publicly
3. other people see a prettier version of screen time sharing
4. they become curious
5. they visit ScreenDiet
6. they create their own
7. cycle repeats

The product is strongest when the output itself is the marketing channel.

---

## Core Product Principles

- no login required in MVP
- no database required in MVP
- no onboarding friction
- no complicated forms
- immediate visual reward
- mobile-first sharing mindset
- client-side generation whenever possible
- instant preview updates
- strong aesthetics over complexity

---

## MVP Scope

The first version should stay focused and intentionally small.

### MVP Goal
Let a user create a polished shareable screen time card from manual inputs with no account required.

### MVP Features
- app selection
- usage time editing
- total screen time calculation
- period selection
- theme selection
- live card preview
- PNG export
- copy to clipboard
- mobile-friendly layout
- watermark on exported free cards

### Explicitly not required in MVP
- auth
- database
- save history
- public profiles
- OCR from screenshots
- Apple / Android screen time import
- payment
- animation export
- public gallery
- weekly auto reports
- social feed
- user accounts

---

## User Stories

### Quick creator story
As a user, I want to create a stylish screen time card in seconds so I can post it without editing screenshots manually.

### Meme story
As a user, I want funny roast text on the card so it feels entertaining and worth sharing.

### Visual story
As a user, I want themes and layouts that look premium so the result feels like an actual social media asset.

### Mobile story
As a user, I want the card to export in story-friendly sizes so I can post it directly to Instagram or similar platforms.

### Casual user story
As a user, I do not want to create an account just to make one card.

---

## Primary User Flow

### Flow 1 — Create a card
1. User opens the landing page
2. User selects apps from a predefined app library
3. User assigns usage times
4. User selects a time period label
5. User picks a theme
6. User sees the card preview update live
7. User exports the card

### Flow 2 — Share the card
1. User downloads PNG or copies to clipboard
2. User posts to social media or sends it privately
3. Other people notice the branding and visual style
4. New users discover the product

---

## Product Architecture Philosophy

The MVP should be extremely lightweight.

Since there is:
- no auth
- no persistence
- no server-side account logic
- no user-generated feed

the product should prioritize:
- client-side rendering
- fast load
- instant interactivity
- clean UI state management
- reliable export

The product should feel almost like a mini web toy, but polished enough to feel premium.

---

## App Selection System

Users should be able to choose from a predefined list of common apps grouped by category.

### Suggested categories
- Social
- Video
- Messaging
- Gaming
- Productivity
- Music
- Custom

### Suggested app metadata fields
- id
- name
- icon
- color
- category

Example shape:

```json
{
  "id": "instagram",
  "name": "Instagram",
  "icon": "📸",
  "color": "#E1306C",
  "category": "social"
}
```

### Product requirements
- searchable app list
- filter by category
- multi-select
- limit selected apps to around 8–10 for layout clarity
- custom app creation supported in MVP if simple enough

A custom app should minimally support:
- app name
- app color
- optional emoji or icon fallback

---

## Time Input System

Each selected app should allow usage duration entry.

### MVP options
- slider
- direct hour and minute input
- preset increments

### Recommended default
- 15-minute increments
- range from 0 to 12 hours per app

The interface should show:
- per-app duration
- total duration
- percentage share of total time

Validation rules:
- prevent invalid negative values
- normalize empty values
- keep interaction easy on mobile

---

## Period Selection

Users should be able to label the card with a chosen period.

### MVP options
- Today
- This Week
- This Month
- Custom Range

The selected period should appear visually on the card.

This is a presentation label, not a data-sync feature.

---

## Theme System

Themes are a major part of the product’s value.

The theme selector should instantly change the visual identity of the preview.

### Initial theme ideas
- Midnight
- Sunset
- Ocean
- Forest
- Neon
- Candy
- Minimal Dark
- Minimal Light

Each theme should define:
- background
- text colors
- accent colors
- bar colors
- card shadows
- decorative elements if any

The goal is not only variety.  
The goal is for users to feel:
“I want to try multiple themes because each one feels post-worthy.”

---

## Card Content Requirements

Every card should include:

### Header
- small ScreenDiet brand mark
- selected period label

### Main stat
- total screen time in large bold typography

### Breakdown section
For each selected app:
- app icon or emoji
- app name
- duration
- visual percentage bar

### Footer content
- fun fact or roast line
- subtle watermark such as `screendiet.app`

The layout should prioritize:
- instant readability
- strong hierarchy
- emotional reaction
- screenshot friendliness

---

## Fun Fact / Roast Engine

This is a critical emotional layer.

The card should not feel like raw data alone.  
It should feel playful.

The system should produce a short message based on:
- total time bracket
- dominant app
- dominant category
- overall pattern

### Example messages
- “Your phone misses you. Oh wait, it can’t — you never put it down.”
- “TikTok owns your soul at this point.”
- “You basically watched a full season this week.”
- “Touch grass? You’re already there. Respect.”
- “CEO mindset. Or just lots of emails.”
- “Least addicted gamer.”

### Engine design
Use a simple rule-based engine in MVP.

Inputs:
- total duration
- top app
- top category
- optional threshold checks

Output:
- one selected message

The engine must avoid being too repetitive if possible, even in MVP.

---

## Export System

Export quality is central to the product.

### MVP export requirements
- PNG export
- clipboard copy if supported
- Web Share API support where available

### Size presets
- Story format: 1080x1920
- Square post: 1080x1080
- Twitter/X landscape: 1200x675

### Implementation approach
Use DOM-based card rendering and export it to image using tools such as:
- `html-to-image`
- `html2canvas`

The visual output should remain faithful to the preview.

The export flow should feel:
- instant
- obvious
- reliable

---

## Page Structure

### MVP Recommendation
Single-page flow.

### Page behavior
- landing hero at the top
- generator starts immediately below
- scroll-friendly sections
- live preview always visible where possible

This reduces friction and increases completion.

### Possible future pages
- `/gallery`
- `/themes`
- `/about`
- `/premium`

But these should not distract from MVP.

---

## Landing Experience

The landing page should immediately communicate:
- what the product does
- why it is fun
- why it is shareable
- how quickly it works

### Suggested structure
1. Hero headline
2. Short subheadline
3. Small preview cards or mockups
4. Generator starts right away
5. No long copy before interaction

The landing page should avoid heavy explanation and instead let the product demo itself.

---

## UX Principles

- minimal friction
- instant feedback
- visually rewarding interactions
- no unnecessary form steps
- no technical language
- mobile-first controls
- playful but clean
- clear CTA hierarchy
- export button always obvious

A user should never feel lost.

---

## Responsive Strategy

### Desktop
- controls on the left
- live preview on the right

### Tablet
- similar split layout if space allows
- tighter spacing

### Mobile
- controls first
- preview below
- optionally step-based sections
- export CTA easy to reach

Mobile matters heavily because many users will discover and use the product through social sharing.

---

## Suggested Tech Direction

The uploaded idea proposes a strong MVP direction and it fits the product well.

Recommended baseline:
- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- Vercel
- client-side state management
- `html-to-image` or `html2canvas` for export

This is a good fit because the MVP does not need backend complexity.

---

## Data Model for MVP

Since MVP is client-side only, the main “data model” is local UI state.

Suggested shape:

```ts
type PeriodOption = "today" | "week" | "month" | "custom";

type SizePreset = "story" | "square" | "landscape";

type AppDefinition = {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
};

type SelectedApp = {
  id: string;
  name: string;
  icon: string;
  color: string;
  category: string;
  minutes: number;
  isCustom?: boolean;
};

type ThemeId =
  | "midnight"
  | "sunset"
  | "ocean"
  | "forest"
  | "neon"
  | "candy"
  | "minimal-dark"
  | "minimal-light";

type GeneratorState = {
  selectedApps: SelectedApp[];
  period: PeriodOption;
  customPeriodLabel?: string;
  theme: ThemeId;
  sizePreset: SizePreset;
  funFact: string;
};
```

---

## Suggested Component Model

### Page-level components
- `LandingHero`
- `GeneratorLayout`
- `PreviewPanel`

### Generator components
- `AppPicker`
- `CategoryFilter`
- `SelectedAppsList`
- `TimeSlider`
- `TimeInput`
- `PeriodSelector`
- `ThemeSelector`
- `SizePresetSelector`
- `ExportActions`

### Card components
- `ScreenCard`
- `CardHeader`
- `TotalTimeStat`
- `AppBreakdownList`
- `AppBreakdownItem`
- `FunFactFooter`
- `Watermark`

### Utility modules
- `appDefinitions`
- `themeRegistry`
- `funFactEngine`
- `timeFormatters`
- `imageExport`

---

## Suggested Theme Architecture

Themes should be structured as a reusable design registry.

Example shape:

```ts
type ThemeConfig = {
  id: string;
  name: string;
  background: string;
  surface: string;
  primaryText: string;
  secondaryText: string;
  accent: string;
  barBackground: string;
  decorativeClassNames?: string[];
};
```

Avoid hardcoding style logic across many components.  
The card should receive a single theme object and render consistently.

---

## Suggested Fun Fact Engine Architecture

Example rule structure:

```ts
type FunFactRule = {
  id: string;
  condition: (input: FunFactInput) => boolean;
  messages: string[];
  priority: number;
};

type FunFactInput = {
  totalMinutes: number;
  topAppId?: string;
  topCategory?: string;
};
```

Flow:
1. compute usage summary
2. evaluate rules
3. sort matching rules by priority
4. choose one matching message
5. fallback to generic message if none match

This keeps the system deterministic and easy to extend.

---

## Visual Quality Requirements

The output card must feel:
- premium
- social-native
- not template-cheap
- bold
- polished
- fun

Key requirements:
- strong typography hierarchy
- clean spacing
- attractive gradients
- legible contrast
- balanced density
- export-safe rendering

The preview and final export must look very close.

---

## Non-Goals

Do not build in MVP:
- login or signup
- backend persistence
- screenshot OCR upload
- automatic phone usage import
- subscriptions
- public gallery
- video or GIF rendering
- native mobile app
- complex analytics layer

The product wins through speed and shareability, not feature breadth.

---

## Monetization Direction

A good early direction is freemium.

### Free tier
- full basic card creation
- watermark included
- core themes
- standard export

### Possible premium later
- remove watermark
- premium themes
- animated export
- recurring weekly summary cards
- more layout styles
- creator packs

MVP does not need monetization infrastructure.

---

## Quality Bar for MVP

ScreenDiet MVP is successful if:
- landing page is clear and fast
- at least ~30 apps are available
- app selection is easy
- time editing feels smooth
- theme switching feels instant
- preview feels premium
- fun fact text works
- export works reliably
- mobile experience is solid
- generated cards are genuinely shareable
- watermark is visible but not ugly

The emotional test is:

**Would someone actually post this without needing extra editing?**

If the answer is no, the product is not ready.

---

## Recommended Development Sequence

Recommended sequence:
1. project setup
2. app definition registry
3. app picker UI
4. usage time controls
5. core card component
6. theme system
7. fun fact engine
8. export system
9. period selection
10. responsive polish
11. landing hero
12. animation and UI polish
13. deploy

This order is good because it prioritizes the core loop first.

---

## Risks

### 1. Output not looking good enough
If the final card is not attractive, the product loses its main value.

### 2. Export inconsistency
If exported images look different from the preview, trust is reduced.

### 3. Too much setup friction
If users must click too much or fill too much, they will abandon before export.

### 4. Weak fun fact writing
If roast text is cringe or repetitive, the experience becomes cheap.

### 5. Poor mobile UX
This is especially dangerous because share-first products often get discovered on mobile.

---

## Risk Reduction Plan

- ship with fewer but stronger themes
- limit app count for layout quality
- polish one card format deeply before scaling
- test export quality early
- keep copy short and playful
- optimize mobile before launch
- prioritize delight over feature count

---

## Success Metrics

### Core product metrics
- card creation completion rate
- export rate
- mobile completion rate
- theme usage distribution
- average number of apps selected

### Viral metrics
- share rate
- branded card impressions
- direct traffic from shared cards
- repeat card creation rate

### Quality signals
- export failure rate
- time to first export
- bounce rate from landing
- theme switching frequency

---

## Future Expansion Ideas

Only after the MVP is strong:
- public gallery
- saved cards
- user accounts
- weekly “wrapped” mode
- animation export
- premium theme packs
- trend templates
- compare with friends
- AI-written roast packs
- brand or creator collabs
- seasonal campaigns
- platform-specific export presets

These are optional future layers, not launch blockers.

---

## Final Product Strategy

ScreenDiet should begin as:

**A fast, beautiful, shareable screen time card generator**

Its job is not to track behavior.  
Its job is to turn familiar digital habits into a social visual artifact.

The first version should optimize for:
- speed
- delight
- aesthetics
- viral sharing
- zero-friction creation

If the product does those five things well, it has a real chance to spread.

---

## Builder Instructions

When building this product, follow these principles:

- optimize for shareability first
- keep the MVP fully client-side if possible
- avoid login and database complexity
- design the exported image as the real product
- make the preview feel premium
- use strong visual identity
- keep the fun fact system playful and lightweight
- reduce the number of decisions the user must make
- prioritize mobile export flow
- ship fast, then refine based on what people actually share

---

## Final Summary

ScreenDiet is a lightweight viral web product built around a simple truth:

People already want to talk about their screen time.  
They just do not have a beautiful way to share it.

Build the fastest path from:
**screen time idea → stylish card → social sharing**

That is the product.