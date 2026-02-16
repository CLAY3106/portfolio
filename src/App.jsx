import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div>
            <div className="name">Son Le</div>
            <div className="tagline">SWE • Data Engineering • AI/ML</div>
          </div>

          <nav className="nav">
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer">
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/son-le-3b3313268/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </header>

        <section className="hero">
          <h1>Building reliable data systems and ML models end-to-end.</h1>
          <p>
            Batch ETL (Airflow/Spark/PostgreSQL), internal API + FTP ingestion, and forecasting models
            in Python.
          </p>
          <div className="btnRow">
            <a className="btnPrimary" href="#projects">
              View Projects
            </a>
            <a className="btnGhost" href="/resume.pdf" target="_blank" rel="noreferrer">
              Resume
            </a>
            <a className="btnGhost" href="#contact">
              Contact
            </a>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Featured Projects</h2>
          <div className="grid">
            <Card
              title="football-pipeline"
              subtitle="Python • Docker • PostgreSQL"
              bullets={[
                "Containerized data pipeline to ingest and store structured football match data",
                "Relational schema design in PostgreSQL with integrity constraints",
                "Ingestion + validation workflow to ensure consistent transformations",
              ]}
              links={[
                { label: "Repo", href: "https://github.com/CLAY3106/football-pipeline" },
              ]}
            />

            <Card
              title="World Cup Forecasting"
              subtitle="Python • scikit-learn • pandas • NumPy"
              bullets={[
                "Built forecasting pipeline with clear features and baselines",
                "Evaluated with metrics and documented methodology",
                "Packaged results for reproducibility",
              ]}
              links={[]}
            />
          </div>
        </section>

        <section id="experience" className="section">
          <h2>Experience</h2>
          <div className="card">
            <div className="row">
              <div className="bold">Data Engineering Intern</div>
              <div className="muted">Jul 2025 – Sep 2025</div>
            </div>
            <ul className="list">
              <li>
                Migrated selected Hive/HDFS datasets to PostgreSQL by redesigning schemas and
                indexing strategies; validated row-level consistency against source tables, reducing
                query latency by ~3×.
              </li>
              <li>
                Designed batch ingestion to pull from internal REST services and scheduled FTP
                exports, using controlled batch loads (~100 records/request) for stable processing.
              </li>
              <li>
                Built containerized ETL using Airflow, Spark, and Docker to orchestrate extraction,
                transformation, and loading of ~1.2M records/week into PostgreSQL.
              </li>
              <li>
                Implemented normalization, rule-based deduplication, validation, logging, and
                idempotent reruns, reducing duplicates by ~80% and cutting recovery time by ~40%.
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Skills</h2>
          <div className="card">
            <div>
              <span className="bold">Languages:</span> Python, Java, SQL
            </div>
            <div>
              <span className="bold">Frameworks:</span> Apache Spark, Apache Airflow, scikit-learn
            </div>
            <div>
              <span className="bold">Data / Cloud:</span> PostgreSQL
            </div>
            <div>
              <span className="bold">Tools:</span> Docker, Git, Linux
            </div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="card">
            <div className="contactRow">
              <a href="mailto:Son.LeDinhTruong24@kzoo.edu">Son.LeDinhTruong24@kzoo.edu</a>
              <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer">
                github.com/CLAY3106
              </a>
              <a
                href="https://www.linkedin.com/in/son-le-3b3313268/"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/son-le-3b3313268
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">© {new Date().getFullYear()} Son Le</footer>
      </div>
    </div>
  );
}

function Card({ title, subtitle, bullets, links }) {
  return (
    <div className="card">
      <div className="cardTitle">{title}</div>
      <div className="muted">{subtitle}</div>
      <ul className="list">
        {bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
      {links?.length > 0 && (
        <div className="linkRow">
          {links.map((l, i) => (
            <a key={i} href={l.href} target="_blank" rel="noreferrer">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
