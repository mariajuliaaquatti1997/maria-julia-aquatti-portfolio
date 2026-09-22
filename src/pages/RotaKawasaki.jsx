import React from "react";
import CaseStudy from "../components/CaseStudy";
import { useLanguage } from "../i18n";

const imageBase = `${import.meta.env.BASE_URL}images/rota-kawasaki/`;

const rotaCover = `${imageBase}rota-kawasaki-cover.jpg`;

const ninjaZX4R = `${imageBase}ninja-zx4r.png`;
const versysX300 = `${imageBase}versys-x300.png`;
const z900 = `${imageBase}z900.png`;
const z1000r = `${imageBase}z1000r.jpg`;

const ninjaZX10R = `${imageBase}ninja-zx10r.png`;
const ninjaZX10R001 = `${imageBase}ninja-zx10r-001.png`;

const ninjaZX6R = `${imageBase}ninja-zx6r.png`;
const z400 = `${imageBase}z400.png`;

const camisetaPreta = `${imageBase}camiseta-preta.png`;
const camisetaBranca = `${imageBase}camiseta-branca.png`;
const camisetaInterlagos = `${imageBase}camiseta-interlagos.png`;
const content = {
  pt: {
    category: "DIREÇÃO DE ARTE / CAMPANHAS",
    role: "Direção de Arte · Design Gráfico",
    platform: "Campanhas publicitárias e materiais gráficos",

    intro:
      "Criação de peças publicitárias e aplicações gráficas para a Rota Kawasaki, explorando uma linguagem visual de alto contraste, tipografia expressiva e referências ao universo das motocicletas.",

    sections: [
      {
        id: "overview",
        label: "O PROJETO",
        title: "Velocidade, identidade e comunicação.",
        text:
          "Entre 2022 e 2024, desenvolvi peças gráficas para a Rota Kawasaki, abrangendo campanhas promocionais, comunicação de produtos e estampas para camisetas. O trabalho reuniu diferentes formatos e objetivos de comunicação em uma linguagem visual associada ao universo das motocicletas.",
        image: ninjaZX10R001,
        imageAlt:
          "Peça de comunicação visual desenvolvida para a Rota Kawasaki.",
      },

      {
        id: "visual-language",
        label: "DIREÇÃO DE ARTE",
        title: "Uma linguagem visual de impacto.",
        text:
          "A composição das peças explora o contraste entre preto, verde e branco, fotografias das motocicletas, tipografia em grande escala e elementos gráficos que reforçam movimento e intensidade. Cada layout organiza as informações comerciais sem retirar o protagonismo do produto.",
        image: ninjaZX4R,
        imageAlt:
          "Peça da Ninja ZX-4R com motocicleta verde, especificações técnicas e composição em fundo escuro.",
      },

      {
        id: "campaigns",
        label: "CAMPANHAS",
        title: "Da apresentação do produto à oferta.",
        text:
          "As campanhas combinam imagens dos modelos, chamadas promocionais e informações de apoio. A hierarquia visual foi trabalhada para destacar o modelo da motocicleta e a mensagem principal em formatos publicitários distintos.",
        image: versysX300,
        imageAlt:
          "Campanha da Versys-X 300 com fotografia da motocicleta e chamada de taxa especial.",
      },

      {
        id: "z900",
        label: "COMUNICAÇÃO DE PRODUTO",
        title: "A informação também faz parte da composição.",
        text:
          "Na comunicação da Z900, a oferta ocupa uma posição de destaque, enquanto a fotografia da motocicleta e os elementos gráficos sustentam a identidade visual da peça.",
        image: z900,
        imageAlt:
          "Campanha da Kawasaki Z900 com destaque para a oferta de documentação grátis.",
      },

      {
        id: "z1000r",
        label: "DESDOBRAMENTOS",
        title: "Diferentes modelos, uma linguagem reconhecível.",
        text:
          "A adaptação da linguagem gráfica para diferentes motocicletas permitiu trabalhar composições, fotografias e chamadas específicas, mantendo elementos visuais recorrentes entre as peças.",
        image: z1000r,
        imageAlt:
          "Peça promocional da Kawasaki Z1000R com fotografia da motocicleta e chamada de pronta entrega.",
      },

      {
        id: "ninja-campaign",
        label: "CAMPANHAS PROMOCIONAIS",
        title: "Tipografia e fotografia em movimento.",
        text:
          "As campanhas da linha Ninja utilizam títulos expressivos, imagens de motocicletas e composições de alto contraste para apresentar as condições comerciais de cada modelo.",
        image: ninjaZX10R,
        imageAlt:
          "Campanha da Ninja ZX-10R com fotografia em pista e chamada promocional.",
      },

      {
        id: "ninja-variation",
        label: "VARIAÇÕES",
        title: "Consistência entre as peças.",
        text:
          "A linguagem foi adaptada a diferentes modelos e ofertas, preservando o contraste cromático e a presença da motocicleta como elemento central.",
        image: ninjaZX6R,
        imageAlt:
          "Campanha da Ninja ZX-6R com motocicleta em destaque e oferta comercial.",
      },

      {
        id: "z400",
        label: "FORMATOS DIGITAIS",
        title: "Comunicação pensada para diferentes espaços.",
        text:
          "A composição da Z400 trabalha fotografia, repetição tipográfica e elementos geométricos para organizar a mensagem promocional em um formato horizontal.",
        image: z400,
        imageAlt:
          "Campanha da Kawasaki Z400 com motocicleta, tipografia repetida e informações promocionais.",
      },

      {
        id: "apparel",
        label: "APLICAÇÕES GRÁFICAS",
        title: "A linguagem visual além das campanhas.",
        text:
          "Além das peças publicitárias, criei estampas para camisetas que exploram o nome Kawasaki, elementos gráficos relacionados às motocicletas e composições tipográficas.",
        image: camisetaPreta,
        imageAlt:
          "Mockup de camiseta preta com estampa Kawasaki e ilustração linear de motocicleta.",
      },

      {
        id: "apparel-variation",
        label: "ESTAMPA",
        title: "Uma aplicação em fundo claro.",
        text:
          "A versão em camiseta branca combina o símbolo Rota Kawasaki, linhas verdes e elementos tipográficos em uma composição centralizada.",
        image: camisetaBranca,
        imageAlt:
          "Mockup de camiseta branca com estampa Rota Kawasaki.",
      },

      {
        id: "interlagos",
        label: "ESTAMPA / INTERLAGOS",
        title: "Referências ao universo das pistas.",
        text:
          "A estampa Interlagos utiliza tipografia condensada, informações sobre o autódromo e o desenho do circuito como elementos principais da composição.",
        image: camisetaInterlagos,
        imageAlt:
          "Mockup de camiseta preta com estampa Interlagos e desenho do circuito.",
      },
    ],

    nextProjectCategory: "DIREÇÃO DE ARTE",
  },

  en: {
    category: "ART DIRECTION / CAMPAIGNS",
    role: "Art Direction · Graphic Design",
    platform: "Advertising campaigns and graphic materials",

    intro:
      "Creation of advertising assets and graphic applications for Rota Kawasaki, exploring a visual language built around strong contrast, expressive typography and references to motorcycle culture.",

    sections: [
      {
        id: "overview",
        label: "THE PROJECT",
        title: "Speed, identity and communication.",
        text:
          "Between 2022 and 2024, I created graphic assets for Rota Kawasaki, including promotional campaigns, product communications and T-shirt graphics. The work brought together different formats and communication goals through a visual language connected to motorcycle culture.",
        image: ninjaZX10R001,
        imageAlt: "Visual communication piece created for Rota Kawasaki.",
      },
      {
        id: "visual-language",
        label: "ART DIRECTION",
        title: "A high-impact visual language.",
        text:
          "The compositions explore black, green and white contrasts, motorcycle photography, large-scale typography and graphic elements that suggest movement and intensity. Each layout organizes commercial information while keeping the product at the center.",
        image: ninjaZX4R,
        imageAlt: "Ninja ZX-4R promotional graphic featuring technical specifications.",
      },
      {
        id: "campaigns",
        label: "CAMPAIGNS",
        title: "From product presentation to promotion.",
        text:
          "The campaigns combine model photography, promotional headlines and supporting information. Visual hierarchy highlights both the motorcycle and the main message across different advertising formats.",
        image: versysX300,
        imageAlt: "Versys-X 300 promotional campaign.",
      },
      {
        id: "z900",
        label: "PRODUCT COMMUNICATION",
        title: "Information as part of the composition.",
        text:
          "In the Z900 campaign, the promotional offer takes center stage, supported by motorcycle photography and graphic elements.",
        image: z900,
        imageAlt: "Kawasaki Z900 promotional graphic.",
      },
      {
        id: "z1000r",
        label: "CAMPAIGN EXTENSIONS",
        title: "Different models, a recognizable language.",
        text:
          "The graphic language was adapted to different motorcycles through specific photography, layouts and headlines while maintaining recurring visual elements.",
        image: z1000r,
        imageAlt: "Kawasaki Z1000R promotional graphic.",
      },
      {
        id: "ninja-campaign",
        label: "PROMOTIONAL CAMPAIGNS",
        title: "Typography and photography in motion.",
        text:
          "The Ninja campaigns use expressive headlines, motorcycle imagery and high-contrast compositions to communicate each model's promotional offer.",
        image: ninjaZX10R,
        imageAlt: "Ninja ZX-10R promotional campaign.",
      },
      {
        id: "ninja-variation",
        label: "VARIATIONS",
        title: "Consistency across campaign assets.",
        text:
          "The visual language was adapted to different models and offers, preserving the color contrast and the motorcycle's central role.",
        image: ninjaZX6R,
        imageAlt: "Ninja ZX-6R promotional campaign.",
      },
      {
        id: "z400",
        label: "DIGITAL FORMATS",
        title: "Communication across different spaces.",
        text:
          "The Z400 composition combines photography, repeated typography and geometric elements to organize the promotional message in a horizontal format.",
        image: z400,
        imageAlt: "Kawasaki Z400 promotional graphic.",
      },
      {
        id: "apparel",
        label: "GRAPHIC APPLICATIONS",
        title: "Beyond advertising campaigns.",
        text:
          "Alongside advertising assets, I created T-shirt graphics using Kawasaki lettering, motorcycle-related elements and typographic compositions.",
        image: camisetaPreta,
        imageAlt: "Black Kawasaki T-shirt mockup.",
      },
      {
        id: "apparel-variation",
        label: "APPAREL",
        title: "An application on a light background.",
        text:
          "The white T-shirt design combines the Rota Kawasaki symbol, green lines and typography in a centered composition.",
        image: camisetaBranca,
        imageAlt: "White Rota Kawasaki T-shirt mockup.",
      },
      {
        id: "interlagos",
        label: "APPAREL / INTERLAGOS",
        title: "References to racing culture.",
        text:
          "The Interlagos graphic uses condensed typography, information about the racetrack and the circuit outline as its main elements.",
        image: camisetaInterlagos,
        imageAlt: "Black Interlagos T-shirt mockup.",
      },
    ],

    nextProjectCategory: "ART DIRECTION",
  },

  fr: {
    category: "DIRECTION ARTISTIQUE / CAMPAGNES",
    role: "Direction artistique · Design graphique",
    platform: "Campagnes publicitaires et supports graphiques",

    intro:
      "Création de visuels publicitaires et d'applications graphiques pour Rota Kawasaki, à travers un langage visuel fondé sur les contrastes, une typographie expressive et des références à l'univers de la moto.",

    sections: [
      {
        id: "overview",
        label: "LE PROJET",
        title: "Vitesse, identité et communication.",
        text:
          "Entre 2022 et 2024, j'ai créé des supports graphiques pour Rota Kawasaki : campagnes promotionnelles, communication produit et visuels pour des T-shirts. Le projet réunit différents formats et objectifs de communication autour d'un langage visuel lié à l'univers de la moto.",
        image: rotaCover,
        imageAlt: "Visuel de communication créé pour Rota Kawasaki.",
      },
      {
        id: "visual-language",
        label: "DIRECTION ARTISTIQUE",
        title: "Un langage visuel à fort impact.",
        text:
          "Les compositions explorent les contrastes entre le noir, le vert et le blanc, la photographie de motos, la typographie grand format et des éléments graphiques évoquant le mouvement et l'intensité. Chaque visuel organise les informations commerciales tout en plaçant le produit au centre.",
        image: ninjaZX4R,
        imageAlt: "Visuel promotionnel de la Ninja ZX-4R.",
      },
      {
        id: "campaigns",
        label: "CAMPAGNES",
        title: "De la présentation du produit à l'offre.",
        text:
          "Les campagnes associent photographies des modèles, accroches promotionnelles et informations complémentaires. La hiérarchie visuelle met en avant la moto et le message principal dans différents formats publicitaires.",
        image: versysX300,
        imageAlt: "Campagne promotionnelle de la Versys-X 300.",
      },
      {
        id: "z900",
        label: "COMMUNICATION PRODUIT",
        title: "L'information fait partie de la composition.",
        text:
          "Dans la campagne Z900, l'offre promotionnelle occupe une place centrale, accompagnée par la photographie de la moto et les éléments graphiques.",
        image: z900,
        imageAlt: "Visuel promotionnel de la Kawasaki Z900.",
      },
      {
        id: "z1000r",
        label: "DÉCLINAISONS",
        title: "Différents modèles, un langage reconnaissable.",
        text:
          "Le langage graphique a été adapté à différentes motos grâce à des photographies, des compositions et des accroches spécifiques, tout en conservant des éléments visuels récurrents.",
        image: z1000r,
        imageAlt: "Visuel promotionnel de la Kawasaki Z1000R.",
      },
      {
        id: "ninja-campaign",
        label: "CAMPAGNES PROMOTIONNELLES",
        title: "Typographie et photographie en mouvement.",
        text:
          "Les campagnes Ninja utilisent des titres expressifs, des photographies de motos et des compositions contrastées pour présenter les offres associées à chaque modèle.",
        image: ninjaZX10R,
        imageAlt: "Campagne promotionnelle de la Ninja ZX-10R.",
      },
      {
        id: "ninja-variation",
        label: "VARIATIONS",
        title: "Une cohérence entre les visuels.",
        text:
          "Le langage visuel s'adapte aux différents modèles et offres tout en préservant les contrastes chromatiques et la place centrale de la moto.",
        image: ninjaZX6R,
        imageAlt: "Campagne promotionnelle de la Ninja ZX-6R.",
      },
      {
        id: "z400",
        label: "FORMATS NUMÉRIQUES",
        title: "Une communication adaptée aux différents espaces.",
        text:
          "La composition Z400 associe photographie, répétition typographique et éléments géométriques pour organiser le message promotionnel dans un format horizontal.",
        image: z400,
        imageAlt: "Visuel promotionnel de la Kawasaki Z400.",
      },
      {
        id: "apparel",
        label: "APPLICATIONS GRAPHIQUES",
        title: "Au-delà des campagnes publicitaires.",
        text:
          "En complément des supports publicitaires, j'ai créé des visuels pour des T-shirts en explorant le nom Kawasaki, des éléments liés à la moto et des compositions typographiques.",
        image: camisetaPreta,
        imageAlt: "Maquette d'un T-shirt Kawasaki noir.",
      },
      {
        id: "apparel-variation",
        label: "TEXTILE",
        title: "Une application sur fond clair.",
        text:
          "Le T-shirt blanc associe le symbole Rota Kawasaki, des lignes vertes et des éléments typographiques dans une composition centrée.",
        image: camisetaBranca,
        imageAlt: "Maquette d'un T-shirt Rota Kawasaki blanc.",
      },
      {
        id: "interlagos",
        label: "TEXTILE / INTERLAGOS",
        title: "Des références à l'univers des circuits.",
        text:
          "Le visuel Interlagos utilise une typographie condensée, des informations sur l'autodrome et le tracé du circuit comme éléments principaux.",
        image: camisetaInterlagos,
        imageAlt: "Maquette d'un T-shirt Interlagos noir.",
      },
    ],

    nextProjectCategory: "DIRECTION ARTISTIQUE",
  },
};

export default function RotaKawasakiCase() {
  const { language } = useLanguage();

  const t = content[language] || content.pt;

  return (
    <CaseStudy
      title="Rota Kawasaki"
      category={t.category}
      year="2022 — 2024"
      role={t.role}
      platform={t.platform}
      tools="Photoshop · Illustrator"
      intro={t.intro}
      heroImage={rotaCover}
      sections={t.sections}
      theme="rota-kawasaki"
    nextProjectTitle="Stand APAS — Pro Market"
nextProjectCategory={t.nextProjectCategory}
nextProjectLink="/stand-apas"
    />
  );
}