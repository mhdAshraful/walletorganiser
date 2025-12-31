# React + React Compilers + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-  [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
-  [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...

			// Remove tseslint.configs.recommended and replace with this
			tseslint.configs.recommendedTypeChecked,
			// Alternatively, use this for stricter rules
			tseslint.configs.strictTypeChecked,
			// Optionally, add this for stylistic rules
			tseslint.configs.stylisticTypeChecked,

			// Other configs...
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from "eslint-plugin-react-x";
import reactDom from "eslint-plugin-react-dom";

export default defineConfig([
	globalIgnores(["dist"]),
	{
		files: ["**/*.{ts,tsx}"],
		extends: [
			// Other configs...
			// Enable lint rules for React
			reactX.configs["recommended-typescript"],
			// Enable lint rules for React DOM
			reactDom.configs.recommended,
		],
		languageOptions: {
			parserOptions: {
				project: ["./tsconfig.node.json", "./tsconfig.app.json"],
				tsconfigRootDir: import.meta.dirname,
			},
			// other options...
		},
	},
]);
```

## Install UI & Logic Dependencies

-  axios: For secure API communication
-  @tanstack/react-query: Standard for managing server state (caching bank data)
-  recharts: The best library for "Monthly Insights" graphs
-  lucide-react: For nice UI icons (credit cards, bank icons)
-  date-fns: For handling transaction dates accurately

```bash
pnpm install axios @tanstack/react-query recharts lucide-react date-fns react-router-dom
```

## Install Tailwind CSS (Standard for rapid, clean UI development)

```bash
pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

## Reasoning

### Frontend (React + TypeScript)

-  recharts: This is for your Monthly Insights. It allows you to easily render the "Spending Pie Chart" or "Transaction History Bar Graph" based on the data you fetch.

-  @tanstack/react-query: Bank data shouldn't be fetched every time a user clicks a button. This library manages caching and background updating (e.g., checking for new transactions while the user looks at the dashboard).

-  lucide-react: Provides secure-looking, clean icons for "Wallet", "Send Money", "Bank", etc.

## MSW (Mock Service Worker)

-  Purpose: Intercept local `/api/*` calls during development using MSW handlers so the UI can be developed without a running backend.
-  Key files:
   -  `public/mockServiceWorker.js` — the service worker shipped with the repo (msw worker file).
   -  `src/mocks/handlers.ts` — the project's mock API handlers (see examples for `/api/auth`, `/api/cards`, `/api/dashboard`).
   -  `src/mocks/browser.ts` — initializes the MSW worker (auto-started in dev).
-  How to enable locally:
   1. Install dependencies: `pnpm install`

2. Start the frontend in dev: `pnpm --filter frontend dev` (or `pnpm fe`). MSW is started automatically in development (the worker is only started when `import.meta.env.DEV` is true).

-  Notes:
   -  To add/modify mocks: edit `src/mocks/handlers.ts` and restart the dev server.
   -  If you encounter stale service worker behavior, open DevTools → Application → Service Workers and unregister old workers or clear site data.

## shadcn/ui (integrate preset without losing files)

This repo is an existing Vite + React app. To use a shadcn preset while keeping your current source files, generate/merge **config + deps**, not a brand-new scaffold over your app.

### What’s wired up in this repo

-  `components.json` (shadcn config)
-  `tailwind.config.ts` (Tailwind content + dark mode)
-  `src/global.css` (Tailwind v4 entry + shadcn-compatible tokens)
-  `src/lib/utils.ts` (`cn()` helper used by shadcn components)

### Add components (recommended)

```bash
pnpm dlx shadcn@latest add button
```

This will generate `src/components/ui/*` and install any required Radix packages per component.

### If you want the exact preset output (stone/blue + maia)

Safest workflow: generate the preset into an **empty temp folder** and then copy/merge the outputs into this repo.

```bash
cd frontend
mkdir -p .shadcn-preset-tmp
cd .shadcn-preset-tmp
pnpm dlx shadcn@latest create --preset "https://ui.shadcn.com/init?base=radix&style=maia&baseColor=stone&theme=blue&iconLibrary=hugeicons&font=inter&menuAccent=subtle&menuColor=default&radius=medium&template=vite" --template vite
```

Copy/merge these from the temp project into `frontend/`:

-  `components.json`
-  `tailwind.config.*`
-  CSS entry file (merge into `src/global.css`)
-  `src/lib/utils.ts`
-  dependency changes from temp `package.json`
