import React from "react";
import "./Experience.css";
import { useLanguage } from "../i18n";

const experiences = {
  /* =========================================
     PORTUGUÊS
  ========================================= */

  pt: [
    {
      period: "2023 — 2026",
      company: "JJS CANADA",
      role: "WEB DESIGNER / DESIGNER CRIATIVA",
      description:
        "Desenvolvimento de websites, landing pages, campanhas digitais, materiais B2B e conteúdo visual para marcas dos setores automotivo e industrial.",
      tags: [
        "WEB DESIGN",
        "B2B",
        "WORDPRESS",
        "MOTION",
      ],
    },

    {
      period: "2023",
      company: "IBEST GLOBAL",
      role: "DESIGNER SÊNIOR",
      description:
        "Criação de materiais digitais, campanhas visuais e edição de vídeos para comunicação institucional e promocional.",
      tags: [
        "DESIGN",
        "SOCIAL MEDIA",
        "VIDEO",
      ],
    },

    {
      period: "2021 — 2023",
      company: "CELY",
      role: "UI/UX DESIGNER",
      description:
        "Criação de interfaces, fluxos, wireframes e protótipos para plataformas, websites e produtos digitais.",
      tags: [
        "UI/UX",
        "FIGMA",
        "PRODUCT DESIGN",
      ],
    },

    {
      period: "2021 — 2023",
      company: "ROCKIT MARKETING",
      role: "MOTION GRAPHIC DESIGNER",
      description:
        "Produção de vídeos institucionais, animações e motion graphics para clientes de diferentes segmentos.",
      tags: [
        "MOTION",
        "AFTER EFFECTS",
        "VIDEO",
      ],
    },

    {
      period: "2021 — 2022",
      company: "GRUPO ROTA",
      role: "DESIGNER SÊNIOR",
      description:
        "Desenvolvimento de campanhas e materiais visuais para o setor automotivo, com foco em comunicação digital e impressa.",
      tags: [
        "ART DIRECTION",
        "AUTOMOTIVE",
        "CAMPAIGNS",
      ],
    },

    {
      period: "2019 — 2020",
      company: "IDEAL GRÁFICA",
      role: "DIREÇÃO DE ARTE",
      description:
        "Criação e acompanhamento de materiais gráficos e digitais, além da coordenação do processo criativo e produtivo.",
      tags: [
        "ART DIRECTION",
        "PRINT",
        "BRANDING",
      ],
    },
  ],


  /* =========================================
     ENGLISH
  ========================================= */

  en: [
    {
      period: "2023 — 2026",
      company: "JJS CANADA",
      role: "WEB DESIGNER / CREATIVE DESIGNER",
      description:
        "Designed websites, landing pages, digital campaigns, B2B materials and visual content for brands across the automotive and industrial sectors.",
      tags: [
        "WEB DESIGN",
        "B2B",
        "WORDPRESS",
        "MOTION",
      ],
    },

    {
      period: "2023",
      company: "IBEST GLOBAL",
      role: "SENIOR DESIGNER",
      description:
        "Created digital assets, visual campaigns and video content for institutional and promotional communication.",
      tags: [
        "DESIGN",
        "SOCIAL MEDIA",
        "VIDEO",
      ],
    },

    {
      period: "2021 — 2023",
      company: "CELY",
      role: "UI/UX DESIGNER",
      description:
        "Designed interfaces, user flows, wireframes and prototypes for platforms, websites and digital products.",
      tags: [
        "UI/UX",
        "FIGMA",
        "PRODUCT DESIGN",
      ],
    },

    {
      period: "2021 — 2023",
      company: "ROCKIT MARKETING",
      role: "MOTION GRAPHIC DESIGNER",
      description:
        "Produced institutional and promotional videos, animations and motion graphics for clients across multiple industries.",
      tags: [
        "MOTION",
        "AFTER EFFECTS",
        "VIDEO",
      ],
    },

    {
      period: "2021 — 2022",
      company: "GRUPO ROTA",
      role: "SENIOR DESIGNER",
      description:
        "Developed campaigns and visual materials for the automotive industry across digital and print communication.",
      tags: [
        "ART DIRECTION",
        "AUTOMOTIVE",
        "CAMPAIGNS",
      ],
    },

    {
      period: "2019 — 2020",
      company: "IDEAL GRÁFICA",
      role: "ART DIRECTOR",
      description:
        "Created and supervised digital and print materials while coordinating creative and production processes.",
      tags: [
        "ART DIRECTION",
        "PRINT",
        "BRANDING",
      ],
    },
  ],


  /* =========================================
     FRANÇAIS
  ========================================= */

  fr: [
    {
      period: "2023 — 2026",
      company: "JJS CANADA",
      role: "WEB DESIGNER / DESIGNER CRÉATIVE",
      description:
        "Conception de sites web, landing pages, campagnes numériques, supports B2B et contenus visuels pour des marques des secteurs automobile et industriel.",
      tags: [
        "WEB DESIGN",
        "B2B",
        "WORDPRESS",
        "MOTION",
      ],
    },

    {
      period: "2023",
      company: "IBEST GLOBAL",
      role: "DESIGNER SENIOR",
      description:
        "Création de supports numériques, de campagnes visuelles et de contenus vidéo pour la communication institutionnelle et promotionnelle.",
      tags: [
        "DESIGN",
        "SOCIAL MEDIA",
        "VIDÉO",
      ],
    },

    {
      period: "2021 — 2023",
      company: "CELY",
      role: "UI/UX DESIGNER",
      description:
        "Conception d'interfaces, de parcours utilisateurs, de wireframes et de prototypes pour des plateformes, sites web et produits numériques.",
      tags: [
        "UI/UX",
        "FIGMA",
        "PRODUCT DESIGN",
      ],
    },

    {
      period: "2021 — 2023",
      company: "ROCKIT MARKETING",
      role: "MOTION GRAPHIC DESIGNER",
      description:
        "Production de vidéos institutionnelles et promotionnelles, d'animations et de motion design pour des clients de différents secteurs.",
      tags: [
        "MOTION",
        "AFTER EFFECTS",
        "VIDÉO",
      ],
    },

    {
      period: "2021 — 2022",
      company: "GRUPO ROTA",
      role: "DESIGNER SENIOR",
      description:
        "Développement de campagnes et de supports visuels pour le secteur automobile, destinés à la communication numérique et imprimée.",
      tags: [
        "DIRECTION ARTISTIQUE",
        "AUTOMOBILE",
        "CAMPAGNES",
      ],
    },

    {
      period: "2019 — 2020",
      company: "IDEAL GRÁFICA",
      role: "DIRECTION ARTISTIQUE",
      description:
        "Création et suivi de supports graphiques et numériques, ainsi que coordination des processus créatifs et de production.",
      tags: [
        "DIRECTION ARTISTIQUE",
        "PRINT",
        "BRANDING",
      ],
    },
  ],
};


/* =========================================
   EXPERIENCE COMPONENT
========================================= */

export default function Experience() {
  const { t, language } = useLanguage();

  const currentExperiences =
    experiences[language] ||
    experiences.en;

  return (
    <section
      className="mj-experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="mj-experience__inner">

        {/* EYEBROW */}

        <p className="mj-experience__eyebrow">
          {t.experienceEyebrow}
        </p>


        {/* HEADER */}

        <div className="mj-experience__header">

          <h2 id="experience-heading">
            {t.experienceTitle}
          </h2>

          <p className="mj-experience__range">
            {t.experienceRange}
          </p>

        </div>


        {/* EXPERIENCE LIST */}

        <div className="mj-experience__list">

          {currentExperiences.map(
            (item, index) => (
              <article
                className="mj-experience__item"
                key={`${item.company}-${item.period}`}
              >

                {/* PERIOD */}

                <p className="mj-experience__period">
                  {item.period}
                </p>


                {/* COMPANY / CONTENT */}

                <div className="mj-experience__company">

                  <h3>
                    {item.company}
                  </h3>

                  <p className="mj-experience__role">
                    {item.role}
                  </p>


                  {/* DESCRIPTION */}

                  {item.description && (
                    <p className="mj-experience__description">
                      {item.description}
                    </p>
                  )}


                  {/* TAGS */}

                  {item.tags?.length > 0 && (
                    <div className="mj-experience__tags">

                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="mj-experience__tag"
                        >
                          {tag}
                        </span>
                      ))}

                    </div>
                  )}

                </div>


                {/* NUMBER */}

                <span
                  className="mj-experience__number"
                  aria-hidden="true"
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </span>

              </article>
            )
          )}

        </div>


        {/* MORE EXPERIENCE */}

        <div className="mj-experience__more">

          <a
            href="#contact"
            className="mj-experience__more-link"
          >
            {t.fullExperience}

            <span aria-hidden="true">
              ↗
            </span>
          </a>

        </div>

      </div>
    </section>
  );
}