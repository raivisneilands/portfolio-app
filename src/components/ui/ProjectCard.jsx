import Pill from "./Pill";
import Button from "./Button";

export default function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <p className="project-title">{project.name}</p>

      <p className="project-description">
        {project.description}
      </p>

      <div className="project-stack">
        {project.stack.map((tech) => (
          <Pill key={tech}>{tech}</Pill>
        ))}
      </div>

      <div className="project-buttons">
        {project.demo && (
          <a href={project.demo} target="_blank">
            <Button>Live ↗</Button>
          </a>
        )}

        {project.code && (
          <a href={project.code}>
            <Button>Code</Button>
          </a>
        )}
      </div>
    </div>
  );
}