document.addEventListener('DOMContentLoaded', () => {
  /* =========================
      DESKTOP NAV INDICATOR
  ========================= */
  const nav = document.querySelector('.navigation-button');
  const links = nav.querySelectorAll('a');
  const indicator = document.querySelector('.nav-indicator');

  let activeLink = document.querySelector('.active') || links[0];

  function moveIndicator(el) {
    if (!el) return;
    indicator.style.width = el.offsetWidth + 'px';
    indicator.style.transform = `translateX(${el.offsetLeft}px)`;
  }

  moveIndicator(activeLink);

  links.forEach(link => {
    link.addEventListener('click', () => {
      links.forEach(l => l.classList.remove('font-bold', 'text-black'));
      link.classList.add('font-bold', 'text-black');

      activeLink = link;
      moveIndicator(activeLink);
    });
  });

  window.addEventListener('resize', () => {
    moveIndicator(activeLink);
  });

  /* =========================
      MOBILE MENU TOGGLE
  ========================= */
  const toggle = document.getElementById('menu-toggle');
  const closeBtn = document.getElementById('menu-close');
  const menu = document.getElementById('menu');

  function openMenu() {
    menu.classList.remove('translate-x-full', 'pointer-events-none');
    menu.classList.add('translate-x-0', 'pointer-events-auto');
  }

  function closeMenu() {
    menu.classList.add('translate-x-full', 'pointer-events-none');
    menu.classList.remove('translate-x-0', 'pointer-events-auto');
  }

  toggle.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  /* =========================
      MOBILE NAV ACTIVE LINK
  ========================= */
  const mobileLinks = menu.querySelectorAll('a');
  let activeMobile = document.querySelector('.activel') || mobileLinks[0];

  activeMobile.classList.add('font-bold', 'text-black');

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileLinks.forEach(l => l.classList.remove('font-bold', 'text-black'));
      mobileLinks.forEach(l => l.classList.add('text-[#5F5F5F]'));

      link.classList.add('font-bold', 'text-black');
      activeMobile = link;

      closeMenu();
    });
  });
});
