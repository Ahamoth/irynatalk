import { t as e } from "./jsx-runtime.js";
import { t } from "./arrow-right.js";
import { a as n, g as r } from "./index.js";
import { t as i } from "./PageHeading.js";

var a = e();

function o() {
  return (0, a.jsxs)(a.Fragment, {
    children: [
      (0, a.jsx)(i, {
        eyebrow: `ТЕСТИ`,
        title: `Науково обґрунтовані й адаптовані методики у вільному доступі`,
        intro: `Ці тести допоможуть вам краще зорієнтуватися у своєму стані, але результат тесту не дорівнює діагнозу і не замінює консультацію фахівця.`
      }),
      (0, a.jsx)(`div`, {
        className: `mx-auto mt-16 grid max-w-7xl gap-10 px-6 md:grid-cols-2 lg:grid-cols-3`,
        children: n.map(e => (0, a.jsxs)(r, {
          to: `/courses/$slug`,
          params: { slug: e.slug },
          className: `group flex flex-col bg-card shadow-soft transition-shadow hover:shadow-lift`,
          children: [
            (0, a.jsx)(`div`, {
              className: `overflow-hidden`,
              children: (0, a.jsx)(`img`, {
                src: e.image,
                alt: e.title,
                loading: `lazy`,
                width: 1024,
                height: 768,
                className: `aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105`
              })
            }),
            (0, a.jsxs)(`div`, {
              className: `flex flex-1 flex-col p-7`,
              children: [
                (0, a.jsx)(`span`, {
                  className: `text-xs uppercase tracking-[0.2em] text-muted-foreground`,
                  children: e.category
                }),
                (0, a.jsx)(`h2`, { className: `mt-3 text-3xl`, children: e.title }),
                (0, a.jsx)(`p`, { className: `mt-1 italic text-muted-foreground`, children: e.subtitle }),
                (0, a.jsxs)(`div`, {
                  className: `mt-auto flex items-center justify-between pt-8`,
                  children: [
                    (0, a.jsx)(`span`, {
                      className: `font-display text-2xl text-primary`,
                      children: e.price
                    }),
                    (0, a.jsx)(t, {
                      className: `size-5 text-primary transition-transform group-hover:translate-x-1`
                    })
                  ]
                })
              ]
            })
          ]
        }, e.slug))
      })
    ]
  });
}

export { o as component };