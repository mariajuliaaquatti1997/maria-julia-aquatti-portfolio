
import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";


/* =========================================
   IMAGES — APAS
========================================= */

const imageBase =
  `${import.meta.env.BASE_URL}images/stand-APAS/`;

const apasCover = `${imageBase}apas_004.jpeg`;
const apasPhoto = `${imageBase}apas_001.jpeg`;
const apasDetail01 = `${imageBase}apas_002.jpeg`;
const apasDetail02 = `${imageBase}apas_003.jpeg`;
/* =========================================
   CONTENT
========================================= */

const content = {

  /* =======================================
     PORTUGUÊS
  ======================================= */

  pt: {
    category: "DIREÇÃO DE ARTE / DESIGN DE ESTANDE",

    role: "Direção de Arte · Design Gráfico",

    platform: "Estande e comunicação visual",

    intro:
      "Criação do conceito visual de um estande para a feira APAS, em parceria com a Pro Market. O projeto explora a relação entre identidade gráfica, comunicação e espaço físico.",

    sections: [
      {
        id: "overview",

        label: "O PROJETO",

        title:
          "Uma identidade construída para o espaço.",

        text:
          "Desenvolvi o conceito visual do estande para a feira APAS, em parceria com a Pro Market. O trabalho envolveu o design do estande, a criação de painéis e o desenvolvimento de peças de comunicação visual, considerando a aplicação da linguagem gráfica no ambiente expositivo.",

        image: apasCover,

        imageAlt:
          "Projeto visual do estande desenvolvido para a feira APAS em parceria com a Pro Market.",
      },

      {
        id: "visual-concept",

        label: "DIREÇÃO DE ARTE",

        title:
          "Do conceito à composição visual.",

        text:
          "A proposta foi desenvolvida a partir da relação entre os elementos gráficos e sua aplicação no espaço. O projeto articula composição, identidade e organização visual para construir uma comunicação integrada entre as diferentes áreas do estande.",
      },

      {
        id: "applications",

        label: "DESDOBRAMENTOS",

        title:
          "Uma linguagem visual em diferentes superfícies.",

        text:
          "O conceito foi desdobrado no design do estande, nos painéis e nos materiais de comunicação visual. Cada aplicação integra a proposta gráfica ao espaço expositivo, mantendo uma linguagem consistente entre os diferentes elementos do projeto.",
      },
    ],

    nextProjectCategory: "DIREÇÃO DE ARTE",
  },

  /* =======================================
     ENGLISH
  ======================================= */

  en: {
    category: "ART DIRECTION / EXHIBITION DESIGN",

    role: "Art Direction · Graphic Design",

    platform: "Exhibition stand and visual communication",

    intro:
      "Development of the visual concept for an exhibition stand at APAS, in collaboration with Pro Market. The project explores the relationship between graphic identity, communication and physical space.",

    sections: [
      {
        id: "overview",

        label: "THE PROJECT",

        title:
          "An identity designed for space.",

        text:
          "I developed the visual concept for an exhibition stand at APAS in collaboration with Pro Market. The work included stand design, graphic panels and visual communication assets, considering how the graphic language would translate into the exhibition environment.",

        image: apasCover,

        imageAlt:
          "Visual design of the exhibition stand created for APAS in collaboration with Pro Market.",
      },

      {
        id: "visual-concept",

        label: "ART DIRECTION",

        title:
          "From concept to visual composition.",

        text:
          "The proposal was developed around the relationship between graphic elements and their application within the physical space. The project brings together composition, identity and visual organization to create an integrated communication system across the stand.",
      },

      {
        id: "applications",

        label: "APPLICATIONS",

        title:
          "One visual language across different surfaces.",

        text:
          "The concept was extended to the stand design, graphic panels and visual communication materials. Each application connects the graphic proposal to the exhibition space, maintaining a consistent visual language across the different elements of the project.",
      },
    ],

    nextProjectCategory: "ART DIRECTION",
  },

  /* =======================================
     FRANÇAIS
  ======================================= */

  fr: {
    category:
      "DIRECTION ARTISTIQUE / DESIGN DE STAND",

    role:
      "Direction artistique · Design graphique",

    platform:
      "Stand d'exposition et communication visuelle",

    intro:
      "Création du concept visuel d'un stand pour le salon APAS, en collaboration avec Pro Market. Le projet explore les relations entre identité graphique, communication et espace physique.",

    sections: [
      {
        id: "overview",

        label: "LE PROJET",

        title:
          "Une identité conçue pour l'espace.",

        text:
          "J'ai développé le concept visuel d'un stand pour le salon APAS, en collaboration avec Pro Market. Le travail comprenait le design du stand, la création de panneaux graphiques et de supports de communication visuelle, en tenant compte de l'intégration du langage graphique dans l'espace d'exposition.",

        image: apasCover,

        imageAlt:
          "Projet visuel du stand créé pour le salon APAS en collaboration avec Pro Market.",
      },

      {
        id: "visual-concept",

        label: "DIRECTION ARTISTIQUE",

        title:
          "Du concept à la composition visuelle.",

        text:
          "La proposition a été développée autour des relations entre les éléments graphiques et leur application dans l'espace physique. Le projet associe composition, identité et organisation visuelle afin de construire une communication intégrée entre les différentes zones du stand.",
      },

      {
        id: "applications",

        label: "DÉCLINAISONS",

        title:
          "Un langage visuel sur différentes surfaces.",

        text:
          "Le concept a été décliné dans le design du stand, les panneaux graphiques et les supports de communication visuelle. Chaque application relie la proposition graphique à l'espace d'exposition, tout en maintenant une cohérence entre les différents éléments du projet.",
      },
    ],

    nextProjectCategory: "DIRECTION ARTISTIQUE",
  },
};

/* =========================================
   COMPONENT
========================================= */

export default function ApasCase() {
  const { language } = useLanguage();

  const t = content[language] || content.pt;

  return (
    <CaseStudy
      title="Stand APAS — Pro Market"
      category={t.category}
      year="2026"
      role={t.role}
      platform={t.platform}
      tools="Design gráfico"
      intro={t.intro}
      heroImage={apasCover}
      sections={t.sections}
      theme="apas"
     nextProjectTitle="Rota Kawasaki"
nextProjectCategory={t.nextProjectCategory}
nextProjectLink="/rota-kawasaki"
    />
  );
}