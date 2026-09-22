import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useLanguage } from "../i18n";
import "./CaseStudy.css";

const MotionLink = motion(Link);

const ease = [0.22, 1, 0.36, 1];

const caseLabels = {
  pt: {
    back: "VOLTAR AOS PROJETOS",
    year: "ANO",
    role: "FUNÇÃO",
    platform: "PLATAFORMA",
    tools: "FERRAMENTAS",
    nextProject: "PRÓXIMO PROJETO",
    heroAlt: "Imagem de apresentação do projeto",
  },

  en: {
    back: "BACK TO PROJECTS",
    year: "YEAR",
    role: "ROLE",
    platform: "PLATFORM",
    tools: "TOOLS",
    nextProject: "NEXT PROJECT",
    heroAlt: "Presentation image of the project",
  },

  fr: {
    back: "RETOUR AUX PROJETS",
    year: "ANNÉE",
    role: "RÔLE",
    platform: "PLATEFORME",
    tools: "OUTILS",
    nextProject: "PROJET SUIVANT",
    heroAlt: "Image de présentation du projet",
  },
};

export default function CaseStudy({
  title,
  category,
  year,
  intro,
  role,
  platform,
  tools,
  heroImage,
  sections = [],
  theme = "default",

  nextProjectTitle,
  nextProjectCategory,
  nextProjectLink,
}) {
  const { language } = useLanguage();

  const labels =
    caseLabels[language] ||
    caseLabels.pt;

  return (
    <section
      id="case-study"
      className={`feature-case feature-case--${theme}`}
      aria-labelledby="case-study-heading"
    >
      {/* =========================================
          CASE HERO
      ========================================= */}

      <div className="case-hero">

        {/* LEFT SIDE */}

        <div className="case-hero__copy">

          {/* BACK */}

          <MotionLink
            to="/#work"
            className="case-hero__back"
            initial={{
              opacity: 0,
              y: 16,
            }}
            animate={{
              opacity: 0.6,
              y: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.02,
              ease,
            }}
            whileHover={{
              opacity: 1,
              x: -4,
            }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              width: "fit-content",
              position: "relative",
              zIndex: 999,
              color: "#171714",
              background: "transparent",
              padding: "0",
              textDecoration: "none",
              fontSize: "10px",
              fontWeight: 600,
              lineHeight: 1,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            <span aria-hidden="true">←</span>
            <span>{labels.back}</span>
          </MotionLink>

          {/* MAIN CONTENT */}

          <div className="case-hero__main">

            {category && (
              <motion.p
                className="case-category"
                initial={{
                  opacity: 0,
                  y: 18,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                  ease,
                }}
              >
                {category}
              </motion.p>
            )}

            {title && (
              <motion.h2
                id="case-study-heading"
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 1,
                  delay: 0.2,
                  ease,
                }}
              >
                {title}
              </motion.h2>
            )}

            {intro && (
              <motion.p
                className="case-intro"
                initial={{
                  opacity: 0,
                  y: 36,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  duration: 0.9,
                  delay: 0.38,
                  ease,
                }}
              >
                {intro}
              </motion.p>
            )}

          </div>

          {/* META */}

          <motion.div
            className="case-hero__meta"
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.45,
              ease,
            }}
          >
            {year && (
              <div className="case-hero__meta-row">
                <span>{labels.year}</span>
                <span>{year}</span>
              </div>
            )}

            {role && (
              <div className="case-hero__meta-row">
                <span>{labels.role}</span>
                <span>{role}</span>
              </div>
            )}

            {platform && (
              <div className="case-hero__meta-row">
                <span>{labels.platform}</span>
                <span>{platform}</span>
              </div>
            )}

            {tools && (
              <div className="case-hero__meta-row">
                <span>{labels.tools}</span>
                <span>{tools}</span>
              </div>
            )}
          </motion.div>

        </div>

        {/* RIGHT SIDE */}

        {heroImage && (
          <motion.div
            className="case-hero__visual"
            initial={{
              opacity: 0,
              x: 80,
              scale: 1.04,
            }}
            animate={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.12,
              ease,
            }}
          >
            <img
              src={heroImage}
             alt={
  title
    ? `${labels.heroAlt}: ${title}`
    : labels.heroAlt
}
            />
          </motion.div>
        )}

      </div>

      {/* =========================================
          CASE CONTENT
      ========================================= */}

      <div className="case-copy">

        <div className="case-study__sections">

          {sections.map((section, index) => (
            <article
              key={section.id || index}
              className="case-section"
            >
              <span className="case-section__number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="case-section__content">

                {section.label && (
                  <p className="case-section__label">
                    {section.label}
                  </p>
                )}

                {section.title && (
                  <h3>
                    {section.title}
                  </h3>
                )}

                {section.text && (
                  <p className="case-section__text">
                    {section.text}
                  </p>
                )}

                {section.image && (
                  <div className="case-section__image">
                    <img
                      src={section.image}
                      alt={section.imageAlt || ""}
                      loading="lazy"
                    />
                  </div>
                )}

                {section.images?.length > 0 && (
                  <div className="case-section__gallery">

                    {section.images.map(
                      (image, imageIndex) => (
                        <figure
                          key={image.id || imageIndex}
                          className="case-section__gallery-item"
                        >
                          <img
                            src={image.src}
                            alt={image.alt || ""}
                            loading="lazy"
                          />

                          {image.caption && (
                            <figcaption>
                              {image.caption}
                            </figcaption>
                          )}
                        </figure>
                      )
                    )}

                  </div>
                )}

                {section.items?.length > 0 && (
                  <div className="case-section__items">

                    {section.items.map(
                      (item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="case-section__item"
                        >
                          <span>
                            {String(itemIndex + 1).padStart(2, "0")}
                          </span>

                          <p>{item}</p>
                        </div>
                      )
                    )}

                  </div>
                )}

              </div>
            </article>
          ))}

        </div>

      </div>

      {/* =========================================
          NEXT PROJECT
      ========================================= */}

      {nextProjectTitle && nextProjectLink && (
        <div className="case-next">

          <MotionLink
            to={nextProjectLink}
            className="case-next__link"
            whileHover={{
              y: -4,
            }}
            transition={{
              duration: 0.3,
              ease,
            }}
          >
            <span className="case-next__label">
              {labels.nextProject}
            </span>

            <div className="case-next__content">

              <div>
                <h3>{nextProjectTitle}</h3>

                {nextProjectCategory && (
                  <p>{nextProjectCategory}</p>
                )}
              </div>

              <span
                className="case-next__arrow"
                aria-hidden="true"
              >
                ↗
              </span>

            </div>

          </MotionLink>

        </div>
      )}

    </section>
  );
}