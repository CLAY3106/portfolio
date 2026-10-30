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
              <div className="status-pill">Available for Summer 2027</div>
            </div>
            <div className="subtitle">
              CS & Math @ Kalamazoo College
            </div>
          </div>

          <nav className="nav">
            <a href="#about" className="nav-link">About</a>
            <a href="#projects" className="nav-link">Projects</a>
            <a href="#experience" className="nav-link">Experience</a>
            <a href="#skills" className="nav-link">Skills</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer" className="nav-link-external">
              GitHub ↗
            </a>
            <a href="https://linkedin.com/in/sonle3106" target="_blank" rel="noreferrer" className="nav-link-external">
              LinkedIn ↗
            </a>
          </nav>
        </header>

        <section className="hero">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">
                Building scalable
                <span className="accent-text"> backend systems</span> and
                <span className="accent-text"> production-grade software</span>
              </h1>
              <p className="hero-description">
                I design and implement full-stack applications, ETL pipelines, and 
                backend infrastructure that solve real problems at scale.
              </p>
              <div className="tech-stack">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">Java</span>
                <span className="tech-badge">TypeScript</span>
                <span className="tech-badge">FastAPI</span>
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">PostgreSQL</span>
                <span className="tech-badge">Docker</span>
              </div>
              <div className="cta-group">
                <a href="#projects" className="btn-primary">View My Work</a>
                <a href="mailto:Son.LeDinhTruong316@outlook.com" className="btn-secondary">Get in Touch</a>
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
                I'm Son, a junior at Kalamazoo College majoring in Computer Science 
                and Mathematics. I enjoy building software that works at scale, from 
                full-stack web apps to production data pipelines. I also do computer vision
                research on defect detection, where most of my time goes into making sure
                the results are actually valid.
              </p>
              <p>
                Currently seeking Summer 2027 internships in software engineering 
                where I can contribute to meaningful projects and learn from experienced teams.
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
              title="LifeOS"
              description="Full-stack productivity app spanning academics, job search, workouts, and finance, with a daily AI briefing built on FastAPI, Next.js, and PostgreSQL. Features JWT auth, CI/CD, hybrid RAG retrieval, and a deterministic scoring layer."
              tech={["FastAPI", "Next.js", "PostgreSQL", "Docker", "AWS", "Claude AI", "RAG"]}
              highlights={[
                "Hybrid retrieval: embedding cosine similarity plus PostgreSQL full-text search, merged with Reciprocal Rank Fusion",
                "Deterministic 0-100 priority scoring runs before the LLM and powers the briefing on its own if Claude is unavailable",
                "Event-sourced audit trail for job applications; GitHub Actions CI/CD to Render and Vercel",
                "Solved cross-origin cookie issues with Vercel reverse-proxy rewrites"
              ]}
              link="https://lifeos-lac.vercel.app"
              accent="teal"
            />

            <ProjectCard
              title="World Cup 2026 Prediction System"
              description="Probabilistic forecasting pipeline in Python cross-validating 3 classification models on historical World Cup match data to simulate bracket outcomes."
              tech={["Python", "scikit-learn", "Pandas"]}
              highlights={[
                "Correctly predicted 2 of 4 semifinalists including the eventual champion (Spain)",
                "Cross-validated 3 classification models on historical match data",
                "Simulated bracket outcomes with probabilistic forecasting"
              ]}
              accent="purple"
            />

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
                <h3 className="experience-title">Software Engineering Intern, M1 Platform</h3>
                <div className="experience-company">FPT IS Company Limited</div>
              </div>
              <div className="experience-date">Jul 2026 – Present</div>
            </div>

            <div className="impact-metrics">
              <div className="metric">
                <div className="metric-value">9</div>
                <div className="metric-label">Repo GitLab polyrepo</div>
              </div>
              <div className="metric">
                <div className="metric-value">20</div>
                <div className="metric-label">Acceptance criteria authored</div>
              </div>
              <div className="metric">
                <div className="metric-value">15</div>
                <div className="metric-label">Engineer team supported</div>
              </div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Reviewing agent-generated backend code across a 9-repo GitLab polyrepo using Claude Code 
                as the primary development agent, root-causing failures and validating against acceptance 
                criteria on a Docker Compose environment before merge
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Designing use cases via the ICE methodology (Intent, Context, Expectations), authoring 
                and verifying 20 Given/When/Then acceptance criteria with measurable security, performance, 
                and data limits that gate the build pipeline for a 15-engineer team
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Implementing a security and compliance coverage review auditing the platform against 
                ISO 27001, SOC 2 Type II, and OWASP API Top 10, mapping each control to satisfaction 
                status and routing gaps to remediation paths
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Undergraduate Researcher, Computer Vision</h3>
                <div className="experience-company">Kalamazoo College, advised by Dr. Tasnim Gharaibeh (Remote)</div>
              </div>
              <div className="experience-date">Ongoing</div>
            </div>

            <div className="impact-metrics">
              <div className="metric">
                <div className="metric-value">~990</div>
                <div className="metric-label">Distinct photos behind 2,230 images</div>
              </div>
              <div className="metric">
                <div className="metric-value">98%</div>
                <div className="metric-label">Defect recall as cascade gate (180/183)</div>
              </div>
              <div className="metric">
                <div className="metric-value">2</div>
                <div className="metric-label">Validity flaws found and fixed</div>
              </div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Building a two-layer YOLO26 cascade for external pipeline defect detection, where a
                recall-first Layer 1 gate filters likely-healthy images before a second detection layer.
                Layer 1 catches 180 of 183 defect images and filters 28 of 37 healthy ones (small healthy
                sample, so treated as preliminary); Layer 2 and end-to-end evaluation are in progress
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Discovered the 2,230-image dataset held only about 990 distinct photos, with edited copies
                leaking across train and test (~70% of test images had a near-copy in training) and inflating
                mAP@50 from 0.38 to 0.68. Re-split by source photo and report corrected numbers only
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Designed adversarial tests (erasing defects, pasting defects onto healthy images) showing an
                image classifier with 99% recall was recognizing the source dataset, not defects. Dropped it;
                the box detector passed the same test
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Software Engineering Intern</h3>
                <div className="experience-company">FPT IS Company Limited</div>
              </div>
              <div className="experience-date">Jul 2025 – Sep 2025</div>
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
                Designed and deployed containerized ETL pipelines using Python, Airflow, Spark, 
                and Docker, automating batch ingestion of 1.2M records/week into production-ready 
                backend infrastructure
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Migrated large-scale Hive/HDFS datasets to PostgreSQL via schema redesign and 
                index optimization, reducing query latency by 3× and validating row-level 
                consistency across tables
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Implemented idempotent rerun mechanisms and rule-based de-duplication logic, 
                cutting duplicate records by 80% and pipeline recovery time by 40%
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Teaching Assistant</h3>
                <div className="experience-company">Dept. of Computer Science & Mathematics, Kalamazoo College</div>
              </div>
              <div className="experience-date">Sep 2025 – Present</div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Evaluates 80+ student submissions weekly with targeted written feedback across 
                OOP (Java) and Algorithms (Python, Java) coursework for ~60–80 students per term
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Collaborates with faculty to calibrate rubrics; identifies recurring error patterns 
                across cohorts and surfaces conceptual gaps to instructors, informing in-class
                interventions on core CS concepts
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Peer Tutor</h3>
                <div className="experience-company">Collaboration Center, Kalamazoo College</div>
              </div>
              <div className="experience-date">Sep 2025 – Present</div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Conducts structured debugging and algorithm design sessions for groups of up to 
                20 students, building reusable frameworks for complexity analysis and data structure 
                problem-solving
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Maintains 25+ weekly tutoring appointments spanning introductory to advanced CS 
                coursework including data structures, OOP, and algorithm design
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <div className="experience-header">
              <div>
                <h3 className="experience-title">Co-Founder & Program Director</h3>
                <div className="experience-company">The STEAM Project</div>
              </div>
              <div className="experience-date">Apr 2022 – Present</div>
            </div>

            <ul className="achievement-list">
              <li>
                <span className="achievement-bullet">→</span>
                Co-founded a student-run STEM camp serving 120+ middle schoolers in Ha Tinh, 
                Vietnam; led a 30-member volunteer team across a 4-year program lifecycle
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Owned end-to-end program design: curriculum development (Scratch programming, 
                science experiments, engineering challenges, hackathons), team recruitment, 
                and fundraising ($1,500 raised in 2025)
              </li>
              <li>
                <span className="achievement-bullet">→</span>
                Now serving as an alumni advisor, supporting current organizers with curriculum 
                planning, onboarding, and fundraising strategy
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
              skills={["Python", "Java", "JavaScript", "TypeScript", "SQL"]}
              color="blue"
            />
            <SkillCategory
              category="Web & Backend"
              skills={["FastAPI", "Next.js", "React", "REST APIs", "SQLAlchemy", "Pydantic", "RAG / Hybrid Retrieval", "JWT Auth"]}
              color="teal"
            />
            <SkillCategory
              category="Data Engineering"
              skills={["Apache Spark", "Apache Airflow", "PostgreSQL", "Hive", "HDFS", "ETL Pipelines"]}
              color="purple"
            />
            <SkillCategory
              category="Machine Learning"
              skills={["scikit-learn", "Pandas", "Feature Engineering", "Cross-Validation"]}
              color="orange"
            />
            <SkillCategory
              category="Computer Vision"
              skills={["YOLO", "Object Detection", "mAP / Precision / Recall", "Dataset Validation", "Google Colab"]}
              color="teal"
            />
            <SkillCategory
              category="Infrastructure"
              skills={["Docker", "AWS", "GitHub Actions CI/CD", "Vercel", "Render", "Linux", "Git"]}
              color="blue"
            />
          </div>
        </section>

        <section id="contact" className="section section-contact">
          <div className="contact-card">
            <h2 className="contact-title">Let's Build Something Together</h2>
            <p className="contact-description">
              I'm actively seeking Summer 2027 internship opportunities in software engineering. 
              Let's connect!
            </p>
            <div className="contact-links">
              <a href="mailto:Son.LeDinhTruong316@outlook.com" className="contact-btn">
                <span className="contact-icon">✉️</span>
                Email Me
              </a>
              <a href="https://github.com/CLAY3106" target="_blank" rel="noreferrer" className="contact-btn">
                <span className="contact-icon">💻</span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/sonle3106" target="_blank" rel="noreferrer" className="contact-btn">
                <span className="contact-icon">👔</span>
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <p>© {new Date().getFullYear()} Son Le</p>
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
