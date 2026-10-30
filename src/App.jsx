import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  about,
  experience,
  profile,
  projects,
  skillGroups,
  topics,
} from "./data";
import Palette from "./Palette";
import { detectMac, prefersReducedMotion, useScrollSpy, useTheme } from "./hooks";

const SECTION_IDS = ["top", "experience", "projects", "skills", "about"];
const DOCK_LINKS = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "about", label: "About" },
];

const allItems = [...experience, ...projects];
const itemTitle = (item) => item.role || item.title;

const isHit = (item, filter) => {
  if (!filter) return true;
  return filter.kind === "topic"
    ? item.topics.includes(filter.value)
    : item.tags.includes(filter.value);
};
const countFor = (kind, value) =>
  allItems.filter((item) => isHit(item, { kind, value })).length;

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const active = useScrollSpy(SECTION_IDS);
  const [isMac] = useState(detectMac);
  const [filter, setFilter] = useState(null);
  const [open, setOpen] = useState(() => new Set(["fpt-m1", "research"]));
  const [paletteOpen, setPaletteOpen] = useState(false);
  const [scan, setScan] = useState(-1);
  const [toast, setToast] = useState("");

  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(""), 2600);
    return () => clearTimeout(timer);
  }, [toast]);

  const scrollToId = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: prefersReducedMotion() ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const showToast = useCallback((message) => setToast(message), []);

  const copyEmail = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      showToast("Email address copied");
    } catch {
      showToast(`Copy failed. Email me at ${profile.email}`);
    }
  }, [showToast]);

  const applyFilter = useCallback(
    (kind, value, label, scrollTarget) => {
      setScan(-1);
      setFilter((current) =>
        current && current.kind === kind && current.value === value
          ? null
          : { kind, value, label },
      );
      if (scrollTarget) scrollToId(scrollTarget);
    },
    [scrollToId],
  );

  const clearFilter = useCallback(() => setFilter(null), []);

  const toggleOpen = useCallback((id) => {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }, []);

  const goToItem = useCallback(
    (id) => {
      setOpen((current) => new Set(current).add(id));
      requestAnimationFrame(() => scrollToId(id));
    },
    [scrollToId],
  );

  const allExperienceOpen = experience.every((item) => open.has(item.id));
  const toggleAllExperience = () => {
    setOpen((current) => {
      const next = new Set(current);
      experience.forEach((item) =>
        allExperienceOpen ? next.delete(item.id) : next.add(item.id),
      );
      return next;
    });
  };

  // The hero scans its three phrases once on load, then hands over to the visitor.
  useEffect(() => {
    if (prefersReducedMotion()) return undefined;
    const keys = Object.keys(topics);
    const timers = keys.map((_, i) => setTimeout(() => setScan(i), 1000 + i * 1400));
    timers.push(setTimeout(() => setScan(-1), 1000 + keys.length * 1400));
    return () => timers.forEach(clearTimeout);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      const typing =
        event.target instanceof HTMLElement &&
        (event.target.isContentEditable ||
          ["INPUT", "TEXTAREA", "SELECT"].includes(event.target.tagName));
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setPaletteOpen((current) => !current);
      } else if (event.key === "/" && !typing && !paletteOpen) {
        event.preventDefault();
        setPaletteOpen(true);
      } else if (event.key === "Escape" && !paletteOpen && filter) {
        setFilter(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [paletteOpen, filter]);

  const commands = useMemo(() => {
    const list = [];
    DOCK_LINKS.forEach((link) =>
      list.push({
        id: `go-${link.id}`,
        group: "Go to",
        label: link.label,
        run: () => scrollToId(link.id),
      }),
    );
    list.push({
      id: "theme",
      group: "Action",
      label: `Switch to ${theme === "dark" ? "light" : "dark"} theme`,
      run: toggleTheme,
    });
    list.push({
      id: "copy-email",
      group: "Action",
      label: "Copy email address",
      run: copyEmail,
    });
    list.push({
      id: "github",
      group: "Open",
      label: "GitHub profile",
      run: () => window.open(profile.github, "_blank", "noopener"),
    });
    list.push({
      id: "linkedin",
      group: "Open",
      label: "LinkedIn profile",
      run: () => window.open(profile.linkedin, "_blank", "noopener"),
    });
    if (filter) {
      list.push({
        id: "clear-filter",
        group: "Action",
        label: `Clear filter: ${filter.label}`,
        run: clearFilter,
      });
    }
    Object.entries(topics).forEach(([key, label]) =>
      list.push({
        id: `topic-${key}`,
        group: "Filter",
        label: `${label} (${countFor("topic", key)})`,
        run: () => applyFilter("topic", key, label, "experience"),
      }),
    );
    skillGroups
      .flatMap((group) => group.skills)
      .filter((skill) => countFor("skill", skill) > 0)
      .forEach((skill) =>
        list.push({
          id: `skill-${skill.replace(/\W+/g, "-")}`,
          group: "Filter",
          label: `${skill} (${countFor("skill", skill)})`,
          run: () => applyFilter("skill", skill, skill, "skills"),
        }),
      );
    return list;
  }, [theme, filter, scrollToId, toggleTheme, copyEmail, clearFilter, applyFilter]);

  const stateFor = (item) =>
    filter ? (isHit(item, filter) ? "yes" : "no") : undefined;
  // Selecting a row that the filter has collapsed clears the filter and opens it.
  const rowToggle = (item) =>
    stateFor(item) === "no"
      ? () => {
          clearFilter();
          setOpen((current) => new Set(current).add(item.id));
        }
      : () => toggleOpen(item.id);
  const matches = filter ? allItems.filter((item) => isHit(item, filter)) : [];

  return (
    <>
      <a className="skip-link" href="#experience">
        Skip to content
      </a>

      <main className="page">
        <header id="top" className="hero">
          <h1 className="hero-name">Son Le</h1>
          <p className="hero-meta">
            Software engineering student at Kalamazoo College, looking for a
            Summer 2027 internship.
          </p>
          <p className="hero-statement">
            I build{" "}
            <Detect
              k="backend"
              scanning={scan === 0}
              filter={filter}
              onPick={() =>
                applyFilter("topic", "backend", topics.backend, "experience")
              }
            />{" "}
            and{" "}
            <Detect
              k="data"
              scanning={scan === 1}
              filter={filter}
              onPick={() =>
                applyFilter("topic", "data", topics.data, "experience")
              }
            />
            , and I do{" "}
            <Detect
              k="vision"
              scanning={scan === 2}
              filter={filter}
              onPick={() =>
                applyFilter("topic", "vision", topics.vision, "experience")
              }
            />{" "}
            where I have learned to distrust my own numbers first.
          </p>
          <p className="hero-links">
            <button type="button" className="link-btn" onClick={copyEmail}>
              Copy email
            </button>
            <a className="link-btn" href={profile.github} target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a className="link-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </p>
        </header>

        <section id="experience" className="section" aria-labelledby="experience-title">
          <div className="section-head">
            <h2 id="experience-title" className="section-title">
              Experience
            </h2>
            <button type="button" className="text-btn" onClick={toggleAllExperience}>
              {allExperienceOpen ? "Collapse all" : "Expand all"}
            </button>
          </div>
          <ol className="rows">
            {experience.map((item) => (
              <Row
                key={item.id}
                item={item}
                lead={item.dates}
                title={item.role}
                sub={item.org}
                open={open.has(item.id)}
                state={stateFor(item)}
                onToggle={rowToggle(item)}
              >
                {item.facts.length > 0 && (
                  <ul className="facts">
                    {item.facts.map((fact) => (
                      <li key={fact}>{fact}</li>
                    ))}
                  </ul>
                )}
                <ul className="bullets">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                <Chips item={item} filter={filter} onPick={applyFilter} />
              </Row>
            ))}
          </ol>
        </section>

        <section id="projects" className="section" aria-labelledby="projects-title">
          <div className="section-head">
            <h2 id="projects-title" className="section-title">
              Projects
            </h2>
          </div>
          <ol className="rows">
            {projects.map((item) => (
              <Row
                key={item.id}
                item={item}
                title={item.title}
                open={open.has(item.id)}
                state={stateFor(item)}
                onToggle={rowToggle(item)}
              >
                <p className="panel-text">{item.description}</p>
                <ul className="bullets">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
                <Chips item={item} filter={filter} onPick={applyFilter} />
                {item.link ? (
                  <a className="panel-link" href={item.link} target="_blank" rel="noreferrer">
                    {item.linkLabel}
                  </a>
                ) : (
                  <p className="panel-note">No public repository yet.</p>
                )}
              </Row>
            ))}
          </ol>
        </section>

        <section id="skills" className="section" aria-labelledby="skills-title">
          <div className="section-head">
            <h2 id="skills-title" className="section-title">
              Skills
            </h2>
            <p className="section-hint">
              Select a skill to see where I used it. Numbers are entries above.
            </p>
          </div>
          <div className="skills">
            {skillGroups.map((group) => (
              <div key={group.name} className="skill-group">
                <h3 className="skill-group-name">{group.name}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill) => {
                    const count = countFor("skill", skill);
                    const pressed =
                      filter?.kind === "skill" && filter.value === skill;
                    return (
                      <li key={skill}>
                        {count > 0 ? (
                          <button
                            type="button"
                            className="skill"
                            aria-pressed={pressed}
                            onClick={() => applyFilter("skill", skill, skill)}
                          >
                            {skill}
                            <span className="skill-count">{count}</span>
                          </button>
                        ) : (
                          <span className="skill is-plain">{skill}</span>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}

            <div className="skill-matches" data-active={Boolean(filter)}>
              {filter ? (
                <>
                  <p className="skill-matches-title">
                    {filter.label} appears in {matches.length}{" "}
                    {matches.length === 1 ? "entry" : "entries"}:
                  </p>
                  <ul className="skill-matches-list">
                    {matches.map((item) => (
                      <li key={item.id}>
                        <button
                          type="button"
                          className="match-link"
                          onClick={() => goToItem(item.id)}
                        >
                          {itemTitle(item)}
                        </button>
                      </li>
                    ))}
                  </ul>
                  <button type="button" className="text-btn" onClick={clearFilter}>
                    Clear filter
                  </button>
                </>
              ) : (
                <p className="skill-matches-empty">
                  No skill selected.
                </p>
              )}
            </div>
          </div>
        </section>

        <section id="about" className="section" aria-labelledby="about-title">
          <div className="section-head">
            <h2 id="about-title" className="section-title">
              About
            </h2>
          </div>
          <div className="about">
            {about.map((paragraph) => (
              <p key={paragraph} className="about-text">
                {paragraph}
              </p>
            ))}
            <p className="about-contact">
              <a className="about-email" href={`mailto:${profile.email}`}>
                {profile.email}
              </a>
              <button type="button" className="link-btn" onClick={copyEmail}>
                Copy
              </button>
            </p>
            <p className="about-contact">
              <a className="link-btn" href={profile.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a className="link-btn" href={profile.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </p>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Son Le</p>
        </footer>
      </main>

      <nav className="dock" aria-label="Sections">
        {filter && (
          <button
            type="button"
            className="dock-filter"
            onClick={clearFilter}
            aria-label={`Clear filter ${filter.label}, ${matches.length} matches`}
          >
            <span className="dock-filter-label">{filter.label}</span>
            <span className="dock-filter-count">{matches.length}</span>
            <Icon name="close" />
          </button>
        )}
        {DOCK_LINKS.map((link) => (
          <a
            key={link.id}
            className="dock-link"
            href={`#${link.id}`}
            aria-current={active === link.id ? "true" : undefined}
          >
            {link.label}
          </a>
        ))}
        <span className="dock-sep" aria-hidden="true" />
        <button
          type="button"
          className="dock-btn"
          onClick={() => setPaletteOpen(true)}
          aria-label="Search and commands"
        >
          <Icon name="search" />
          <kbd className="dock-kbd">{isMac ? "⌘" : "Ctrl"} K</kbd>
        </button>
        <button
          type="button"
          className="dock-btn"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
      </nav>

      <Palette
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        commands={commands}
      />

      <div className="toast" role="status" data-show={Boolean(toast)}>
        {toast}
      </div>
      <div className="visually-hidden" role="status">
        {filter
          ? `Filtering by ${filter.label}: ${matches.length} matching entries.`
          : ""}
      </div>
    </>
  );
}

function Detect({ k, scanning, filter, onPick }) {
  const count = countFor("topic", k);
  const pressed = filter?.kind === "topic" && filter.value === k;
  return (
    <button
      type="button"
      className={`detect${scanning ? " is-scanning" : ""}`}
      aria-pressed={pressed}
      onClick={onPick}
    >
      {topics[k]}
      <span className="detect-tag" aria-hidden="true">
        {count} {count === 1 ? "entry" : "entries"}
      </span>
      <span className="visually-hidden">
        . Filters the page to {count} {count === 1 ? "entry" : "entries"}.
      </span>
    </button>
  );
}

function Row({ item, lead, title, sub, open, state, onToggle, children }) {
  const panelId = `${item.id}-panel`;
  // Rows that don't match the active filter collapse so only their heading shows.
  const shown = open && state !== "no";
  return (
    <li id={item.id} className="row" data-open={shown} data-match={state}>
      <h3 className="row-heading">
        <button
          type="button"
          className={`row-head${lead ? " has-lead" : ""}`}
          aria-expanded={shown}
          aria-controls={panelId}
          onClick={onToggle}
        >
          {lead && <span className="row-lead">{lead}</span>}
          <span className="row-main">
            <span className="row-title">{title}</span>
            {sub && <span className="row-sub">{sub}</span>}
            <span className="row-summary">{item.summary}</span>
          </span>
          <span className="row-chevron" aria-hidden="true">
            <Icon name="chevron" />
          </span>
        </button>
      </h3>
      <div id={panelId} className="row-panel" inert={!shown}>
        <div className={`row-panel-inner${lead ? " has-lead" : ""}`}>{children}</div>
      </div>
    </li>
  );
}

function Chips({ item, filter, onPick }) {
  if (item.tags.length === 0) return null;
  return (
    <ul className="chips" aria-label="Skills used">
      {item.tags.map((tag) => (
        <li key={tag}>
          <button
            type="button"
            className="chip"
            aria-pressed={filter?.kind === "skill" && filter.value === tag}
            onClick={() => onPick("skill", tag, tag)}
          >
            {tag}
          </button>
        </li>
      ))}
    </ul>
  );
}

function Icon({ name }) {
  const common = {
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "square",
    "aria-hidden": true,
  };
  switch (name) {
    case "search":
      return (
        <svg {...common}>
          <circle cx="7" cy="7" r="4.5" />
          <path d="M10.5 10.5L14 14" />
        </svg>
      );
    case "close":
      return (
        <svg {...common}>
          <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...common}>
          <path d="M3.5 6l4.5 4.5L12.5 6" />
        </svg>
      );
    case "sun":
      return (
        <svg {...common}>
          <circle cx="8" cy="8" r="3" />
          <path d="M8 1.5v1.8M8 12.7v1.8M1.5 8h1.8M12.7 8h1.8M3.4 3.4l1.3 1.3M11.3 11.3l1.3 1.3M12.6 3.4l-1.3 1.3M4.7 11.3l-1.3 1.3" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <path d="M13 9.5A5.5 5.5 0 116.5 3 4.5 4.5 0 0013 9.5z" />
        </svg>
      );
  }
}
