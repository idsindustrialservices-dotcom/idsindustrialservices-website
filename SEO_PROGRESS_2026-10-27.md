# IDS Industrial Services — SEO checkpoint (2026-10-27)

## Goal
Equal priority: industrial maintenance / packaging equipment repair leads across Florida, and packaging machine sales leads across the United States. Preserve site design and working forms.

## Implemented and merged into main
- PR #20: https://github.com/idsindustrialservices-dotcom/idsindustrialservices-website/pull/20 — maintenance and machine-sales metadata/H1/sitemap.
- PR #21: https://github.com/idsindustrialservices-dotcom/idsindustrialservices-website/pull/21 — dedicated `stick-pack-machines-for-sale.html`, expanded Gummy/Food/Complete Lines copy and internal links, seven Florida location-page links, sitemap; `ids_form_success` dataLayer hook on `?sent=1`.
- PR #22: https://github.com/idsindustrialservices-dotcom/idsindustrialservices-website/pull/22 — noindex on two legacy city alias pages (Davenport and Kissimmee).
- PR #23: https://github.com/idsindustrialservices-dotcom/idsindustrialservices-website/pull/23 — GSC-informed metadata and relevant sections for Orlando and Lakeland maintenance, packaging machinery service, gummy, complete lines and general machines for sale; sitemap lastmod updates.
- All four PRs confirmed merged on 2026-10-27. Source branch: main.

## Search Console baseline
Read via Windsor.ai `searchconsole` for `https://idsindustrialservices.com/`, period 2026-09-27 through 2026-10-24 (before recent changes):
- 7 clicks, 1,234 impressions in date-level totals.
- Examples: "industrial maintenance orlando fl" 29 impressions, average position ~17.5; "conveyor belt repair lakeland fl" 10 / ~21.9; "packaging machine service" 64 / ~41.5; "complete packaging lines" 22 / ~39.5; "gummy packaging machine" 17 / ~58.1.
- Sitemap `https://idsindustrialservices.com/sitemap.xml` reported fetched 2026-10-26 with zero errors/warnings.
- Caution: keyword-level response had fewer aggregated rows and zero query-attributed clicks; use site/date or page totals for overall performance and avoid summing anonymized query data.
- A growth trend was observed in October BEFORE the 2026-10-27 merged changes; do not attribute it to those updates.

## Remaining items
1. Verify live Cloudflare Pages deployment of main and HTTP/HTTPS + www, canonical, .html aliases and 301 redirects; test form submissions.
2. Confirm new and changed URLs in live sitemap and request/monitor Google indexation.
3. Set up actual GA4/GTM configuration and validate machine quote/service form conversions. The current JavaScript hook alone does not collect GA4 events.
4. Audit mobile performance / Core Web Vitals with real measurements, address issues shown.
5. Incorporate authentic equipment imagery, confirmed inventory/specs, installed projects and customer-approved case studies; never invent details.
6. Review remaining legacy Lakeland alias and any other duplicates without disrupting working redirects.
7. Improve localized service content and machine landing pages based on observed query/page performance; avoid keyword stuffing.

## Recommended next evaluation
- Technical publication/indexing smoke test immediately after Cloudflare deployment confirmation.
- First Search Console post-change review around 2026-11-17 to 2026-11-24 (3–4 weeks after Oct 27), conditional on deployment.
- More reliable SEO evaluation around 2026-12-08 to 2026-12-22 (6–8 weeks), allowing Google recrawl/indexing and lag.
- Compare equal 28-day periods and track impressions, clicks, CTR, positions, indexed URLs and qualified form leads. Segment Florida maintenance and USA machine sales.
- Before making further metadata changes, inspect query->page associations, canonical/indexing and whether the new pages have sufficient impressions.

## Resume instruction
Use this checkpoint and GitHub main as source of truth, verify deployment and pull fresh Windsor.ai Search Console data. Do not claim rankings improved without a post-deployment comparison.
