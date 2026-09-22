import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

import { useLanguage } from "../../i18n";
import "./Work.css";
import freeFinderCover from "../../assets/app-free-finder.jpg";
import pastelariCover from "../../assets/branding-pastelari.jpg";
import celyCover from "../../assets/website-cely.jpg";
import jjsCover from "../../assets/website-jjs.jpg";
const rotaCover = `${import.meta.env.BASE_URL}images/rota-kawasaki/rota-kawasaki-cover.jpg`;
const apasCover = `${import.meta.env.BASE_URL}images/stand-APAS-cover.jpg`;
/* =========================
   MOTION LINK
========================= */

const MotionLink = motion.create(Link);

/* =========================
   PROJECTS
========================= */

const work = [
  {
    id: 1,
    title: "Cely",
    category: "uiux",
    categoryLabel: "UI/UX",
    year: "2023",
    image: celyCover,
    link: "/cely",
    size: "large",
  },

  {
    id: 2,
    title: "Pastelari",
    category: "branding",
    categoryLabel: "Branding",
    year: "2024",
    image: pastelariCover,
    link: "/pastelari",
    size: "small",
  },

  {
    id: 3,
    title: "JJS Canada",
    category: "web",
    categoryLabel: "Web",
    year: "2023 — 2026",
    image: jjsCover,
    link: "/jjs-canada",
    size: "small",
  },

{
  id: 4,
  title: "Free Finder",
  category: "uiux",
  categoryLabel: "UI/UX",
  year: "2021",
  image: freeFinderCover,
  link: "/freefinder",
  size: "large",
},
{
  id: 5,
  title: "Rota Kawasaki",
  category: "art",
  categoryLabel: "Art Direction",
  year: "2022 — 2024",
  image: rotaCover,
  link: "/rota-kawasaki",
  size: "large",
},
{
  id: 6,
  title: "Stand APAS — Pro Market",
  category: "art",
  categoryLabel: "Art Direction",
  year: "2026",
  image: apasCover,
  link: "/stand-apas",
  size: "small",
},
];
/* =========================
   CARD ANIMATION
========================= */

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 70,
    scale: 0.97,
  },

  visible: (index) => ({
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.85,
      delay: index * 0.09,
      ease: [0.22, 1, 0.36, 1],
    },
  }),

  exit: {
    opacity: 0,
    y: 25,
    scale: 0.96,

    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   IMAGE ANIMATION
========================= */

const imageVariants = {
  rest: {
    scale: 1,
  },

  hover: {
    scale: 1.055,

    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   OVERLAY ANIMATION
========================= */

const overlayVariants = {
  rest: {
    opacity: 0,
  },

  hover: {
    opacity: 1,

    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/* =========================
   VIEW BUTTON ANIMATION
========================= */

const viewVariants = {
  rest: {
    opacity: 0,
    scale: 0.65,
    rotate: -8,
  },

  hover: {
    opacity: 1,
    scale: 1,
    rotate: 0,

    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   TITLE ANIMATION
========================= */

const titleVariants = {
  rest: {
    x: 0,
  },

  hover: {
    x: 8,

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   ARROW ANIMATION
========================= */

const arrowVariants = {
  rest: {
    x: 0,
    y: 0,
    rotate: 0,
  },

  hover: {
    x: 6,
    y: -6,
    rotate: 6,

    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/* =========================
   COMPONENT
========================= */

export default function Projects() {
  const { t } = useLanguage();

  const [activeFilter, setActiveFilter] = useState("all");

  /* =========================
     FILTERS
  ========================= */

  const filters = [
    {
      id: "all",
      label: t.filterAll,
    },
    {
      id: "uiux",
      label: t.filterUiux,
    },
    {
      id: "art",
      label: t.filterArtDirection,
    },
    {
      id: "branding",
      label: t.filterBranding,
    },
    {
      id: "web",
      label: t.filterWeb,
    },
  ];

  /* =========================
     FILTERED PROJECTS
  ========================= */

  const filteredProjects =
    activeFilter === "all"
      ? work
      : work.filter(
          (project) => project.category === activeFilter
        );

  /* =========================
     CATEGORY TRANSLATION
  ========================= */

  const getCategoryLabel = (category) => {
    switch (category) {
      case "uiux":
        return t.filterUiux;

      case "art":
        return t.filterArtDirection;

      case "branding":
        return t.filterBranding;

      case "web":
        return t.filterWeb;

      default:
        return "";
    }
  };

  return (
   <section
  className="projects"
  id="work"
  aria-labelledby="work-heading"
>
      <div className="projects__inner">

        {/* =========================
            PROJECT INDEX
        ========================= */}

        <motion.div
          className="projects__top"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div>
            <span className="projects__accent" />

            <p
              className="projects__index"
              id="work-heading"
            >
              {t.projectIndex}
            </p>
          </div>

          <p className="projects__count">
            {String(filteredProjects.length).padStart(
              2,
              "0"
            )}{" "}
            {activeFilter === "all"
              ? t.projectCount
                  .replace(/[0-9]/g, "")
                  .trim()
              : t.projects}
          </p>
        </motion.div>

        {/* =========================
            FILTERS
        ========================= */}

        <motion.div
          className="projects__filters"
          role="group"
          aria-label={t.projectFiltersLabel}
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {filters.map((filter) => {
            const isActive =
              activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                className={
                  isActive
                    ? "projects__filter projects__filter--active"
                    : "projects__filter"
                }
                onClick={() =>
                  setActiveFilter(filter.id)
                }
                aria-pressed={isActive}
              >
                <span>{filter.label}</span>

                {isActive && (
                  <motion.span
                    className="projects__filter-line"
                    layoutId="activeProjectFilter"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 32,
                    }}
                  />
                )}
              </button>
            );
          })}
        </motion.div>

        {/* =========================
            SCREEN READER STATUS
        ========================= */}

        <p
          className="sr-only"
          role="status"
          aria-live="polite"
        >
          {filteredProjects.length}{" "}
          {t.projectResultsLabel}
        </p>

        {/* =========================
            PROJECT GRID
        ========================= */}

        <motion.div
          layout
          className="projects__grid"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(
              (project, index) => (
                <motion.article
                  layout
                  custom={index}
                  key={project.id}
                  className={`projects__card projects__card--${project.size}`}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  exit="exit"
                  viewport={{
                    once: true,
                    amount: 0.12,
                  }}
                  transition={{
                    layout: {
                      duration: 0.6,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  }}
                >

                  {/* =========================
                      PROJECT LINK
                  ========================= */}

                  <MotionLink
                    to={project.link}
                    className="projects__link"
                    initial="rest"
                    animate="rest"
                    whileHover="hover"
                    whileFocus="hover"
                    aria-label={`${project.title} — ${getCategoryLabel(
                      project.category
                    )}`}
                  >

                    {/* =========================
                        IMAGE
                    ========================= */}

                    <div className="projects__image">

                      <motion.img
                        src={project.image}
                        alt=""
                        variants={imageVariants}
                        loading="lazy"
                      />

                      {/* OVERLAY */}

                      <motion.div
                        className="projects__overlay"
                        variants={overlayVariants}
                        aria-hidden="true"
                      />

                      {/* VIEW BUTTON */}

                      <motion.div
                        className="projects__view"
                        variants={viewVariants}
                        aria-hidden="true"
                      >
                        <span>
                          {t.viewProject || "VIEW"}
                        </span>

                        <span className="projects__view-arrow">
                          ↗
                        </span>
                      </motion.div>

                      {/* IMAGE META */}

                      <div className="projects__image-meta">
                        <span>
                          {getCategoryLabel(
                            project.category
                          )}
                        </span>

                        <span>
                          {project.year}
                        </span>
                      </div>
                    </div>

                    {/* =========================
                        CARD FOOTER
                    ========================= */}

                    <div className="projects__card-footer">

                      <motion.h3
                        variants={titleVariants}
                      >
                        {project.title}
                      </motion.h3>

                      <motion.span
                        className="projects__arrow"
                        variants={arrowVariants}
                        aria-hidden="true"
                      >
                        ↗
                      </motion.span>

                    </div>

                  </MotionLink>

                </motion.article>
              )
            )}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}