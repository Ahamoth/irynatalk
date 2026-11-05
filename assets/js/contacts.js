import { i as e, n as t, t as n } from "./jsx-runtime.js";
import {
  _ as r,
  c as i,
  d as a,
  f as o,
  i as s,
  l as c,
  m as l,
  p as u,
  r as d,
  u as f
} from "./index.js";
import { t as p } from "./PageHeading.js";

var m = e(t(), 1);
var h = n();

var g = m.forwardRef(({ className: e, type: t, ...n }, r) => (
  (0, h.jsx)(`input`, {
    type: t,
    className: c(
      `flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e
    ),
    ref: r,
    ...n
  })
));
g.displayName = `Input`;

var _ = m.forwardRef(({ className: e, ...t }, n) => (
  (0, h.jsx)(`textarea`, {
    className: c(
      `flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm`,
      e
    ),
    ref: n,
    ...t
  })
));
_.displayName = `Textarea`;

var v = e(r(), 1);
var y = Object.defineProperty;
var b = (e, t) => y(e, `name`, { value: t, configurable: !0 });

var x = [
  `a`, `button`, `div`, `form`, `h2`, `h3`, `img`, `input`, `label`,
  `li`, `nav`, `ol`, `p`, `select`, `span`, `svg`, `ul`
].reduce((e, t) => {
  const n = a(`Primitive.${t}`);
  const r = m.forwardRef((e, r) => {
    const { asChild: i, ...a } = e;
    const o = i ? n : t;
    typeof window < `u` && (window[Symbol.for(`radix-ui`)] = !0);
    return (0, h.jsx)(o, { ...a, ref: r });
  });
  r.displayName = `Primitive.${t}`;
  return { ...e, [t]: r };
}, {});

function S(e, t) {
  e && v.flushSync(() => e.dispatchEvent(t));
}
b(S, `dispatchDiscreteCustomEvent`);

var C = Object.defineProperty;
var w = m.forwardRef(((e, t) => C(e, `name`, { value: t, configurable: !0 }))(
  function (e, t) {
    return (0, h.jsx)(x.label, {
      ...e,
      ref: t,
      onMouseDown: t => {
        t.target.closest(`button, input, select, textarea`) ||
          (e.onMouseDown?.(t), !t.defaultPrevented && t.detail > 1 && t.preventDefault());
      }
    });
  },
  `Label`
));

var T = f(`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`);

var E = m.forwardRef(({ className: e, ...t }, n) => (
  (0, h.jsx)(w, { ref: n, className: c(T(), e), ...t })
));
E.displayName = w.displayName;

function D() {
  const [e, t] = (0, m.useState)(!1);

  return (0, h.jsxs)(h.Fragment, {
    children: [
      (0, h.jsx)(p, {
        eyebrow: `Контакти`,
        title: `Запис на консультацію`,
        intro: `Залиште заявку — і ми підберемо зручний час для першої зустрічі онлайн.`
      }),
      (0, h.jsxs)(`div`, {
        className: `mx-auto mt-16 grid max-w-7xl gap-14 px-6 lg:grid-cols-[1fr_1.3fr]`,
        children: [
          (0, h.jsxs)(`div`, {
            className: `space-y-8`,
            children: [
              [
                { icon: l, label: `Пошта`, value: s.email },
                { icon: o, label: `Телефон`, value: s.phone },
                { icon: u, label: `Де`, value: s.city }
              ].map(({ icon: e, label: t, value: n }) => (
                (0, h.jsxs)(`div`, {
                  className: `flex gap-4`,
                  children: [
                    (0, h.jsx)(`span`, {
                      className: `flex size-12 items-center justify-center rounded-full bg-accent text-primary`,
                      children: (0, h.jsx)(e, { className: `size-5` })
                    }),
                    (0, h.jsxs)(`div`, {
                      children: [
                        (0, h.jsx)(`p`, {
                          className: `text-xs uppercase tracking-[0.2em] text-muted-foreground`,
                          children: t
                        }),
                        (0, h.jsx)(`p`, { className: `mt-1 text-lg`, children: n })
                      ]
                    })
                  ]
                }, t)
              )),
              (0, h.jsx)(`p`, {
                className: `max-w-sm text-sm text-muted-foreground`,
                children: `Перша консультація триває 50 хвилин і проходить у Zoom або Google Meet.`
              })
            ]
          }),
          (0, h.jsxs)(`form`, {
            onSubmit: e => {
              e.preventDefault();
              t(!0);
              const n = e.currentTarget;
              setTimeout(() => {
                t(!1);
                n.reset();
                d.success(`Дякуємо! Заявку отримано`, {
                  description: `Ми зв’яжемося з вами протягом доби.`
                });
              }, 600);
            },
            className: `space-y-5 bg-card p-8 shadow-soft md:p-10`,
            children: [
              (0, h.jsxs)(`div`, {
                className: `grid gap-5 md:grid-cols-2`,
                children: [
                  (0, h.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, h.jsx)(E, { htmlFor: `name`, children: `Ім’я` }),
                      (0, h.jsx)(g, { id: `name`, name: `name`, required: !0, className: `h-12` })
                    ]
                  }),
                  (0, h.jsxs)(`div`, {
                    className: `space-y-2`,
                    children: [
                      (0, h.jsx)(E, { htmlFor: `phone`, children: `Телефон або Telegram` }),
                      (0, h.jsx)(g, { id: `phone`, name: `phone`, required: !0, className: `h-12` })
                    ]
                  })
                ]
              }),
              (0, h.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, h.jsx)(E, { htmlFor: `email`, children: `Email` }),
                  (0, h.jsx)(g, { id: `email`, name: `email`, type: `email`, required: !0, className: `h-12` })
                ]
              }),
              (0, h.jsxs)(`div`, {
                className: `space-y-2`,
                children: [
                  (0, h.jsx)(E, { htmlFor: `message`, children: `З чим хочете попрацювати?` }),
                  (0, h.jsx)(_, { id: `message`, name: `message`, rows: 5 })
                ]
              }),
              (0, h.jsx)(i, {
                type: `submit`,
                variant: `solid`,
                size: `xl`,
                className: `w-full`,
                disabled: e,
                children: e ? `Надсилаємо…` : `Надіслати заявку`
              })
            ]
          })
        ]
      })
    ]
  });
}

export { D as component };