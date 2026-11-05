import { t as e } from "./jsx-runtime.js";
import { c as t, g as n, i as r, s as i } from "./index.js";
import { t as a } from "./iryna-portrait.js";

const o = e();

const s = [
  {
    title: `Безпека`,
    text: `Ви можете говорити про будь-що без страху осуду. Конфіденційність — понад усе.`
  },
  {
    title: `Повага до темпу`,
    text: `Зміни не мають бути швидкими, щоб бути справжніми. Рухаємось так, як вам комфортно.`
  },
  {
    title: `Практичність`,
    text: `Кожна зустріч дає інструмент, який можна застосувати вже завтра.`
  }
];

function c() {
  return (0, o.jsxs)(`div`, {
    className: `mx-auto max-w-7xl px-6 pt-16`,
    children: [
      (0, o.jsxs)(`div`, {
        className: `grid items-center gap-14 lg:grid-cols-[1fr_1.1fr]`,
        children: [
          (0, o.jsx)(`div`, {
            className: `bg-frame p-6 shadow-lift`,
            children: (0, o.jsx)(`div`, {
              className: `dashed-frame`,
              children: (0, o.jsx)(`img`, {
                src: a.url,
                alt: r.name,
                width: 900,
                height: 1350,
                className: `aspect-[3/4] w-full object-cover object-top`
              })
            })
          }),
          (0, o.jsxs)(`div`, {
            children: [
              (0, o.jsx)(`p`, {
                className: `text-xs uppercase tracking-[0.3em] text-muted-foreground`,
                children: `Про мене`
              }),
              (0, o.jsxs)(`h1`, {
                className: `mt-4 text-5xl leading-[1.05] md:text-7xl`,
                children: [
                  `Привіт, я Ірина,`,
                  (0, o.jsx)(`br`, {}),
                  `психологиня`,
                  (0, o.jsx)(`span`, {
                    className: `block italic text-ink`,
                    children: `і я вірю в маленькі кроки, які дають стабільний результат`
                  })
                ]
              }),
              (0, o.jsxs)(`div`, {
                className: `mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground`,
                children: [
                  (0, o.jsx)(`p`, {
                    children: `Я працюю з людьми, які відчувають, що живуть «не своє» життя: втомлюються догоджати, бояться помилок або не можуть зрозуміти, чого насправді хочуть.`
                  }),
                  (0, o.jsx)(`p`, {
                    children: `Я знаю, що іноді важко навіть пояснити, що не так. Це нормально. Ви не мусите мати готові слова чи правильні відповіді. Я буду поруч: слухатиму, підтримуватиму й допомагатиму робити маленькі кроки у вашому темпі. Без оцінок і без тиску.`
                  })
                ]
              }),
              (0, o.jsx)(t, {
                asChild: !0,
                variant: `solid`,
                size: `xl`,
                className: `mt-10`,
                children: (0, o.jsx)(n, { to: `/contacts`, children: `Записатись на консультацію` })
              })
            ]
          })
        ]
      }),
      (0, o.jsx)(`section`, {
        className: `mt-28 grid gap-8 md:grid-cols-3`,
        children: s.map(e => (0, o.jsxs)(`div`, {
          className: `bg-secondary/70 p-8`,
          children: [
            (0, o.jsx)(`h2`, { className: `text-3xl`, children: e.title }),
            (0, o.jsx)(`p`, { className: `mt-3 text-muted-foreground`, children: e.text })
          ]
        }, e.title))
      }),
      (0, o.jsx)(`section`, {
        className: `mt-20 grid gap-10 border-t pt-14 sm:grid-cols-2 lg:grid-cols-4`,
        children: i.map(e => (0, o.jsxs)(`div`, {
          children: [
            (0, o.jsx)(`div`, { className: `font-display text-6xl text-ink`, children: e.value }),
            (0, o.jsx)(`p`, { className: `mt-2 text-muted-foreground`, children: e.label })
          ]
        }, e.value))
      })
    ]
  });
}

export { c as component };