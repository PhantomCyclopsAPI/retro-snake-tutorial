/**
 * retrokit/reveal.js
 * 卡片滚动进场动画 (IntersectionObserver)
 */

let observer = null;

export function init(selector = '.game-card') {
  observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  
  document.querySelectorAll(selector).forEach(el => observer.observe(el));
}

export function observe(element) {
  if (observer && element) {
    observer.observe(element);
  }
}
