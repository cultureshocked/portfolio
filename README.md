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

## SolidJS

SolidJS is a Javascript library designed for fine-grained reactivity through the use of signals. It is far more performant than popular libraries like React, but borrows much of the DX and QoL from React to make development enjoyable.

I have decided to use SolidJS (and its entire metaframework SolidStart) for this project because it's been on my radar for quite some time, and I decided -- what better way to learn the library and framework than to actually make something with it?

## Assets

The majority of the text on the site is rendered by the client using MarkedJS, and a variety of Markdown documents in the `public/` directory. If you decide to use this project as a starting point for your project, consider adding a `public/ABOUT.md` document. Project descriptions should be located in `public/projects/[NAME].md` and should be accompanied by a `public/projects/[NAME].png` file (or an alternative filename, but with a path passed into the `<Project>` component.)

## Styling

This project makes use of TailwindCSS utility classes for styling. If you choose to modify any styling options, then I recommend simply using TailwindCSS classes instead of directly modifying `src/app.css`.

## License

MIT, following the license of SolidJS.
