(function () {
  var burger = document.querySelector('button[aria-label="Меню"]');
  if (!burger) return;

  // desktop-навигация, из которой склонируем ссылки
  var desktopNav = Array.prototype.slice.call(document.querySelectorAll('nav')).filter(function (n) {
    return n.className.indexOf('lg:flex') > -1;
  })[0];
  if (!desktopNav) return;

  var header = burger.closest('header');
  if (!header) return;

  var menuIcon = burger.innerHTML;
  var xIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x size-5" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>';

  var menu = document.createElement('div');
  menu.id = 'mobile-menu';
  menu.className = 'hidden mx-6 mb-4 rounded-lg bg-card p-6 shadow-lift lg:hidden';

  var navClone = document.createElement('nav');
  navClone.className = 'flex flex-col gap-4 text-lg';

  Array.prototype.forEach.call(desktopNav.querySelectorAll('a'), function (a) {
    var clone = a.cloneNode(true);
    clone.classList.remove('nav-link', 'whitespace-nowrap');
    clone.classList.add('block');
    clone.addEventListener('click', function () { close(); });
    navClone.appendChild(clone);
  });
  menu.appendChild(navClone);

  // CTA-кнопка внутри мобильного меню (если она уже есть в desktop  дублируем)
  var cta = document.createElement('a');
  cta.href = 'contacts.html';
  cta.className = 'mt-6 inline-flex items-center justify-center gap-2 w-full rounded-none bg-primary text-primary-foreground uppercase tracking-[0.14em] text-xs font-semibold hover:bg-primary/90 h-14 px-8';
  cta.textContent = 'Записатись на консультацію';
  cta.addEventListener('click', function () { close(); });
  menu.appendChild(cta);

  header.appendChild(menu);

  function open() {
    menu.classList.remove('hidden');
    burger.innerHTML = xIcon;
    burger.setAttribute('aria-expanded', 'true');
  }
  function close() {
    menu.classList.add('hidden');
    burger.innerHTML = menuIcon;
    burger.setAttribute('aria-expanded', 'false');
  }
  function toggle() {
    if (menu.classList.contains('hidden')) open(); else close();
  }

  burger.setAttribute('aria-expanded', 'false');
  burger.addEventListener('click', function (e) {
    e.preventDefault();
    e.stopPropagation();
    toggle();
  });

  // закрыть при клике вне меню
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('hidden')) return;
    if (menu.contains(e.target) || burger.contains(e.target)) return;
    close();
  });

  // закрыть при Esc
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !menu.classList.contains('hidden')) close();
  });

  // если пользователь расширил окно до desktop  принудительно закрыть
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024 && !menu.classList.contains('hidden')) close();
  });
})();