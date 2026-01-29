let ticking = false;

export function init() {
  window.addEventListener('scroll', onScroll, { passive: true });
  updateNav();
}

function onScroll() {
  if (!ticking) {
    requestAnimationFrame(() => {
      updateNav();
      ticking = false;
    });
    ticking = true;
  }
}

function updateNav() {
  const nav = document.querySelector('nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 100);
  }
}
