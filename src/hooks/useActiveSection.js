import { useEffect, useState } from "react";

export default function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      let current = ids[0];

      for (const id of ids) {
        const el = document.getElementById(id.toLowerCase());
        if (!el) continue;

        const top = el.offsetTop;
        const bottom = top + el.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
          current = id;
          break;
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    handleScroll(); // set initial

    return () => window.removeEventListener("scroll", handleScroll);
  }, [ids]);

  return active;
}