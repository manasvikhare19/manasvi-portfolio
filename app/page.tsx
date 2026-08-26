'use client'

import { useEffect, useState } from 'react'

interface Project {
  num: string
  title: string
  subtitle: string
  type: string
  body: string
  tags: string[]
  metric: string
  label: string
  className: string
  link?: string
}

const projects: Project[] = [
  {
    num: '01',
    title: 'AgriScan',
    subtitle: 'Computer vision for earlier action.',
    type: 'COMPUTER VISION',
    body: 'A crop disease detector shaped around farmer discovery, classifying 57 diseases across 14 crops from roughly 93K images. Optimized via TFLite conversion (2800ms → 25ms inference speedup, 28MB → 2.6MB).',
    tags: ['Python', 'TensorFlow', 'MobileNetV2', 'Flask', 'TFLite'],
    metric: '84.6%',
    label: 'classification accuracy',
    className: 'project-featured',
    link: 'https://github.com/manasvikhare19/AgriScan'
  },
  {
    num: '02',
    title: 'AI Image Captioner',
    subtitle: 'Multimodal vision to structured language.',
    type: 'GENERATIVE AI',
    body: 'An intelligent multimodal application powered by Google Gemini Vision Pro, generating structured social media captions, creative descriptions, and accessible alt-text with real-time prompt engineering presets.',
    tags: ['Python', 'Gemini Vision Pro', 'Streamlit', 'Prompt Engineering', 'Google AI'],
    metric: '04',
    label: 'prompt modes & presets',
    className: '',
    link: 'https://github.com/manasvikhare19/ImageCaption'
  },
  {
    num: '03',
    title: 'Healthcare Appointment Manager',
    subtitle: 'Clinical scheduling & automated follow-ups.',
    type: 'FULL-STACK & APPLIED AI',
    body: 'Full-stack clinical management platform featuring automated slot conflict detection, doctor leave scheduling, Google Calendar integration, and automated LLM-generated patient follow-up summaries across Patient, Doctor, and Admin portals.',
    tags: ['Node.js', 'Express', 'React', 'SQLite', 'LLM Follow-ups', 'REST APIs'],
    metric: '03',
    label: 'portals (Patient, Doctor, Admin)',
    className: '',
    link: 'https://github.com/manasvikhare19/healthcare-appointment-manager'
  },
  {
    num: '04',
    title: 'The human system',
    subtitle: 'Technical work needs trust around it.',
    type: 'LEADERSHIP',
    body: 'Proposed, budgeted, and ran three consecutive editions of Garba Night for 4,500+ participants — aligning stakeholders, vendors, registration, and closing consistently at a profit.',
    tags: ['Ownership', 'Stakeholders', 'Operations', 'Budgeting'],
    metric: '4.5K+',
    label: 'participants led',
    className: ''
  },
]

const skills = [
  'Machine learning',
  'Generative AI',
  'Computer vision',
  'Python · Java · C++',
  'SQL · REST APIs',
  'TensorFlow · Vertex AI',
  'GCP · Azure',
  'React · Flask · Docker'
]

export default function Page() {
  const [active, setActive] = useState('work')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max ? (window.scrollY / max) * 100 : 0)
      const current = ['work', 'about', 'contact'].find((id) => {
        const el = document.getElementById(id)
        if (!el) return false
        const rect = el.getBoundingClientRect()
        return rect.top < window.innerHeight * 0.42 && rect.bottom > 120
      })
      if (current) setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <main>
      <div className="scroll-progress" style={{ width: `${progress}%` }} aria-hidden="true" />
      
      <nav className="topbar" aria-label="Primary navigation">
        <a className="wordmark" href="#top" aria-label="Manasvi Khare home">
          <span>MK</span>
          <span className="wordmark-name">MANASVI KHARE</span>
        </a>
        <div className="nav-links">
          <a className={active === 'work' ? 'active' : ''} href="#work">Work</a>
          <a className={active === 'about' ? 'active' : ''} href="#about">About</a>
          <a className={active === 'contact' ? 'active' : ''} href="#contact">Contact</a>
        </div>
        <a className="availability" href="mailto:manasvikhare9@gmail.com">
          <i /> Open to thoughtful opportunities
        </a>
      </nav>

      {/* HERO SECTION */}
      <section className="hero shell" id="top">
        <div className="hero-stamp">BHOPAL / INDIA · B.TECH CSE 2027</div>
        
        <div className="hero-content">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span>01</span> Product-minded ML builder</p>
            <h1>
              I make<br />
              <em>complex things</em><br />
              <strong>click.</strong>
            </h1>
            <p className="hero-line">
              Machine learning, generative AI,<br />
              and the human details between them.
            </p>
            <div className="hero-actions">
              <a className="button" href="#work">Enter the work <span>↓</span></a>
              <a className="text-link" href="mailto:manasvikhare9@gmail.com">Say hello <span>↗</span></a>
            </div>
          </div>

          <div className="hero-visual-wrapper">
            <div className="hero-visual">
              <img src="/manasvi.jpg" alt="Manasvi Khare — Product and ML" />
              <div className="visual-note">MANASVI KHARE<br /><span>AI · PRODUCT</span></div>
              <div className="visual-caption">Bhopal, India<br />CGPA 8.97 / 10</div>
            </div>
          </div>
        </div>

        <div className="hero-note">
          <span>Curious by default</span>
          <span className="line" />
          <span>Scroll to investigate</span>
        </div>
      </section>

      {/* STATEMENT */}
      <section className="statement shell">
        <p className="section-kicker">A WORKING BELIEF</p>
        <div className="statement-text">
          Good technology<br />
          <span>earns attention.</span>
        </div>
        <p className="statement-aside">
          Not through noise. Through a clear point of view, useful decisions, and enough craft that people want to look closer.
        </p>
      </section>

      {/* WORK / PROJECTS */}
      <section className="work shell" id="work">
        <div className="section-heading">
          <div>
            <p className="section-kicker">02 / SELECTED BUILDS</p>
            <h2>Look<br /><em>closer.</em></h2>
          </div>
          <p className="section-aside">
            Models are only part of the job. The rest is discovery, judgment, and getting something useful into the world.
          </p>
        </div>

        <div className="project-list">
          {projects.map((project) => (
            <article className={`project ${project.className}`} key={project.num}>
              <div className="project-meta">
                <span>{project.num}</span>
                <span>{project.type}</span>
              </div>
              <div className="project-grid">
                <div>
                  <p className="project-kicker">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-body">{project.body}</p>
                  <div className="tags">
                    {project.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  {project.link && (
                    <div style={{ marginTop: '1.5rem' }}>
                      <a className="text-link" href={project.link} target="_blank" rel="noreferrer">
                        View Project Repository <span>↗</span>
                      </a>
                    </div>
                  )}
                </div>

                <div className={`signal ${project.className ? 'has-bg' : 'has-bars'}`}>
                  {project.className && (
                    <img src="/portfolio-signal.png" alt="Crop analysis visual" className="signal-bg" />
                  )}
                  <div className="signal-content">
                    <div className="signal-top">
                      <span>OUTCOME</span>
                      <strong>{project.metric}</strong>
                    </div>
                    {!project.className && (
                      <div className="signal-bars">
                        <i /><i /><i /><i /><i /><i />
                      </div>
                    )}
                    <small className="signal-label">{project.label}</small>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section className="about shell" id="about">
        <div className="about-card">
          <div className="about-col-left">
            <div>
              <p className="section-kicker">03 / THE HUMAN BEHIND THE MODELS</p>
              <h2>Sharp thinking.<br /><em>Clear intent.</em></h2>
            </div>
            <div className="about-portrait-frame">
              <img src="/manasvi.jpg" alt="Manasvi Khare" className="about-portrait" />
              <div className="about-mark">↗</div>
            </div>
          </div>

          <div className="about-body">
            <p>
              I work at the intersection of product, data, and emerging technology. My sweet spot is the fuzzy bit before the answer — finding the thread, shaping the system, and making it click for real people.
            </p>
            <p>
              Alongside building, I&apos;ve led cross-functional campus teams, secured institutional sign-off, coordinated vendors, and owned budgets through three editions of a 4,500+ participant event.
            </p>
            <p className="credential-line">
              <strong>Certified in:</strong> Google Cloud Generative AI Fundamentals · Microsoft Azure Data Fundamentals (DP-900) · NPTEL Marketing Analytics, Top 5% nationally
            </p>
            <a className="text-link" href="mailto:manasvikhare9@gmail.com">
              Let&apos;s make something useful <span>↗</span>
            </a>
          </div>
        </div>

        <div className="skill-grid">
          {skills.map((skill, i) => (
            <div className="skill" key={skill}>
              <span>0{i + 1}</span>
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section className="contact shell" id="contact">
        <p className="section-kicker">04 / YOUR MOVE</p>
        <h2>Have a<br /><em>good problem?</em></h2>
        <p className="contact-copy">Let&apos;s give it a thoughtful answer.</p>
        <div>
          <a className="contact-email" href="mailto:manasvikhare9@gmail.com">
            <span>manasvikhare9@gmail.com</span>
            <span>↗</span>
          </a>
        </div>
        <p className="contact-details">
          Bhopal, Madhya Pradesh · +91 83491 41735 ·{' '}
          <a href="https://www.linkedin.com/in/manasvi-khare/" target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
          <a href="https://github.com/manasvikhare19" target="_blank" rel="noreferrer">GitHub</a> ·{' '}
          <a href="https://leetcode.com/u/manasviKhare/" target="_blank" rel="noreferrer">LeetCode</a>
        </p>
      </section>

      {/* FOOTER */}
      <footer className="footer shell">
        <span>© 2027 MANASVI KHARE</span>
        <span>BHOPAL, MADHYA PRADESH</span>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </main>
  )
}
