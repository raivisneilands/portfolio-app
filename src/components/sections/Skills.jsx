import { SKILLS } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <SectionTitle title="Skills" />

      <p className="section-note">
        Most of these skills are self-taught through personal projects, experimentation, and continuous learning.
      </p>

      <div className="skills-grid">
        {Object.entries(SKILLS).map(([category, items]) => (
          <div key={category}>
            <p className="skills-category">{category}</p>

            <div className="skills-list">
              {items.map((skill) => (
                <span key={skill} className="skill-item">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}