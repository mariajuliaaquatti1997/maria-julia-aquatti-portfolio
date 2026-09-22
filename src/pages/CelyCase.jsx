import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";

import celyMockup from "../assets/computer.png";

import cadastroDefault from "../assets/cadastro_001.png";
import cadastroError from "../assets/cadastro_002.png";

import campanhaInicio from "../assets/criacao_de_campanha_001.png";
import campanhaConteudo from "../assets/criacao_de_campanha_003.png";
import campanhaCreators from "../assets/criacao_de_campanha_005.png";

import campanhaResumo from "../assets/dados_da_campanha_resumo.png";
import campanhaResultados from "../assets/dados_da_campanha_resultados.png";
import campanhaInvestimentos from "../assets/dados_da_campanha_investimentos.png";

import reelsVisual from "../assets/dados_da_campanha_reels_imagem.png";
import feedVisual from "../assets/dados_da_campanha_postagens_feed.png";
import storiesVisual from "../assets/dados_da_campanha_postagens_stories.png";

import todasTabelas from "../assets/dados_da_campanha_todas_as_tabelas.png";


const content = {
  pt: {
    category: "PLATAFORMA SAAS / PRODUCT DESIGN",

    role: "UI/UX Designer",

    platform: "Plataforma Web",

    intro:
      "Uma plataforma SaaS desenvolvida para simplificar a criação, o monitoramento e a análise de campanhas com creators.",

    sections: [
      {
        id: "context",
        label: "CONTEXTO",
        title:
          "Uma plataforma para organizar campanhas, creators e resultados.",
        text:
          "A Cely foi concebida como uma plataforma digital para centralizar a criação, o acompanhamento e a análise de campanhas com creators. O projeto exigia organizar fluxos complexos e grandes volumes de informação em uma experiência mais clara, consistente e fácil de navegar.",
        image: celyMockup,
        imageAlt: "Mockup da plataforma Cely",
      },

      {
        id: "onboarding",
        label: "ONBOARDING",
        title:
          "Criando uma entrada simples e orientada.",
        text:
          "O fluxo de cadastro foi estruturado para tornar o primeiro contato com a plataforma mais direto. Campos, hierarquia visual, estados de seleção e mensagens de erro foram pensados para orientar o usuário e reduzir dúvidas durante a criação da conta.",
        images: [
          {
            src: cadastroDefault,
            alt: "Tela de criação de conta da Cely",
            caption: "Estado padrão",
          },
          {
            src: cadastroError,
            alt: "Tela da Cely com estados de erro no formulário",
            caption: "Validação e feedback",
          },
        ],
      },

      {
        id: "campaign-creation",
        label: "CRIAÇÃO DE CAMPANHA",
        title:
          "Um fluxo estruturado para configurar campanhas passo a passo.",
        text:
          "A criação de campanha foi dividida em etapas para reduzir a carga cognitiva e ajudar o usuário a avançar de forma progressiva. Informações básicas, período, descoberta de conteúdo, links e creators são organizados em uma sequência clara e previsível.",
        images: [
          {
            src: campanhaInicio,
            alt: "Primeira etapa de criação de campanha na Cely",
            caption: "Informações iniciais",
          },
          {
            src: campanhaConteudo,
            alt: "Etapa de descoberta de conteúdo na Cely",
            caption: "Descoberta de conteúdo",
          },
          {
            src: campanhaCreators,
            alt: "Etapa de adição de creators na Cely",
            caption: "Creators e conclusão",
          },
        ],
      },

      {
        id: "management",
        label: "GESTÃO DE CAMPANHAS",
        title:
          "Dados organizados para facilitar acompanhamento e decisão.",
        text:
          "Após a criação, a plataforma permite acompanhar diferentes dimensões da campanha em uma mesma estrutura. Resumo, resultados e investimentos são apresentados de forma segmentada para facilitar leitura, comparação e monitoramento.",
        images: [
          {
            src: campanhaResumo,
            alt: "Resumo de campanha na plataforma Cely",
            caption: "Resumo",
          },
          {
            src: campanhaResultados,
            alt: "Resultados de campanha na plataforma Cely",
            caption: "Resultados",
          },
          {
            src: campanhaInvestimentos,
            alt: "Investimentos de campanha na plataforma Cely",
            caption: "Investimentos",
          },
        ],
      },

      {
        id: "monitoring",
        label: "MONITORAMENTO DE CONTEÚDO",
        title:
          "Diferentes formatos, uma mesma lógica de navegação.",
        text:
          "A interface foi pensada para acomodar diferentes formatos de conteúdo sem quebrar a lógica da plataforma. Reels, feed e stories seguem uma mesma estrutura visual, permitindo navegar entre diferentes tipos de conteúdo dentro da mesma experiência.",
        images: [
          {
            src: reelsVisual,
            alt: "Visualização de reels monitorados na Cely",
            caption: "Reels",
          },
          {
            src: feedVisual,
            alt: "Visualização de posts de feed monitorados na Cely",
            caption: "Feed",
          },
          {
            src: storiesVisual,
            alt: "Visualização de stories monitorados na Cely",
            caption: "Stories",
          },
        ],
      },

      {
        id: "data",
        label: "DADOS & RELATÓRIOS",
        title:
          "Transformando volume de informação em leitura estruturada.",
        text:
          "As telas de dados foram organizadas para tornar métricas, creators, conteúdos e resultados mais legíveis dentro de uma interface densa. Tabelas, filtros e agrupamentos ajudam o usuário a localizar informações importantes sem perder contexto.",
        image: todasTabelas,
        imageAlt: "Visualização consolidada de tabelas e dados da Cely",
      },

      {
        id: "result",
        label: "RESULTADO",
        title:
          "Uma experiência mais clara para uma plataforma complexa.",
        text:
          "O resultado é um sistema visual coeso para uma plataforma com múltiplos fluxos e grandes volumes de informação. A combinação entre navegação persistente, hierarquia visual, padrões reutilizáveis e segmentação de conteúdo contribui para uma experiência mais previsível, organizada e escalável.",
      },
    ],

    nextProjectCategory:
      "BRANDING / IDENTIDADE VISUAL",
  },


  en: {
    category: "SAAS PLATFORM / PRODUCT DESIGN",

    role: "UI/UX Designer",

    platform: "Web Platform",

    intro:
      "A SaaS platform designed to simplify the creation, monitoring and analysis of creator campaigns.",

    sections: [
      {
        id: "context",
        label: "CONTEXT",
        title:
          "A platform for organizing campaigns, creators and results.",
        text:
          "Cely was conceived as a digital platform to centralize the creation, monitoring and analysis of creator campaigns. The project required organizing complex flows and large volumes of information into a clearer, more consistent and easier-to-navigate experience.",
        image: celyMockup,
        imageAlt: "Cely platform mockup",
      },

      {
        id: "onboarding",
        label: "ONBOARDING",
        title:
          "Creating a simple and guided entry experience.",
        text:
          "The sign-up flow was structured to make the first interaction with the platform more straightforward. Fields, visual hierarchy, selection states and error messages were designed to guide users and reduce uncertainty during account creation.",
        images: [
          {
            src: cadastroDefault,
            alt: "Cely account creation screen",
            caption: "Default state",
          },
          {
            src: cadastroError,
            alt: "Cely form with error states",
            caption: "Validation and feedback",
          },
        ],
      },

      {
        id: "campaign-creation",
        label: "CAMPAIGN CREATION",
        title:
          "A structured flow for setting up campaigns step by step.",
        text:
          "Campaign creation was divided into stages to reduce cognitive load and help users progress gradually. Basic information, dates, content discovery, links and creators are organized into a clear and predictable sequence.",
        images: [
          {
            src: campanhaInicio,
            alt: "First step of campaign creation in Cely",
            caption: "Initial information",
          },
          {
            src: campanhaConteudo,
            alt: "Content discovery stage in Cely",
            caption: "Content discovery",
          },
          {
            src: campanhaCreators,
            alt: "Creator selection stage in Cely",
            caption: "Creators and completion",
          },
        ],
      },

      {
        id: "management",
        label: "CAMPAIGN MANAGEMENT",
        title:
          "Organized data to support monitoring and decision-making.",
        text:
          "After creation, the platform allows users to follow different campaign dimensions within the same structure. Overview, results and investments are segmented to make reading, comparison and monitoring easier.",
        images: [
          {
            src: campanhaResumo,
            alt: "Campaign overview on the Cely platform",
            caption: "Overview",
          },
          {
            src: campanhaResultados,
            alt: "Campaign results on the Cely platform",
            caption: "Results",
          },
          {
            src: campanhaInvestimentos,
            alt: "Campaign investments on the Cely platform",
            caption: "Investments",
          },
        ],
      },

      {
        id: "monitoring",
        label: "CONTENT MONITORING",
        title:
          "Different formats, one consistent navigation logic.",
        text:
          "The interface was designed to accommodate different content formats without breaking the platform's overall logic. Reels, feed posts and stories follow the same visual structure, allowing users to navigate between content types within a consistent experience.",
        images: [
          {
            src: reelsVisual,
            alt: "Monitored reels in Cely",
            caption: "Reels",
          },
          {
            src: feedVisual,
            alt: "Monitored feed posts in Cely",
            caption: "Feed",
          },
          {
            src: storiesVisual,
            alt: "Monitored stories in Cely",
            caption: "Stories",
          },
        ],
      },

      {
        id: "data",
        label: "DATA & REPORTING",
        title:
          "Turning large volumes of information into structured reading.",
        text:
          "Data screens were organized to make metrics, creators, content and results easier to read within a dense interface. Tables, filters and groupings help users find relevant information without losing context.",
        image: todasTabelas,
        imageAlt: "Consolidated data and tables view in Cely",
      },

      {
        id: "result",
        label: "OUTCOME",
        title:
          "A clearer experience for a complex platform.",
        text:
          "The result is a cohesive visual system for a platform with multiple flows and large amounts of information. Persistent navigation, visual hierarchy, reusable patterns and content segmentation contribute to a more predictable, organized and scalable experience.",
      },
    ],

    nextProjectCategory:
      "BRANDING / VISUAL IDENTITY",
  },


  fr: {
    category: "PLATEFORME SAAS / PRODUCT DESIGN",

    role: "Designer UI/UX",

    platform: "Plateforme Web",

    intro:
      "Une plateforme SaaS conçue pour simplifier la création, le suivi et l'analyse de campagnes avec des créateurs de contenu.",

    sections: [
      {
        id: "context",
        label: "CONTEXTE",
        title:
          "Une plateforme pour organiser les campagnes, les créateurs et les résultats.",
        text:
          "Cely a été conçue comme une plateforme numérique permettant de centraliser la création, le suivi et l'analyse de campagnes avec des créateurs de contenu. Le projet devait organiser des flux complexes et de grands volumes d'informations dans une expérience plus claire, cohérente et facile à parcourir.",
        image: celyMockup,
        imageAlt: "Maquette de la plateforme Cely",
      },

      {
        id: "onboarding",
        label: "ONBOARDING",
        title:
          "Créer une entrée simple et guidée.",
        text:
          "Le parcours d'inscription a été structuré afin de rendre le premier contact avec la plateforme plus direct. Les champs, la hiérarchie visuelle, les états de sélection et les messages d'erreur ont été conçus pour guider l'utilisateur et réduire les incertitudes lors de la création du compte.",
        images: [
          {
            src: cadastroDefault,
            alt: "Écran de création de compte Cely",
            caption: "État par défaut",
          },
          {
            src: cadastroError,
            alt: "Formulaire Cely avec états d'erreur",
            caption: "Validation et feedback",
          },
        ],
      },

      {
        id: "campaign-creation",
        label: "CRÉATION DE CAMPAGNE",
        title:
          "Un parcours structuré pour configurer les campagnes étape par étape.",
        text:
          "La création d'une campagne a été divisée en plusieurs étapes afin de réduire la charge cognitive et d'aider l'utilisateur à progresser progressivement. Les informations générales, les dates, la découverte de contenu, les liens et les créateurs sont organisés dans une séquence claire et prévisible.",
        images: [
          {
            src: campanhaInicio,
            alt: "Première étape de création d'une campagne dans Cely",
            caption: "Informations initiales",
          },
          {
            src: campanhaConteudo,
            alt: "Étape de découverte de contenu dans Cely",
            caption: "Découverte de contenu",
          },
          {
            src: campanhaCreators,
            alt: "Étape de sélection des créateurs dans Cely",
            caption: "Créateurs et finalisation",
          },
        ],
      },

      {
        id: "management",
        label: "GESTION DES CAMPAGNES",
        title:
          "Des données organisées pour faciliter le suivi et la prise de décision.",
        text:
          "Après sa création, la plateforme permet de suivre différentes dimensions de la campagne au sein d'une même structure. Le résumé, les résultats et les investissements sont présentés séparément afin de faciliter la lecture, la comparaison et le suivi.",
        images: [
          {
            src: campanhaResumo,
            alt: "Résumé de campagne sur la plateforme Cely",
            caption: "Résumé",
          },
          {
            src: campanhaResultados,
            alt: "Résultats de campagne sur la plateforme Cely",
            caption: "Résultats",
          },
          {
            src: campanhaInvestimentos,
            alt: "Investissements de campagne sur la plateforme Cely",
            caption: "Investissements",
          },
        ],
      },

      {
        id: "monitoring",
        label: "SUIVI DU CONTENU",
        title:
          "Différents formats, une même logique de navigation.",
        text:
          "L'interface a été pensée pour accueillir différents formats de contenu sans rompre la logique générale de la plateforme. Reels, publications du feed et stories suivent une même structure visuelle, permettant de naviguer entre plusieurs types de contenu dans une expérience cohérente.",
        images: [
          {
            src: reelsVisual,
            alt: "Reels suivis dans Cely",
            caption: "Reels",
          },
          {
            src: feedVisual,
            alt: "Publications du feed suivies dans Cely",
            caption: "Feed",
          },
          {
            src: storiesVisual,
            alt: "Stories suivies dans Cely",
            caption: "Stories",
          },
        ],
      },

      {
        id: "data",
        label: "DONNÉES & REPORTING",
        title:
          "Transformer un grand volume d'informations en lecture structurée.",
        text:
          "Les écrans de données ont été organisés afin de rendre les métriques, les créateurs, les contenus et les résultats plus lisibles dans une interface dense. Les tableaux, filtres et regroupements permettent de trouver les informations importantes sans perdre le contexte.",
        image: todasTabelas,
        imageAlt: "Vue consolidée des données et tableaux dans Cely",
      },

      {
        id: "result",
        label: "RÉSULTAT",
        title:
          "Une expérience plus claire pour une plateforme complexe.",
        text:
          "Le résultat est un système visuel cohérent pour une plateforme composée de plusieurs flux et de grands volumes d'information. La navigation persistante, la hiérarchie visuelle, les modèles réutilisables et la segmentation du contenu contribuent à une expérience plus prévisible, organisée et évolutive.",
      },
    ],

    nextProjectCategory:
      "BRANDING / IDENTITÉ VISUELLE",
  },
};


export default function CelyCase() {
  const { language } = useLanguage();

  const t =
    content[language] ||
    content.pt;

  return (
    <CaseStudy
      title="Cely"
      category={t.category}
      year="2023"
      role={t.role}
      platform={t.platform}
      tools="Figma · Adobe Creative Suite"
      intro={t.intro}
      heroImage={celyMockup}
      sections={t.sections}
      theme="cely"
      nextProjectTitle="Pastelari"
      nextProjectCategory={t.nextProjectCategory}
      nextProjectLink="/pastelari"
    />
  );
}