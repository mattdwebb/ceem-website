import type { Locale, RouteKey } from "./types";

function withBase(path: string) {
  return `${import.meta.env.BASE_URL.replace(/\/$/, "")}${path}`;
}

export const siteConfig = {
  title: "Centre for Economic Evidence on Migration",
  shortTitle: "CEEM",
  contactEmail: "chris.worswick@carleton.ca",
  heroLogo: withBase("/assets/logos/CEEM.png"),
  markLogo: withBase("/assets/logos/CEEM.png"),
};

const paths: Record<RouteKey, Record<Locale, string>> = {
  home: {
    en: "/en/",
    fr: "/fr/",
  },
  team: {
    en: "/en/team/",
    fr: "/fr/equipe/",
  },
  partners: {
    en: "/en/partners/",
    fr: "/fr/partenaires/",
  },
  publications: {
    en: "/en/publications/",
    fr: "/fr/publications/",
  },
  news: {
    en: "/en/news/",
    fr: "/fr/dans-les-medias/",
  },
  contact: {
    en: "/en/contact/",
    fr: "/fr/contact/",
  },
  events: {
    en: "/en/events/",
    fr: "/fr/evenements/",
  },
  cirp: {
    en: "/en/cirp/",
    fr: "/fr/cirp/",
  },
};

export const navOrder: Exclude<RouteKey, "home" | "events" | "cirp">[] = [
  "team",
  "partners",
  "publications",
  "news",
  "contact",
];

export function getPath(
  locale: Locale,
  routeKey: RouteKey,
  options: { localizedEnglish?: boolean } = {},
) {
  if (locale === "en" && routeKey === "home" && !options.localizedEnglish) {
    return withBase("/");
  }

  return withBase(paths[routeKey][locale]);
}

export function getAlternatePath(
  locale: Locale,
  routeKey: RouteKey,
  options: { localizedEnglish?: boolean } = {},
) {
  const alternateLocale: Locale = locale === "en" ? "fr" : "en";

  return getPath(alternateLocale, routeKey, {
    localizedEnglish: routeKey === "home" ? true : options.localizedEnglish,
  });
}

export const copy = {
  en: {
    brand: "Centre for Economic Evidence on Migration",
    languageToggleLabel: "Language",
    english: "English",
    french: "Français",
    visitProfile: "Visit profile",
    learnMore: "Learn more",
    home: {
      eyebrow: "Centre for Economic Evidence on Migration",
      title: "Independent evidence for migration policy.",
      intro:
        "CEEM brings together economists and other social scientists at Carleton University and beyond to study immigration, temporary migration, and internal mobility through independent, data-driven research.",
      primaryCta: "Meet the team",
      secondaryCta: "Explore CIRP",
      aimsTitle: "Our focus",
      aims: [
        "Study how migration policies shape economic and social outcomes using rigorous, independent evidence.",
        "Connect research with federal and provincial policy questions and public debate.",
        "Create research and data experience for undergraduate and graduate students.",
      ],
      overviewTitle: "Research and exchange",
      overview:
        "CEEM plans research meetings, workshops, academic work, policy briefs, and public-facing summaries. Its current funded program is the Canadian Immigration Research Program (CIRP).",
      programEyebrow: "Current research program",
      programTitle: "CIRP: Canadian Immigration Research Program",
      programIntro:
        "CEEM's current SSHRC Partnership Development Grant-funded program examines the design and economic effects of temporary and permanent immigration in Canada.",
      programCta: "Explore the CIRP program",
      sectionTitle: "Explore CEEM",
      sectionIntro:
        "Meet the people behind the centre and follow their research, public commentary, and developing activities.",
      sectionBlurb: {
        team: "CEEM leadership, members, and graduate researchers, with their distinct program affiliations.",
        partners:
          "The organizations and funder supporting CEEM's current CIRP program.",
        publications:
          "Research and publications by CEEM members, with accurate authorship and attribution.",
        news: "Interviews, commentary, podcasts, and news coverage involving CEEM members.",
        contact:
          "A direct way to contact the centre.",
      },
    },
    pageIntro: {
      team:
        "CEEM brings together researchers across institutions and disciplines. Membership labels distinguish the centre from its CIRP research program.",
      partners:
        "These organizations support CIRP, CEEM's current SSHRC-funded research program. They are not a list of funders of every CEEM activity.",
      publications:
        "Research by our members. Individual outputs are attributed to their authors, not automatically to CEEM or its grant.",
      news:
        "Media appearances, podcasts, and public commentary involving CEEM members.",
      contact:
        "Get in touch with the Centre for Economic Evidence on Migration.",
      events:
        "CEEM plans research meetings and workshops. Confirmed event details will appear here when available.",
    },
    team: {
      director: "Director",
      coDirectors: "Co-Directors",
      members: "Members",
      graduateStudents: "Graduate Students",
      graduateStudent: "Graduate Student",
    },
    partners: {
      partnerLabel: "Partner",
      funderLabel: "CIRP funder",
      heading: "CIRP partners",
      programLink: "About the CIRP program",
    },
    publications: {
      emptyTitle: "More publications will be added here.",
      emptyBody:
        "Verified research outputs by members will appear here as they become available.",
      viewItem: "Read publication",
    },
    news: {
      viewItem: "Open link",
    },
    contact: {
      mailUs: "Mail us",
      directEmailNote:
        "For questions about CEEM and its research program, please write to us directly.",
    },
    footer: "Centre for Economic Evidence on Migration",
    pageTitles: {
      home: "Home",
      team: "Team Members",
      partners: "Partners",
      publications: "Publications",
      news: "In the News",
      contact: "Contact Us",
      events: "Events",
      cirp: "CIRP program",
    },
    cirp: {
      eyebrow: "CEEM research program",
      title: "Canadian Immigration Research Program",
      intro:
        "CIRP is CEEM's current SSHRC Partnership Development Grant-funded research program. It brings together researchers and policy partners to study the design and economic effects of immigration in Canada.",
      funding:
        "The Canadian Immigration Research Program is supported in part by funding from the Social Sciences and Humanities Research Council of Canada. This support is provided through a Partnership Development Grant for CIRP, not for every CEEM activity.",
      scopeTitle: "Research overview",
      scope: [
        "CIRP examines how Canada selects immigrants and sets immigration levels. Its primary focus is economic immigration, while recognizing that family reunification and humanitarian admissions have different objectives and also affect the economy. The research aims to inform decisions with theory and empirical evidence rather than treating one admission pathway or target as inherently optimal.",
        "One central question is how a system should combine direct admission to permanent residence with two-step pathways through temporary work or study. Researchers will assess when prior Canadian work or education can help predict later outcomes and how selection rules shape the benefits and costs of these pathways.",
        "The program also studies economic effects beyond wages: business investment and innovation, housing, health care, and mobility. These findings will inform a framework for immigration levels and program design that considers the economy's capacity to accommodate new permanent residents, as well as federal and provincial policy objectives.",
      ],
      aimsTitle: "Three research aims",
      aims: [
        "Develop a framework for evaluating direct permanent admission alongside temporary-to-permanent pathways.",
        "Measure the broad economic effects of immigration, including labour, investment, innovation, housing, and health care.",
        "Use those insights to examine immigration levels and system design under economic capacity constraints.",
      ],
      participantsTitle: "CIRP participants",
      partnersTitle: "CIRP partners and funder",
      languageNote: "CIRP is called Programme canadien de recherche sur l'immigration (PCRI) in French.",
    },
  },
  fr: {
    brand: "Centre d’études économiques sur les migrations",
    languageToggleLabel: "Langue",
    english: "English",
    french: "Français",
    visitProfile: "Voir le profil",
    learnMore: "En savoir plus",
    home: {
      eyebrow: "Centre d’études économiques sur les migrations",
      title: "Des données probantes indépendantes pour les politiques migratoires.",
      intro:
        "Le CEEM réunit des économistes et d’autres spécialistes des sciences sociales de Carleton University et d’ailleurs pour étudier l’immigration, la migration temporaire et la mobilité interne au moyen de recherches indépendantes fondées sur les données.",
      primaryCta: "Voir l’équipe",
      secondaryCta: "Découvrir le PCRI",
      aimsTitle: "Nos priorités",
      aims: [
        "Étudier les effets économiques et sociaux des politiques migratoires à l’aide de données rigoureuses et indépendantes.",
        "Relier la recherche aux questions des gouvernements fédéral et provinciaux et au débat public.",
        "Offrir aux étudiantes et étudiants de premier cycle et des cycles supérieurs une expérience de recherche et d’analyse de données.",
      ],
      overviewTitle: "Recherche et échanges",
      overview:
        "Le CEEM prévoit des réunions de recherche, des ateliers, des travaux universitaires, des notes de politique et des synthèses accessibles au public. Son programme financé actuel est le Programme canadien de recherche sur l’immigration (PCRI).",
      programEyebrow: "Programme de recherche actuel",
      programTitle: "PCRI : Programme canadien de recherche sur l’immigration",
      programIntro:
        "Le programme actuel du CEEM, financé par une subvention de développement de partenariat du CRSH, étudie la conception et les effets économiques de l’immigration temporaire et permanente au Canada.",
      programCta: "Découvrir le programme PCRI",
      sectionTitle: "Explorer le CEEM",
      sectionIntro:
        "Découvrez les personnes qui composent le centre ainsi que leurs recherches, interventions publiques et activités à venir.",
      sectionBlurb: {
        team:
          "La direction, les membres et les étudiantes et étudiants chercheurs du CEEM, avec leurs affiliations aux programmes.",
        partners:
          "Les organisations et le bailleur de fonds qui soutiennent le programme PCRI actuel du CEEM.",
        publications:
          "Les recherches et publications des membres du CEEM, avec une attribution précise.",
        news:
          "Entrevues, commentaires publics, balados et couverture médiatique liés aux membres du CEEM.",
        contact:
          "Un moyen direct de joindre le centre.",
      },
    },
    pageIntro: {
      team:
        "Le CEEM réunit des chercheuses et chercheurs de plusieurs établissements et disciplines. Les affiliations distinguent le centre de son programme de recherche PCRI.",
      partners:
        "Ces organisations soutiennent le PCRI, le programme de recherche actuel du CEEM financé par le CRSH. Elles ne financent pas nécessairement toutes les activités du CEEM.",
      publications:
        "Recherches de nos membres. Chaque publication est attribuée à ses auteurs, et non automatiquement au CEEM ou à sa subvention.",
      news:
        "Présences médiatiques, balados et commentaires publics impliquant des membres du CEEM.",
      contact:
        "Communiquez avec le Centre d’études économiques sur les migrations.",
      events:
        "Le CEEM prévoit des réunions de recherche et des ateliers. Les événements confirmés seront annoncés ici lorsque les détails seront disponibles.",
    },
    team: {
      director: "Directeur",
      coDirectors: "Codirecteurs",
      members: "Membres",
      graduateStudents: "Étudiantes et étudiants aux cycles supérieurs",
      graduateStudent: "Étudiante ou étudiant aux cycles supérieurs",
    },
    partners: {
      partnerLabel: "Partenaire",
      funderLabel: "Bailleur de fonds du PCRI",
      heading: "Partenaires du PCRI",
      programLink: "À propos du programme PCRI",
    },
    publications: {
      emptyTitle: "D’autres publications seront ajoutées ici.",
      emptyBody:
        "Les résultats de recherche vérifiés des membres seront ajoutés lorsqu’ils seront disponibles.",
      viewItem: "Lire la publication",
    },
    news: {
      viewItem: "Ouvrir le lien",
    },
    contact: {
      mailUs: "Nous écrire",
      directEmailNote:
        "Pour toute question concernant le CEEM et son programme de recherche, écrivez-nous directement.",
    },
    footer: "Centre d’études économiques sur les migrations",
    pageTitles: {
      home: "Accueil",
      team: "Membres de l’équipe",
      partners: "Partenaires",
      publications: "Publications",
      news: "Dans les médias",
      contact: "Nous joindre",
      events: "Événements",
      cirp: "Programme PCRI",
    },
    cirp: {
      eyebrow: "Programme de recherche du CEEM",
      title: "Programme canadien de recherche sur l’immigration",
      intro:
        "Le PCRI est le programme de recherche actuel du CEEM, financé par une subvention de développement de partenariat du Conseil de recherches en sciences humaines (CRSH). Il réunit des chercheurs et des partenaires des politiques publiques pour étudier la conception et les effets économiques de l’immigration au Canada.",
      funding:
        "Le Programme canadien de recherche sur l’immigration est en partie financé par le Conseil de recherches en sciences humaines du Canada. Cet appui prend la forme d’une subvention de développement de partenariat pour le PCRI, et non pour l’ensemble des activités du CEEM.",
      scopeTitle: "Présentation de la recherche",
      scope: [
        "Le PCRI étudie la façon dont le Canada sélectionne les immigrants et fixe les niveaux d’immigration. Il porte principalement sur l’immigration économique, tout en reconnaissant que le regroupement familial et l’immigration humanitaire poursuivent d’autres objectifs et ont aussi des effets économiques. Les travaux visent à éclairer les décisions par la théorie et les données empiriques, sans présumer qu’une voie d’admission ou une cible soit toujours optimale.",
        "Une question centrale est la manière de combiner l’admission directe à la résidence permanente avec les parcours en deux étapes passant par le travail ou les études temporaires. Les chercheurs examineront dans quelle mesure l’expérience de travail ou les études au Canada permettent de prévoir les résultats ultérieurs et comment les règles de sélection influencent ces parcours.",
        "Le programme étudie aussi les effets économiques au-delà des salaires : l’investissement des entreprises et l’innovation, le logement, les soins de santé et la mobilité. Les résultats alimenteront un cadre d’analyse des niveaux d’immigration et de la conception des programmes qui tient compte de la capacité de l’économie à accueillir de nouveaux résidents permanents ainsi que des objectifs fédéraux et provinciaux.",
      ],
      aimsTitle: "Trois axes de recherche",
      aims: [
        "Élaborer un cadre pour évaluer l’admission directe à la résidence permanente et les parcours du statut temporaire au statut permanent.",
        "Mesurer les effets économiques de l’immigration sur le travail, l’investissement, l’innovation, le logement et les soins de santé.",
        "S’appuyer sur ces résultats pour étudier les niveaux d’immigration et la conception du système dans un contexte de contraintes de capacité économique.",
      ],
      participantsTitle: "Participantes et participants au PCRI",
      partnersTitle: "Partenaires et bailleur de fonds du PCRI",
      languageNote: "Le PCRI est appelé Canadian Immigration Research Program (CIRP) en anglais.",
    },
  },
} as const;

export function getDictionary(locale: Locale) {
  return copy[locale];
}
