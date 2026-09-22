import React from "react";
import { useLanguage } from "../../i18n";
import "./About.css";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="mj-about"
      aria-labelledby="about-heading"
    >
      <div className="mj-about__inner">
        <p className="mj-about__eyebrow">
          01 / {t.about}
        </p>

        <div className="mj-about__hero">
          <div className="mj-about__heading">
            <h2 id="about-heading">
              {t.aboutEditorialTitle}
            </h2>
          </div>

          <div className="mj-about__photo">
            <img
  src={`${import.meta.env.BASE_URL}images/about-photo.jpg`}
  alt="Retrato de Maria Júlia Aquatti"
  loading="lazy"
/>
          </div>
        </div>

        <div className="mj-about__bottom">
          <div className="mj-about__copy">
            {t.aboutText.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <div className="mj-about__details">
            <div>
              <span>Expertise</span>
              <p>
                UI/UX Design<br />
                Art Direction<br />
                Branding<br />
                Web Design
              </p>
            </div>

            <div>
              <span>Creative fields</span>
              <p>
                Motion Design<br />
                Front-end<br />
                Digital Experiences
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}