# RPDC Limited — Website Redesign Prototype

A React + Vite redesign prototype developed by SUNEXUS using RPDC's publicly accessible website archive supplied for this project.

## Release

- Prototype version: **0.2.0**
- Branch: `main`
- Stack: React 19, Vite, React Router 7, Lucide React
- Design: responsive editorial-style real estate experience

## Run locally

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Routes

- `/` — Homepage
- `/about` — Company profile, vision, mission and core values
- `/developments` — Featured projects with category filters
- `/developments/:slug` — Project detail, features and image gallery
- `/team` — Board and management overview
- `/insights` — Links to published RPDC articles
- `/faq` — Frequently asked questions
- `/contact` — Contact details and demonstration enquiry form

## Source material and assets

The prototype references selected RPDC images and logo files from RPDC's public WordPress media library at `https://rpdcltd.com/wp-content/uploads/`. These references were identified in the downloaded website archive provided for the redesign. The application currently loads those images from RPDC's website rather than bundling copies locally.

The project copy is based on pages and content in the supplied archive, including the Home, About, Projects, Team, Contacts, FAQ, project detail pages and published articles.

## Important verification notes

- RPDC has authorised use of its existing logos, photographs, project renders and team portraits for this redesign.
- Confirm current board and management appointments, approved biographies, project status, completion dates, unit availability, pricing, title/legal information and contact details before production.
- Beacon Apartments Phase 2's source page listed May 2026 as expected completion; this is a historical target, not a verified completion status.
- The source archive contains differing marketing-count claims (including 50+ and 250+). These have not been promoted as a verified single metric in this prototype.
- The enquiry form is demonstration-only. It does not send or store submissions.
- Some social links and email routing need RPDC confirmation.
- External image URLs depend on RPDC's media server remaining accessible.
- No backend, CRM, payment, analytics or CMS integration is included.

## Credits

Designed and developed by **SUNEXUS**.
