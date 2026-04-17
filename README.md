# Minifigure Universe

A single-page React app that organizes a **private minifigure photo gallery** by franchise and team. Browse hubs such as Marvel, DC, Lucasfilm, Nintendo, Hasbro, LEGO, and more; each series can drill into allies and enemies (or similar) sub-pages. The site includes global search for pages and indexed characters, image lightboxes, and a contact page.

This project is **not affiliated with** LEGO, Mega Brands, Hasbro, Marvel, DC, Lucasfilm, or other rights holders. Characters and brands belong to their respective owners.

## Tech stack

- [React](https://react.dev/) 19
- [Vite](https://vite.dev/) 7
- [React Router](https://reactrouter.com/) 7 (`BrowserRouter`, client-side routes)
- [yet-another-react-lightbox](https://yet-another-react-lightbox.com/) for image galleries

## Prerequisites

- **Node.js** (current LTS recommended) and npm

## Getting started

Install dependencies:

```bash
npm install
```

Run the dev server (with hot reload):

```bash
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Scripts

| Command        | Description                          |
|----------------|--------------------------------------|
| `npm run dev`  | Start Vite dev server                |
| `npm run build`| Production build to `dist/`          |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint on the project            |

## Project layout (high level)

- `index.html` — App shell and page title
- `src/main.jsx` — React entry
- `src/App.jsx` — Router, navigation, search bar, and all route definitions
- `src/components/` — Page components by franchise (e.g. `Marvel/`, `DC/`, `Nintendo/`)
- `src/assets/` — Logos and static images
- `src/data/` — Data helpers such as the character search index (`characterSearchIndex.js`)

Franchise hubs live under `src/components/`; many series use paired `*Alies.jsx` / `*Enimies.jsx` (naming matches the existing codebase) for sub-galleries.

## Production build

```bash
npm run build
```

Output is written to `dist/`. Deploy `dist/` to any static host; configure the host for **SPA fallback** so unknown paths serve `index.html` (required for client-side routing).
