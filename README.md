# portfolio

This is the source code for my portfolio site. It is powered by SolidStart 1.0 with TypeScript.

All additional content is written in Markdown documents which are converted into HTML by the client using MarkedJS.

## Installation

My local machine is running Node 20.7 and npm 10.8.

```
git clone https://github.com/cultureshocked/portfolio
cd portfolio
npm install
npm run dev
```

Or use `pnpm` or your package manager/runtime of choosing.

**Be sure to modify `src/globals.ts`, specifically lines 4 and 13 to provide your LinkedIn and GitHub usernames.**

## SolidJS

SolidJS is a Javascript library designed for fine-grained reactivity through the use of signals. It is far more performant than popular libraries like React, but borrows much of the DX and QoL from React to make development enjoyable.

I have decided to use SolidJS (and its entire metaframework SolidStart) for this project because it's been on my radar for quite some time, and I decided -- what better way to learn the library and framework than to actually make something with it?

## Assets

### Projects

Every listing for a project must have three files in the `public/projects/` directory:
```
[project].badges.json
[project].md
[project].png
```

The markdown document will be the entire text/content of the project description, including the title. This document will be rendered by MarkedJS, and you can adjust render styles inside `src/components/Project.tsx` in the `descriptionRenderer` object.

The image will be displayed beside the description.

The `.badges.json` file is perhaps the most cryptic, but it is effectively a JSON-encoded array containing the data required to display a shields.io badge for the project.

Here's an example:

```json
[
  {"text": "asm6502", "color": "111111", "logo": "github", "URL": "https://github.com/cultureshocked/asm6502"},
  {"text": "c", "color": "334155", "logo": "c"},
  {"text": "assembly", "color": "475569", "logo": "amazonec2"},
  {"text": "linux", "color": "4ade80", "logo": "archlinux"}
]
```
This happens to be the definition of the badges I use for the asm6502 listing on the live site.

You can see the definition of a Badge object in `src/components/Badge.tsx`.

### Technologies List(s)

Before the footer, the live site has a list of technologies that I am proficient or familair with. These lists are both customizable as well, but will require some additional files as well.

Every Icon listed is a SVG file located in `public/svg/`. 

Every listing is located in the `src/globals.ts` file to include the associated text. Since I have two listings, I am using the `ProficientIcons` and `FamiliarIcons` arrays. 

If you do decide to change the titles or semantic meanings, then modify `routes/home.tsx` where the arrays are imported/passed into the `TechList` component(s).

If you wish to change the animations or styling of each individual icon, the component is `src/components/TechIcon.tsx`.

## Styling

This project makes use of TailwindCSS utility classes for styling. If you choose to modify any styling options, then I recommend simply using TailwindCSS classes instead of directly modifying `src/app.css`.

I have added a few additional classes to make use of custom fonts and animations, but you can probably accomplish most of your styling needs by making use of the regular/default classes.

## License

MIT, following the license of SolidJS.
