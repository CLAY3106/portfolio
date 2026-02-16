import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="container">
        <header className="header">
          <div>
            <div className="name">Son Le</div>
            <div className="muted" style={{ marginTop: "6px" }}>
              Computer Science & Mathematics Student at Kalamazoo College
            </div>
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
          <img
            src="/headshot.jpg"
            alt="Son Le"
            style={{
              width: "120px",
              borderRadius: "50%",
              marginTop: "20px",
              border: "2px solid #1f2937"
            }}
          />
          <h1>Building reliable data systems and ML models end-to-end.</h1>
          <p>
            Batch ETL (Airflow/Spark/PostgreSQL), internal API + FTP ingestion, and forecasting models
            in Python.
          </p>
          <div style={{ marginTop: 30 }}>
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

        <section className="section" id="bio">
          <h2>Bio</h2>
          <div className="card">
            <p className="muted">
              I'm Son, an upcoming sophomore at Kalamazoo College majoring in Computer Science and Mathematics.
              I'm particularly interested in data engineering, software development, and building systems
              that turn data into meaningful solutions.
            </p>
            <p className="muted" style={{ marginTop: "16px" }}>
              Outside academics, I enjoy playing pool and soccer — the real football.
              If the debate ever comes up, it's Messi over Ronaldo.
            </p>
            <p className="muted" style={{ marginTop: "16px" }}>
              I value meeting new people, exchanging ideas, and learning from different perspectives.
              I'm currently seeking internship opportunities in data engineering, AI engineering,
              or software engineering.
            </p>
          </div>
        </section>
        <section className="section" id="beyond">
          <h2>Beyond Code</h2>
          <div className="card">
            <ul className="list">
              <li>
                ⚽ Football enthusiast — I enjoy playing and following matches (especially Barcelona and Messi),
                which inspired my interest in analyzing match data and forecasting outcomes.
              </li>
              <li>
                🇻🇳 From Vietnam — adapting across cultures shaped how I approach communication and teamwork.
              </li>
              <li>
                📚 Interested in probability, strategy, and long-term systems thinking.
              </li>
              <li>
                🏋️ Training discipline — I value consistency, incremental improvement, and measurable progress.
              </li>
            </ul>
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
        <div style={{ marginTop: "60px", textAlign: "center" }} className="muted">
          Open to internship opportunities in Data Engineering, AI Engineering, and Software Engineering.
        </div>
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
