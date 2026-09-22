import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useLanguage } from "../../i18n";

export default function Hero({ scrollTo }) {
  const { t } = useLanguage();
  const reduceMotion = useReducedMotion();

  /* =========================================
     ANIMATIONS
  ========================================= */

  const containerVariants = {
    hidden: {
      opacity: 0,
    },

    visible: {
      opacity: 1,

      transition: {
        staggerChildren: reduceMotion ? 0 : 0.15,
        delayChildren: reduceMotion ? 0 : 0.2,
      },
    },
  };

  const lineVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 60,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion ? 0 : 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const secondaryVariants = {
    hidden: {
      opacity: 0,
      y: reduceMotion ? 0 : 40,
    },

    visible: {
      opacity: 1,
      y: 0,

      transition: {
        duration: reduceMotion ? 0 : 0.8,
        delay: reduceMotion ? 0 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  /* =========================================
     SCROLL TO PROJECTS
  ========================================= */

 const handleExplore = () => {
  document.getElementById("work")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <section
      id="top"
      className="hero"
      aria-labelledby="hero-heading"
    >
      <div className="hero-container">

        {/* =====================================
            MAIN TITLE
        ===================================== */}

        <motion.h1
          id="hero-heading"
          className="hero-title-wrapper"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={lineVariants}
            className="hero-title-line"
          >
            <span>{t.heroMainLine1}</span>
          </motion.div>

          <motion.div
            variants={lineVariants}
            className="hero-title-line"
          >
            <span>{t.heroMainLine2}</span>
          </motion.div>

          <motion.div
            variants={lineVariants}
            className="hero-title-line hero-title-offset"
          >
            <span>{t.heroMainLine3}</span>
          </motion.div>
        </motion.h1>

        {/* =====================================
            SECONDARY INFORMATION
        ===================================== */}

        <motion.div
          className="hero-info-grid"
          variants={secondaryVariants}
          initial="hidden"
          animate="visible"
        >

          {/* NAME & TITLES */}

          <div className="info-block info-block-1">
            <p className="info-label">
              MARIA JÚLIA AQUATTI
            </p>

            <p className="info-text">
              {t.creativeDesigner}
            </p>

            <p className="info-text">
              {t.uiuxDesigner}
            </p>

            <p className="info-text">
              {t.artDirection}
            </p>
          </div>

          {/* LOCATION */}

          <div className="info-block info-block-2">
            <p className="info-label">
              <span className="acid-dot">●</span>{" "}
              {t.availableForWork}
            </p>

            <p className="info-text">
              {t.basedInHero}
            </p>

            <p className="info-text">
              {t.availableWorldwide}
            </p>
          </div>

          {/* DESCRIPTION */}

          <div className="info-block info-block-3">
            <p className="info-text">
              {t.heroDescription}
            </p>
          </div>

        </motion.div>
      </div>

      {/* =====================================
          EXPLORE PROJECTS BUTTON
      ===================================== */}

      <motion.button
        type="button"
        className="scroll-indicator-new"
        onClick={handleExplore}
        animate={
          reduceMotion
            ? { y: 0 }
            : { y: [0, 8, 0] }
        }
        transition={
          reduceMotion
            ? { duration: 0 }
            : {
                duration: 2.5,
                repeat: Infinity,
              }
        }
        aria-label={t.exploreWork}
      >
        <span>{t.exploreWork}</span>

        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M8 1V14M1 8L8 14L15 8"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.button>

    </section>
  );
}