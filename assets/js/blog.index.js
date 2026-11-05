import { t as e } from "./jsx-runtime.js";
import { o as t } from "./index.js";
import { t as n } from "./PageHeading.js";
import { t as r } from "./PostCard.js";

var i = e();

function a() {
  return (0, i.jsxs)(i.Fragment, {
    children: [
      (0, i.jsx)(n, {
        eyebrow: `Блог`,
        title: `Тут про психологію`,
        intro: `Короткі статті, цікаві факти, огляди книг та кіно.`
      }),
      (0, i.jsx)(`div`, {
        className: `mx-auto mt-16 grid max-w-7xl gap-12 px-6 md:grid-cols-3`,
        children: t.map(e => (0, i.jsx)(r, { post: e }, e.slug))
      })
    ]
  });
}

export { a as component };