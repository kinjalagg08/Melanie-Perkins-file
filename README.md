# Melanie Perkins — Entrepreneur Showcase

An editorial-style, responsive React website created for the EDC JSS University entrepreneur showcase assignment. It explores Melanie Perkins' entrepreneurial journey, from identifying a design-accessibility problem to building Canva.

## Features

- Editorial-style cover featuring Melanie Perkins and CSS-built abstract artwork.
- Interactive chronological timeline with five milestones.
- Mobile-friendly timeline selection for exploring key milestones.
- Interactive venture cards for Fusion Books and Canva, each opening a detail dialog.
- Impact section highlighting entrepreneurial lessons and takeaways.
- Personal reflection on the founder's journey.
- Sources modal with company and independent references.
- Responsive navigation and layouts for mobile, tablet, and desktop.
- Accessibility basics, including semantic buttons, dialog labels, keyboard focus styles, and reduced-motion support.
- Data-driven timeline and venture cards generated from structured JavaScript arrays.

## Tech Stack

- React
- Vite
- JavaScript
- CSS
- Lucide React icons

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) (LTS recommended), which includes npm.

### Installation

Clone the repository:

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

Navigate to the project directory:

```bash
cd melanie_perkins_showcase
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL printed in your terminal, usually `http://localhost:5173`.

### Production Build

Create an optimised production build:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
melanie_perkins_showcase/
├── public/
│   └── images/
│       └── melanie-perkins-cutout.png
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

*Note: Update the structure and image filename above if they differ from your actual project.*

## Implementation Highlights

### Data-Driven Components

The timeline is stored in the `milestones` array in `src/main.jsx`. Each milestone contains information such as its year, label, title, explanatory text, takeaway, and source ID. React maps over this array to generate the timeline controls and displays the selected milestone using component state.

The `ventures` array stores the information for the Fusion Books and Canva cards. The cards are generated using `.map()`, and selecting a card opens a reusable detail dialog.

### Responsive Design

The website uses CSS media queries to adapt its layout to desktop, tablet, and mobile screens. The responsive interface includes mobile navigation and a compact timeline selection layout.

### Visual Design

The website uses an editorial magazine-inspired visual style, combining serif headlines, muted green and cream colours, CSS-built geometric artwork, and a founder portrait.

## Research and References

The showcase uses first-person company material alongside independent reporting and biographical sources.

1. **Canva Newsroom** — *21 Questions from Aussie Startups: Highs, lows & lessons learned during Canva’s journey so far (Part 1)*  
   https://www.canva.com/newsroom/news/melanie-perkins-21-questions-part-1/

2. **Canva Press Hub** — *Company information*  
   https://public.canva.site/canva-press-hub-company-information

3. **SBS News** — *How Canva cracked the multi-million dollar mark*  
   https://www.sbs.com.au/news/small-business-secrets/article/how-canva-cracked-the-multi-million-dollar-mark/d28w8w9bp

4. **Global Business Hall of Fame** — *Melanie Perkins*  
   https://www.businesshalloffame.org/melanie-perkins

5. **Canva Newsroom** — *Canva Co-Founder Cameron Adams' biggest lessons*  
   https://www.canva.com/newsroom/news/canva-founder-cameron-adams-biggest-lessons/

## Research and Accuracy Notes

- The early teaching insight and Fusion Books story are based primarily on Melanie Perkins' first-person account.
- The 2011–12 timeline entry groups several team-building and fundraising developments rather than attributing every event to one specific year.
- Current company-scale statistics are omitted because they change over time and are not essential to the central entrepreneurial story.
- The founder portrait should be appropriately credited, and its source and usage permissions should be checked.

## AI Use Disclosure

AI assistance was used to help draft and organise parts of the React component structure, CSS styling, interaction logic, README, and research starting points. The final disclosure should reflect the work actually completed, including any code review, modifications, testing, and factual verification personally performed.

## Final Verification Checklist

- [ ] Install dependencies and run the development server.
- [ ] Test all five timeline milestones.
- [ ] Open both venture cards and verify their detail dialogs.
- [ ] Open the Sources modal and verify the reference links.
- [ ] Test the mobile navigation and timeline selection.
- [ ] Check the layout on mobile and desktop screens.
- [ ] Confirm that the founder portrait loads correctly.
- [ ] Run `npm run build` and verify that it completes successfully.
- [ ] Check that no secrets or environment files are committed.
- [ ] Verify the GitHub repository and add a live demo link if available.
- [ ] Ensure the AI-use disclosure accurately represents the work completed.

---

**Created for:** EDC Entrepreneur Showcase  
**Institution:** JSS University, Noida  
**Project:** Melanie Perkins — Entrepreneur Showcase
