import './App.css'

const skills = [
  'Python',
  'SQL',
  'Power BI',
  'Microsoft Excel',
  'Pandas',
  'NumPy',
  'Scikit-learn',
  'NLTK',
  'Data Visualisation',
  'Dashboard Development',
  'KPI Reporting',
  'Inventory Forecasting',
]

const experiences = [
  {
    role: 'Inventory Analyst',
    company: 'Status Car Care Ltd',
    location: 'Manchester, United Kingdom',
    dates: 'October 2025 – Present',
    points: [
      'Analyse inventory performance, stock movement and sales trends across more than 20,000 SKUs.',
      'Develop automated Power BI dashboards to monitor inventory KPIs, stock availability and turnover.',
      'Support demand forecasting and replenishment planning using historical sales and inventory data.',
      'Improved inventory accuracy from 96% to 99% through reconciliation and validation.',
      'Reduced reporting time from two hours to 20 minutes by automating Power BI reports.',
    ],
  },
  {
    role: 'Credit Analyst',
    company: 'Vivifi India Finance Pvt. Ltd.',
    location: 'Hyderabad, India',
    dates: 'May 2022 – August 2024',
    points: [
      'Analysed bank statements, income records, employment information and credit bureau reports.',
      'Conducted affordability assessments and credit risk analysis for digital loan applications.',
      'Reviewed more than 1,000 customer applications each month.',
      'Identified more than 300 high-risk or potentially fraudulent applications.',
      'Maintained more than 98% compliance and quality accuracy.',
    ],
  },
]

const projects = [
  {
    title: 'UK Retail Sales Dashboard',
    technologies: 'SQL · Power BI · Microsoft Excel',
    description:
      'An interactive business intelligence dashboard created to analyse sales performance, revenue trends, regional results, customer behaviour and product-level KPIs.',
    link: 'https://github.com/mdamerahmed/UK-Retail-Sales-Dashboard',
  },
  {
    title: 'Customer Sentiment Analysis using NLP',
    technologies: 'Python · Pandas · NLTK · Scikit-learn',
    description:
      'An end-to-end natural language processing project that cleans customer reviews, applies TF-IDF vectorisation and evaluates machine-learning models for sentiment classification.',
    link: 'https://github.com/mdamerahmed/sentiment-analysis-nlp',
  },
]

function App() {
  return (
    <div className="site">
      <nav className="navbar">
        <a className="logo" href="#home">
          MAA
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">Manchester, United Kingdom</p>

            <h1>
              Mohammed Amer <span>Ahmed</span>
            </h1>

            <h2>Data Analyst | Power BI | SQL | Python</h2>

            <p className="hero-text">
              Data-driven analyst with more than three years of experience in
              inventory analytics and credit risk analysis. MSc Data Science
              graduate with experience transforming complex data into clear,
              actionable business insights.
            </p>

            <div className="hero-buttons">
              <a
                className="button primary-button"
                href="/Mohammed_Amer_Ahmed_Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>

              <a
                className="button secondary-button"
                href="https://github.com/mdamerahmed"
                target="_blank"
                rel="noreferrer"
              >
                View GitHub
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <strong>3+</strong>
                <span>Years of experience</span>
              </div>

              <div>
                <strong>20,000+</strong>
                <span>SKUs analysed</span>
              </div>

              <div>
                <strong>98%+</strong>
                <span>Quality accuracy</span>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="about">
          <div className="section-heading">
            <p className="eyebrow">About me</p>
            <h2>Turning business data into useful decisions</h2>
          </div>

          <div className="about-card">
            <p>
              I am an analytical professional with experience across
              e-commerce inventory management and financial credit risk. In my
              current position, I analyse inventory performance across more
              than 20,000 SKUs and support forecasting, replenishment planning,
              reconciliation and KPI reporting.
            </p>

            <p>
              I hold an MSc in Data Science from the University of Salford and
              have hands-on experience with SQL, Python, Power BI, Excel,
              machine learning and natural language processing. I am seeking
              Data Analyst, Business Intelligence Analyst and junior data
              science opportunities in the United Kingdom.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">Technical toolkit</p>
            <h2>Skills and technologies</h2>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill}>
                {skill}
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="eyebrow">Career history</p>
            <h2>Professional experience</h2>
          </div>

          <div className="timeline">
            {experiences.map((experience) => (
              <article className="experience-card" key={experience.role}>
                <div className="experience-header">
                  <div>
                    <h3>{experience.role}</h3>
                    <p className="company">{experience.company}</p>
                  </div>

                  <div className="experience-meta">
                    <span>{experience.dates}</span>
                    <span>{experience.location}</span>
                  </div>
                </div>

                <ul>
                  {experience.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2>Data projects</h2>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <div className="project-number">0{index + 1}</div>
                <p className="project-tech">{project.technologies}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <a href={project.link} target="_blank" rel="noreferrer">
                  View project on GitHub →
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section-heading">
            <p className="eyebrow">Qualifications</p>
            <h2>Education</h2>
          </div>

          <div className="education-grid">
            <article className="education-card">
              <p className="education-year">2024 – 2025</p>
              <h3>MSc Data Science</h3>
              <p>University of Salford</p>
              <span>Manchester, United Kingdom</span>
            </article>

            <article className="education-card">
              <p className="education-year">2018 – 2022</p>
              <h3>Bachelor of Technology in Mechanical Engineering</h3>
              <p>Institute of Aeronautical Engineering</p>
              <span>Hyderabad, India</span>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-card">
            <p className="eyebrow">Contact</p>
            <h2>Let’s work with data</h2>

            <p>
              I am open to Data Analyst, Business Intelligence and junior data
              science opportunities across the United Kingdom.
            </p>

            <div className="contact-links">
              <a href="mailto:mdamerahmed872@gmail.com">
                mdamerahmed872@gmail.com
              </a>

              <a
                href="https://www.linkedin.com/in/mdamer-ahmed-971851192"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/mdamerahmed"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <p>© 2026 Mohammed Amer Ahmed. Built with React.</p>
      </footer>
    </div>
  )
}

export default App