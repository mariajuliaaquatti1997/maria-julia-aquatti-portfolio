import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";

// IMAGENS
import freefinderHero from "../assets/freefinder-hero.png";
import freefinderInfo from "../assets/freefinder-info.png";
import freefinderHome from "../assets/freefinder-home.png";
import freefinderNiche from "../assets/freefinder-niche.png";
import freefinderFreelancers from "../assets/freefinder-freelancer.png";
import freefinderProfile from "../assets/freefinder-profile.png";
import freefinderMessages from "../assets/freefinder-messages.png";
import freefinderProjects from "../assets/freefinder-projects.png";
import freefinderMenu from "../assets/freefinder-menu.png";

const content = {
  pt: {
    category: "UI/UX · PRODUCT DESIGN",
    role: "UI/UX Designer",
    platform: "Aplicativo Mobile",

    intro:
      "Uma plataforma mobile desenvolvida para conectar clientes e freelancers, reunindo descoberta de profissionais, contratação, comunicação e gerenciamento de projetos em uma única experiência.",

    sections: [
      {
        id: "challenge",
        label: "O DESAFIO",
        title:
          "Encontrar o profissional certo não deveria ser complicado.",
        text:
          "O FreeFinder nasceu da proposta de centralizar a busca por profissionais freelancers em uma experiência simples e acessível. O desafio foi organizar diferentes áreas de atuação, especialidades e perfis sem tornar a navegação complexa.",
        image: freefinderInfo,
        imageAlt:
          "Tela de definição de perfil e preferências no FreeFinder",
      },

      {
        id: "discovery",
        label: "DESCOBERTA",
        title:
          "Da necessidade ao profissional certo.",
        text:
          "A arquitetura da experiência conduz o usuário progressivamente da descoberta de uma categoria até a escolha de uma especialidade e, por fim, de um profissional. Busca, filtros e organização por nichos reduzem a quantidade de decisões necessárias em cada etapa.",
        images: [
          {
            src: freefinderHome,
            alt: "Tela inicial do FreeFinder com categorias de profissionais",
            caption: "Explorar categorias",
          },
          {
            src: freefinderNiche,
            alt: "Tela de seleção de nichos do FreeFinder",
            caption: "Selecionar nichos",
          },
          {
            src: freefinderFreelancers,
            alt: "Lista de freelancers no FreeFinder",
            caption: "Encontrar profissionais",
          },
        ],
      },

      {
        id: "profile",
        label: "PERFIL",
        title:
          "Informação para tomar uma decisão.",
        text:
          "O perfil concentra informações importantes para a contratação, como especialidade, preço, experiência, prazo de entrega, atividade recente e competências, permitindo que o usuário avalie o profissional antes de iniciar o contato.",
        image: freefinderProfile,
        imageAlt:
          "Perfil de freelancer no FreeFinder",
      },

      {
        id: "experience",
        label: "EXPERIÊNCIA",
        title:
          "Mais do que encontrar um freelancer.",
        text:
          "A experiência continua após a descoberta do profissional. Mensagens, gerenciamento de projetos, acompanhamento de progresso e suporte fazem parte do ecossistema, mantendo diferentes etapas da jornada dentro do mesmo produto.",
        images: [
          {
            src: freefinderMessages,
            alt: "Tela de mensagens do FreeFinder",
            caption: "Mensagens",
          },
          {
            src: freefinderProjects,
            alt: "Tela de gerenciamento de projetos do FreeFinder",
            caption: "Projetos",
          },
          {
            src: freefinderMenu,
            alt: "Menu principal do FreeFinder",
            caption: "Navegação",
          },
        ],
      },
    ],

    nextProjectCategory:
      "WEB DESIGN / B2B",
  },

  en: {
    category: "UI/UX · PRODUCT DESIGN",
    role: "UI/UX Designer",
    platform: "Mobile App",

    intro:
      "A mobile platform designed to connect clients and freelancers, bringing professional discovery, hiring, communication and project management into a single experience.",

    sections: [
      {
        id: "challenge",
        label: "THE CHALLENGE",
        title:
          "Finding the right professional shouldn't be complicated.",
        text:
          "FreeFinder was created to centralize the search for freelance professionals in a simple and accessible experience. The main challenge was organizing different fields, specialties and profiles without making navigation feel complex.",
        image: freefinderInfo,
        imageAlt:
          "Profile and preference selection screen in FreeFinder",
      },

      {
        id: "discovery",
        label: "DISCOVERY",
        title:
          "From a need to the right professional.",
        text:
          "The experience architecture progressively guides users from discovering a category to choosing a specialty and, finally, a professional. Search, filters and niche organization reduce the number of decisions required at each stage.",
        images: [
          {
            src: freefinderHome,
            alt: "FreeFinder home screen with professional categories",
            caption: "Explore categories",
          },
          {
            src: freefinderNiche,
            alt: "FreeFinder niche selection screen",
            caption: "Select niches",
          },
          {
            src: freefinderFreelancers,
            alt: "Freelancer list in FreeFinder",
            caption: "Find professionals",
          },
        ],
      },

      {
        id: "profile",
        label: "PROFILE",
        title:
          "The information needed to make a decision.",
        text:
          "The profile brings together relevant hiring information such as specialty, price, experience, delivery time, recent activity and skills, allowing users to evaluate a professional before starting a conversation.",
        image: freefinderProfile,
        imageAlt:
          "Freelancer profile in FreeFinder",
      },

      {
        id: "experience",
        label: "EXPERIENCE",
        title:
          "More than finding a freelancer.",
        text:
          "The experience continues after discovering a professional. Messaging, project management, progress tracking and support are integrated into the ecosystem, keeping different stages of the journey within the same product.",
        images: [
          {
            src: freefinderMessages,
            alt: "FreeFinder messaging screen",
            caption: "Messages",
          },
          {
            src: freefinderProjects,
            alt: "FreeFinder project management screen",
            caption: "Projects",
          },
          {
            src: freefinderMenu,
            alt: "FreeFinder main menu",
            caption: "Navigation",
          },
        ],
      },
    ],

    nextProjectCategory:
      "WEB DESIGN / B2B",
  },

  fr: {
    category: "UI/UX · PRODUCT DESIGN",
    role: "Designer UI/UX",
    platform: "Application mobile",

    intro:
      "Une plateforme mobile conçue pour connecter clients et freelances, en réunissant découverte de professionnels, recrutement, communication et gestion de projets dans une seule expérience.",

    sections: [
      {
        id: "challenge",
        label: "LE DÉFI",
        title:
          "Trouver le bon professionnel ne devrait pas être compliqué.",
        text:
          "FreeFinder a été conçu pour centraliser la recherche de professionnels freelances dans une expérience simple et accessible. Le principal défi consistait à organiser différents domaines, spécialités et profils sans rendre la navigation complexe.",
        image: freefinderInfo,
        imageAlt:
          "Écran de sélection du profil et des préférences dans FreeFinder",
      },

      {
        id: "discovery",
        label: "DÉCOUVERTE",
        title:
          "Du besoin au bon professionnel.",
        text:
          "L'architecture de l'expérience guide progressivement l'utilisateur depuis la découverte d'une catégorie jusqu'au choix d'une spécialité puis d'un professionnel. La recherche, les filtres et l'organisation par niches réduisent le nombre de décisions nécessaires à chaque étape.",
        images: [
          {
            src: freefinderHome,
            alt: "Écran d'accueil FreeFinder avec catégories professionnelles",
            caption: "Explorer les catégories",
          },
          {
            src: freefinderNiche,
            alt: "Écran de sélection des niches dans FreeFinder",
            caption: "Sélectionner les niches",
          },
          {
            src: freefinderFreelancers,
            alt: "Liste de freelances dans FreeFinder",
            caption: "Trouver des professionnels",
          },
        ],
      },

      {
        id: "profile",
        label: "PROFIL",
        title:
          "Les informations nécessaires pour prendre une décision.",
        text:
          "Le profil regroupe les informations importantes pour le recrutement, telles que la spécialité, le tarif, l'expérience, le délai de livraison, l'activité récente et les compétences, permettant à l'utilisateur d'évaluer le professionnel avant de prendre contact.",
        image: freefinderProfile,
        imageAlt:
          "Profil d'un freelance dans FreeFinder",
      },

      {
        id: "experience",
        label: "EXPÉRIENCE",
        title:
          "Bien plus que trouver un freelance.",
        text:
          "L'expérience se poursuit après la découverte du professionnel. La messagerie, la gestion de projets, le suivi de l'avancement et le support font partie de l'écosystème, permettant de conserver différentes étapes du parcours au sein d'un même produit.",
        images: [
          {
            src: freefinderMessages,
            alt: "Écran de messagerie FreeFinder",
            caption: "Messages",
          },
          {
            src: freefinderProjects,
            alt: "Écran de gestion de projets FreeFinder",
            caption: "Projets",
          },
          {
            src: freefinderMenu,
            alt: "Menu principal FreeFinder",
            caption: "Navigation",
          },
        ],
      },
    ],

    nextProjectCategory:
      "WEB DESIGN / B2B",
  },
};

export default function FreeFinder() {
  const { language } = useLanguage();

  const t =
    content[language] ||
    content.pt;

  return (
    <CaseStudy
      title="FreeFinder"
      category={t.category}
      year="2021"
      role={t.role}
      platform={t.platform}
      tools="Figma · Adobe Photoshop · Adobe Illustrator"
      intro={t.intro}
      heroImage={freefinderHero}
      sections={t.sections}
      theme="freefinder"
      nextProjectTitle="JJS Canada"
      nextProjectCategory={t.nextProjectCategory}
      nextProjectLink="/jjs-canada"
    />
  );
}