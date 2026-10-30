import { useEffect, useMemo, useRef, useState } from "react";

export default function Palette({ open, onClose, commands }) {
  if (!open) return null;
  return <PaletteDialog onClose={onClose} commands={commands} />;
}

// Mounted only while open, so its state starts fresh on every open.
function PaletteDialog({ onClose, commands }) {
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return commands;
    return commands.filter((c) =>
      `${c.group} ${c.label}`.toLowerCase().includes(q),
    );
  }, [commands, query]);

  useEffect(() => {
    const previous = document.activeElement;
    inputRef.current?.focus();
    return () => {
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, []);

  useEffect(() => {
    listRef.current
      ?.querySelector('[aria-selected="true"]')
      ?.scrollIntoView({ block: "nearest" });
  }, [index, results]);

  const run = (command) => {
    onClose();
    // Wait a frame so focus is restored before the command moves the page.
    requestAnimationFrame(() => command.run());
  };

  const onKeyDown = (event) => {
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setIndex((i) => (results.length ? (i + 1) % results.length : 0));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setIndex((i) =>
        results.length ? (i - 1 + results.length) % results.length : 0,
      );
    } else if (event.key === "Enter") {
      event.preventDefault();
      if (results[index]) run(results[index]);
    } else if (event.key === "Escape") {
      event.preventDefault();
      onClose();
    } else if (event.key === "Tab") {
      event.preventDefault();
    }
  };

  return (
    <div
      className="palette-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="palette"
        role="dialog"
        aria-modal="true"
        aria-label="Search the portfolio"
      >
        <input
          ref={inputRef}
          className="palette-input"
          type="text"
          role="combobox"
          aria-expanded="true"
          aria-controls="palette-list"
          aria-activedescendant={
            results[index] ? `palette-opt-${results[index].id}` : undefined
          }
          placeholder="Jump to a section, filter by a skill, or run an action"
          value={query}
          onChange={(event) => {
            setQuery(event.target.value);
            setIndex(0);
          }}
          onKeyDown={onKeyDown}
        />
        <ul
          id="palette-list"
          className="palette-list"
          role="listbox"
          ref={listRef}
        >
          {results.length === 0 && (
            <li className="palette-empty">
              Nothing matches "{query}". Try a skill like Docker or a section
              like Projects.
            </li>
          )}
          {results.map((command, i) => (
            <li
              key={command.id}
              id={`palette-opt-${command.id}`}
              role="option"
              aria-selected={i === index}
              className="palette-option"
              onMouseMove={() => setIndex(i)}
              onMouseDown={(event) => {
                event.preventDefault();
                run(command);
              }}
            >
              <span className="palette-group">{command.group}</span>
              <span className="palette-label">{command.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
