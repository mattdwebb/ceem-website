import { defineConfig } from "astro/config";

const netlifySite =
  process.env.NETLIFY === "true"
    ? process.env.DEPLOY_PRIME_URL || process.env.URL
    : undefined;

export default defineConfig({
  site: process.env.SITE_URL || netlifySite || "https://ceem.ca",
  base: process.env.BASE_PATH ?? "/",
});
