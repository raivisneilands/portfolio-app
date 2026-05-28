import { NAV_LINKS } from "../../data/portfolioData";

export default function Navbar({ active, scrollTo }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <span className="logo">RN</span>

        <div className="nav-links">
          {NAV_LINKS.map((link) => (
            <span
              key={link}
              className={`nav-link ${
                active === link ? "active" : ""
              }`}
              onClick={() => scrollTo(link)}
            >
              {link}
            </span>
          ))}
        </div>
      </div>
    </nav>
  );
}