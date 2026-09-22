import React from "react";
import { useLanguage } from "../i18n";

import "./Lab.css";
const arraiasImage =
  `${import.meta.env.BASE_URL}images/arraias.png`;

const experiments = {
  pt: [
    {
      id: "001",
      tag: "DESIGN × CODE",
      title: "Arraias",
      description:
        "Experiência web interativa que transforma uma narrativa pessoal em interface, explorando storytelling, movimento e interação.",
      stack: "React · CSS · JavaScript",
      href: "https://mariajuliaaquatti1997.github.io/arraias/",
      image: arraiasImage,
      imageAlt: "Interface do projeto interativo Arraias",
    },
  ],

  en: [
    {
      id: "001",
      tag: "DESIGN × CODE",
      title: "Arraias",
      description:
        "An interactive web experience that turns a personal narrative into an interface, exploring storytelling, motion and interaction.",
      stack: "React · CSS · JavaScript",
      href: "https://mariajuliaaquatti1997.github.io/arraias/",
      image: arraiasImage,
      imageAlt: "Interface of the Arraias interactive project",
    },
  ],

  fr: [
    {
      id: "001",
      tag: "DESIGN × CODE",
      title: "Arraias",
      description:
        "Une expérience web interactive qui transforme un récit personnel en interface, en explorant la narration, le mouvement et l’interaction.",
      stack: "React · CSS · JavaScript",
      href: "https://mariajuliaaquatti1997.github.io/arraias/",
      image: arraiasImage,
      imageAlt: "Interface du projet interactif Arraias",
    },
  ],
};

export default function Lab() {
  const { t, language } = useLanguage();

  const currentExperiments =
    experiments[language] || experiments.pt;

  return (
    <section
      id="lab"
      className="experiments"
      aria-labelledby="lab-heading"
    >
      <div className="experiments__inner">

        {/* =========================================
            INTRO
        ========================================= */}

        <div className="experiments__intro">
          <p className="eyebrow">
            {t.lab}
          </p>

          <h2 id="lab-heading">
            {t.labTitle}
          </h2>
        </div>

        {/* =========================================
            EXPERIMENTS
        ========================================= */}

        <div className="experiments__list">
          {currentExperiments.map((experiment) => (
            <a
              key={experiment.id}
              href={experiment.href}
              target="_blank"
              rel="noreferrer"
              className="experiment-card"
              aria-label={`${experiment.title} — ${experiment.tag}`}
            >
              {/* IMAGE */}

              <div className="experiment-card__visual">
                <img
                  src={experiment.image}
                  alt={experiment.imageAlt}
                  loading="lazy"
                />

                <div
                  className="experiment-card__overlay"
                  aria-hidden="true"
                />
              </div>

              {/* CONTENT */}

              <div className="experiment-card__content">

                <div className="experiment-card__top">
                  <span className="experiment-card__number">
                    {experiment.id}
                  </span>

                  <p className="experiment-card__tag">
                    {experiment.tag}
                  </p>
                </div>

                <div className="experiment-card__main">
                  <h3>
                    {experiment.title}
                  </h3>

                  <p className="experiment-card__description">
                    {experiment.description}
                  </p>
                </div>

                <div className="experiment-card__footer">
                  <span>
                    {experiment.stack}
                  </span>

                  <span
                    className="experiment-card__arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </div>

              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}