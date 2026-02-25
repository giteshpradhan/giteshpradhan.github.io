import './WhatIDo.css';

const services = [
  {
    title: 'Data Analyst',
    description:
      'Analyzing datasets to extract insights, identify trends, and support decision-making using Python and SQL.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
  },
  {
    title: 'Python Developer',
    description:
      'Building backend logic, scripts, and systems using Python, C++, and Java with clean OOP principles.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Web Developer',
    description:
      'Developing functional web apps focused on usability and solving real-world campus problems.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function WhatIDo() {
  return (
    <section className="section" id="services">
      <div className="container">
        <p className="section-label">My Services</p>
        <h2 className="section-heading">What I Do</h2>
        <div className="whatido-cards stagger">
          {services.map((s, i) => (
            <div className="whatido-card fade-in-up" key={i}>
              <div className="whatido-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
