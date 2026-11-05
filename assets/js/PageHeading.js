import { t as e } from "./jsx-runtime.js";

var t = e();

function n({ eyebrow: e, title: n, intro: r }) {
  return (0, t.jsx)(`section`, {
    className: `bg-secondary/60`,
    children: (0, t.jsxs)(`div`, {
      className: `mx-auto max-w-7xl px-6 py-20`,
      children: [
        (0, t.jsx)(`p`, {
          className: `text-xs uppercase tracking-[0.3em] text-muted-foreground`,
          children: e
        }),
        (0, t.jsx)(`h1`, {
          className: `mt-4 max-w-3xl text-5xl leading-[1.05] md:text-7xl`,
          children: n
        }),
        r && (0, t.jsx)(`p`, {
          className: `mt-6 max-w-2xl text-lg text-muted-foreground`,
          children: r
        })
      ]
    })
  });
}

export { n as t };