import "./App.css";

export default function App() {
  return (
    <div className="page">
      <div className="grain-overlay"></div>
      
      <div className="container">
        <header className="header">
          <div className="header-content">
            <div className="name-badge">
              <div className="name">Son Le</div>
              <div className="status-pill">Available for Summer 2026</div>
            </div>
            <div className="subtitle">
              CS & Math @ Kalamazoo College
            </div>
          </div>

          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer" className="nav-link-external">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/son-le-3b3313268/" target="_blank" rel="noreferrer" className="nav-link-external">
              LinkedIn ↗
            </a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Building reliable
                <span className="accent-text"> data systems</span> and
                <span className="accent-text"> intelligent pipelines</span>
              </h1>
              <p className="hero-description">
                I design and implement ETL workflows, batch processing systems, and 
                forecasting models that transform raw data into actionable insights.
              </p>
              <div className="tech-stack">
                <span className="tech-badge">Apache Airflow</span>
                <span className="tech-badge">Apache Spark</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Docker</span>
                <span className="tech-badge">Python</span>
              </div>
              <div className="cta-group">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="mailto:Son.LeDinhTruong24@kzoo.edu" className="btn-secondary">Get in Touch</a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="floating-card card-1">
                <div className="card-icon">📊</div>
                <div className="card-text">1.2M records/week</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-icon">⚡</div>
                <div className="card-text">3× faster queries</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-icon">🎯</div>
                <div className="card-text">80% fewer duplicates</div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section section-about">
          <div className="section-header">
            <span className="section-label">About Me</span>
            <h2 className="section-title">Beyond the Terminal</h2>
          </div>
          
          <div className="about-grid">
            <div className="about-card main-bio">
              <p>
                I'm Son, an upcoming sophomore at Kalamazoo College majoring in Computer Science 
                and Mathematics. My passion lies in building data systems that are both reliable 
                and scalable—turning messy datasets into clean, actionable insights.
              </p>
              <p>
                Currently seeking Summer 2026 internships in data engineering, AI engineering, 
                or software development where I can contribute to meaningful projects and learn 
                from experienced teams.
              </p>
            </div>
            
            <div className="about-card interest-card">
              <div className="interest-icon">⚽</div>
              <h3>Football Analytics</h3>
              <p>
                Die-hard Barcelona fan (Messi over Ronaldo, always). My love for the game sparked 
                my interest in sports analytics and forecasting models.
              </p>
            </div>
            
            <div className="about-card interest-card">
              <div className="interest-icon-flag">
                <img src="/flag.avif" alt="Vietnam flag" className="flag-image" />
              </div>
              <h3>Cross-Cultural Perspective</h3>
              <p>
                From Vietnam to the US, adapting across cultures taught me the value of clear 
                communication and collaborative problem-solving.
              </p>
            </div>
            
            <div className="about-card interest-card">
              <div className="interest-icon">📈</div>
              <h3>Systems Thinking</h3>
              <p>
                Fascinated by probability, strategy, and long-term planning. I approach problems 
                with discipline and incremental improvement.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="section section-projects">
          <div className="section-header">
            <span className="section-label">Featured Work</span>
            <h2 className="section-title">Projects That Matter</h2>
          </div>

          <div className="projects-grid">
            <ProjectCard
              title="football-pipeline"
              description="Containerized data pipeline for ingesting and storing structured football match data with automated validation"
              tech={["Python", "Docker", "PostgreSQL"]}
              highlights={[
                "Relational schema design with integrity constraints",
                "Automated ingestion + validation workflow",
                "Ensures consistent data transformations"
              ]}
              link="https://github.com/CLAY3106/football-pipeline"
              accent="teal"
            />

            <ProjectCard
              title="World Cup Forecasting"
              description="Machine learning pipeline for predicting World Cup match outcomes using historical data and feature engineering"
              tech={["Python", "scikit-learn", "pandas", "NumPy"]}
              highlights={[
                "Feature engineering from historical match data",
                "Baseline comparison and model evaluation",
                "Reproducible methodology and documentation"
              ]}
              accent="purple"
            />
          </div>
        </section>

        <section id="experience" className="section section-experience">
          <div className="section-header">
            <span className="section-label">Professional Experience</span>
            <h2 className="section-title">Where I've Applied My Skills</h2>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Data Engineering Intern</h3>
                <div className="experience-company">Confidential Company</div>
              </div>
              <div className="experience-date">Jul 2025 — Sep 2025</div>
            </div>
            
            <div className="impact-metrics">
              <div className="metric">
                <div className="metric-value">3×</div>
                <div className="metric-label">Query speed improvement</div>
              </div>
              <div className="metric">
                <div className="metric-value">1.2M</div>
                <div className="metric-label">Records processed weekly</div>
              </div>
              <div className="metric">
                <div className="metric-value">80%</div>
                <div className="metric-label">Reduction in duplicates</div>
              </div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Migrated critical Hive/HDFS datasets to PostgreSQL with redesigned schemas 
                and indexing strategies, reducing query latency by 3×
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Engineered batch ingestion system pulling from REST APIs and FTP exports, 
                processing ~100 records per request for stable throughput
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Built containerized ETL pipeline using Airflow, Spark, and Docker to orchestrate 
                extraction, transformation, and loading of 1.2M+ records weekly
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Implemented normalization, deduplication, validation, and idempotent reruns, 
                cutting duplicates by 80% and recovery time by 40%
              </li>
            </ul>
          </div>
        </section>

        <section id="skills" className="section section-skills">
          <div className="section-header">
            <span className="section-label">Technical Arsenal</span>
            <h2 className="section-title">Tools & Technologies</h2>
          </div>

          <div className="skills-grid">
            <SkillCategory
              category="Languages"
              skills={["Python", "Java", "SQL"]}
              color="blue"
            />
            <SkillCategory
              category="Data Engineering"
              skills={["Apache Spark", "Apache Airflow", "PostgreSQL"]}
              color="teal"
            />
            <SkillCategory
              category="Machine Learning"
              skills={["scikit-learn", "pandas", "NumPy"]}
              color="purple"
            />
            <SkillCategory
              category="DevOps & Tools"
              skills={["Docker", "Git", "Linux"]}
              color="orange"
            />
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-card">
            <h2 className="contact-title">Let's Build Something Together</h2>
            <p className="contact-description">
              I'm actively seeking Summer 2026 internship opportunities in data engineering, 
              AI engineering, and software development. Let's connect!
            </p>
            <div className="contact-links">
              <a href="mailto:Son.LeDinhTruong24@kzoo.edu" className="contact-btn">
                <span className="contact-icon">✉️</span>
                Email Me
              </a>
              <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer" className="contact-btn">
                <span className="contact-icon">💻</span>
                GitHub
              </a>
              <a href="https://www.linkedin.com/in/son-le-3b3313268/" target="_blank" rel="noreferrer" className="contact-btn">
                <span className="contact-icon">👔</span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Son Le • Designed & built with care</p>
        </footer>
      </div>
    </div>
  );
}

function ProjectCard({ title, description, tech, highlights, link, accent }) {
  return (
    <div className={`project-card accent-${accent}`}>
      <div className="project-header">
        <h3 className="project-title">{title}</h3>
        {link && (
          <a href={link} target="_blank" rel="noreferrer" className="project-link">
            View Project ↗
          </a>
        )}
      </div>
      <p className="project-description">{description}</p>
      <div className="project-tech">
        {tech.map((t, i) => (
          <span key={i} className="tech-tag">{t}</span>
        ))}
      </div>
      <ul className="project-highlights">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    </div>
  );
}

function SkillCategory({ category, skills, color }) {
  return (
    <div className={`skill-category color-${color}`}>
      <h3 className="skill-category-title">{category}</h3>
      <div className="skill-tags">
        {skills.map((skill, i) => (
          <span key={i} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
}
