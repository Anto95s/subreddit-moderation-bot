## How can i make a Reddit bot to interact with my subreddit?

> Documentation here: https://developers.reddit.com/docs/

Firstly, create your app here https://developers.reddit.com/new, and install it through npm. Then you will have the following files:

- `server/index.ts`: 
- `server/tsconfig.json`:
- `shared/api.ts`:
- `shared/tsconfig.json`:
- `devvit.json`: configuration file, every event trigger or scheduled action must be declared here. You can read the schema at this link https://developers.reddit.com/schema/config-file.v1.json. For example, if you need the post creation trigger, you need to declare it inside the "triggers" variable. You can set [permissions](https://developers.reddit.com/docs/capabilities/devvit-web/devvit_web_configuration) to control what the script can access.
- `tsconfig.json`:
- ``:

## How can i install my bot in my subreddit?

> Instructions here: https://developers.reddit.com/docs/guides/best-practices/mod_resources#how-to-install-an-app

By default, the app will be installed on a new test subreddit, but you can install it on a new subreddit where you are a mod. Through the UI or CLI with: `$ npx devvit install mySubreddit my-app`

## Devvit Template Basic Instructions

A practical [Devvit](https://developers.reddit.com/) app template with few dependencies. A little simpler at the expense of a little code.

## Getting Started

> Make sure you have Node 22 downloaded on your machine before running!

1. Run `npm create devvit@latest --template=bare`
2. Go through the installation wizard. You will need to create a Reddit account and connect it to Reddit Developers.

## Commands

- `npm run playtest [r/sub]`: watches changes, builds, uploads, and installs on Reddit. Accepts an optional subreddit.
- `npm run build`: builds client and server, including esbuild metafiles.
- `npm run clean`: removes build outputs.
- `npm run test`: runs all tests.
- `npm run format`: fixes lints and formatting.
- `npm run lint`: checks lints and formatting.
- `npm run publish`: cleans, builds, uploads, and files a new app review request.

## Features

- A plain Node.js server with front and backend typing.
- Tests using the builtin Node.js test runner.
- Promise misuse linter.
- Formatter and bundler.
- TypeScript project skeleton split by environment (frontend, backend, test, etc).
