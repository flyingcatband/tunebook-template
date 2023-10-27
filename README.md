# Tunebook template

This template is for a [SvelteKit](https://kit.svelte.dev/) static site, making heavy use of the components from [@flyingcatband/tunebook](https://www.npmjs.com/package/@flyingcatband/tunebook). It is designed to make a simple viewer for your (folk dance) band to see their collection of tunes, pick an appropriate tune or set of tunes to play, view the sheet music, and transpose if required.

## Development

Development is pretty standard for SvelteKit projects - you'll need a javascript runtime (probably NodeJS) and a package manager (`npm` or `pnpm`) to install the dependencies. There's a `justfile` for convenience if you use `pnpm`. There's some static analysis and a formatter configured. There's no tests, because most of the logic is handles by the components in their package, and that has tests.

It's a modern JavaScript project, so most of the files in the root are configuration for various tools, which you shouldn't need to touch. Static assets (favicon, PDFs) live in `/static`, your tunes live in `/data`, the website routing and pages are defined in `/src/routes`. Anything else can broadly be ignored.

## Data

There's a directory called `data`. This is where your tunes go, in [abc format](https://abcnotation.com/wiki/abc:standard). There's a few example tunes in there now, delete them! If you define your folder in LaTeX, put the `tex` file in there too. Update `src/folder.json/server.ts` to point to a file with the right name, and use an appropriate function to parse that file into a format that the tunebook components can read.

## Design

This template uses TailwindCSS for convenience, feel free to remove it if you don't like it.

Give your tunebook a name! Search the codebase for `MyTunebook` and replace it with your name.

If you want a custom font (you probably do), install it from [fontsource](https://fontsource.org/), or however you like to get fonts from a CDN in your CSS. Search the codebase for `My Custom Font`, and replace that string with the name of your font.

If you don't want a custom font, search the codebase for `My Custom Font` and remove those references.

If you want a custom accent colour, search the codebase for `#fed700`, and either replace that hex code with your new hex code, or choose one of the default [Tailwind colours](https://tailwindcss.com/docs/customizing-colors).

TODO Favicon, and icons for manifest.json when we do #2, as #3

At some point, we'll automate this, but for now, find and replace is your friend.

## Deployment

By default, this template makes a site that search engines can't index. This means you won't be able to Google for your own folder, you'll have to go straight to it's web address. This is defined in `src/app.html` if you really want to change it, but think carefully about the possibility of sharing copyrighted data on the open internet.

You can deploy the site anywhere you can deploy static sites. We like [Cloudflare pages](https://pages.cloudflare.com/), but Netlify, Vercel, Render or a raspberry pi running a file server would all work fine.

## Generate a PDF version

Coming soon...
