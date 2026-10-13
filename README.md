# CEEM website

The Centre for Economic Evidence on Migration (CEEM) website presents the centre in English and French. Its current SSHRC Partnership Development Grant-funded research program, the Canadian Immigration Research Program (CIRP; PCRI in French), has dedicated pages at `/en/cirp/` and `/fr/cirp/`. The site is fully static and built with [Astro](https://astro.build/).

## Local development

```sh
npm ci
npm run dev
```

The local build uses `https://ceem.ca/` and `/` by default. This sets the eventual production origin; it does not publish the site. Override `SITE_URL` and `BASE_PATH` when testing another origin or path.

## Validation

```sh
npm run check
npm run build
node scripts/validate-site.mjs / false https://ceem.ca
node scripts/audit-links.mjs
```

Pushes to `main` and pull requests run read-only GitHub Actions validation. The separate Pages workflow builds and publishes only from `main`; it uses `SITE_URL=https://ceem.ca` and `BASE_PATH=/`. The link audit checks transport and redirects, not subscriber-only content or whether a contact inbox accepts mail.

## Netlify collaborator review

The existing Netlify review site is still connected to the separate, private `mattdwebb/cirp-website` repository. This public repository does not automatically update that site or receive Deploy Previews. To reconnect the review site to `mattdwebb/ceem-website` later, use **Project configuration > Build & deploy > Continuous deployment > Repository** in Netlify and confirm these settings:

- Production branch: `main` (this Netlify branch deploy is still a review site).
- Base directory: repository root (leave the field empty); package directory: leave empty.
- Build command: `npm run check && npm run build`.
- Publish directory: `dist`.
- Node.js: 24; `BASE_PATH=/`. Both are set globally in `netlify.toml`, including for Deploy Previews.
- Leave `SITE_URL` unset unless you need an explicit origin override. Astro uses Netlify's `DEPLOY_PRIME_URL`, then `URL`, at build time.

Once connected, the main review URL updates after each successful push to `main`. Later pull requests targeting `main` receive Deploy Previews by default; each preview URL updates after successful pushes to that pull request. Review links appear in Netlify's deploy view and normally in the pull request. These builds use the preview's own origin and the same root path.

Choose who can visit the review site in Netlify at **Project configuration > General > Visitor access > Project visibility** (or **Password Protection**, depending on the plan). Apply the choice to **all deploys**, including the main branch and Deploy Previews. `netlify.toml` sets `X-Robots-Tag: noindex, nofollow` on all paths, but noindex is not access control; use Netlify visitor access settings if review content must be restricted.

## Production launch

This public repository has a fresh history so the private review repository's commit metadata is not published. The owner approved launch on 13 October 2026. The Netlify review site keeps its bilingual draft notice; GitHub Pages builds do not display it.

`ceem.ca` is registered by Christopher Worswick and has been verified in the `mattdwebb` account's GitHub Pages settings. Keep the `_github-pages-challenge-mattdwebb` TXT record in DNS. Verification alone does not launch a Pages site.

The repository's Pages source must be **GitHub Actions**, with custom domain `ceem.ca` set before changing DNS. An Actions publishing source does not need a `CNAME` file. At the DNS provider, remove the parked `@` A record (`149.56.225.6`) and add four `@` A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, and `185.199.111.153`. Change the `www` CNAME from `ceem.ca` to `mattdwebb.github.io` (not to the repository path or apex). Leave the MX, SPF, verification TXT, NS, and unrelated records untouched. These are [GitHub's documented IPv4 records](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site); recheck them before any later DNS change.

After DNS propagation, confirm both `https://ceem.ca/` and `https://www.ceem.ca/`, the redirect to the apex, canonical URLs, navigation, language switching, images, and Enforce HTTPS in repository Pages settings. Certificate provisioning can take time after DNS changes. Do not announce the site as live until these checks pass.

The existing Netlify review site continues to build from the private repository until its GitHub integration is deliberately reconnected. Do not assume it previews changes made only in this public repository.

Follow-up checks: confirm institutional status and governance wording, the public CIRP summary and French copy, manual mail delivery to `chris.worswick@carleton.ca`, and the CEEM LinkedIn page URL. Resolve DNS, HTTPS, and any review-site integration change separately. The former mailing-list form has been removed; no signup service is active.

Content is maintained in `src/data/`. Membership in CEEM and CIRP is explicit in `people.ts`; the CIRP participant list is generated from those same records. Shared routes, branding paths, and translations are in `site.ts`; deployment origin and base path are configured in `astro.config.mjs`. Existing non-program routes are unchanged.
