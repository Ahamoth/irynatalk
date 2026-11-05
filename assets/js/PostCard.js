import { t as e } from "./jsx-runtime.js";
import { g as t } from "./index.js";

var n = e();

function r({ post: e }) {
  return (0, n.jsxs)(`article`, {
    className: `group flex flex-col`,
    children: [
      (0, n.jsxs)(`div`, {
        className: `flex items-center justify-between text-xs text-muted-foreground`,
        children: [
          (0, n.jsx)(`span`, {
            className: `border-b border-primary/40 text-primary`,
            children: e.category
          }),
          (0, n.jsxs)(`span`, {
            children: [
              `прочитаєте за `,
              (0, n.jsxs)(`b`, { children: [e.readMinutes, ` хв`] }),
              ` · `,
              e.date
            ]
          })
        ]
      }),
      (0, n.jsx)(t, {
        to: `/blog/$slug`,
        params: { slug: e.slug },
        className: `mt-4 block overflow-hidden`,
        children: (0, n.jsx)(`img`, {
          src: e.image,
          alt: e.title,
          loading: `lazy`,
          width: 1024,
          height: 704,
          className: `aspect-[3/2] w-full object-cover transition-transform duration-700 group-hover:scale-105`
        })
      }),
      (0, n.jsx)(`h3`, {
        className: `mt-5 text-2xl leading-snug`,
        children: (0, n.jsx)(t, {
          to: `/blog/$slug`,
          params: { slug: e.slug },
          className: `hover:text-primary`,
          children: e.title
        })
      }),
      (0, n.jsx)(`p`, {
        className: `mt-3 text-sm leading-relaxed text-muted-foreground`,
        children: e.excerpt
      }),
      (0, n.jsx)(t, {
        to: `/blog/$slug`,
        params: { slug: e.slug },
        className: `mt-4 self-start text-xs font-semibold uppercase tracking-[0.14em] text-primary nav-link`,
        children: `Детальніше`
      })
    ]
  });
}

export { r as t };