# ZQM Computing

Marketing site for ZQM Computing — 2026 IT services for Florida businesses:
managed IT, preemptive cybersecurity, cloud cost control (FinOps), and AI consulting.
Attestation-grade, delivered local to the Volusia / Flagler Atlantic coast.

## Deploy
GitHub Pages serves `index.html` at the repo root. Push `main` to publish.

```
git push origin main
```

## Assets
- `index.html` — single-page site (static, no build step)
- `og-image.png` — 1200×630 social card

## Regenerate OG card
Requires Pillow. Edit the generator script, run, then delete it:

```
python gen_og.py && rm -f gen_og.py
```
