<p align="center">
<a href=https://github.com/PierreStA/Boiler-Plate target="_blank">
<img src='/placeholder.jpg' width="100%" alt="Banner" />
</a>
</p>



<p align="center">
<img src="https://img.shields.io/github/languages/code-size/PierreStA/Boiler-Plate" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/last-commit/PierreStA/Boiler-Plate" alt="GitHub last commit" />
<img src="https://img.shields.io/github/commit-activity/m/PierreStA/Boiler-Plate" alt="GitHub commit activity month" />
<img src="https://img.shields.io/github/license/PierreStA/Boiler-Plate" alt="GitHub license" />
</p>

<p></p>
<p></p>

# 📌 Overview

Boiler-Plate is a project built with Next, Tailwind, shadcn-ui, next-auth, prisma, t3env, and more. It includes essential dependencies like auth/prisma-adapter, hookform/resolvers, and radix-ui/react components.

## 🔍 Table of Contents

* [📁 Project Structure](#project-structure)

* [📝 Project Summary](#project-summary)

* [💻 Stack](#stack)

* [⚙️ Setting Up](#setting-up)

* [🚀 Run Locally](#run-locally)

* [🙌 Contributors](#contributors)

* [☁️ Deploy](#deploy)

* [📄 License](#license)

## 📁 Project Structure

```bash
├── .eslintrc.json
├── .gitignore
├── README.md
├── app
│   ├── Providers.tsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components.json
├── next.config.js
├── nextauth.d.ts
├── package-lock.json
├── package.json
├── pages
│   └── api
│       └── auth
│           └── [...nextauth].ts
├── postcss.config.js
├── prisma
│   ├── migrations
│   │   ├── 20231108124759_init_db
│   │   │   └── migration.sql
│   │   └── migration_lock.toml
│   └── schema.prisma
├── public
│   ├── next.svg
│   └── vercel.svg
├── src
│   ├── components
│   │   ├── layout
│   │   │   ├── Footer.tsx
│   │   │   └── Header.tsx
│   │   ├── theme
│   │   │   ├── ThemeProvider.tsx
│   │   │   └── ThemeToggle.tsx
│   │   ├── ui
│   │   │   ├── alert.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── form.tsx
│   │   │   ├── input.tsx
│   │   │   ├── label.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle.tsx
│   │   │   ├── tooltip.tsx
│   │   │   ├── typography.tsx
│   │   │   └── use-toast.ts
│   │   └── utils
│   │       ├── TailwindIndicator.tsx
│   │       └── ThemeToggle.tsx
│   ├── db
│   │   └── prisma.ts
│   ├── env.mjs
│   └── lib
│       ├── auth.ts
│       ├── env.ts
│       ├── site-config.ts
│       └── utils.ts
├── tailwind.config.js
├── tailwind.config.ts
└── tsconfig.json
```

## 📝 Project Summary

- [**app**](app): Main application directory.
- [**pages**](pages): Contains all the pages of the application.
- [**pages/api**](pages/api): API routes for the application.
- [**pages/api/auth**](pages/api/auth): Authentication API routes.
- [**prisma**](prisma): Prisma ORM configuration and models.
- [**prisma/migrations**](prisma/migrations): Database migration files.
- [**prisma/migrations/20231108124759_init_db**](prisma/migrations/20231108124759_init_db): Initial database migration.
- [**public**](public): Publicly accessible files.
- [**src**](src): Main source code directory.
- [**src/components**](src/components): Reusable components used throughout the application.

## 💻 Stack

- [next-auth](https://next-auth.js.org/): Authentication library for Next.js projects.
- [react-hook-form](https://react-hook-form.com/): Library for flexible and efficient form validation and handling.
- [react-select](https://react-select.com/): Customizable select input component with built-in search and multi-select support.
- [tailwindcss](https://tailwindcss.com/): Utility-first CSS framework for rapid UI development.
- [prisma](https://www.prisma.io/): Database toolkit for TypeScript and Node.js that simplifies database access and management.
- [react-hot-toast](https://react-hot-toast.com/): Lightweight toast notifications for React applications.
- [date-fns](https://date-fns.org/): Modern JavaScript date utility library.
- [next](https://nextjs.org/): Framework for server-rendered React applications.

## ⚙️ Setting Up

#### Your Environment Variable

PGUSER=
PGPASSWORD=
DATABASE_URL=
DIRECT_URL=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_SECRET=
NEXTAUTH_URL=

## 🚀 Run Locally
1.Clone the Boiler-Plate repository:
```sh
git clone https://github.com/PierreStA/Boiler-Plate
```
2.Install the dependencies with one of the package managers listed below:
```bash
pnpm install
bun install
npm install
yarn install
```
3.Start the development mode:
```bash
pnpm dev
bun dev
npm run dev
yarn dev
```

## 🙌 Contributors
<a href="https://github.com/PierreStA/Boiler-Plate/graphs/contributors">
<img src="https://contrib.rocks/image?repo=PierreStA/Boiler-Plate" />
</a>



`[Boiler-Plate]`

## 📄 License

[**Add Your License**](https://choosealicense.com)

