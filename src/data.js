export const profile = {
  name: "Son Le",
  email: "Son.LeDinhTruong316@outlook.com",
  github: "https://github.com/CLAY3106",
  linkedin: "https://linkedin.com/in/sonle3106",
};

// Hero phrases. Clicking one filters the page to matching entries.
export const topics = {
  backend: "backend systems",
  data: "data pipelines",
  vision: "computer vision research",
};

export const experience = [
  {
    id: "fpt-m1",
    role: "Software Engineering Intern, M1 Platform",
    org: "FPT IS Company Limited",
    dates: "Jul 2026 – Present",
    summary:
      "Reviewing agent-generated backend code and writing acceptance criteria for a 15-engineer team.",
    facts: [
      "9-repo GitLab polyrepo",
      "20 acceptance criteria authored",
      "15-engineer team supported",
    ],
    bullets: [
      "Reviewing agent-generated backend code across a 9-repo GitLab polyrepo using Claude Code as the primary development agent, root-causing failures and validating against acceptance criteria on a Docker Compose environment before merge",
      "Designing use cases via the ICE methodology (Intent, Context, Expectations), authoring and verifying 20 Given/When/Then acceptance criteria with measurable security, performance, and data limits that gate the build pipeline for a 15-engineer team",
      "Implementing a security and compliance coverage review auditing the platform against ISO 27001, SOC 2 Type II, and OWASP API Top 10, mapping each control to satisfaction status and routing gaps to remediation paths",
    ],
    topics: ["backend"],
    tags: ["Docker", "Git"],
  },
  {
    id: "research",
    role: "Undergraduate Researcher, Computer Vision",
    org: "Kalamazoo College, with Dr. Tasnim Gharaibeh (remote)",
    dates: "Ongoing",
    summary:
      "A two-layer YOLO26 cascade for pipeline defect detection, and the work of catching my own bad numbers.",
    facts: [
      "~990 distinct photos behind 2,230 images",
      "98% defect recall as a cascade gate (180/183)",
      "2 validity flaws found and fixed",
    ],
    bullets: [
      "Building a two-layer YOLO26 cascade for external pipeline defect detection, where a recall-first Layer 1 gate filters likely-healthy images before a second detection layer. Layer 1 catches 180 of 183 defect images and filters 28 of 37 healthy ones (small healthy sample, so treated as preliminary); Layer 2 and end-to-end evaluation are in progress",
      "Discovered the 2,230-image dataset held only about 990 distinct photos, with edited copies leaking across train and test (~70% of test images had a near-copy in training) and inflating mAP@50 from 0.38 to 0.68. Re-split by source photo and report corrected numbers only",
      "Designed adversarial tests (erasing defects, pasting defects onto healthy images) showing an image classifier with 99% recall was recognizing the source dataset, not defects. Dropped it; the box detector passed the same test",
    ],
    topics: ["vision"],
    tags: [
      "YOLO",
      "Object Detection",
      "mAP / Precision / Recall",
      "Dataset Validation",
      "Google Colab",
    ],
  },
  {
    id: "fpt-2025",
    role: "Software Engineering Intern",
    org: "FPT IS Company Limited",
    dates: "Jul 2025 – Sep 2025",
    summary:
      "Containerized ETL pipelines and a Hive/HDFS to PostgreSQL migration that made queries 3× faster.",
    facts: [
      "3× faster queries",
      "1.2M records processed weekly",
      "80% fewer duplicates",
    ],
    bullets: [
      "Designed and deployed containerized ETL pipelines using Python, Airflow, Spark, and Docker, automating batch ingestion of 1.2M records/week into production-ready backend infrastructure",
      "Migrated large-scale Hive/HDFS datasets to PostgreSQL via schema redesign and index optimization, reducing query latency by 3× and validating row-level consistency across tables",
      "Implemented idempotent rerun mechanisms and rule-based de-duplication logic, cutting duplicate records by 80% and pipeline recovery time by 40%",
    ],
    topics: ["backend", "data"],
    tags: [
      "Python",
      "Apache Airflow",
      "Apache Spark",
      "Docker",
      "PostgreSQL",
      "Hive",
      "HDFS",
      "ETL Pipelines",
    ],
  },
  {
    id: "ta",
    role: "Teaching Assistant",
    org: "Dept. of Computer Science & Mathematics, Kalamazoo College",
    dates: "Sep 2025 – Present",
    summary:
      "Written feedback on 80+ submissions a week in Java and Python courses.",
    facts: [],
    bullets: [
      "Evaluates 80+ student submissions weekly with targeted written feedback across OOP (Java) and Algorithms (Python, Java) coursework for ~60–80 students per term",
      "Collaborates with faculty to calibrate rubrics; identifies recurring error patterns across cohorts and surfaces conceptual gaps to instructors, informing in-class interventions on core CS concepts",
    ],
    topics: [],
    tags: ["Java", "Python"],
  },
  {
    id: "tutor",
    role: "Peer Tutor",
    org: "Collaboration Center, Kalamazoo College",
    dates: "Sep 2025 – Present",
    summary: "25+ weekly tutoring appointments across CS coursework.",
    facts: [],
    bullets: [
      "Conducts structured debugging and algorithm design sessions for groups of up to 20 students, building reusable frameworks for complexity analysis and data structure problem-solving",
      "Maintains 25+ weekly tutoring appointments spanning introductory to advanced CS coursework including data structures, OOP, and algorithm design",
    ],
    topics: [],
    tags: [],
  },
  {
    id: "steam",
    role: "Co-Founder & Program Director",
    org: "The STEAM Project",
    dates: "Apr 2022 – Present",
    summary:
      "Co-founded a four-year STEM camp for 120+ middle schoolers in Ha Tinh, Vietnam.",
    facts: ["120+ students", "30 volunteers", "$1,500 raised in 2025"],
    bullets: [
      "Co-founded a student-run STEM camp serving 120+ middle schoolers in Ha Tinh, Vietnam; led a 30-member volunteer team across a 4-year program lifecycle",
      "Owned end-to-end program design: curriculum development (Scratch programming, science experiments, engineering challenges, hackathons), team recruitment, and fundraising ($1,500 raised in 2025)",
      "Now serving as an alumni advisor, supporting current organizers with curriculum planning, onboarding, and fundraising strategy",
    ],
    topics: [],
    tags: [],
  },
];

export const projects = [
  {
    id: "lifeos",
    title: "LifeOS",
    summary:
      "A productivity app for academics, job search, workouts, and finance, with a daily AI briefing.",
    description:
      "Full-stack productivity app spanning academics, job search, workouts, and finance, with a daily AI briefing built on FastAPI, Next.js, and PostgreSQL. Features JWT auth, CI/CD, hybrid RAG retrieval, and a deterministic scoring layer.",
    highlights: [
      "Hybrid retrieval: embedding cosine similarity plus PostgreSQL full-text search, merged with Reciprocal Rank Fusion",
      "Deterministic 0-100 priority scoring runs before the LLM and powers the briefing on its own if Claude is unavailable",
      "Event-sourced audit trail for job applications; GitHub Actions CI/CD to Render and Vercel",
      "Solved cross-origin cookie issues with Vercel reverse-proxy rewrites",
    ],
    link: "https://lifeos-lac.vercel.app",
    linkLabel: "Open the live app",
    topics: ["backend"],
    tags: [
      "Python",
      "TypeScript",
      "FastAPI",
      "Next.js",
      "React",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "PostgreSQL",
      "RAG / Hybrid Retrieval",
      "JWT Auth",
      "Docker",
      "AWS",
      "GitHub Actions CI/CD",
      "Vercel",
      "Render",
    ],
  },
  {
    id: "world-cup",
    title: "World Cup 2026 Prediction System",
    summary:
      "Probabilistic bracket forecasting that called the champion, Spain, and 2 of 4 semifinalists.",
    description:
      "Probabilistic forecasting pipeline in Python cross-validating 3 classification models on historical World Cup match data to simulate bracket outcomes.",
    highlights: [
      "Correctly predicted 2 of 4 semifinalists including the eventual champion (Spain)",
      "Cross-validated 3 classification models on historical match data",
      "Simulated bracket outcomes with probabilistic forecasting",
    ],
    link: null,
    linkLabel: null,
    topics: [],
    tags: ["Python", "scikit-learn", "Pandas", "Cross-Validation"],
  },
  {
    id: "football-pipeline",
    title: "football-pipeline",
    summary:
      "A containerized pipeline that ingests football match data and validates it before storing.",
    description:
      "Containerized data pipeline for ingesting and storing structured football match data with automated validation.",
    highlights: [
      "Relational schema design with integrity constraints",
      "Automated ingestion and validation workflow",
      "Consistent data transformations",
    ],
    link: "https://github.com/CLAY3106/football-pipeline",
    linkLabel: "View the repository",
    topics: ["backend", "data"],
    tags: ["Python", "Docker", "PostgreSQL", "ETL Pipelines"],
  },
];

export const skillGroups = [
  {
    name: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    name: "Web and backend",
    skills: [
      "FastAPI",
      "Next.js",
      "React",
      "REST APIs",
      "SQLAlchemy",
      "Pydantic",
      "RAG / Hybrid Retrieval",
      "JWT Auth",
    ],
  },
  {
    name: "Data engineering",
    skills: [
      "Apache Spark",
      "Apache Airflow",
      "PostgreSQL",
      "Hive",
      "HDFS",
      "ETL Pipelines",
    ],
  },
  {
    name: "Machine learning",
    skills: ["scikit-learn", "Pandas", "Feature Engineering", "Cross-Validation"],
  },
  {
    name: "Computer vision",
    skills: [
      "YOLO",
      "Object Detection",
      "mAP / Precision / Recall",
      "Dataset Validation",
      "Google Colab",
    ],
  },
  {
    name: "Infrastructure",
    skills: [
      "Docker",
      "AWS",
      "GitHub Actions CI/CD",
      "Vercel",
      "Render",
      "Linux",
      "Git",
    ],
  },
];

export const about = [
  "I'm a junior at Kalamazoo College studying Computer Science and Mathematics, originally from Ha Tinh, Vietnam. I like software that holds up at scale, from full-stack apps to production data pipelines, and I check my results before I trust them.",
  "Outside code I follow football analytics (Barcelona, and Messi over Ronaldo) and think about probability and long-term planning.",
];
