<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Bangla Sangbad

Next.js 16 (App Router) + React 19 + Tailwind v4 + daisyUI v5 + Better Auth (MongoDB). Single `src/` app, path alias `@/*` → `./src/*`. No tests, no CI, no pre-commit.

## Commands

- `npm run dev` / `npm run build` / `npm start` / `npm run lint`
- No test or typecheck script: use `npx tsc --noEmit` for types, `npx eslint <path>` for a focused lint.
- Styling is Tailwind v4: `src/app/globals.css` is just `@import 'tailwindcss'; @plugin "daisyui";`. No `tailwind.config`.

## Auth (Better Auth)

- Server: `src/lib/auth.ts` (`mongodbAdapter`, db `bangla-sangbad`, email+password with `requireEmailVerification`, Google provider, Resend verification mail).
- Client: `src/lib/auth-client.ts` — note it calls `createAuthClient()` twice; the named `signIn/signUp/useSession` exports lose `baseURL`. Prefer `authClient.signIn/...` until consolidated.
- Required env (`.env`, gitignored): `BETTER_AUTH_SECRET`, `BETTER_AUTH_URL`, `BETTER_AUTH_DB_URL`, `BETTER_GOOGLE_CLIENT_ID`, `BETTER_GOOGLE_CLIENT_SECRET`, `RESEND_API_KEY`. Auth flows fail without them; no fallback.
- Route guard is `src/proxy.ts` (Next 16 convention, not `middleware.ts`), `export function proxy` + `matcher: ['/profile', '/news/:path*']` → redirects to `/sign-in`.

## Routes & data

- Route groups don't affect URLs: `(auth)/sign-in`, `(auth)/sign-up`, `(main)/page.tsx` (`/`), `(main)/news/...`, `(main)/category/...`, `(main)/profile/...`. README's `/login`, `/register`, `/news/[id]`, `/category/[id]` names are stale — trust the filesystem.
- News content comes from external `https://news-api-v2.vercel.app/api/...` via `src/services/*` (server-side fetch). Services return `notFound()`/`[]` on failure — preserve that pattern, don't throw to the page.
- `next.config.ts`: `reactCompiler: true` (leave on), `images.remotePatterns` allows all `https` hosts (`hostname: '**'`).

## Conventions

- Bengali font `Noto_Serif_Bengali` + `data-theme='white'` + `<Toaster>` live in `src/app/layout.tsx`; page layouts in `(auth)/layout.tsx` and `(main)/layout.tsx` — don't duplicate them.
- Types per domain in `src/types/`; shared UI in `src/components/shared/`.
