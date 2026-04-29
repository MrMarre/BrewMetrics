# BrewMetrics

BrewMetrics is a responsive coffee brewing calculator built with Next.js, React, TypeScript, and Tailwind CSS. The goal is simple: help home brewers make more consistent coffee by calculating coffee-to-water ratios based on brew method, strength, unit preferences, and serving size.

For recruiters and reviewers, this project demonstrates product thinking, state-driven UI design, unit conversion logic, and a clean component-based frontend structure.

## Live Project

Production URL: [brew-metrics.vercel.app](https://brew-metrics.vercel.app/)

## What It Does

- Lets users choose from multiple brew methods such as Pour-over, French press, V60, AeroPress, Moka Pot, and Cold Brew.
- Adjusts recommended ratio ranges based on the selected brew method.
- Calculates water and coffee amounts dynamically as the user changes strength, servings, and units.
- Supports multiple water units and coffee units, including grams, liters, fluid ounces, ounces, and coffee spoons.
- Includes supporting marketing pages to explain the product and its brewing philosophy.

## Why This Project Is Strong Portfolio Material

- Solves a real user problem instead of being a generic CRUD app.
- Turns domain rules into interactive frontend logic with immediate feedback.
- Uses reusable UI primitives and custom hooks to keep presentation separate from calculation behavior.
- Shows attention to UX through responsive layouts, friendly copy, and clear result summaries.
- Reflects practical engineering tradeoffs: small scope, focused feature set, and a structure that can be extended without rewriting the app.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- React Hook Form
- Radix UI primitives
- Vaul

## Architecture Notes

The app uses the Next.js Pages Router and keeps most business logic on the client side.

- `src/pages/` contains the route-level pages for the landing page, calculator, and about page.
- [`src/hooks/useFormStates.ts`](src/hooks/useFormStates.ts) coordinates calculator state, derived values, and form resets.
- [`src/utils/unitConversion.ts`](src/utils/unitConversion.ts) contains the measurement conversion logic used across the calculator.
- [`src/constants/`](src/constants) stores brewing defaults, available options, and ratio ranges so the calculator rules stay centralized.
- [`src/components/`](src/components) is split into calculation, layout, common, and UI building blocks for reuse and clarity.


## Local Setup

### Prerequisites

- Node.js 20+
- npm

### Run Locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

### Available Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## What I Focused On

- Building a small tool with clear real-world value.
- Keeping calculation rules easy to reason about and update.
- Creating a responsive experience that works on both desktop and mobile.
- Using typed abstractions and reusable components instead of page-level duplication.

## Future Improvements

- Add brew timers and other relevant tools for brewing perfect coffee.
- Add automated tests around unit conversion and ratio calculations.
- Fix and harden coffee unit conversion naming and flow to make the logic less error-prone.
- Persist user preferences such as chosen units or last-used brew method.
- Expand the educational side of the product with brew guides and method-specific tips.

## Notes

This project currently focuses on frontend interaction and calculator logic. It does not include authentication, a backend, or persistent data storage, which was an intentional scope decision.
