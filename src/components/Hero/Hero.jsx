import React from "react";
import { useLanguage } from "../../i18n";

export default function Hero({ scrollTo }) {
  const { t } = useLanguage();
  return <section id="top" className="hero">
    <div className="hero-copy">
      <p className="eyebrow">UI/UX DESIGNER · 5+ ANOS DE EXPERIÊNCIA</p>
      <h1>{t.heroTitle}</h1>
      <p className="hero-description">{t.heroText}</p>
      <div className="hero-actions"><button className="button-primary" onClick={() => scrollTo("work")}>{t.viewProjects} <span className="arrow">↗</span></button><a className="text-link" href="https://www.behance.net/mariajuliaaquattiart" target="_blank" rel="noreferrer">PORTFÓLIO COMPLETO</a></div>
    </div>
    <div className="hero-visual" aria-hidden="true"><div className="hero-gradient-art"><div className="gradient-shape shape-one" /><div className="gradient-shape shape-two" /><div className="gradient-shape shape-three" /><div className="gradient-grid" /><span>MJ<br />A</span></div></div>
    <p className="availability">{t.available}</p>
  </section>;
}
