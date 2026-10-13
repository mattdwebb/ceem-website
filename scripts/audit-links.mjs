import { people } from "../src/data/people.ts";
import { partners } from "../src/data/partners.ts";
import { publications } from "../src/data/publications.ts";
import { newsItems } from "../src/data/news.ts";

const links = new Map();
for (const person of people) {
  if (person.profileUrl) links.set(person.profileUrl, `Profile: ${person.name}`);
}
for (const partner of partners) links.set(partner.url, `Partner: ${partner.name}`);
for (const publication of publications) {
  if (publication.url) links.set(publication.url, `Publication: ${publication.titleEn}`);
}
for (const item of newsItems) links.set(item.url, `Media: ${item.titleEn}`);

async function probe(url, method) {
  let lastError;
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const response = await fetch(url, {
        method,
        redirect: "follow",
        signal: AbortSignal.timeout(12000),
        headers: { "User-Agent": "Mozilla/5.0 (compatible; CEEM-link-audit/1.0)" },
      });
      if (attempt === 0 && (response.status === 429 || response.status >= 500)) {
        await new Promise((resolve) => setTimeout(resolve, 300));
        continue;
      }
      return response;
    } catch (error) {
      lastError = error;
      if (attempt === 0) await new Promise((resolve) => setTimeout(resolve, 300));
    }
  }
  throw lastError;
}

async function audit([url, label]) {
  try {
    let response = await probe(url, "HEAD");
    if (!response.ok) response = await probe(url, "GET");
    const original = new URL(url);
    const final = new URL(response.url);
    const genericLanding = original.pathname !== "/" && (final.pathname === "/" || /404|not-found/i.test(final.pathname));
    const classification = genericLanding
      ? "unverified landing"
      : response.status === 403 || response.status === 429
        ? "blocked/rate-limited"
        : response.ok
          ? response.url === url ? "verified HTTP" : "verified redirect HTTP"
          : response.status >= 500
            ? "unverified server error"
            : "broken HTTP";
    return { classification, status: response.status, label, url, finalUrl: response.url };
  } catch (error) {
    return { classification: "unverified request error", status: null, label, url, error: error.message };
  }
}

const entries = [...links];
const results = [];
for (let index = 0; index < entries.length; index += 4) {
  results.push(...await Promise.all(entries.slice(index, index + 4).map(audit)));
}

for (const result of results) console.log(JSON.stringify(result));
const totals = Object.groupBy(results, (result) => result.classification);
console.error(JSON.stringify({ total: results.length, counts: Object.fromEntries(Object.entries(totals).map(([key, rows]) => [key, rows.length])) }));
