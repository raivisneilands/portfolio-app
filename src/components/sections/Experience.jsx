import { EXPERIENCE } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <SectionTitle title="Experience" />

      <div className="experience-list">
        {EXPERIENCE.map((ex, i) => (
          <div key={i} className="timeline-item">
            <div className="timeline-dot"></div>

            <div>
              <div className="experience-header">
                <div>
                  <p className="timeline-title">{ex.role}</p>
                  <p className="timeline-subtitle">{ex.company}</p>
                </div>

                <span className="timeline-year">{ex.period}</span>
              </div>

              <ul className="experience-bullets">
                {ex.bullets.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}