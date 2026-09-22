import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";

import jjsHome from "../assets/jjs-home-web.png";
import jjsHomeMobile from "../assets/jjs-home-mobile.png";

import jjsProducts from "../assets/jjs-products-web.png";
import jjsProductsMobile from "../assets/jjs-products-mobile.png";

import jjsProduct from "../assets/jjs-product-web.png";
import jjsProductMobile from "../assets/jjs-product-mobile.png";

import jjsBrand from "../assets/jjs-brand-web.png";
import jjsBlog from "../assets/jjs-blog-web.png";
import jjsContactWeb from "../assets/jjs-contactt-web.png";

const content = {
  pt: {
    category: "WEB DESIGN / B2B",
    role: "Web Designer",
    platform: "Web / Responsivo",
    intro:
      "Um projeto contínuo de evolução digital para organizar produtos, marcas e conteúdo técnico em uma experiência B2B mais clara e consistente.",

    sections: [
      {
        id: "context",
        label: "CONTEXTO",
        title:
          "Uma presença digital construída para um público técnico e B2B.",
        text:
          "A JJS Canada atua no mercado canadense distribuindo marcas e soluções profissionais para os setores automotivo, industrial e de woodworking. O projeto envolveu a evolução contínua da presença digital da empresa, conectando produtos, marcas e conteúdo técnico em uma experiência mais clara e consistente.",
        image: jjsHome,
        imageAlt: "Homepage da JJS Canada",
      },

      {
        id: "challenge",
        label: "DESAFIO",
        title:
          "Organizar um ecossistema amplo de marcas, produtos e informação técnica.",
        text:
          "Um dos principais desafios foi apresentar diferentes marcas, categorias de produtos e informações técnicas dentro de uma estrutura visual coerente. A experiência precisava atender um público profissional e facilitar a descoberta de conteúdo sem transformar a quantidade de informação em complexidade visual.",
      },

      {
        id: "architecture",
        label: "ARQUITETURA & PRODUTOS",
        title:
          "Uma estrutura pensada para facilitar descoberta e navegação.",
        text:
          "A organização do catálogo prioriza hierarquia, agrupamento e descoberta. Categorias, marcas e diferentes tipos de produto são apresentados dentro de uma lógica consistente, permitindo que o usuário avance entre níveis de informação sem perder contexto.",
        images: [
          {
            src: jjsProducts,
            alt: "Página de produtos da JJS Canada",
            caption: "Listagem de produtos",
          },
          {
            src: jjsProduct,
            alt: "Página individual de produto da JJS Canada",
            caption: "Detalhe do produto",
          },
        ],
      },

      {
        id: "web-design",
        label: "WEB DESIGN",
        title:
          "Um sistema capaz de acomodar diferentes marcas sem perder consistência.",
        text:
          "A linguagem visual do website foi aplicada de forma consistente entre páginas institucionais, categorias, produtos e marcas representadas. A estrutura cria unidade para a JJS Canada enquanto permite que cada fabricante mantenha sua própria presença e identidade dentro do ecossistema.",
        image: jjsBrand,
        imageAlt: "Página de marca no website da JJS Canada",
      },

      {
        id: "responsive",
        label: "RESPONSIVIDADE",
        title:
          "A mesma hierarquia adaptada para diferentes contextos de uso.",
        text:
          "A experiência foi adaptada para telas menores preservando hierarquia, leitura e acesso às principais informações. Navegação, conteúdo técnico e páginas de produto se reorganizam para manter a experiência funcional também em dispositivos móveis.",
        images: [
          {
            src: jjsHomeMobile,
            alt: "Homepage mobile da JJS Canada",
            caption: "Home",
          },
          {
            src: jjsProductsMobile,
            alt: "Página de produtos mobile da JJS Canada",
            caption: "Produtos",
          },
          {
            src: jjsProductMobile,
            alt: "Página individual de produto mobile da JJS Canada",
            caption: "Produto",
          },
        ],
      },

      {
        id: "content",
        label: "CONTEÚDO & COMUNICAÇÃO",
        title:
          "Conteúdo como extensão da experiência digital.",
        text:
          "Além da apresentação de produtos, o website funciona como um ponto de contato para conteúdos relacionados às marcas, aplicações e novidades do mercado. A área editorial amplia a experiência além do catálogo e ajuda a integrar conteúdo à presença digital da empresa.",
        image: jjsBlog,
        imageAlt: "Blog da JJS Canada",
      },

      {
        id: "result",
        label: "RESULTADO",
        title:
          "Uma presença digital preparada para crescer junto com a marca.",
        text:
          "O resultado é uma estrutura digital flexível para diferentes produtos, marcas e conteúdos. O sistema permite que novas páginas e comunicações sejam incorporadas mantendo uma linguagem visual consistente e uma experiência reconhecível.",
        image: jjsContactWeb,
        imageAlt: "Aplicação final do website da JJS Canada",
      },
    ],

    nextProjectCategory:
      "PLATAFORMA SAAS / PRODUCT DESIGN",
  },

  en: {
    category: "WEB DESIGN / B2B",
    role: "Web Designer",
    platform: "Web / Responsive",
    intro:
      "An ongoing digital evolution project designed to organize products, brands and technical content into a clearer and more consistent B2B experience.",

    sections: [
      {
        id: "context",
        label: "CONTEXT",
        title:
          "A digital presence designed for a technical B2B audience.",
        text:
          "JJS Canada operates in the Canadian market distributing professional brands and solutions for the automotive, industrial and woodworking sectors. The project involved the continuous evolution of the company's digital presence, connecting products, brands and technical content in a clearer and more consistent experience.",
        image: jjsHome,
        imageAlt: "JJS Canada homepage",
      },

      {
        id: "challenge",
        label: "CHALLENGE",
        title:
          "Organizing a broad ecosystem of brands, products and technical information.",
        text:
          "One of the main challenges was presenting different brands, product categories and technical information within a coherent visual structure. The experience needed to serve a professional audience and facilitate content discovery without turning the volume of information into visual complexity.",
      },

      {
        id: "architecture",
        label: "ARCHITECTURE & PRODUCTS",
        title:
          "A structure designed to support discovery and navigation.",
        text:
          "The catalog organization prioritizes hierarchy, grouping and discovery. Categories, brands and different product types are presented within a consistent logic, allowing users to move between levels of information without losing context.",
        images: [
          {
            src: jjsProducts,
            alt: "JJS Canada product listing page",
            caption: "Product listing",
          },
          {
            src: jjsProduct,
            alt: "JJS Canada individual product page",
            caption: "Product detail",
          },
        ],
      },

      {
        id: "web-design",
        label: "WEB DESIGN",
        title:
          "A system capable of accommodating different brands without losing consistency.",
        text:
          "The website's visual language was applied consistently across institutional pages, categories, products and represented brands. The structure creates unity for JJS Canada while allowing each manufacturer to maintain its own presence and identity within the ecosystem.",
        image: jjsBrand,
        imageAlt: "Brand page on the JJS Canada website",
      },

      {
        id: "responsive",
        label: "RESPONSIVE DESIGN",
        title:
          "The same hierarchy adapted to different usage contexts.",
        text:
          "The experience was adapted for smaller screens while preserving hierarchy, readability and access to key information. Navigation, technical content and product pages reorganize to remain functional on mobile devices.",
        images: [
          {
            src: jjsHomeMobile,
            alt: "JJS Canada mobile homepage",
            caption: "Home",
          },
          {
            src: jjsProductsMobile,
            alt: "JJS Canada mobile product page",
            caption: "Products",
          },
          {
            src: jjsProductMobile,
            alt: "JJS Canada mobile product detail",
            caption: "Product",
          },
        ],
      },

      {
        id: "content",
        label: "CONTENT & COMMUNICATION",
        title:
          "Content as an extension of the digital experience.",
        text:
          "Beyond product presentation, the website works as a touchpoint for content related to brands, applications and market updates. The editorial area expands the experience beyond the catalog and helps integrate content into the company's digital presence.",
        image: jjsBlog,
        imageAlt: "JJS Canada blog",
      },

      {
        id: "result",
        label: "OUTCOME",
        title:
          "A digital presence designed to grow with the brand.",
        text:
          "The result is a flexible digital structure for different products, brands and content. The system allows new pages and communications to be incorporated while maintaining a consistent visual language and recognizable experience.",
        image: jjsContactWeb,
        imageAlt: "Final JJS Canada website presentation",
      },
    ],

    nextProjectCategory:
      "SAAS PLATFORM / PRODUCT DESIGN",
  },

  fr: {
    category: "WEB DESIGN / B2B",
    role: "Web Designer",
    platform: "Web / Responsive",
    intro:
      "Un projet d'évolution numérique continue visant à organiser les produits, les marques et les contenus techniques dans une expérience B2B plus claire et cohérente.",

    sections: [
      {
        id: "context",
        label: "CONTEXTE",
        title:
          "Une présence numérique conçue pour un public technique et B2B.",
        text:
          "JJS Canada opère sur le marché canadien en distribuant des marques et des solutions professionnelles pour les secteurs automobile, industriel et du travail du bois. Le projet a porté sur l'évolution continue de la présence numérique de l'entreprise, en reliant produits, marques et contenus techniques dans une expérience plus claire et cohérente.",
        image: jjsHome,
        imageAlt: "Page d'accueil de JJS Canada",
      },

      {
        id: "challenge",
        label: "DÉFI",
        title:
          "Organiser un vaste écosystème de marques, produits et informations techniques.",
        text:
          "L'un des principaux défis consistait à présenter différentes marques, catégories de produits et informations techniques dans une structure visuelle cohérente. L'expérience devait répondre aux besoins d'un public professionnel et faciliter la découverte du contenu sans transformer la quantité d'information en complexité visuelle.",
      },

      {
        id: "architecture",
        label: "ARCHITECTURE & PRODUITS",
        title:
          "Une structure conçue pour faciliter la découverte et la navigation.",
        text:
          "L'organisation du catalogue privilégie la hiérarchie, le regroupement et la découverte. Les catégories, les marques et les différents types de produits sont présentés selon une logique cohérente, permettant à l'utilisateur de naviguer entre plusieurs niveaux d'information sans perdre le contexte.",
        images: [
          {
            src: jjsProducts,
            alt: "Page de produits JJS Canada",
            caption: "Liste des produits",
          },
          {
            src: jjsProduct,
            alt: "Page détaillée d'un produit JJS Canada",
            caption: "Détail du produit",
          },
        ],
      },

      {
        id: "web-design",
        label: "WEB DESIGN",
        title:
          "Un système capable d'accueillir différentes marques tout en conservant sa cohérence.",
        text:
          "Le langage visuel du site a été appliqué de manière cohérente aux pages institutionnelles, aux catégories, aux produits et aux marques représentées. La structure crée une unité pour JJS Canada tout en permettant à chaque fabricant de conserver sa propre présence et son identité au sein de l'écosystème.",
        image: jjsBrand,
        imageAlt: "Page de marque sur le site JJS Canada",
      },

      {
        id: "responsive",
        label: "RESPONSIVE",
        title:
          "La même hiérarchie adaptée à différents contextes d'utilisation.",
        text:
          "L'expérience a été adaptée aux écrans plus petits tout en préservant la hiérarchie, la lisibilité et l'accès aux informations principales. La navigation, les contenus techniques et les pages produits se réorganisent afin de rester fonctionnels sur mobile.",
        images: [
          {
            src: jjsHomeMobile,
            alt: "Page d'accueil mobile de JJS Canada",
            caption: "Accueil",
          },
          {
            src: jjsProductsMobile,
            alt: "Page produits mobile de JJS Canada",
            caption: "Produits",
          },
          {
            src: jjsProductMobile,
            alt: "Page produit mobile de JJS Canada",
            caption: "Produit",
          },
        ],
      },

      {
        id: "content",
        label: "CONTENU & COMMUNICATION",
        title:
          "Le contenu comme prolongement de l'expérience numérique.",
        text:
          "Au-delà de la présentation des produits, le site fonctionne comme un point de contact pour les contenus liés aux marques, aux applications et aux nouveautés du marché. L'espace éditorial enrichit l'expérience au-delà du catalogue et contribue à intégrer le contenu à la présence numérique de l'entreprise.",
        image: jjsBlog,
        imageAlt: "Blog de JJS Canada",
      },

      {
        id: "result",
        label: "RÉSULTAT",
        title:
          "Une présence numérique prête à évoluer avec la marque.",
        text:
          "Le résultat est une structure numérique flexible pour différents produits, marques et contenus. Le système permet d'intégrer de nouvelles pages et communications tout en conservant un langage visuel cohérent et une expérience reconnaissable.",
        image: jjsContactWeb,
        imageAlt: "Présentation finale du site JJS Canada",
      },
    ],

    nextProjectCategory:
      "PLATEFORME SAAS / PRODUCT DESIGN",
  },
};

export default function JJSCanada() {
  const { language } = useLanguage();

  const t =
    content[language] ||
    content.pt;

  return (
    <CaseStudy
      title="JJS Canada"
      category={t.category}
      year="2023 — 2026"
      role={t.role}
      platform={t.platform}
      tools="Figma · WordPress · Adobe Creative Suite"
      intro={t.intro}
      heroImage={jjsHome}
      sections={t.sections}
      theme="jjs"
      nextProjectTitle="Cely"
      nextProjectCategory={t.nextProjectCategory}
      nextProjectLink="/cely"
    />
  );
}