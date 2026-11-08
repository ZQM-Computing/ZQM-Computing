# ZQM Computing commercial site — private-release scaffold

This is an **unpublished Hugo site prototype** for ZQM Computing's engineering services. It is distinct from ZQM Labs and has **no production routing or deployment workflow**.

## Fail-closed publication controls

- `hugo.toml` deliberately uses `https://example.invalid/` and `publicRelease = false`.
- Draft pages render `noindex,nofollow`; the generated robots.txt disallows all crawlers.
- Canonical URLs are omitted until a real Computing-owned domain and hosting target have been verified.
- Do **not** enable publicRelease, change the baseURL or create a deployment pipeline without review of DNS, ownership, accurate legal/contracting statements, links, privacy and accessibility.
- Proposed offerings are not guarantees of price, scope, geographic coverage, availability, credentials or professional licensure.

## Local build

From `commercial-site/` run `hugo --gc --minify --destination public` with a locally installed supported Hugo version; inspect the output with your browser and verify `robots.txt` and metadata. No runtime build verification is claimed here.

## Offline public SEO release gate

The existing preview build stays unindexable; the new `scripts/verify-release.cjs` provides a **separate, manual, offline check** for an approved public build artifact. It does not deploy or alter the current site.

After the Computing-specific hostname is verified and an explicitly approved public build is produced in a separate review environment, run:

```sh
node commercial-site/scripts/verify-release.cjs /path/to/approved-public-artifact https://approved-computing-host.example
```

Replace the example hostname with the *actual verified HTTPS production origin*. The verifier rejects placeholder origins and checks public robots/sitemap references, five important routes, unique titles, canonical/OG URL alignment, indexability, headings and parseable Organization JSON-LD. The fixture test `node --test commercial-site/scripts/verify-release.test.cjs` runs automatically on preview PRs, but **does not constitute approval to publish**.

Never change `publicRelease` or `baseURL` simply to make a test pass. First approve DNS, brand separation, access controls, rollback, legal and customer data policies; then test the reviewed public artifact and release it through a separate controlled PR.

## Production readiness checklist

1. Approve Computing-only domain and hosting route.
2. Validate current service copy, buyer contact and contracting disclosures.
3. Add a build/check workflow that rejects invalid canonicals, duplicate titles, missing descriptions, dead internal links and accidentally public preview pages.
4. Verify legal and privacy disclosures, physical-data limitations, accessibility and safe inquiry handling.
5. Deploy to a review preview, inspect generated source and navigation, then obtain release approval.
6. Enable production indexation only after crawlability, analytics and release provenance are verified.
