# t3hmun's website re-write 2024

## Why

**+** Fun

**-** It will ruin links to my current site if I don't maintain the paths / slugs.

Fun wins

## Goals

- [ ] Make a website where I can write articles
  - [ ] Site must be usable without JS
  - [ ] Site should like fine without CSS - it would be nice if it works in a terminal browser
- [ ] Publish via GitHub to my www.t3hmun.com
- [ ] Make it look ok
- [ ] Learn new stuff in the process

## Plan

- [x] `npm create astro@lastest`
  - Strictest Typescript
  - Empty project
  - Installed Astro 4.4.0, it is the latest

- [x] Choose npm
  - I don't like yarn anymore, pnpm complicates things, nx is more than just complicated, npm is fine, it is simple
  - Using Node 20, the actual version is unlikely to matter

- [x] Configure vscode
  - [x] Prettier
  - [x] Format on save 
    - But not for markdown, prettier makes a mess of it
    - Markdown is meant to be manually fudged to improve readability.

- [ ] Style
  - [ ] Install Tailwind
    - Tailwind in nicer than writing CSS or SASS.
    - I don't want to use a template that someone else wrote
    - So I'll make a terrible looking site with Tailwind - it'll look better and work better than a bad DIY stylesheet
  - [ ] Add dark light switcher (use last year's code)
    - Yes I won't have done any actual styles yet
  - [ ] Try to make the site look ok

- [ ] Copy in the content from the previous site
  - [ ] Probably need to fix the front matter
  - [ ] Probably need to fix the filenames
  - [ ] Make sure the slugs and paths match last year's
  - [ ] Make sure there are no special features

- [ ] GitHub actions for deployment
  - [ ] Deploy live

**Everything below here is Astro readme stuff**

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
