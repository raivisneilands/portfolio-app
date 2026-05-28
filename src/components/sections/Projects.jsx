import { PROJECTS } from "../../data/portfolioData";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <SectionTitle title="Projects" />

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.name}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}