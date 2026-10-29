# Portfolio Website

A personal portfolio website built with React, TypeScript, and Vite. It includes a home page, project pages, an about page, and legal information.

## Run locally

### Requirements

- [Node.js](https://nodejs.org/) 20.19+ or 22.12+
- npm (included with Node.js)
- Git, if you are cloning the repository

### Install and start

Clone the repository and move into the project directory:

```bash
git clone https://github.com/dawillu/portfolio.git
cd portfolio
```

Install the dependencies and start the development server:

```bash
npm ci
npm run dev
```

Open the local URL printed in the terminal (usually `http://localhost:5173`). The development server watches for changes and refreshes the page as you edit files.

## Customize

- Update the home page and shared layout in `src/components/` and `src/App.tsx`.
- Edit individual project and information pages in `src/pages/`.
- Adjust global styles in `src/index.css`; page and component styles are alongside their source files.
- Add or replace static files such as images in `public/`.

The routes for the home page, projects, and information pages are configured in `src/App.tsx`.

## Other commands

```bash
npm run lint    # Check the code with ESLint
npm run build   # Type-check and create a production build in dist/
npm run preview # Preview the production build locally
```

Run `npm run build` before `npm run preview`.
