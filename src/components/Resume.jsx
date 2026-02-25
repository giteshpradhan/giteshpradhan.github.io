import './Resume.css';
import resumePdf from '../assets/Resume(Gitesh Pradhan).pdf';

const technicalSkills = ['Python', 'C++', 'Java', 'SQL', 'DBMS', 'Operating Systems'];
const softSkills = ['Teamwork', 'Communication', 'Time Management', 'Leadership'];

export default function Resume() {
  return (
    <section className="section" id="resume">
      <div className="container">
        <p className="section-label">My Background</p>
        <h2 className="section-heading">Resume</h2>

        <div className="resume-grid fade-in-up">
          {/* Education */}
          <div className="resume-edu">
            <h3>Education</h3>
            <p className="edu-school">Dr. D. Y. Patil Technical Campus</p>
            <p className="edu-year">Savitribai Phule Pune University · 2023 – 2027</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Bachelor of Engineering — Computer Science
            </p>
            <span className="edu-cgpa">CGPA: 8.08</span>
          </div>

          {/* About / Extra */}
          <div className="resume-about">
            <h3>About Me</h3>
            <p>
              Photography Head for the college Gaming Club — managed visual coverage of major campus
              events including hackathons, LAN events, quizzes, and debates. Built coordination,
              leadership, and time-management skills through collaboration with organizers.
            </p>
          </div>
        </div>

        <div className="resume-skills fade-in-up">
          <div className="skills-group">
            <h3>Technical Skills</h3>
            <div className="skills-list">
              {technicalSkills.map(s => (
                <span className="skill-badge" key={s}>{s}</span>
              ))}
            </div>
          </div>
          <div className="skills-group">
            <h3>Soft Skills</h3>
            <div className="skills-list">
              {softSkills.map(s => (
                <span className="skill-badge" key={s}>{s}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="resume-download fade-in-up">
          <a
            href={resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
