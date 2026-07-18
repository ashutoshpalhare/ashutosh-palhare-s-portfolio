# Ashutosh Palhare — Portfolio

A modern, premium, fully responsive personal portfolio website for **Ashutosh Palhare** — a versatile IT professional, web & app developer, cybersecurity enthusiast, and graphic designer.

The site is built with a futuristic black-and-orange cyber theme, smooth scroll animations, interactive project cards, and a polished dark-first UI.

---

## Features

- **Single-page portfolio** with sections for Home, About, Skills, Experience, Projects, Testimonials, and Contact
- **Futuristic dark theme** with black background and vibrant orange (`#FF6200`) accents
- **Light / dark mode toggle** — default is dark
- **Typing animation** for the hero tagline
- **Scroll-triggered animations** (fade-up + scale) across all sections
- **Animated skill progress bars** triggered on scroll
- **Filterable project grid** with hover glow and lift effects
- **Sticky, blurred navigation bar** with smooth scroll-to-section links
- **Parallax-style floating effect** on the profile photo
- **Responsive mobile-first layout** with a hamburger menu on smaller screens
- **Contact form** with validation and toast feedback
- **Social links** and direct contact info
- **SEO-friendly** meta tags and Open Graph metadata

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | [TanStack Start](https://tanstack.com/start) (full-stack React 19) |
| UI Library | React 19 + TypeScript |
| Styling | Tailwind CSS v4 |
| Components | shadcn/ui (Radix UI primitives) |
| Icons | Lucide React |
| Form Handling | React Hook Form + Zod |
| Notifications | Sonner |
| Build Tool | Vite 8 |

---

## Project Structure

```
.
├── src/
│   ├── components/
│   │   ├── portfolio/          # Portfolio component
│   │   │   └── Portfolio.tsx
│   │   └── ui/                 # shadcn/ui components (button, card, input, etc.)
│   ├── hooks/                  # Custom hooks (e.g., use-mobile)
│   ├── lib/                    # Utility libraries (utils, error handling)
│   ├── routes/                 # TanStack Start file-based routes
│   │   ├── __root.tsx          # Root layout + theme shell
│   │   ├── index.tsx           # Home page
│   │   └── README.md           # Routing conventions
│   ├── assets/                 # Images and static assets
│   ├── styles.css              # Global CSS + Tailwind theme variables
│   ├── router.tsx              # Router configuration
│   ├── server.ts               # SSR error wrapper entry
│   └── start.ts                # App start configuration
├── package.json
├── tsconfig.json
├── vite.config.ts
├── eslint.config.js
├── components.json             # shadcn/ui configuration
└── README.md
```

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- [Bun](https://bun.sh/) (preferred for this project)

### Install Dependencies

```bash
bun install
```

### Run the Development Server

```bash
bun dev
```

The dev server will start at `http://localhost:8080` (or the port shown in the terminal).

### Build for Production

```bash
bun run build
```

### Preview the Production Build

```bash
bun run preview
```

---

## Available Scripts

| Script | Description |
| --- | --- |
| `bun dev` | Start the Vite development server |
| `bun run build` | Build the app for production |
| `bun run build:dev` | Build the app in development mode |
| `bun run preview` | Preview the production build locally |
| `bun run lint` | Run ESLint across the project |
| `bun run format` | Format all files with Prettier |

---

## Customization Guide

All portfolio content is defined in `src/components/portfolio/Portfolio.tsx`. Update the constants below to personalize the site:

| Section | Constant to Edit |
| --- | --- |
| Hero text / typing roles | `TYPING` |
| Services | `SERVICES` |
| Skills and progress bars | `SKILLS` |
| Work experience | `EXPERIENCE` |
| Education | `EDUCATION` |
| Projects grid | `PROJECTS` |
| Category filters | `FILTERS` |
| Testimonials | `TESTIMONIALS` |
| Social links / contact info | Search for `Github`, `Linkedin`, `Mail`, `Phone` links |

To replace the hero portrait, swap the image at `src/assets/hero-portrait.jpg` and update the import in `Portfolio.tsx`.

To change the theme colors, edit the CSS variables in `src/styles.css` and update the `orange` Tailwind color scale to match `#FF6200`.

---

## Deployment

This project is configured for deployment on [Lovable](https://lovable.dev/). You can also publish it to any static/edge host that supports TanStack Start (Vercel, Cloudflare Pages, Netlify, etc.).

For Lovable publishing:

1. Click the **Publish** button in the Lovable editor.
2. Your site will be live on a `.lovable.app` URL.

For GitHub sync, connect your project from the Lovable editor to push code to a repository automatically.

---

## License

This project is built and maintained for Ashutosh Palhare's personal portfolio. Feel free to use the structure as inspiration for your own portfolio — please replace the personal content with your own before publishing.

---

Built with ❤️ using [Lovable](https://lovable.dev/) + TanStack Start + Tailwind CSS.
