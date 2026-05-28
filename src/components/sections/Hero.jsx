import Button from "../ui/Button";

export default function Hero({ scrollTo }) {
  return (
    <section className="hero">
      <h1>Raivis Neilands</h1>

      <p>
        Full-stack developer building thoughtful digital experiences across web and mobile platforms.
      </p>

      <div className="hero-buttons">
        <Button primary onClick={() => scrollTo("Projects")}>
          View projects →
        </Button>

        <Button onClick={() => scrollTo("Contact")}>
          Get in touch
        </Button>
      </div>
    </section>
  );
}