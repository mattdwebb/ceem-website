import type { Locale, Membership, Person } from "./types";

export const people: Person[] = [
  {
    id: "christopher-worswick",
    name: "Christopher Worswick",
    roleGroup: "director",
    roleTitle: "Director",
    memberships: ["ceem", "cirp"],
    affiliation: "Carleton University",
    bioEn:
      "Professor of Economics and director of CEEM. His research examines the economics of immigration, immigrant selection, and labour markets.",
    bioFr:
      "Professeur d’économie et directeur du CEEM. Ses recherches portent sur l’économie de l’immigration, la sélection des immigrants et les marchés du travail.",
    profileUrl: "https://carleton.ca/economics/people/worswick-christopher/",
    sortOrder: 1,
  },
  {
    id: "louis-philippe-beland",
    name: "Louis-Philippe Béland",
    roleGroup: "coDirectors",
    roleTitle: "Co-Director",
    memberships: ["ceem", "cirp"],
    affiliation: "Carleton University",
    bioEn:
      "Associate Professor of Economics and co-director of CEEM. His research contributes to the study of health and the broader economic effects of immigration.",
    bioFr:
      "Professeur agrégé d’économie et codirecteur du CEEM. Ses recherches contribuent à l’étude de la santé et des effets économiques plus larges de l’immigration.",
    profileUrl:
      "https://carleton.ca/economics/people/beland-louis-philippe/",
    sortOrder: 4,
  },
  {
    id: "mikal-skuterud",
    name: "Mikal Skuterud",
    roleGroup: "coDirectors",
    roleTitle: "Co-Director",
    memberships: ["ceem", "cirp"],
    affiliation: "University of Waterloo",
    bioEn:
      "Professor of Economics and co-director of CEEM. His research focuses on immigration policy and labour markets.",
    bioFr:
      "Professeur d’économie et codirecteur du CEEM. Ses recherches portent sur les politiques d’immigration et les marchés du travail.",
    profileUrl: "https://uwaterloo.ca/economics/profiles/mikal-skuterud",
    sortOrder: 3,
  },
  {
    id: "matthew-webb",
    name: "Matthew D. Webb",
    roleGroup: "coDirectors",
    roleTitle: "Co-Director",
    memberships: ["ceem", "cirp"],
    affiliation: "Carleton University",
    bioEn:
      "Associate Professor of Economics and co-director of CEEM. He brings econometric expertise to research on the economic effects of immigration.",
    bioFr:
      "Professeur agrégé d’économie et codirecteur du CEEM. Il apporte son expertise en économétrie aux recherches sur les effets économiques de l’immigration.",
    profileUrl: "https://mattdwebb.github.io/",
    sortOrder: 2,
  },
  {
    id: "marie-connolly",
    name: "Marie Connolly",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Université du Québec à Montréal",
    bioEn:
      "Professor of Economics at ESG UQAM. She contributes to Quebec-focused research on temporary and permanent immigration policy across multiple CIRP aims.",
    bioFr:
      "Professeure d’économie à l’ESG UQAM. Elle contribue aux recherches axées sur le Québec concernant les politiques d’immigration temporaire et permanente dans plusieurs axes du PCRI.",
    profileUrl: "https://professeurs.uqam.ca/professeur/connolly.marie",
    sortOrder: 5,
  },
  {
    id: "david-green",
    name: "David Green",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["ceem", "cirp"],
    affiliation: "University of British Columbia",
    bioEn:
      "Professor in UBC's Vancouver School of Economics. His research examines wage and employment structures, including questions in labour economics and immigration.",
    bioFr:
      "Professeur à la Vancouver School of Economics de l’UBC. Ses recherches portent sur la structure des salaires et de l’emploi, notamment en économie du travail et de l’immigration.",
    profileUrl: "https://economics.ubc.ca/profile/david-green/",
    sortOrder: 6,
  },
  {
    id: "michael-haan",
    name: "Michael Haan",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Western University",
    bioEn:
      "Professor of Sociology and demographer at Western University. His work on immigrant labour market integration, housing, and data development supports CIRP’s housing research.",
    bioFr:
      "Professeur de sociologie et démographe à Western University. Ses travaux sur l’intégration des immigrants au marché du travail, le logement et le développement des données appuient les recherches du PCRI sur le logement.",
    profileUrl: "https://sociology.uwo.ca/people/faculty-profiles/michael-haan.html",
    sortOrder: 7,
  },
  {
    id: "laura-montenovo",
    name: "Laura Montenovo",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Purdue University",
    bioEn:
      "Assistant Professor of Agricultural Economics at Purdue University. She contributes policy-oriented research supporting aim 2, including international mobility and related economic effects.",
    bioFr:
      "Professeure adjointe en économie agricole à Purdue University. Elle contribue à des recherches orientées vers les politiques publiques dans l’axe 2, notamment sur la mobilité internationale et ses effets économiques.",
    profileUrl:
      "https://extension.purdue.edu/cdext/about-us/our-team/profile/laura-montenovo/laura-montenovo.html",
    sortOrder: 8,
  },
  {
    id: "stephen-tino",
    name: "Stephen Tino",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Toronto Metropolitan University",
    bioEn:
      "Assistant Professor of Economics at Toronto Metropolitan University. His research in labour and immigration economics supports multiple CIRP projects on Canadian immigration policy.",
    bioFr:
      "Professeur adjoint d’économie à Toronto Metropolitan University. Ses recherches en économie du travail et de l’immigration soutiennent plusieurs projets du PCRI sur la politique d’immigration canadienne.",
    profileUrl:
      "https://www.torontomu.ca/economics/people/faculty/stephen-tino/",
    sortOrder: 9,
  },
  {
    id: "casey-warman",
    name: "Casey Warman",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Dalhousie University",
    bioEn:
      "Professor of Economics at Dalhousie University. He helps lead work on health care, housing, and broader societal outcomes connected to immigration.",
    bioFr:
      "Professeur d’économie à Dalhousie University. Il contribue à la direction des travaux sur les soins de santé, le logement et les résultats sociétaux plus larges liés à l’immigration.",
    profileUrl:
      "https://www.dal.ca/faculty/science/economics/faculty-staff/our-faculty/professors/casey-warman.html",
    sortOrder: 10,
  },
  {
    id: "coady-wing",
    name: "Coady Wing",
    roleGroup: "members",
    roleTitle: "Co-Applicant",
    memberships: ["cirp"],
    affiliation: "Indiana University",
    bioEn:
      "Professor at Indiana University’s O’Neill School. He contributes applied econometric and policy expertise across wage, health, international migration, and broader social-outcome research.",
    bioFr:
      "Professeur à l’O’Neill School de l’Indiana University. Il apporte une expertise en économétrie appliquée et en politiques publiques aux recherches sur les salaires, la santé, la migration internationale et d’autres résultats sociaux.",
    profileUrl:
      "https://spea.indiana.edu/faculty-research/directory/profiles/faculty/full-time/wing-coady.html",
    sortOrder: 11,
  },
  {
    id: "stephane-arabackyj",
    name: "Stephane Arabackyj",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Immigration, Refugees and Citizenship Canada",
    bioEn:
      "Assistant Director at Immigration, Refugees and Citizenship Canada. He works closely with the academic team, especially on two-step immigration and policy-relevant analysis in aim 3.",
    bioFr:
      "Directeur adjoint à Immigration, Réfugiés et Citoyenneté Canada. Il travaille étroitement avec l’équipe universitaire, surtout sur l’immigration en deux étapes et les analyses stratégiques de l’axe 3.",
    sortOrder: 12,
  },
  {
    id: "matthew-doyle",
    name: "Matthew Doyle",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "University of Waterloo",
    bioEn:
      "Associate Professor of Economics at the University of Waterloo. He contributes theoretical analysis for two-step immigration, capital investment, and innovation-related work.",
    bioFr:
      "Professeur agrégé d’économie à l’Université de Waterloo. Il contribue à l’analyse théorique de l’immigration en deux étapes, de l’investissement en capital et de l’innovation.",
    profileUrl: "https://uwaterloo.ca/economics/profiles/matthew-doyle",
    sortOrder: 13,
  },
  {
    id: "christina-gabriel",
    name: "Christina Gabriel",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Carleton University",
    bioEn:
      "Professor of Political Science at Carleton University. She brings political science, migration, and feminist-policy perspectives to CIRP, especially for aim 3.",
    bioFr:
      "Professeure de science politique à Carleton University. Elle apporte au PCRI des perspectives issues de la science politique, des études migratoires et de l’analyse féministe des politiques, en particulier pour l’axe 3.",
    profileUrl: "https://carleton.ca/polisci/people/gabriel-christina/",
    sortOrder: 14,
  },
  {
    id: "chantal-goyette",
    name: "Chantal Goyette",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Immigration, Refugees and Citizenship Canada",
    bioEn:
      "Senior Director of Research and Knowledge Mobilization at Immigration, Refugees and Citizenship Canada. She provides policy insight and feedback across the life of the project.",
    bioFr:
      "Directrice principale de la recherche et de la mobilisation des connaissances à Immigration, Réfugiés et Citoyenneté Canada. Elle apporte des perspectives stratégiques et des rétroactions à toutes les étapes du projet.",
    sortOrder: 15,
  },
  {
    id: "ryan-macdonald",
    name: "Ryan Macdonald",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Statistics Canada",
    bioEn:
      "Director in Economic and Social Analysis and Modelling at Statistics Canada. He contributes long-range guidance on data, modelling, and analytical coordination across the partnership.",
    bioFr:
      "Directeur de l’analyse et de la modélisation économiques et sociales à Statistique Canada. Il contribue à l’orientation générale des travaux sur les données, la modélisation et la coordination analytique du partenariat.",
    sortOrder: 16,
  },
  {
    id: "parisa-mahboubi",
    name: "Parisa Mahboubi",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "C.D. Howe Institute",
    bioEn:
      "Associate Director of Research at the C.D. Howe Institute. She contributes to multiple research projects and supports partnership, knowledge-mobilization, and equity-related work.",
    bioFr:
      "Directrice associée de la recherche au C.D. Howe Institute. Elle contribue à plusieurs projets de recherche et soutient les travaux liés au partenariat, à la mobilisation des connaissances et à l’équité.",
    profileUrl: "https://cdhowe.org/our-people/parisa-mahboubi/",
    sortOrder: 17,
  },
  {
    id: "daniel-parent",
    name: "Daniel Parent",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "HEC Montréal",
    bioEn:
      "Labour economist and former professor at HEC Montréal. He contributes deep expertise on Quebec’s economy and supports Quebec-specific CIRP research.",
    bioFr:
      "Économiste du travail et ancien professeur à HEC Montréal. Il apporte une expertise approfondie de l’économie québécoise et soutient les recherches du PCRI propres au Québec.",
    profileUrl:
      "https://www.hec.ca/en/news/2016/Daniel-Parent-award-Actualite-economique.html",
    sortOrder: 18,
  },
  {
    id: "saul-schwartz",
    name: "Saul Schwartz",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Carleton University",
    bioEn:
      "Distinguished Research Professor in the School of Public Policy and Administration at Carleton University. He contributes especially to research on international students and two-step immigration.",
    bioFr:
      "Professeur de recherche distingué à la School of Public Policy and Administration de Carleton University. Il contribue particulièrement aux recherches sur les étudiantes et étudiants internationaux et l’immigration en deux étapes.",
    profileUrl: "https://carleton.ca/sppa/people/schwartz-saul/",
    sortOrder: 19,
  },
  {
    id: "haozhen-zhang",
    name: "Haozhen Zhang",
    roleGroup: "members",
    roleTitle: "Collaborator",
    memberships: ["cirp"],
    affiliation: "Immigration, Refugees and Citizenship Canada",
    bioEn:
      "Senior Policy Analyst at Immigration, Refugees and Citizenship Canada. He works closely with CIRP on housing, immigration data, and the economic impacts of two-step immigration.",
    bioFr:
      "Analyste principal des politiques à Immigration, Réfugiés et Citoyenneté Canada. Il travaille étroitement avec le PCRI sur le logement, les données sur l’immigration et les effets économiques de l’immigration en deux étapes.",
    sortOrder: 20,
  },
  {
    id: "tony-fang",
    name: "Tony Fang",
    roleGroup: "members",
    roleTitle: "Member",
    memberships: ["ceem"],
    affiliation: "Memorial University of Newfoundland",
    bioEn:
      "Professor of Economics and Stephen Jarislowsky Chair in Cultural and Economic Transformation. His research includes immigration, labour economics, and industrial relations.",
    bioFr:
      "Professeur d’économie et titulaire de la chaire Stephen Jarislowsky en transformation culturelle et économique. Ses recherches portent notamment sur l’immigration, l’économie du travail et les relations industrielles.",
    profileUrl: "https://www.mun.ca/economics/people/faculty/",
    sortOrder: 21,
  },
  {
    id: "meredith-lilly",
    name: "Meredith Lilly",
    roleGroup: "members",
    roleTitle: "Member",
    memberships: ["ceem"],
    affiliation: "Carleton University",
    bioEn:
      "Professor and Simon Reisman Chair in International Economic Policy at Carleton University's Norman Paterson School of International Affairs. Her research focuses on trade policy and economic security.",
    bioFr:
      "Professeure et titulaire de la chaire Simon Reisman en politique économique internationale à la Norman Paterson School of International Affairs de Carleton University. Ses recherches portent sur la politique commerciale et la sécurité économique.",
    profileUrl: "https://carleton.ca/npsia/people/meredith-lilly/",
    sortOrder: 22,
  },
  {
    id: "tahreen-zahra",
    name: "Tahreen Zahra",
    roleGroup: "graduateStudents",
    roleTitle: "Graduate Student",
    memberships: ["ceem", "cirp"],
    affiliation: "Carleton University",
    bioEn:
      "PhD candidate in Economics at Carleton University. Her research fields include labour, health, and development economics.",
    bioFr:
      "Doctorante en économie à Carleton University. Ses domaines de recherche comprennent l’économie du travail, de la santé et du développement.",
    profileUrl: "https://carleton.ca/economics/people/tahreen-zahra/",
    sortOrder: 23,
  },
  {
    id: "sunny-karim",
    name: "Sunny Karim",
    roleGroup: "graduateStudents",
    roleTitle: "Graduate Student",
    memberships: ["ceem", "cirp"],
    affiliation: "Carleton University",
    bioEn: "Graduate student and CEEM/CIRP member at Carleton University.",
    bioFr: "Étudiant aux cycles supérieurs et membre du CEEM/PCRI à Carleton University.",
    profileUrl: "https://sunnyrkarim.github.io/",
    sortOrder: 24,
  },
];

export function getMembersOf(membership: Membership) {
  return people
    .filter((person) => person.memberships.includes(membership))
    .sort((left, right) => left.sortOrder - right.sortOrder);
}

export function getMembershipLabel(locale: Locale, memberships: Membership[]) {
  const ceem = memberships.includes("ceem");
  const cirp = memberships.includes("cirp");

  if (locale === "fr") {
    return ceem && cirp ? "Membre CEEM/PCRI" : ceem ? "Membre du CEEM" : "Membre du PCRI";
  }

  return ceem && cirp ? "CEEM/CIRP member" : ceem ? "CEEM member" : "CIRP member";
}
