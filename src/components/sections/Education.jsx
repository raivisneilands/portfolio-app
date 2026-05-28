import { EDUCATION } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

export default function Education() {
  return (
    <section id="education" className="section">
      <SectionTitle title="Education" />

      {EDUCATION.map((e, i) => (
        <div key={i} className="timeline-item">
          <div className="timeline-dot"></div>

          <div>
            <p className="timeline-title">{e.degree}</p>

            <p className="timeline-subtitle">{e.school}</p>

            <p className="timeline-year">{e.year}</p>

            {e.note && (
              <p className="timeline-note">{e.note}</p>
            )}
          </div>
        </div>
      ))}
    </section>
  );
}