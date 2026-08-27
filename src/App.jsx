import React, { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects";
import CaseStudy from "./components/CaseStudy";
import About from "./components/About/About";
import Lab from "./components/Lab";
import Contact from "./components/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience";
import { LanguageProvider } from "./i18n";

export function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("color-mode") === "dark");
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
    localStorage.setItem("color-mode", darkMode ? "dark" : "light");
  }, [darkMode]);
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return <LanguageProvider><div className="site"><div className="noise" /><Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} darkMode={darkMode} setDarkMode={setDarkMode} scrollTo={scrollTo} /><main><Hero scrollTo={scrollTo} /><Projects /><CaseStudy /><About /><Experience /><Lab /><Contact /></main><Footer /></div></LanguageProvider>;
}
