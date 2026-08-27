import React from "react";
import { useLanguage } from "../../i18n";

export default function Header({ menuOpen, setMenuOpen, darkMode, setDarkMode, scrollTo }) {
  const { language, setLanguage, t } = useLanguage();
  const navItems = [[t.nav[0], "work"], [t.nav[1], "about"], [t.nav[2], "experiments"], [t.nav[3], "contact"]];

  return <header className="header">
    <button className="logo" onClick={() => scrollTo("top")} aria-label="Voltar ao início">Maria Júlia <span>Aquatti</span></button>
    <nav className={`nav ${menuOpen ? "open" : ""}`} aria-label="Navegação principal">{navItems.map(([label, id]) => <button key={id} onClick={() => scrollTo(id)}>{label}</button>)}</nav>
    <div className="header-actions">
      <div className="language-switcher" aria-label="Seletor de idioma">{["pt", "en", "fr"].map((code) => <button key={code} className={language === code ? "active" : ""} onClick={() => setLanguage(code)}>{code}</button>)}</div>
      <div className="brand-mark" aria-label="Monograma Maria Júlia Aquatti">MJA</div>
      <div className="status-pill" aria-label="Disponível para novos projetos"><i /> DISPONÍVEL</div>
      <button className="contrast-toggle" type="button" aria-pressed={darkMode} aria-label={darkMode ? "Ativar modo claro" : "Ativar modo escuro"} onClick={() => setDarkMode((enabled) => !enabled)}><span aria-hidden="true">{darkMode ? "☀" : "◐"}</span><b>{darkMode ? "CLARO" : "ESCURO"}</b></button>
      <button className="menu-button" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((isOpen) => !isOpen)}><span /><span /></button>
    </div>
  </header>;
}
