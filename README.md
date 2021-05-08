# Gatsby-Notion-Ghpages Template

Based on [Gatsby London theme](https://www.gatsbyjs.com/starters/ImedAdel/gatsby-london) and the work of [Arnaud Valensi](https://arnaudvalensi.github.io/).

A Python script was developed to pull blog posts from Notion and save them as static page assets in the _'content/blog'_ folder.

## Set up local dev environment

- Gatsby runs on Node.js, so install `node` packages via `yarn`:

```bash
yarn
```

- Launch sample pages

```bash
gatsby develop
```

- Create a dev directory to hold dev scripts (will not be committed):

```bash
cp -r bin bin_dev
```

- `NOTION_TOKEN` and `NOTION_ROOT_PAGE_ID` are required environment variables for Python to connect to Notion (see `.env.example`)

```bash
cp .env.example .env
```

- To run all files through Prettier formatter:

```bash
yarn format
```

---

_**@TODO:**_

- Create a demo directory on Notion
- Build & deploy on Github
