import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

/* =========================================================
   TRANSLATIONS
========================================================= */

const translations = {
  /* =======================================================
     PORTUGUÊS
  ======================================================= */

  pt: {
    /* =========================
       NAVIGATION
    ========================= */

    nav: ["PROJETOS", "SOBRE", "LAB", "CONTATO"],
    navLabel: "Navegação principal",
    languageSelectorLabel: "Selecionar idioma",
    skipToContent: "Pular para o conteúdo principal",
    projectFiltersLabel: "Filtrar projetos por categoria",
    projectResultsLabel: "projetos exibidos",
    opensNewWindow: "abre em uma nova janela",
    homeLabel: "início",
    pageTitle: "MJA — Maria Júlia Aquatti — Designer UI/UX",
    pageDescription: "Portfólio de Maria Júlia Aquatti, designer UI/UX, diretora de arte e designer digital.",
    switchToDark: "Ativar modo escuro",
    switchToLight: "Ativar modo claro",

    /* =========================
       HERO
    ========================= */

    heroKicker: "PORTFÓLIO · 2026",

    heroTitle: (
      <>
        Design que
        <br />
        <em>conta histórias.</em>
      </>
    ),

    heroText:
      "Maria Júlia Aquatti é designer focada em criar experiências visuais que unem estratégia, estética e tecnologia.",

    viewProjects: "VER PROJETOS",

    available: (
      <>
        DISPONÍVEL PARA
        <br />
        NOVOS PROJETOS
      </>
    ),

    /* =========================
       HERO — EXTRA TEXTS
    ========================= */

    creativeDesigner: "Designer Criativa",
    uiuxDesigner: "UI/UX Designer",
    artDirection: "Direção de Arte",
    webDesign: "Web Design",
    visualDesign: "Design Visual",

    heroMainLine1: "DESIGNER",
    heroMainLine2: "CRIATIVA &",
    heroMainLine3: "UI/UX",

    availableForWork: "DISPONÍVEL PARA TRABALHOS",
    basedInHero: "Baseada no Brasil",
    availableWorldwide: "Disponível mundialmente",

    heroDescription:
      "Criando experiências digitais, interfaces e identidades visuais com clareza, personalidade e propósito.",

    exploreWork: "EXPLORAR PROJETOS",

    /* =========================
       WORK INTRO
    ========================= */

    workIntroEyebrow: "01",

    workIntroTitle: (
      <>
        PROJETOS
        <br />
        SELECIONADOS
      </>
    ),

    workIntroMeta: (
      <>
        DIGITAL / UI / VISUAL
        <br />
        2023 — 2026
      </>
    ),

    workIntroText:
      "Interfaces, experiências digitais e sistemas visuais.",

    /* =========================
       PROJECTS
    ========================= */

    projects: "PROJETOS",

    featured: (
      <>
        trabalhos
        <br />
        em <em>destaque.</em>
      </>
    ),

    projectIndex: "ÍNDICE DE PROJETOS",
    projectCount: "08 PROJETOS",

    filterAll: "TODOS",
    filterUiux: "UI/UX",
    filterArtDirection: "DIREÇÃO DE ARTE",
    filterBranding: "BRANDING",
    filterWeb: "WEB",

    allProjects: "VER TODOS OS PROJETOS",

    viewProject: "VER",

    /* =========================
       CASE STUDY
    ========================= */

    caseKicker: "UI/UX · MOBILE APP",

    liveProject: "VER PROJETO AO VIVO",

    openCase: "ABRIR CASE COMPLETO",
    caseStudy: "CASE STUDY",
    caseDescription:
      "Uma experiência digital criada para aproximar pessoas de descobertas locais, transformando a busca por lugares em uma jornada visual e intuitiva.",
    yearLabel: "ANO",
    roleLabel: "FUNÇÃO",
    platformLabel: "PLATAFORMA",
    toolsLabel: "FERRAMENTAS",
    completeCase: "CASE COMPLETO",
    caseImageAlt: "Tela do aplicativo Free Finder",

    /* =========================
       ABOUT
    ========================= */

    about: "SOBRE MIM",

    aboutEyebrow: "02 / SOBRE",

    aboutEditorialTitle: (
      <>
        EU CRIO
        <br />
        ENTRE IDEIAS,
        <br />
        INTERFACES
        <br />
        & HISTÓRIAS.
      </>
    ),

    aboutText: [
      "Sou Designer Criativa e UI/UX Designer, com experiência em design digital, comunicação visual, interfaces e experiências para web.",
      "Meu trabalho transita entre design, tecnologia e narrativa, sempre buscando clareza, personalidade e soluções visuais significativas.",
      "Gosto de transformar ideias em experiências intuitivas, expressivas e visualmente marcantes.",
    ],

    basedIn: "LOCALIZAÇÃO",

    basedInValue: "Brasil",

    focus: "FOCO",

    /* =========================
       LAB
    ========================= */

    lab: "LAB",

    labTitle: (
      <>
        experimentos
        <br />
        <em>& projetos.</em>
      </>
    ),

    labText: (
      <>
        Onde a interface
        <br />
        vira experiência.
      </>
    ),

    /* =========================
       EXPERIENCE
    ========================= */

    experienceEyebrow: "03 / EXPERIÊNCIA",

    experienceTitle: (
      <>
        EXPERIÊNCIAS
        <br />
        SELECIONADAS.
      </>
    ),

    experienceRange: "2018 — 2026",

    fullExperience: "EXPERIÊNCIA COMPLETA",

    /* =========================
       CONTACT
    ========================= */

    contact: "VAMOS CONVERSAR?",

    contactEyebrow: "04 / CONTATO",

    contactEditorialTitle: (
      <>
        VAMOS CRIAR
        <br />
        ALGO BOM
        <br />
        JUNTOS.
      </>
    ),

    contactIntro:
      "Disponível para projetos freelance, colaborações e novas oportunidades.",

    emailLabel: "EMAIL",

    linkedinLabel: "LINKEDIN",

    behanceLabel: "BEHANCE",

    sayHello: "DIGA OI",

    contactTitle: (
      <>
        Tem um projeto
        <br />
        em <em>mente?</em>
      </>
    ),

    footerTagline: "DESIGN · CÓDIGO · HISTÓRIAS",
  },

  /* =======================================================
     ENGLISH
  ======================================================= */

  en: {
    /* =========================
       NAVIGATION
    ========================= */

    nav: ["WORK", "ABOUT", "LAB", "CONTACT"],
    navLabel: "Main navigation",
    languageSelectorLabel: "Choose language",
    skipToContent: "Skip to main content",
    projectFiltersLabel: "Filter projects by category",
    projectResultsLabel: "projects displayed",
    opensNewWindow: "opens in a new window",
    homeLabel: "home",
    pageTitle: "MJA — Maria Júlia Aquatti — UI/UX Designer",
    pageDescription: "Portfolio of Maria Júlia Aquatti, UI/UX designer, art director and digital designer.",
    switchToDark: "Switch to dark mode",
    switchToLight: "Switch to light mode",

    /* =========================
       HERO
    ========================= */

    heroKicker: "PORTFOLIO · 2026",

    heroTitle: (
      <>
        Design that
        <br />
        <em>tells stories.</em>
      </>
    ),

    heroText:
      "Maria Júlia Aquatti is a designer creating visual experiences that bring strategy, aesthetics, and technology together.",

    viewProjects: "VIEW PROJECTS",

    available: (
      <>
        AVAILABLE FOR
        <br />
        NEW PROJECTS
      </>
    ),

    /* =========================
       HERO — EXTRA TEXTS
    ========================= */

    creativeDesigner: "Creative Designer",

    uiuxDesigner: "UI/UX Designer",

    artDirection: "Art Direction",
    webDesign: "Web Design",
    visualDesign: "Visual Design",

    heroMainLine1: "CREATIVE",
    heroMainLine2: "DESIGNER &",
    heroMainLine3: "UI/UX",

    availableForWork: "AVAILABLE FOR WORK",

    basedInHero: "Based in Brazil",

    availableWorldwide: "Available worldwide",

    heroDescription:
      "Creating digital experiences, interfaces and visual identities with clarity, personality and purpose.",

    exploreWork: "EXPLORE WORK",

    /* =========================
       WORK INTRO
    ========================= */

    workIntroEyebrow: "01",

    workIntroTitle: (
      <>
        SELECTED
        <br />
        WORK
      </>
    ),

    workIntroMeta: (
      <>
        DIGITAL / UI / VISUAL
        <br />
        2023 — 2026
      </>
    ),

    workIntroText:
      "Interfaces, digital experiences and visual systems.",

    /* =========================
       PROJECTS
    ========================= */

    projects: "PROJECTS",

    featured: (
      <>
        selected
        <br />
        <em>work.</em>
      </>
    ),

    projectIndex: "PROJECT INDEX",

    projectCount: "08 PROJECTS",

    filterAll: "ALL",

    filterUiux: "UI/UX",

    filterArtDirection: "ART DIRECTION",

    filterBranding: "BRANDING",

    filterWeb: "WEB",

    allProjects: "VIEW ALL PROJECTS",

    viewProject: "VIEW",

    /* =========================
       CASE STUDY
    ========================= */

    caseKicker: "UI/UX · MOBILE APP",

    liveProject: "VIEW LIVE PROJECT",

    openCase: "OPEN FULL CASE",
    caseStudy: "CASE STUDY",
    caseDescription:
      "A digital experience designed to connect people with local discoveries, turning the search for places into a visual and intuitive journey.",
    yearLabel: "YEAR",
    roleLabel: "ROLE",
    platformLabel: "PLATFORM",
    toolsLabel: "TOOLS",
    completeCase: "FULL CASE",
    caseImageAlt: "Free Finder app screen",

    /* =========================
       ABOUT
    ========================= */

    about: "ABOUT ME",

    aboutEyebrow: "02 / ABOUT",

    aboutEditorialTitle: (
      <>
        I DESIGN
        <br />
        BETWEEN IDEAS,
        <br />
        INTERFACES
        <br />
        & STORIES.
      </>
    ),

    aboutText: [
      "I’m a Creative Designer and UI/UX Designer with experience across digital design, visual communication, interfaces and web experiences.",
      "My work moves between design, technology and storytelling, always looking for clarity, personality and meaningful visual solutions.",
      "I enjoy transforming ideas into experiences that feel intuitive, expressive and visually strong.",
    ],

    basedIn: "BASED IN",

    basedInValue: "Brazil",

    focus: "FOCUS",

    /* =========================
       LAB
    ========================= */

    lab: "LAB",

    labTitle: (
      <>
        experiments
        <br />
        <em>& side projects.</em>
      </>
    ),

    labText: (
      <>
        Where interfaces
        <br />
        become experiences.
      </>
    ),

    /* =========================
       EXPERIENCE
    ========================= */

    experienceEyebrow: "03 / EXPERIENCE",

    experienceTitle: (
      <>
        SELECTED
        <br />
        EXPERIENCE.
      </>
    ),

    experienceRange: "2018 — 2026",

    fullExperience: "FULL EXPERIENCE",

    /* =========================
       CONTACT
    ========================= */

    contact: "LET'S TALK?",

    contactEyebrow: "04 / CONTACT",

    contactEditorialTitle: (
      <>
        LET&apos;S MAKE
        <br />
        SOMETHING
        <br />
        GOOD TOGETHER.
      </>
    ),

    contactIntro:
      "Available for freelance projects, collaborations and new opportunities.",

    emailLabel: "EMAIL",

    linkedinLabel: "LINKEDIN",

    behanceLabel: "BEHANCE",

    sayHello: "SAY HELLO",

    contactTitle: (
      <>
        Have a project
        <br />
        in <em>mind?</em>
      </>
    ),

    footerTagline: "DESIGN · CODE · STORIES",
  },

  /* =======================================================
     FRANÇAIS
  ======================================================= */

  fr: {
    /* =========================
       NAVIGATION
    ========================= */

    nav: ["PROJETS", "À PROPOS", "LAB", "CONTACT"],
    navLabel: "Navigation principale",
    languageSelectorLabel: "Choisir la langue",
    skipToContent: "Aller au contenu principal",
    projectFiltersLabel: "Filtrer les projets par catégorie",
    projectResultsLabel: "projets affichés",
    opensNewWindow: "s’ouvre dans une nouvelle fenêtre",
    homeLabel: "accueil",
    pageTitle: "MJA — Maria Júlia Aquatti — Designer UI/UX",
    pageDescription: "Portfolio de Maria Júlia Aquatti, designer UI/UX, directrice artistique et designer numérique.",
    switchToDark: "Activer le mode sombre",
    switchToLight: "Activer le mode clair",

    /* =========================
       HERO
    ========================= */

    heroKicker: "PORTFOLIO · 2026",

    heroTitle: (
      <>
        Le design qui
        <br />
        <em>raconte des histoires.</em>
      </>
    ),

    heroText:
      "Maria Júlia Aquatti est designer et crée des expériences visuelles qui associent stratégie, esthétique et technologie.",

    viewProjects: "VOIR LES PROJETS",

    available: (
      <>
        DISPONIBLE POUR
        <br />
        DE NOUVEAUX PROJETS
      </>
    ),

    /* =========================
       HERO — EXTRA TEXTS
    ========================= */

    creativeDesigner: "Designer créative",

    uiuxDesigner: "UI/UX Designer",

    artDirection: "Direction artistique",
    webDesign: "Web design",
    visualDesign: "Design visuel",

    heroMainLine1: "DESIGNER",
    heroMainLine2: "CRÉATIVE &",
    heroMainLine3: "UI/UX",

    availableForWork: "DISPONIBLE POUR DE NOUVEAUX PROJETS",

    basedInHero: "Basée au Brésil",

    availableWorldwide: "Disponible à l’international",

    heroDescription:
      "Création d’expériences numériques, d’interfaces et d’identités visuelles avec clarté, personnalité et intention.",

    exploreWork: "DÉCOUVRIR LES PROJETS",

    /* =========================
       WORK INTRO
    ========================= */

    workIntroEyebrow: "01",

    workIntroTitle: (
      <>
        PROJETS
        <br />
        SÉLECTIONNÉS
      </>
    ),

    workIntroMeta: (
      <>
        DIGITAL / UI / VISUEL
        <br />
        2023 — 2026
      </>
    ),

    workIntroText:
      "Interfaces, expériences numériques et systèmes visuels.",

    /* =========================
       PROJECTS
    ========================= */

    projects: "PROJETS",

    featured: (
      <>
        travaux
        <br />
        <em>sélectionnés.</em>
      </>
    ),

    projectIndex: "INDEX DES PROJETS",

    projectCount: "08 PROJETS",

    filterAll: "TOUS",

    filterUiux: "UI/UX",

    filterArtDirection: "DIRECTION ARTISTIQUE",

    filterBranding: "IDENTITÉ VISUELLE",

    filterWeb: "WEB",

    allProjects: "VOIR TOUS LES PROJETS",

    viewProject: "VOIR",

    /* =========================
       CASE STUDY
    ========================= */

    caseKicker: "UI/UX · APPLICATION MOBILE",

    liveProject: "VOIR LE PROJET",

    openCase: "OUVRIR L’ÉTUDE COMPLÈTE",
    caseStudy: "ÉTUDE DE CAS",
    caseDescription:
      "Une expérience numérique conçue pour rapprocher les personnes des découvertes locales, en transformant la recherche de lieux en un parcours visuel et intuitif.",
    yearLabel: "ANNÉE",
    roleLabel: "RÔLE",
    platformLabel: "PLATEFORME",
    toolsLabel: "OUTILS",
    completeCase: "ÉTUDE COMPLÈTE",
    caseImageAlt: "Écran de l’application Free Finder",

    /* =========================
       ABOUT
    ========================= */

    about: "À PROPOS",

    aboutEyebrow: "02 / À PROPOS",

    aboutEditorialTitle: (
      <>
        JE CRÉE
        <br />
        ENTRE LES IDÉES,
        <br />
        LES INTERFACES
        <br />
        & LES HISTOIRES.
      </>
    ),

    aboutText: [
      "Je suis designer créative et UI/UX Designer, avec une expérience en design numérique, communication visuelle, interfaces et expériences web.",
      "Mon travail évolue entre design, technologie et narration, avec une attention particulière portée à la clarté, à la personnalité et à la pertinence visuelle.",
      "J’aime transformer les idées en expériences intuitives, expressives et visuellement fortes.",
    ],

    basedIn: "BASÉE AU",

    basedInValue: "Brésil",

    focus: "SPÉCIALITÉS",

    /* =========================
       LAB
    ========================= */

    lab: "LAB",

    labTitle: (
      <>
        expériences
        <br />
        <em>& projets personnels.</em>
      </>
    ),

    labText: (
      <>
        Là où l’interface
        <br />
        devient expérience.
      </>
    ),

    /* =========================
       EXPERIENCE
    ========================= */

    experienceEyebrow: "03 / EXPÉRIENCE",

    experienceTitle: (
      <>
        EXPÉRIENCES
        <br />
        SÉLECTIONNÉES.
      </>
    ),

    experienceRange: "2018 — 2026",

    fullExperience: "PARCOURS COMPLET",

    /* =========================
       CONTACT
    ========================= */

    contact: "PARLONS-EN ?",

    contactEyebrow: "04 / CONTACT",

    contactEditorialTitle: (
      <>
        CRÉONS
        <br />
        QUELQUE CHOSE
        <br />
        DE BEAU ENSEMBLE.
      </>
    ),

    contactIntro:
      "Disponible pour des projets freelance, des collaborations et de nouvelles opportunités.",

    emailLabel: "EMAIL",

    linkedinLabel: "LINKEDIN",

    behanceLabel: "BEHANCE",

    sayHello: "ÉCRIVEZ-MOI",

    contactTitle: (
      <>
        Vous avez un projet
        <br />
        en <em>tête ?</em>
      </>
    ),

    footerTagline: "DESIGN · CODE · HISTOIRES",
  },
};

/* =========================================================
   LANGUAGE CONTEXT
========================================================= */

const LanguageContext = createContext();

/* =========================================================
   PROVIDER
========================================================= */

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    document.documentElement.lang = language === "pt" ? "pt-BR" : language;
    document.title = translations[language].pageTitle;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", translations[language].pageDescription);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

/* =========================================================
   HOOK
========================================================= */

export function useLanguage() {
  return useContext(LanguageContext);
}
