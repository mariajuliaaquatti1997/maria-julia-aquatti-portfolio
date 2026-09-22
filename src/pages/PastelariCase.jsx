import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";

import pastelariCover from "../assets/branding-pastelari.jpg";
import pastelariHero from "../assets/pastelari-hero.png";
import pastelariBrand from "../assets/pastelari-brand.png";

const content = {
  pt: {
    category: "BRANDING / IDENTIDADE VISUAL",
    role: "Brand Designer",
    platform: "Identidade de Marca",
    intro:
      "Uma identidade visual que combina nostalgia, personalidade e irreverência para transformar um produto popular brasileiro em uma marca divertida e memorável.",

    sections: [
      {
        id: "brand",
        label: "A MARCA",
        title: "Uma identidade popular, divertida e cheia de personalidade.",
        text:
          "Pastelari é uma marca brasileira do segmento de pastelaria, construída para transmitir uma atmosfera divertida, moderna e acolhedora. A direção criativa resgata referências nostálgicas dos anos 90 e acrescenta influências italianas à personalidade da marca, criando uma identidade familiar e, ao mesmo tempo, distintiva.",
        image: pastelariBrand,
        imageAlt: "Identidade visual da Pastelari",
      },

      {
        id: "concept",
        label: "CONCEITO",
        title: "Nostalgia com uma linguagem contemporânea.",
        text:
          "A identidade nasce do encontro entre referências retrô, cultura popular e uma linguagem gráfica descontraída. Formas expressivas, tipografia marcante e ilustração trabalham juntas para criar proximidade, personalidade e reconhecimento.",
      },

      {
        id: "identity",
        label: "IDENTIDADE",
        title: "Um personagem no centro da marca.",
        text:
          "O personagem inspirado no pastel funciona como um dos principais elementos de reconhecimento da Pastelari. Ele pode aparecer junto ao logotipo ou de forma independente, criando uma identidade mais flexível, expressiva e memorável.",
        image: pastelariBrand,
        imageAlt: "Sistema de identidade visual da Pastelari",
      },

      {
        id: "visual-system",
        label: "SISTEMA VISUAL",
        title: "Cor e tipografia como elementos de reconhecimento.",
        text:
          "A identidade visual da Pastelari é construída a partir de uma paleta intensa e contrastante, combinada com uma tipografia de forte presença gráfica. O vermelho atua como cor principal, enquanto o creme e o verde equilibram a composição e reforçam a personalidade da marca.",
        items: [
          "Vermelho — #E20E19",
          "Creme — #FAEEDE",
          "Verde — #016118",
          "Gilroy Black — títulos e destaques",
          "Gilroy Light — textos de apoio",
        ],
      },

      {
        id: "brand-system",
        label: "SISTEMA DE MARCA",
        title: "Uma identidade feita para se adaptar.",
        text:
          "A Pastelari foi desenvolvida em diferentes configurações para manter reconhecimento, legibilidade e personalidade em diferentes aplicações. O sistema permite combinar logotipo, personagem e assinaturas alternativas de forma flexível, sem perder consistência visual.",
        items: [
          "Assinatura principal",
          "Assinaturas alternativas",
          "Versões positiva e negativa",
          "Personagem como elemento independente",
          "Aplicação em diferentes fundos",
        ],
      },

      {
        id: "applications",
        label: "APLICAÇÕES",
        title: "A identidade ganhando vida.",
        text:
          "O sistema visual da Pastelari foi aplicado a diferentes pontos de contato para demonstrar sua flexibilidade e manter consistência entre peças físicas, materiais promocionais e elementos de marca.",
        items: [
          "Avental",
          "Boné",
          "Embalagem",
          "Camiseta",
          "Materiais gráficos",
        ],
      },

      {
        id: "result",
        label: "RESULTADO",
        title: "Uma marca construída para ser reconhecida.",
        text:
          "O resultado é uma identidade visual flexível e expressiva, capaz de manter sua personalidade em diferentes pontos de contato. Personagem, tipografia, cores e assinaturas trabalham em conjunto para construir uma presença divertida, nostálgica e memorável.",
        image: pastelariCover,
        imageAlt: "Aplicação final da identidade visual da Pastelari",
      },
    ],

    nextProjectCategory: "UI/UX · PRODUCT DESIGN",
  },

  en: {
    category: "BRANDING / VISUAL IDENTITY",
    role: "Brand Designer",
    platform: "Brand Identity",
    intro:
      "A visual identity that combines nostalgia, personality and irreverence to turn a popular Brazilian product into a playful and memorable brand.",

    sections: [
      {
        id: "brand",
        label: "THE BRAND",
        title: "A popular, playful identity full of personality.",
        text:
          "Pastelari is a Brazilian brand in the pastry segment, created to convey a playful, modern and welcoming atmosphere. The creative direction brings back nostalgic references from the 1990s and adds Italian influences to the brand personality, creating an identity that feels familiar while remaining distinctive.",
        image: pastelariBrand,
        imageAlt: "Pastelari visual identity",
      },

      {
        id: "concept",
        label: "CONCEPT",
        title: "Nostalgia through a contemporary visual language.",
        text:
          "The identity emerges from the intersection of retro references, popular culture and a relaxed graphic language. Expressive shapes, bold typography and illustration work together to create proximity, personality and recognition.",
      },

      {
        id: "identity",
        label: "IDENTITY",
        title: "A character at the center of the brand.",
        text:
          "The pastel-inspired character works as one of Pastelari's main recognition elements. It can appear alongside the logo or independently, creating a more flexible, expressive and memorable identity.",
        image: pastelariBrand,
        imageAlt: "Pastelari visual identity system",
      },

      {
        id: "visual-system",
        label: "VISUAL SYSTEM",
        title: "Color and typography as recognition elements.",
        text:
          "Pastelari's visual identity is built around an intense and contrasting palette combined with strong graphic typography. Red acts as the main color, while cream and green balance the composition and reinforce the brand's personality.",
        items: [
          "Red — #E20E19",
          "Cream — #FAEEDE",
          "Green — #016118",
          "Gilroy Black — headlines and highlights",
          "Gilroy Light — supporting text",
        ],
      },

      {
        id: "brand-system",
        label: "BRAND SYSTEM",
        title: "An identity designed to adapt.",
        text:
          "Pastelari was developed in different configurations to maintain recognition, legibility and personality across different applications. The system allows the logo, character and alternative signatures to be combined flexibly without losing visual consistency.",
        items: [
          "Primary signature",
          "Alternative signatures",
          "Positive and negative versions",
          "Character as an independent element",
          "Application on different backgrounds",
        ],
      },

      {
        id: "applications",
        label: "APPLICATIONS",
        title: "Bringing the identity to life.",
        text:
          "The Pastelari visual system was applied across different touchpoints to demonstrate its flexibility and maintain consistency between physical pieces, promotional materials and brand elements.",
        items: [
          "Apron",
          "Cap",
          "Packaging",
          "T-shirt",
          "Graphic materials",
        ],
      },

      {
        id: "result",
        label: "OUTCOME",
        title: "A brand designed to be recognized.",
        text:
          "The result is a flexible and expressive visual identity capable of maintaining its personality across different touchpoints. Character, typography, color and brand signatures work together to create a playful, nostalgic and memorable presence.",
        image: pastelariCover,
        imageAlt: "Final application of the Pastelari visual identity",
      },
    ],

    nextProjectCategory: "UI/UX · PRODUCT DESIGN",
  },

  fr: {
    category: "BRANDING / IDENTITÉ VISUELLE",
    role: "Brand Designer",
    platform: "Identité de marque",
    intro:
      "Une identité visuelle qui associe nostalgie, personnalité et irrévérence pour transformer un produit populaire brésilien en une marque ludique et mémorable.",

    sections: [
      {
        id: "brand",
        label: "LA MARQUE",
        title: "Une identité populaire, ludique et pleine de personnalité.",
        text:
          "Pastelari est une marque brésilienne du secteur de la restauration, conçue pour transmettre une atmosphère ludique, moderne et chaleureuse. La direction créative revisite des références nostalgiques des années 90 et ajoute des influences italiennes à la personnalité de la marque, créant une identité à la fois familière et distinctive.",
        image: pastelariBrand,
        imageAlt: "Identité visuelle de Pastelari",
      },

      {
        id: "concept",
        label: "CONCEPT",
        title: "La nostalgie à travers un langage visuel contemporain.",
        text:
          "L'identité naît de la rencontre entre références rétro, culture populaire et langage graphique décontracté. Les formes expressives, la typographie forte et l'illustration travaillent ensemble pour créer proximité, personnalité et reconnaissance.",
      },

      {
        id: "identity",
        label: "IDENTITÉ",
        title: "Un personnage au centre de la marque.",
        text:
          "Le personnage inspiré du pastel fonctionne comme l'un des principaux éléments de reconnaissance de Pastelari. Il peut apparaître avec le logotype ou de manière indépendante, créant une identité plus flexible, expressive et mémorable.",
        image: pastelariBrand,
        imageAlt: "Système d'identité visuelle de Pastelari",
      },

      {
        id: "visual-system",
        label: "SYSTÈME VISUEL",
        title: "La couleur et la typographie comme éléments de reconnaissance.",
        text:
          "L'identité visuelle de Pastelari repose sur une palette intense et contrastée associée à une typographie à forte présence graphique. Le rouge agit comme couleur principale, tandis que le crème et le vert équilibrent la composition et renforcent la personnalité de la marque.",
        items: [
          "Rouge — #E20E19",
          "Crème — #FAEEDE",
          "Vert — #016118",
          "Gilroy Black — titres et éléments forts",
          "Gilroy Light — textes d'accompagnement",
        ],
      },

      {
        id: "brand-system",
        label: "SYSTÈME DE MARQUE",
        title: "Une identité conçue pour s'adapter.",
        text:
          "Pastelari a été développée selon différentes configurations afin de préserver reconnaissance, lisibilité et personnalité dans diverses applications. Le système permet de combiner le logotype, le personnage et les signatures alternatives de manière flexible sans perdre la cohérence visuelle.",
        items: [
          "Signature principale",
          "Signatures alternatives",
          "Versions positive et négative",
          "Personnage comme élément indépendant",
          "Application sur différents fonds",
        ],
      },

      {
        id: "applications",
        label: "APPLICATIONS",
        title: "Donner vie à l'identité.",
        text:
          "Le système visuel de Pastelari a été appliqué à différents points de contact afin de démontrer sa flexibilité et de maintenir une cohérence entre les supports physiques, les matériaux promotionnels et les éléments de marque.",
        items: [
          "Tablier",
          "Casquette",
          "Packaging",
          "T-shirt",
          "Supports graphiques",
        ],
      },

      {
        id: "result",
        label: "RÉSULTAT",
        title: "Une marque conçue pour être reconnue.",
        text:
          "Le résultat est une identité visuelle flexible et expressive, capable de conserver sa personnalité à travers différents points de contact. Personnage, typographie, couleurs et signatures de marque travaillent ensemble pour construire une présence ludique, nostalgique et mémorable.",
        image: pastelariCover,
        imageAlt: "Application finale de l'identité visuelle Pastelari",
      },
    ],

    nextProjectCategory: "UI/UX · PRODUCT DESIGN",
  },
};

export default function PastelariCase() {
  const { language } = useLanguage();

  const t = content[language] || content.pt;

  return (
    <CaseStudy
      title="Pastelari"
      category={t.category}
      year="2024"
      role={t.role}
      platform={t.platform}
      tools="Illustrator · Photoshop"
      intro={t.intro}
      heroImage={pastelariHero}
      sections={t.sections}
      theme="pastelari"
      nextProjectTitle="FreeFinder"
      nextProjectCategory={t.nextProjectCategory}
      nextProjectLink="/freefinder"
    />
  );
}