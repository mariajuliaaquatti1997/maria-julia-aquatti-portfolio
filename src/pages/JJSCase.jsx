import React from "react";
import CaseStudy from "../components/CaseStudy";

export default function JJSCanada() {
  const sections = [
    {
      id: "context",
      label: "CONTEXTO",
      title: "Construindo uma presença digital mais forte",
      text:
        "A JJS Canada trabalha com marcas e produtos profissionais para os mercados industrial e automotivo. O projeto envolveu desenvolver e aprimorar sua comunicação digital, organizando uma grande quantidade de informações técnicas e comerciais em uma experiência visual mais clara.",
      image: "/images/jjs/jjs-context.jpg",
      imageAlt: "Website da JJS Canada",
    },

    {
      id: "challenge",
      label: "DESAFIO",
      title: "Informação complexa, navegação simples",
      text:
        "Um dos principais desafios era apresentar diferentes marcas, categorias de produtos e conteúdos técnicos sem criar uma experiência visualmente sobrecarregada. A interface precisava manter um caráter profissional e técnico, mas ainda ser clara e fácil de navegar.",
    },

    {
      id: "approach",
      label: "ABORDAGEM",
      title: "Estrutura, hierarquia e consistência",
      text:
        "A solução foi construída a partir de uma hierarquia de conteúdo mais clara, maior consistência visual e componentes reutilizáveis. As páginas e materiais digitais foram desenvolvidos para reforçar a identidade da empresa e facilitar a compreensão dos produtos e aplicações.",
      image: "/images/jjs/jjs-layout.jpg",
      imageAlt: "Layouts desenvolvidos para a JJS Canada",
    },

    {
      id: "design-system",
      label: "DESIGN SYSTEM",
      title: "Criando consistência visual",
      text:
        "Tipografia, espaçamentos, cores, tratamento de imagens e estruturas de layout foram padronizados entre diferentes páginas e materiais digitais.",
      items: [
        "Hierarquia tipográfica",
        "Sistema de espaçamento",
        "Tratamento consistente de imagens",
        "Componentes reutilizáveis",
        "Padrões para banners e landing pages",
      ],
    },

    {
      id: "responsive",
      label: "RESPONSIVIDADE",
      title: "Uma experiência pensada para diferentes telas",
      text:
        "Os layouts foram adaptados para preservar hierarquia, legibilidade e navegação em desktop, tablet e dispositivos móveis.",
      images: [
        {
          src: "/images/jjs/jjs-desktop.jpg",
          alt: "JJS Canada no desktop",
          caption: "Desktop",
        },
        {
          src: "/images/jjs/jjs-mobile.jpg",
          alt: "JJS Canada no mobile",
          caption: "Mobile",
        },
      ],
    },

    {
      id: "result",
      label: "RESULTADO",
      title: "Um ecossistema digital escalável",
      text:
        "O projeto evoluiu para um ecossistema digital capaz de apoiar lançamentos de produtos, campanhas, conteúdos técnicos e comunicação de diferentes marcas representadas pela JJS Canada.",
    },
  ];

  return (
    <CaseStudy
      title="JJS Canada"
      category="WEB DESIGN / UI DESIGN"
      year="2023 — 2026"
      role="Web Designer"
      platform="Web / Responsive"
      tools="Figma, WordPress, Adobe"
      intro="Redesign e evolução da presença digital da JJS Canada, criando uma experiência mais clara, moderna e consistente para um público B2B."
      heroImage="/images/jjs/jjs-hero.jpg"
      sections={sections}
    />
  );
}