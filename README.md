[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fthirunavukkarasu%2Fthiru.site)

# thiru.site

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Deployment**: [Vercel](https://vercel.com)

## Roadmap

- [x] Responsive styles~
- [x] Dark mode

## Running Locally

This application requires Node.js v18+.

```bash
git clone https://github.com/thirunavukkarasu/thiru.site.git
cd thiru.site
npm install
npm run dev
```

Create a `.env` file similar to [`.env.example`](https://github.com/thirunavukkarasu/thiru.site/blob/main/.env.example).

## Cloning / Forking

Please review the [license](https://github.com/thirunavukkarasu/thiru.site/blob/main/LICENSE) and remove all of my personal information (resume, blog posts, images, etc.) by running `pnpm run setup`.

## Vercel CLI - Commands

1. Use the following command to install the Vercel CLI.

```bash
npm i -g vercel@latest
```

2. Use the following command to login to Vercel.

```bash
vercel login
```

3. Use the following command to link the local project to the Vercel project.

```bash
vercel link
```

4. Use the following command to pull the environment variables from the Vercel project to the local environment.

```bash
vercel env pull .env.development.local
```
