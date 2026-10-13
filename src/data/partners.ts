import type { Partner } from "./types";

export const partners: Partner[] = [
  {
    name: "Immigration, Refugees and Citizenship Canada",
    nameFr: "Immigration, Réfugiés et Citoyenneté Canada",
    category: "partner",
    summaryEn:
      "Federal partner contributing policy insight and research collaboration on immigration systems and outcomes.",
    summaryFr:
      "Partenaire fédéral apportant des perspectives stratégiques et une collaboration de recherche sur les systèmes d’immigration et leurs effets.",
    url: "https://www.canada.ca/en/immigration-refugees-citizenship.html",
    sortOrder: 1,
  },
  {
    name: "Statistics Canada",
    nameFr: "Statistique Canada",
    category: "partner",
    summaryEn:
      "Federal data and analytical partner supporting evidence, measurement, and data-development work.",
    summaryFr:
      "Partenaire fédéral de données et d’analyse appuyant les travaux sur les données probantes, la mesure et le développement des bases de données.",
    url: "https://www.statcan.gc.ca/en/start",
    sortOrder: 2,
  },
  {
    name: "C.D. Howe Institute",
    category: "partner",
    summaryEn:
      "Policy-research partner supporting knowledge mobilization, commentary, and public-policy engagement.",
    summaryFr:
      "Partenaire de recherche en politiques publiques qui soutient la mobilisation des connaissances, la diffusion et les échanges en matière de politiques.",
    url: "https://cdhowe.org/",
    sortOrder: 3,
  },
  {
    name: "SSHRC",
    nameFr: "CRSH",
    category: "funder",
    summaryEn:
      "Funder of CIRP through a Partnership Development Grant, not of every CEEM activity.",
    summaryFr:
      "Bailleur de fonds du PCRI grâce à une subvention de développement de partenariat, et non de toutes les activités du CEEM.",
    url: "https://sshrc-crsh.canada.ca/en.aspx",
    sortOrder: 4,
  },
];
