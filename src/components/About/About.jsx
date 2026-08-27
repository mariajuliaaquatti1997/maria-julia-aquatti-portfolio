import React from "react";
import { useLanguage } from "../../i18n";

export default function About() {
  const { language } = useLanguage();
  const copy = {
    pt: {
      label: "SOBRE MIM", title: "Sobre Mim",
      paragraphs: ["Sou UI/UX Designer com mais de 5 anos de experiência em design digital e sólida bagagem em comunicação visual e direção de arte.", <>Desenho experiências digitais que equilibram <strong>usabilidade, impacto visual e objetivos de negócio</strong> — de websites e landing pages a produtos digitais e interfaces.</>, "Minha formação em Comunicação e Design Visual, combinada a pós-graduações em Animação, Cenários Digitais e UX/UI Design, me permite abordar projetos por perspectivas estratégicas e visuais.", "Sou apaixonada por design, tecnologia e cultura, e estou sempre buscando novas formas de transformar ideias e problemas complexos em experiências simples e significativas."]
    },
    en: {
      label: "ABOUT ME", title: "About Me",
      paragraphs: ["I’m a UI/UX Designer with 5+ years of experience in digital design and a strong background in visual communication and art direction.", <>I design digital experiences that balance <strong>usability, visual impact, and business goals</strong> — from websites and landing pages to digital products and user interfaces.</>, "My background in Communication and Visual Design, combined with postgraduate studies in Animation, Digital Scenarios, and UX/UI Design, allows me to approach projects from both a strategic and visual perspective.", "I’m passionate about design, technology, and culture, and I’m always looking for new ways to turn ideas and complex problems into simple, meaningful experiences."]
    },
    fr: {
      label: "À PROPOS", title: "À propos de moi",
      paragraphs: ["Je suis UI/UX Designer avec plus de 5 ans d’expérience en design numérique et une solide expérience en communication visuelle et direction artistique.", <>Je conçois des expériences numériques qui équilibrent <strong>ergonomie, impact visuel et objectifs commerciaux</strong> — des sites web et landing pages aux produits numériques et interfaces utilisateur.</>, "Ma formation en communication et design visuel, complétée par des études supérieures en animation, scénarios numériques et UX/UI Design, me permet d’aborder les projets avec une perspective à la fois stratégique et visuelle.", "Passionnée par le design, la technologie et la culture, je cherche toujours de nouvelles façons de transformer les idées et problèmes complexes en expériences simples et porteuses de sens."]
    },
  }[language];

  return <section id="about" className="about section"><div className="section-number">01</div><div><p className="eyebrow">{copy.label}</p><h2>{copy.title}</h2></div><div className="about-text">{copy.paragraphs.map((paragraph, index) => <p key={index}>{paragraph}</p>)}<div className="skills"><span>UI/UX</span><span>ART DIRECTION</span><span>BRANDING</span><span>WEB DESIGN</span><span>MOTION</span><span>FRONT-END</span></div></div></section>;
}
