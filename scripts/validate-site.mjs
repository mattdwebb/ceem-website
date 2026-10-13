import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { people } from "../src/data/people.ts";

const [base = "/cirp-website", review = "false", origin = "https://mattdwebb.github.io"] = process.argv.slice(2);
const dist = join(process.cwd(), "dist");
const prefix = base === "/" ? "" : base.replace(/\/$/, "");
const routes = [
  "/", "/en/", "/fr/", "/en/cirp/", "/fr/cirp/",
  "/en/team/", "/fr/equipe/", "/en/partners/", "/fr/partenaires/",
  "/en/publications/", "/fr/publications/", "/en/news/", "/fr/dans-les-medias/",
  "/en/contact/", "/fr/contact/", "/en/events/", "/fr/evenements/",
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function htmlFor(route) {
  const file = join(dist, route.slice(1), "index.html");
  assert(existsSync(file), `Missing route: ${route}`);
  return readFileSync(file, "utf8");
}

assert(existsSync(join(dist, "assets", "logos", "CEEM.png")), "Missing CEEM logo");
assert(routes.length === 17, "Unexpected route inventory");
assert(people.length === 24, "Unexpected team roster size");
assert(new Set(people.map((person) => person.id)).size === people.length, "Duplicate person ID");
assert(people.filter((person) => person.memberships.includes("cirp")).length === 22, "Unexpected CIRP roster size");
const sharedIds = new Set([
  "christopher-worswick", "matthew-webb", "mikal-skuterud", "louis-philippe-beland",
  "david-green", "tahreen-zahra", "sunny-karim",
]);
const ceemOnlyIds = new Set(["tony-fang", "meredith-lilly"]);
for (const person of people) {
  const expected = sharedIds.has(person.id) ? ["ceem", "cirp"] : ceemOnlyIds.has(person.id) ? ["ceem"] : ["cirp"];
  assert(person.memberships.join() === expected.join(), `Wrong membership: ${person.name}`);
}
assert(people.find((person) => person.roleGroup === "director")?.id === "christopher-worswick", "Wrong director");
assert(people.filter((person) => person.roleGroup === "coDirectors").map((person) => person.id).sort().join() ===
  ["matthew-webb", "mikal-skuterud", "louis-philippe-beland"].sort().join(), "Wrong co-directors");

for (const route of routes) {
  const html = htmlFor(route);
  const expectedCanonical = `${origin}${prefix}${route}`;
  assert(html.includes(`rel="canonical" href="${expectedCanonical}"`), `Wrong canonical: ${route}`);
  assert(html.includes("CEEM.png"), `Missing centre logo: ${route}`);
  assert(html.includes("Centre for Economic Evidence on Migration") || html.includes("Centre d’études économiques sur les migrations"), `Missing CEEM brand: ${route}`);
  assert(!/mailing-list|Join mailing list|liste de diffusion/i.test(html), `Stale signup UI: ${route}`);

  const notice = html.includes("review-notice");
  assert(notice === (review === "true"), `Wrong staging notice: ${route}`);
  if (review === "true") {
    assert(html.includes(route.startsWith("/fr/") ? "Ébauche — pour examen par les collaborateurs" : "Draft — for collaborator review"), `Wrong notice language: ${route}`);
  }

  for (const [, raw] of html.matchAll(/\b(?:href|src)="([^"]+)"/g)) {
    if (!raw.startsWith("/")) continue;
    assert(raw.startsWith(`${prefix}/`), `Missing base in ${route}: ${raw}`);
    assert(!raw.includes(`${prefix}${prefix}/`) || !prefix, `Doubled base in ${route}: ${raw}`);
    const [pathname, fragment] = raw.split("#");
    const cleanPath = decodeURIComponent(pathname.split("?")[0].slice(prefix.length + 1));
    const target = join(dist, cleanPath, pathname.endsWith("/") ? "index.html" : "");
    assert(existsSync(target), `Broken local target in ${route}: ${raw}`);
    if (fragment && target.endsWith(".html")) {
      assert(readFileSync(target, "utf8").includes(`id="${fragment}"`), `Missing fragment in ${route}: ${raw}`);
    }
  }
}

const enTeam = htmlFor("/en/team/");
const enCirp = htmlFor("/en/cirp/");
const frCirp = htmlFor("/fr/cirp/");
for (const route of ["/en/contact/", "/fr/contact/"]) {
  const html = htmlFor(route);
  assert(html.includes('href="mailto:chris.worswick@carleton.ca"'), `Wrong contact mailto: ${route}`);
  assert(html.includes("chris.worswick@carleton.ca"), `Wrong displayed contact: ${route}`);
  assert(!html.includes("contact@cirp.ca"), `Outdated contact address: ${route}`);
}
for (const name of ["David Green", "Tahreen Zahra", "Sunny Karim"]) {
  assert(enTeam.includes(name) && enCirp.includes(name), `Missing shared member: ${name}`);
}
for (const name of ["Tony Fang", "Meredith Lilly"]) {
  assert(enTeam.includes(name) && !enCirp.includes(name), `Incorrect CIRP membership: ${name}`);
}
assert((enTeam.match(/David Green/g) ?? []).length === 1, "Duplicate David Green card");
assert(enCirp.includes(`href="${prefix}/fr/cirp/"`), "English CIRP language switch is wrong");
assert(frCirp.includes(`href="${prefix}/en/cirp/"`), "French CIRP language switch is wrong");
assert(enCirp.includes("SSHRC") && frCirp.includes("CRSH"), "Missing bilingual funding context");

console.log(`Validated ${routes.length} static routes at ${origin}${prefix}/ (review=${review})`);
