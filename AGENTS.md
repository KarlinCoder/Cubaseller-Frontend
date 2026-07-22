<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Quick Reference

- **Package manager**: pnpm (not npm/yarn)
- **Framework**: Next.js 16.2.10, React 19.2.4
- **Styling**: Tailwind CSS 4 with `@tailwindcss/postcss`
- **TypeScript**: strict mode, path alias `@/*` → `./src/*`

## Commands

```bash
pnpm dev        # Start dev server (localhost:3000)
pnpm build      # Production build
pnpm start      # Run production server
pnpm lint       # ESLint (no --fix flag in scripts)
```

## Conventions

- **Dark mode is default**: `bg-neutral-900` applied at `<html>` level
- **Fonts loaded via `next/font/google`**: Montserrat (`--font-montserrat`) and Inter (`--font-inter`) — use CSS variables, not class names
- **Tailwind v4**: No `tailwind.config.js` — config lives in `globals.css` via `@theme inline`
- **App Router**: All routes under `src/app/`
