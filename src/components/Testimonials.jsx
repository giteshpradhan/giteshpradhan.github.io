import './Testimonials.css';

const testimonials = [
  {
    name: 'Prof. Mehta',
    role: 'Faculty Advisor',
    stars: 5,
    quote: 'Gitesh consistently demonstrates analytical thinking and strong programming skills. His project work in data analysis has been impressive for a student at his level.',
    initials: 'PM',
  },
  {
    name: 'Aarav Sharma',
    role: 'Team Member, Gaming Club',
    stars: 5,
    quote: 'Working with Gitesh on hackathon coverage was a great experience. He is organized, creative, and always delivers quality work on time.',
    initials: 'AS',
  },
  {
    name: 'Sneha Kulkarni',
    role: 'Peer, CS Department',
    stars: 4,
    quote: 'Gitesh helped our team debug a complex Python project. His problem-solving approach and willingness to share knowledge make him a valuable collaborator.',
    initials: 'SK',
  },
];

function Stars({ count }) {
  const arr = [1, 2, 3, 4, 5];
  return (
    <div className="testimonial-stars">
      {arr.map(function(i) {
        return <span key={i} className={i <= count ? '' : 'star-empty'}>{'\u2605'}</span>;
      })}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container">
        <p className="section-label">Testimonials</p>
        <h2 className="section-heading">
          What People <span style={{ color: 'var(--accent)' }}>Say</span>
        </h2>

        <div className="testimonials-grid stagger">
          {testimonials.map(function(t, i) {
            return (
              <div className="testimonial-card fade-in-up" key={i}>
                <Stars count={t.stars} />
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initials}</div>
                  <div className="testimonial-info">
                    <h4>{t.name}</h4>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="testimonial-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </div>
    </section>
  );
}
