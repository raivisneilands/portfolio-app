import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import SectionTitle from "../ui/SectionTitle";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <section id="contact" className="section">
      <SectionTitle title="Contact" />

      <p className="contact-text">
        I’m always open to discussing new opportunities, interesting projects, or connecting with other developers.
      </p>

      <a
        href="mailto:raivisneilands7@gmail.com?subject=Portfolio%20Contact"
        className="btn btn-primary"
        rel="noopener noreferrer"
        target="_blank"
      >
        Send an email →
      </a>
    </section>
  );
}