<div align="center">

# Triolingo

### A personal Duolingo-style language trainer built with Next.js and Bun

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)
[![Repo](https://img.shields.io/badge/GitHub-jackinf%2Ftriolingo-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/jackinf/triolingo)

</div>

## Overview

Triolingo is a personal Duolingo-style clone for practicing a foreign language (the sample
content trains Dutch from English). It is a Next.js application that presents a set of
interactive exercise screens — word translation, sentence building, listening, and
speech-based drills — backed by small built-in API routes that serve the question and
sentence data. This is a personal learning project, not a production product.

## Features

- Multiple exercise types, each as its own page:
  - **Simple exercise** — translate single words between English and Dutch.
  - **Sentence exercise** — reassemble a translated sentence from shuffled word options.
  - **Audio exercise** — listen-and-answer practice with a play button.
  - **Speech exercises** — speech-based drills, including a Google TTS variant.
- Built-in API routes (`/api/questions`, `/api/sentences`) serving the exercise content.
- Client-side data fetching with **SWR**.
- Spring-based UI motion via **@react-spring/web** and celebratory **react-confetti** feedback.
- Styled with **Tailwind CSS** plus per-page CSS modules, shared **Navbar** / **Footer** layout.

## Tech Stack

| Area | Technology |
| --- | --- |
| Language | TypeScript |
| Framework | Next.js 13 (App + Pages router) / React 18 |
| Styling | Tailwind CSS, PostCSS, CSS Modules |
| Data fetching | SWR |
| Animation | @react-spring/web, react-confetti |
| Tooling | Bun, ESLint (eslint-config-next) |

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) (a `bun.lockb` is checked in) or Node.js with npm/yarn/pnpm
- A modern browser

### Installation

```bash
bun install
# or: npm install
```

### Running

Start the development server:

```bash
bun run dev
# or: npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

Other available scripts (from `package.json`):

```bash
bun run build   # production build
bun run start   # serve the production build
bun run lint    # run Next.js / ESLint checks
```

## Project Structure

```
triolingo/
├── app/                 # App-router entry (layout, root page, globals)
├── pages/               # Pages-router routes
│   ├── api/             # API routes: questions, sentences
│   ├── simpleExersize/  # Word translation exercise
│   ├── sentenceExercise/# Sentence-building exercise
│   ├── audioExercise/   # Listening exercise
│   ├── speechExersize/  # Speech exercise
│   └── speechExersizeGoogleTts/  # Speech exercise (Google TTS)
├── components/          # Navbar, Footer, shared layout
├── data.ts              # Sample questions and sentences
└── interfaces.ts        # Shared TypeScript types
```
