import React, { useEffect, useState } from "react";
import { useLanguage } from "./i18n";

import {
  Routes,
  Route,
  useNavigate,
  useLocation,
} from "react-router-dom";

import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Lab from "./components/Lab";
import Work from "./components/Work/Work";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import freeFinderHome from "./assets/freefinder-home.png";
import freeFinderFreelancer from "./assets/freefinder-freelancer.png";
import freeFinderProfile from "./assets/freefinder-profile.png";

import CelyCase from "./pages/CelyCase";
import PastelariCase from "./pages/PastelariCase";
import FreeFinder from "./pages/FreeFinder";
import JJSCanada from "./pages/JJSCanada";
import RotaKawasakiCase from "./pages/RotaKawasaki";
import ApasCase from "./pages/ApasCase";

/* =========================================
   ARROW
========================================= */

function Arrow() {
  return (
    <span className="arrow" aria-hidden="true">
      ↗
    </span>
  );
}

/* =========================================
   HOME PAGE
========================================= */

function HomePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage();

  const [darkMode, setDarkMode] = useState(false);

  /* =========================================
     DARK MODE
  ========================================= */

  useEffect(() => {
    document.documentElement.classList.toggle(
      "dark-mode",
      darkMode
    );

    return () => {
      document.documentElement.classList.remove(
        "dark-mode"
      );
    };
  }, [darkMode]);

  /* =========================================
     SCROLL WHEN RETURNING FROM A CASE
  ========================================= */

  useEffect(() => {
    if (location.hash !== "#work") return;

    const target = document.getElementById("work");

    if (!target) return;

    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [location.hash]);

  /* =========================================
     SMOOTH SCROLL
  ========================================= */

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  /* =========================================
     HOME CONTENT
  ========================================= */

  return (
    <div
      className={`site ${darkMode ? "dark-mode" : ""}`}
    >
      <div className="noise" />

      {/* HEADER */}

      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <main id="main-content">

        {/* HERO */}

        <Hero scrollTo={scrollTo} />

        {/* PROJECTS */}

        <Work />

        {/* ===================================
            FEATURED CASE — FREE FINDER
        =================================== */}

        <section className="feature-case">
  <div className="case-copy">
    {/* Textos, botão e informações do projeto */}
  </div>

  <div className="case-visual">
    <img
      src={freeFinderHome}
      alt="Tela inicial do FreeFinder"
      className="case-project-image case-image-a"
    />

    <img
      src={freeFinderFreelancer}
      alt="Tela de freelancers"
      className="case-project-image case-image-b"
    />

    <img
      src={freeFinderProfile}
      alt="Tela de perfil"
      className="case-project-image case-image-c"
    />

    <button
      type="button"
      className="case-circle"
      onClick={() => navigate("/freefinder")}
      aria-label={t.completeCase}
    >
      <span aria-hidden="true">↗</span>
    </button>
  </div>
</section>

<About />
        {/* ABOUT */}

        {/* LAB */}

        <Lab />

        {/* CONTACT + FOOTER */}

        <Contact />

      </main>
    </div>
  );
}

/* =========================================
   ROUTES
========================================= */

export function App() {
  return (
    <Routes>

      <Route
        path="/"
        element={<HomePage />}
      />

      <Route
        path="/freefinder"
        element={<FreeFinder />}
      />

      <Route
        path="/cely"
        element={<CelyCase />}
      />

      <Route
        path="/pastelari"
        element={<PastelariCase />}
      />

      <Route
        path="/jjs-canada"
        element={<JJSCanada />}
      />
<Route
  path="/rota-kawasaki"
  element={<RotaKawasakiCase />}
/>
      <Route
        path="*"
        element={<HomePage />}
      />
      <Route
  path="/stand-apas"
  element={<ApasCase />}
/>

    </Routes>
  );
}