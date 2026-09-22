import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useLanguage } from "../../i18n";
import "./Header.css";

export default function Header({ darkMode, setDarkMode }) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const navLinks = [
    { label: t.nav[0], id: "work" },
    { label: t.nav[1], id: "about" },
    { label: t.nav[2], id: "lab" },
    { label: t.nav[3], id: "contact" },
  ];
  const goTo = (id) => {
    setMenuOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", `#${id}`);
    }
  };
  return (
    <header className="header">
      <a className="skip-link" href="#main-content">{t.skipToContent}</a>
      <div className="header__inner">
        <a href="/#top" className="header__logo" aria-label={`Maria Júlia Aquatti — ${t.homeLabel}`} onClick={(e) => {
          if (location.pathname === "/") { e.preventDefault(); setMenuOpen(false); document.getElementById("top")?.scrollIntoView({ behavior: "smooth" }); }
        }}>MARIA JÚLIA AQUATTI</a>
        <nav id="portfolio-nav" className={`header__nav ${menuOpen ? "is-open" : ""}`} aria-label={t.navLabel}>
          {navLinks.map(({ label, id }) => (
            <a key={id} href={`/#${id}`} onClick={(e) => { e.preventDefault(); goTo(id); }}>{label}</a>
          ))}
        </nav>
        <div className="header__languages" role="group" aria-label={t.languageSelectorLabel}>
          {[["pt", "PT", "Português", "pt-BR"], ["en", "EN", "English", "en"], ["fr", "FR", "Français", "fr"]].map(([code, label, name, lang], index) => (
            <React.Fragment key={code}>
              {index > 0 && <span aria-hidden="true">/</span>}
              <button type="button" onClick={() => setLanguage(code)} className={language === code ? "active" : ""} aria-pressed={language === code} aria-label={name} lang={lang}>{label}</button>
            </React.Fragment>
          ))}
        </div>
        <button type="button" className="header__theme-button" onClick={() => setDarkMode((current) => !current)} aria-pressed={darkMode} aria-label={darkMode ? t.switchToLight : t.switchToDark} title={darkMode ? t.switchToLight : t.switchToDark}>
          <span aria-hidden="true">{darkMode ? "☀" : "☾"}</span>
        </button>
        <button type="button" className="header__menu-button" aria-expanded={menuOpen} aria-controls="portfolio-nav" aria-label={menuOpen ? "Close menu / Fechar menu" : "Open menu / Abrir menu"} onClick={() => setMenuOpen((open) => !open)}>
          <span aria-hidden="true">{menuOpen ? "×" : "☰"}</span>
        </button>
      </div>
    </header>
  );
}
