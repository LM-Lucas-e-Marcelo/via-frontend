# VIA Vistoria Veicular — Frontend

Landing page for a vehicle inspection company. Single-page Vite + React 18 + TypeScript app, deployed on Netlify.

## Commands

- `npm run dev` — dev server with `--host`
- `npm run build` — `tsc -b && vite build` (typecheck + build together)
- `npm run lint` — ESLint (flat config)
- No test command exists

## Architecture

- **Routing**: React Router v6 with `<BrowserRouter>`. Routes in `src/routes.tsx`. Layout wraps main pages (Header + Outlet + Footer). Franchise pages are standalone (no Layout wrapper).
- **Pages**: `src/pages/` — all named exports, no `export default`. Franchise-specific pages generated dynamically from `src/constants/franchisesPages.ts`.
- **Components**: `src/components/` — subdirectories for multi-file components (header/, footer/, services/, franchise/, where-are-we/).
- **Constants/data**: `src/constants/` — services, franchise info, addresses, Brazilian states/cities lists.
- **Icons**: Central re-export barrel from `src/assets/icons/index.ts` (uses `react-icons` packages).
- **Styling**: Tailwind CSS + `tailwind-variants` for component variants. Custom theme colors: `primary` (#2a4c7f), `wherePrimary` (#009248). Font: Nunito from Google Fonts.
- **Forms**: EmailJS for contact forms (franchise inquiry, work-with-us). Public keys committed (legacy).
- **GTM**: Google Tag Manager in `index.html`. Per-franchise gtag scripts injected dynamically in `via-vistorias.tsx` (riomaina, biguacu).
- **Static files**: `robots.txt` copied to dist via `vite-plugin-static-copy`.
- **TS strict**: `strict: true`, `noUnusedLocals`, `noUnusedParameters`. Imports use `.tsx` extension.

## Franchise pages

Routes match `/biguacu`, `/meleiro`, `/portouniao`, `/icara`, `/criciuma`, `/forquilhinha`, `/riomaina`, `/arroiodosilva`, `/pomerode`, `/ilhota`, `/lages`. Each has dedicated WhatsApp number, address, map link, and optional precautionary inspection flag.

## Forms

Both `FranchiseForm` and `WorkWithUsForm` use `@emailjs/browser` with hardcoded service/template IDs and public keys. Form data is managed via `useState` with a shared `handleChange` pattern.
