import SectionTitle from "../ui/SectionTitle";

export default function About() {
  return (
    <section id="about" className="section">
      <SectionTitle title="About" />
        <p className="about-text">
            Hi, I'm <strong>Raivis</strong> — a full-stack developer. I focus on building useful, performant applications from idea to execution.
        </p>

        <p className="about-text">
            I work across frontend and backend, building complete systems that connect clean interfaces with solid backend logic. My focus is on creating software that is practical, scalable, and well thought out.
        </p>

        <p className="about-text">
            I’m a fast learner and I enjoy working with unfamiliar tools and technologies until I am familiar with them. I like the challenge of taking an idea and figuring out how to build it into something real.
        </p>
    </section>
  );
}