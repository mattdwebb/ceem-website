export type Locale = "en" | "fr";

export type RouteKey =
  | "home"
  | "team"
  | "partners"
  | "publications"
  | "news"
  | "contact"
  | "events"
  | "cirp";

export type RoleGroup =
  | "director"
  | "coDirectors"
  | "members"
  | "graduateStudents";

export type Membership = "ceem" | "cirp";

export interface Person {
  id: string;
  name: string;
  roleGroup: RoleGroup;
  roleTitle: string;
  memberships: Membership[];
  affiliation: string;
  bioEn: string;
  bioFr: string;
  profileUrl?: string;
  sortOrder: number;
}

export interface Partner {
  name: string;
  nameFr?: string;
  category: "partner" | "funder";
  summaryEn: string;
  summaryFr: string;
  url: string;
  sortOrder: number;
}

export interface Publication {
  titleEn: string;
  titleFr: string;
  authors: string[];
  year: number;
  type: string;
  outlet?: string;
  url?: string;
  featured?: boolean;
}

export interface NewsItem {
  titleEn: string;
  titleFr: string;
  people: string[];
  source: string;
  date: string;
  url: string;
  type: string;
}
