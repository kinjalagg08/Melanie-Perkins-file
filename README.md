# Melanie Perkins — Entrepreneur Showcase

An editorial-style, responsive React website for the EDC JSS University entrepreneur showcase assignment.

## Features

- Introductory profile and original CSS-built abstract artwork (no external image assets required).
- Interactive chronological timeline with five milestones.
- Clickable venture cards for Fusion Books and Canva; each opens a detail dialog.
- Impact section and practical entrepreneurship takeaways.
- Source modal with links to company and independent references.
- Responsive navigation and layouts for mobile, tablet, and desktop.
- Accessible interaction basics: semantic buttons, tab roles, dialog labels, and reduced-motion support.
- Timeline and venture content are generated from structured JavaScript arrays.

## Tech stack

- React
- Vite
- CSS
- Lucide React icons

## Run locally

You need Node.js (LTS recommended) and npm installed.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite, usually `http://localhost:5173`.

To create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
melanie-perkins-showcase/
├── index.html
├── package.json
├── README.md
└── src/
    ├── main.jsx
    └── styles.css
```

## Data-driven implementation

The timeline is stored in the `milestones` array in `src/main.jsx`. Each object contains a year, label, title, explanatory text, takeaway, and source ID. The interface maps over the array to create the timeline buttons and updates the selected milestone using React state.

The `ventures` array similarly stores the venture cards. The card layout is generated with `.map()`, and selecting a card opens a reusable detail dialog. This meets the assignment requirement for a section generated from structured data.

## Research and source notes

The showcase is a concise student research project, not a full biography. It uses first-person company material for the founding story and supplements it with independent reporting / biographical material.

1. Canva Newsroom, “21 Questions from Aussie Startups: Highs, lows & lessons learned during Canva’s journey so far (Part 1)”  
   https://www.canva.com/newsroom/news/melanie-perkins-21-questions-part-1/
2. Canva Press Hub, “Company information”  
   https://public.canva.site/canva-press-hub-company-information
3. SBS News, “How Canva cracked the multi-million dollar mark”  
   https://www.sbs.com.au/news/small-business-secrets/article/how-canva-cracked-the-multi-million-dollar-mark/d28w8w9bp
4. Global Business Hall of Fame, “Melanie Perkins”  
   https://www.businesshalloffame.org/melanie-perkins
5. Canva Newsroom, “Canva Co-Founder Cameron Adams’ biggest lessons”  
   https://www.canva.com/newsroom/news/canva-founder-cameron-adams-biggest-lessons/

### Accuracy note

- The early teaching insight and Fusion Books story are grounded primarily in Perkins’ first-person account.
- The site groups several developments into a 2011–12 milestone; it does not claim that every team or fundraising event occurred in a single year.
- Current company-scale statistics are intentionally omitted because they change over time and are not necessary to the core story.
- The artwork is original CSS illustration, not a photograph of Melanie Perkins. This avoids presenting an unverified portrait as authentic.

## AI-use disclosure

Suggested disclosure for submission:

> AI assistance was used to help draft and organise the initial React component structure, CSS styling, interaction logic, README, and research starting points. I reviewed the generated code, tested the interactions locally, and am responsible for checking factual claims, understanding the implementation, and making any final changes before submission. The visuals are CSS-created illustrations rather than AI-generated or misattributed photographs.

Edit this statement to accurately reflect the tools you actually used and the checks you personally completed. Do not claim testing or verification you have not done.

## Before submitting

- [ ] Run `npm install` and `npm run dev`.
- [ ] Click every timeline milestone and both venture cards.
- [ ] Open the Sources modal and verify each link.
- [ ] Check the layout at mobile and desktop widths.
- [ ] Run `npm run build` and confirm it completes successfully.
- [ ] Add the project to your own GitHub repository.
- [ ] Update this README with your name, repository link, and any changes you made.
- [ ] Be prepared to explain `useState`, `.map()`, the structured arrays, and the modal logic.
- [ ] Adjust the AI-use disclosure so it accurately reflects your work.
