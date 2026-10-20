import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight,
  ArrowUpRight,
  ExternalLink,
  Lightbulb,
  X,
  Menu,
  Sparkles,
} from "lucide-react";
import "./styles.css";
const sources = [
  {
    id: "canva-story",
    label: "Canva Newsroom",
    type: "First-person account",
    title: "21 Questions from Aussie Startups: Highs, lows & lessons learned",
    url: "https://www.canva.com/newsroom/news/melanie-perkins-21-questions-part-1/",
    note: "First-person account of the early idea, Fusion Books, finding customers, and lessons from the first business.",
  },
  {
    id: "canva-company",
    label: "Canva Press Hub",
    type: "Company source",
    title: "Company information",
    url: "https://public.canva.site/canva-press-hub-company-information",
    note: "Canva's official overview of its mission, founders, and platform.",
  },
  {
    id: "sbs",
    label: "SBS News",
    type: "Independent reporting",
    title: "How Canva cracked the multi-million dollar mark",
    url: "https://www.sbs.com.au/news/small-business-secrets/article/how-canva-cracked-the-multi-million-dollar-mark/d28w8w9bp",
    note: "Reporting on Canva's early business development.",
  },
  {
    id: "hall",
    label: "Global Business Hall of Fame",
    type: "Third-party profile",
    title: "Melanie Perkins",
    url: "https://www.businesshalloffame.org/melanie-perkins",
    note: "Biographical information about Perkins and her ventures.",
  },
  {
    id: "adams",
    label: "Canva Newsroom",
    type: "Company source · co-founder account",
    title: "Canva Co-Founder Cameron Adams' biggest lessons",
    url: "https://www.canva.com/newsroom/news/canva-founder-cameron-adams-biggest-lessons/",
    note: "A co-founder's perspective on Canva's vision and growth.",
  },
];
const milestones = [
  {
    year: "2007",
    label: "The problem becomes visible",
    title: "A classroom insight",
    text: "While teaching design programs to university students, Perkins noticed how much time beginners spent learning complicated software before they could make something useful.",
    takeaway: "Start with a real frustration, not just a technology idea.",
    source: "canva-story",
  },
  {
    year: "2008",
    label: "A focused first product",
    title: "Fusion Books",
    text: "Perkins and Cliff Obrecht built an online yearbook-design business for schools. It gave them a concrete customer group and a way to learn about product development, sales, and service.",
    takeaway: "A narrow first market can be a practical testing ground.",
    source: "canva-story",
  },
  {
    year: "2011–12",
    label: "Finding the missing pieces",
    title: "Build the team and earn belief",
    text: "The founders kept developing the broader idea, met potential investors, and brought Cameron Adams—an experienced designer and engineer—into the founding team.",
    takeaway: "A big vision still needs complementary skills and persistence.",
    source: "adams",
  },
  {
    year: "2013",
    label: "The broader platform launches",
    title: "Canva goes live",
    text: "Canva launched with a mission to make design simpler and more accessible. The product expanded the founders' original idea beyond school yearbooks into a wider range of visual communication.",
    takeaway: "Reuse what you learn, but keep solving the customer's larger problem.",
    source: "canva-company",
  },
  {
    year: "2020s",
    label: "From tool to platform",
    title: "Visual communication at scale",
    text: "Canva grew from a focused online design product into a platform used for presentations, social content, documents, websites, video, and collaborative work.",
    takeaway: "Growth can come from extending a clear core promise into adjacent needs.",
    source: "canva-company",
  },
];
const ventures = [
  {
    id: "fusion",
    number: "01",
    type: "The proving ground",
    name: "Fusion Books",
    years: "2008 · Early venture",
    summary:
      "An online yearbook-design and publishing business that helped schools create personalised yearbooks more easily.",
    detail: [
      "Fusion Books was the founders' first major step towards simplifying design. Schools traditionally faced a complicated process when putting together yearbooks. The online service brought the design process into a more accessible digital experience, helping schools create, customise and order their yearbooks.",
      "For Melanie Perkins and Cliff Obrecht, Fusion Books was more than a standalone business. It gave them practical experience with customer needs, product development, and running a company. It also helped them explore a bigger question: could the same approach work for people who needed to create designs beyond school yearbooks?",
    ],
    role: "Co-founded with Cliff Obrecht",
    lesson:
      "Start with a specific customer problem. A focused first product can provide the experience and insight needed to pursue a bigger opportunity.",
    source: "canva-story",
  },
  {
    id: "canva",
    number: "02",
    type: "The global platform",
    name: "Canva",
    years: "2013 · Launched",
    summary:
      "A visual communication platform that makes creating designs, presentations and other visual content more accessible.",
    detail: [
      "Canva took the central idea behind Fusion Books and expanded it into a much broader platform. Instead of focusing on one type of publication, it enabled people to create a wide range of visual content, including presentations, posters, social media graphics and documents. Templates and browser-based editing helped make the process approachable for people without professional design training.",
      "Perkins co-founded Canva with Cliff Obrecht and Cameron Adams. The platform's larger ambition was to give more people the ability to communicate visually without first having to master complicated design software. Its evolution illustrates how an idea developed for a specific audience can grow into a product serving many different creative needs.",
    ],
    role: "Co-founder and CEO",
    lesson:
      "Scale an idea by preserving its core purpose while adapting the product to serve new audiences and use cases.",
    source: "canva-company",
  },
];
const ventureComparison = [
  {
    label: "CUSTOMER",
    fusion: "Schools creating yearbooks",
    canva: "People and teams creating many kinds of visual content",
  },
  {
    label: "PRODUCT SCOPE",
    fusion: "A focused online yearbook-design and publishing service",
    canva: "A broader visual communication platform",
  },
  {
    label: "WHAT CARRIED FORWARD",
    fusion: "Make a complex creative task easier to complete",
    canva: "Extend that accessibility principle to more creative tasks",
  },
];
const lessons = [
  {
    number: "01",
    title: "Listen for friction",
    text: "The original idea came from watching people struggle with existing tools. Pay attention to repeated frustrations—they may point to an opportunity.",
  },
  {
    number: "02",
    title: "Learn by building",
    text: "Fusion Books gave the team real customers and real constraints. A small, testable business can teach more than a perfect plan that never meets the market.",
  },
  {
    number: "03",
    title: "Persistence needs adaptation",
    text: "Sticking with a vision does not mean ignoring feedback. Keep the problem steady, but improve the product, team, and approach as you learn.",
  },
];
function App() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const [selectedVenture, setSelectedVenture] = useState(null);
  const [sourceOpen, setSourceOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };
  const active = milestones[activeMilestone];
  const activeSource = sources.find((source) => source.id === active.source);
  const dialogRef = useRef(null);
  useEffect(() => {
    if (!selectedVenture && !sourceOpen) return undefined;
    const previouslyFocused = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusFrame = window.requestAnimationFrame(() => {
      dialogRef.current?.focus();
    });
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedVenture(null);
        setSourceOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.cancelAnimationFrame(focusFrame);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      if (previouslyFocused && previouslyFocused.isConnected) {
        previouslyFocused.focus();
      }
    };
  }, [selectedVenture, sourceOpen]);
  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="The Founder Files home">
          THE FOUNDER FILES<span> / 01</span>
        </a>
        <button
          className="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={19} /> : <Menu size={19} />}
        </button>
        <nav
          className={menuOpen ? "nav-links open" : "nav-links"}
          aria-label="Main navigation"
        >
          <button onClick={() => scrollTo("story")}>The story</button>
          <button onClick={() => scrollTo("ventures")}>Ventures</button>
          <button onClick={() => scrollTo("impact")}>Takeaways</button>
          <button onClick={() => scrollTo("my-perspective")}>My perspective</button>
          <button className="nav-source" onClick={() => setSourceOpen(true)}>
            Sources
          </button>
        </nav>
      </header>
      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" /> ENTREPRENEUR PROFILE · AUSTRALIA
            </div>
            <h1>
              Make design
              <br />
              <em>for everyone.</em>
            </h1>
            <p className="hero-deck">
              How Melanie Perkins turned a classroom frustration into a platform
              that helps the world communicate visually.
            </p>
            <div className="hero-actions">
              <button className="button-dark" onClick={() => scrollTo("story")}>
                Explore her journey <ArrowDownRight size={17} />
              </button>
              <span className="read-time">FROM FIRST IDEA TO GLOBAL IMPACT</span>
            </div>
            <div className="hero-meta">
              <div>
                <span className="meta-label">KNOWN FOR</span>
                <strong>Co-founder &amp; CEO, Canva</strong>
              </div>
              <div>
                <span className="meta-label">CORE IDEA</span>
                <strong>Make design less intimidating</strong>
              </div>
            </div>
          </div>
          <div
            className="hero-art"
            role="group"
            aria-label="Editorial cover artwork featuring Melanie Perkins"
          >
            <div className="hero-orbit-circle" aria-hidden="true" />
            <img
              className="hero-portrait"
              src="/images/melanie-perkins-cutout.png"
              alt="Melanie Perkins, co-founder and CEO of Canva"
              loading="eager"
            />
            <div className="art-stamp">
              THE
              <br />
              DESIGN
              <br />
              SHIFT
            </div>
            <div className="art-orbit orbit-one" />
            <div className="art-orbit orbit-two" />
            <div className="art-panel panel-back">
              <span>IDEA</span>
              <div className="panel-lines">
                <i />
                <i />
                <i />
              </div>
            </div>
            <div className="art-panel panel-front">
              <div className="panel-top">
                <span className="tiny-dot" />
                <span className="tiny-dot" />
                <span className="tiny-dot" />
                <b>canvas / 01</b>
              </div>
              <div className="panel-sun" />
              <div className="panel-shape" />
              <div className="panel-caption">
                A tool should
                <br />
                <em>invite you in.</em>
              </div>
            </div>
            <div className="art-note note-top">Curiosity →</div>
            <div className="art-note note-bottom">Clarity is a feature.</div>
            <div className="art-number">01—13</div>
          </div>
          <div className="hero-bottomline">
            <span>THE FOUNDER FILES</span>
            <span>IDEA → PRODUCT → IMPACT</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>
        <section className="intro section-pad" id="story">
          <div className="section-index">01 / THE ORIGIN</div>
          <div className="intro-grid">
            <h2>
              She didn't set out
              <br />
              to teach design.
              <br />
              <em>She set out to simplify it.</em>
            </h2>
            <div className="intro-text">
              <p>
                While teaching design software to university students, Melanie
                Perkins noticed a recurring problem: people had to spend too
                much time learning the tools before they could express an idea.
              </p>
              <p>
                Her insight was bigger than a new feature. What if design could
                work online, feel intuitive, and be accessible to people who
                weren't professional designers?
              </p>
              <p className="source-inline">
                Based on Perkins' first-person account in the{" "}
                <a href={sources[0].url} target="_blank" rel="noreferrer">
                  Canva Newsroom <ExternalLink size={12} />
                </a>
                .
              </p>
            </div>
          </div>
          <div className="pull-quote">
            <p className="pull-quote-text">
              The best product ideas often begin with a simple question: why is
              this harder than it needs to be?
            </p>
            <small>MY FRAMING OF THE STORY</small>
          </div>
        </section>
        <section className="timeline-section section-pad">
          <div className="section-heading">
            <div>
              <div className="section-index">02 / THE JOURNEY</div>
              <h2>
                Small beginnings.
                <br />
                <em>A bigger canvas.</em>
              </h2>
            </div>
            <p>
              Choose a milestone to explore the decisions and lessons behind the
              company.
            </p>
          </div>
          <div className="timeline-layout">
            <label className="timeline-select-wrap" htmlFor="milestone-select">
              <span className="timeline-select-label">SELECT A MILESTONE</span>
              <select
                id="milestone-select"
                className="timeline-select"
                value={activeMilestone}
                onChange={(event) => setActiveMilestone(Number(event.target.value))}
                aria-controls="milestone-panel"
              >
                {milestones.map((item, index) => (
                  <option key={item.year} value={index}>
                    {item.year} — {item.label}
                  </option>
                ))}
              </select>
            </label>
            <div
              className="timeline-list"
              aria-label="Choose a milestone in Melanie Perkins' journey"
            >
              {milestones.map((item, index) => (
                <button
                  key={item.year}
                  className={
                    activeMilestone === index
                      ? "timeline-item active"
                      : "timeline-item"
                  }
                  onClick={() => setActiveMilestone(index)}
                  aria-pressed={activeMilestone === index}
                  id={`milestone-tab-${index}`}
                >
                  <span className="timeline-year">{item.year}</span>
                  <span className="timeline-label">{item.label}</span>
                  <span className="timeline-arrow">
                    {activeMilestone === index ? "↗" : "›"}
                  </span>
                </button>
              ))}
            </div>
            <article
              className="milestone-panel"
              id="milestone-panel"
              role="tabpanel"
              aria-labelledby={`milestone-tab-${activeMilestone}`}
            >
              <div className="milestone-top">
                <span>
                  MILESTONE {String(activeMilestone + 1).padStart(2, "0")}
                </span>
                <span>{active.year}</span>
              </div>
              <h3>{active.title}</h3>
              <p>{active.text}</p>
              <div className="lesson-callout">
                <Lightbulb size={18} />
                <div>
                  <span>WHAT THIS TEACHES US</span>
                  <strong>{active.takeaway}</strong>
                </div>
              </div>
              {activeSource && (
                <a
                  className="text-link"
                  href={activeSource.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the source <ArrowUpRight size={15} />
                  <span className="source-type source-type-inline">{activeSource.type}</span>
                </a>
              )}
            </article>
          </div>
        </section>
        <section className="ventures-section section-pad" id="ventures">
          <div className="section-heading">
            <div>
              <div className="section-index">03 / THE VENTURES</div>
              <h2>
                One insight.
                <br />
                <em>Two businesses.</em>
              </h2>
            </div>
            <p>
              Explore how a focused first business became the foundation for a
              broader product vision.
            </p>
          </div>
          <div className="venture-grid">
            {ventures.map((venture) => (
              <button
                type="button"
                className={`venture-card venture-${venture.id}`}
                key={venture.id}
                onClick={() => setSelectedVenture(venture)}
                aria-label={`Explore ${venture.name}: ${venture.summary}`}
              >
                <div className="venture-card-top">
                  <span>
                    {venture.number} / {venture.type}
                  </span>
                  <ArrowUpRight size={18} />
                </div>
                <div className="venture-visual">
                  {venture.id === "fusion" ? (
                    <div className="yearbook-mock">
                      <div className="yearbook-label">
                        SCHOOL
                        <br />
                        YEARBOOK
                      </div>
                      <div className="yearbook-sun" />
                      <div className="yearbook-lines">
                        <i />
                        <i />
                        <i />
                      </div>
                      <small>MEMORIES, MADE TOGETHER</small>
                    </div>
                  ) : (
                    <div className="canva-mock">
                      <div className="canva-logo">
                        Canva<span>✳</span>
                      </div>
                      <div className="canva-shapes">
                        <i />
                        <i />
                        <i />
                      </div>
                      <div className="canva-mock-caption">
                        MAKE
                        <br />
                        SOMETHING.
                      </div>
                      <div className="canva-mini">DESIGN / SHARE / CREATE</div>
                    </div>
                  )}
                </div>
                <div className="venture-card-bottom">
                  <div>
                    <span className="venture-years">{venture.years}</span>
                    <h3>{venture.name}</h3>
                    <p>{venture.summary}</p>
                  </div>
                  <span className="circle-arrow">
                    <ArrowUpRight size={18} />
                  </span>
                </div>
                <span className="card-hint">Click to explore</span>
              </button>
            ))}
          </div>
          <div className="venture-bridge" aria-label="How Fusion Books developed into the broader Canva vision">
            <div className="venture-bridge-heading">
              <span className="section-index">THE THROUGH-LINE</span>
              <h3>What changed.<br /><em>What carried forward.</em></h3>
            </div>
            <div className="venture-bridge-table">
              {ventureComparison.map((row) => (
                <div className="venture-bridge-row" key={row.label}>
                  <span className="venture-bridge-label">{row.label}</span>
                  <p>{row.fusion}</p>
                  <span className="bridge-arrow" aria-hidden="true">→</span>
                  <p>{row.canva}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="impact-section section-pad" id="impact">
          <div className="section-index">04 / IMPACT &amp; TAKEAWAYS</div>
          <div className="impact-heading">
            <h2>
              Make the work
              <br />
              <em>more accessible.</em>
            </h2>
            <p>
              Perkins' contribution is not only a product. It is a way of
              thinking about who gets to participate in visual communication.
            </p>
          </div>
          <div className="impact-stats">
            <div className="impact-stat">
              <span className="stat-number">01</span>
              <h3>Lower the barrier</h3>
              <p>
                Canva's template-led, browser-based approach makes many design
                tasks approachable to non-specialists.
              </p>
            </div>
            <div className="impact-stat">
              <span className="stat-number">02</span>
              <h3>Design for real people</h3>
              <p>
                The original insight came from observing beginners, then
                building around their needs instead of assuming expertise.
              </p>
            </div>
            <div className="impact-stat">
              <span className="stat-number">03</span>
              <h3>Build beyond the first idea</h3>
              <p>
                Learning from a specific yearbook business helped the founders
                imagine a wider set of creative use cases.
              </p>
            </div>
          </div>
          <div className="lessons-header">
            <span>NOTES FOR FUTURE FOUNDERS</span>
            <span>TAKE WHAT'S USEFUL →</span>
          </div>
          <div className="lesson-list">
            {lessons.map((lesson) => (
              <div className="lesson-row" key={lesson.number}>
                <span>{lesson.number}</span>
                <h3>{lesson.title}</h3>
                <p>{lesson.text}</p>
              </div>
            ))}
          </div>
        </section>
        <section
          className="my-perspective section-pad"
          id="my-perspective"
        >
          <div className="section-index">05 / MY OWN PERSPECTIVE</div>
          <div className="perspective-grid">
            <div className="perspective-heading">
              <span className="perspective-label">A NOTE FROM THE CREATOR</span>
              <h2>
                Beyond the
                <br />
                <em>business story.</em>
              </h2>
              <p className="perspective-intro">
                What Melanie Perkins' journey taught me about entrepreneurship,
                technology, and design.
              </p>
            </div>
            <div className="perspective-content">
              <p>
                My biggest takeaway is that the founders did not have to solve
                design for everyone on day one. They began with a narrower
                problem, learned from a real customer group, and then expanded
                the idea. To me, that makes Fusion Books an important part of
                the story—not just a stepping stone mentioned before Canva.
              </p>
              <p>
                Through a computer science lens, I see a connection to
                requirements gathering, prototyping, and abstraction: understand
                one user workflow, build something useful, then reuse what works
                without losing sight of usability. A technically impressive
                product is not successful if the intended user still finds it
                difficult to use.
              </p>
              <p>
                I would not treat this as a guaranteed formula for success,
                though. Founder stories can sound more predictable in hindsight,
                and company sources naturally present the company's own account.
                If I applied this lesson to a project, I would test a small
                prototype with actual users before adding more features, then
                use their feedback to decide what deserves to grow.
              </p>
              <div className="perspective-takeaway">
                <span>MY KEY TAKEAWAY</span>
                <strong>
                  Test with real users before you scale the solution.
                </strong>
              </div>
            </div>
          </div>
          <div className="perspective-signoff">
            <span>EDC ENTREPRENEUR SHOWCASE</span>
            <span>RESEARCH · REFLECTION · LEARNING</span>
          </div>
        </section>
        <section className="closing section-pad">
          <Sparkles size={22} />
          <p className="closing-kicker">THE TAKEAWAY</p>
          <h2>
            Don't make people
            <br />
            learn the tool first.
            <br />
            <em>Help them make the thing.</em>
          </h2>
          <p className="closing-copy">
            Perkins' story is a reminder that entrepreneurship can start with
            empathy: notice a frustrating experience, make a useful first
            version, and keep learning from the people who use it.
          </p>
          <button className="button-light" onClick={() => setSourceOpen(true)}>
            Explore the sources <ArrowUpRight size={17} />
          </button>
        </section>
      </main>
      <footer className="footer section-pad">
        <div>
          <a className="wordmark footer-wordmark" href="#top">
            THE FOUNDER FILES<span> / 01</span>
          </a>
          <p>A student-built interactive entrepreneur showcase.</p>
        </div>
        <div className="footer-right">
          <span>RESEARCH &amp; REFERENCES</span>
          <button onClick={() => setSourceOpen(true)}>View sources ↗</button>
          <small>Made for EDC JSS University · 2026</small>
        </div>
      </footer>
      {selectedVenture && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSelectedVenture(null);
          }}
        >
          <section
            ref={dialogRef}
            tabIndex={-1}
            className="detail-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="venture-modal-title"
          >
            <button
              className="modal-close"
              onClick={() => setSelectedVenture(null)}
              aria-label="Close venture details"
            >
              <X size={20} />
            </button>
            <div className="section-index">
              {selectedVenture.number} / {selectedVenture.type}
            </div>
            <h2 id="venture-modal-title">{selectedVenture.name}</h2>
            <p className="modal-summary">{selectedVenture.summary}</p>
            {selectedVenture.detail.map((paragraph, index) => (
              <p className="venture-detail-paragraph" key={index}>
                {paragraph}
              </p>
            ))}
            <div className="modal-fact">
              <span>PERKINS' CONNECTION</span>
              <strong>{selectedVenture.role}</strong>
            </div>
            <div className="modal-fact">
              <span>ENTREPRENEURIAL LESSON</span>
              <strong>{selectedVenture.lesson}</strong>
            </div>
            <a
              className="text-link"
              href={
                sources.find((source) => source.id === selectedVenture.source)
                  ?.url
              }
              target="_blank"
              rel="noreferrer"
            >
              Explore source <ArrowUpRight size={15} />
            </a>
          </section>
        </div>
      )}
      {sourceOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setSourceOpen(false);
          }}
        >
          <section
            ref={dialogRef}
            tabIndex={-1}
            className="sources-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="sources-title"
          >
            <button
              className="modal-close"
              onClick={() => setSourceOpen(false)}
              aria-label="Close sources"
            >
              <X size={20} />
            </button>
            <div className="section-index">RESEARCH NOTES</div>
            <h2 id="sources-title">Sources &amp; further reading</h2>
            <p className="sources-intro">
              The story is based on a mix of first-person company material and
              independent reporting. Company pages are useful for the company's
              own account; they are not independent verification of every claim.
              Labels identify where each source comes from, not whether every
              individual claim has been independently verified.
            </p>
            <div className="source-list">
              {sources.map((source, index) => (
                <a
                  className="source-row"
                  key={source.id}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <small>{source.label}</small>
                    <span className="source-type">{source.type}</span>
                    <strong>{source.title}</strong>
                    <p>{source.note}</p>
                  </div>
                  <ExternalLink size={16} />
                </a>
              ))}
            </div>
            <p className="source-footnote">
              Research note: milestone years are presented as a concise
              chronology. The 2011–12 period groups several team-building and
              fundraising developments rather than claiming a single launch
              date.
            </p>
          </section>
        </div>
      )}
    </div>
  );
}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
