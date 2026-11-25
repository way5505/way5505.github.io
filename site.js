const menu = document.querySelector('.mobile-nav');
const menuToggle = menu.querySelector('summary');
const narrowScreen = window.matchMedia('(max-width: 820px)');
const motion = window.matchMedia('(prefers-reduced-motion: reduce)');

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menuToggle.focus();
  }
});

menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.open = false;
    const destination = document.getElementById(link.hash.slice(1));
    requestAnimationFrame(() => destination?.focus({ preventScroll: true }));
  });
});

document.addEventListener('pointerdown', (event) => {
  if (menu.open && !menu.contains(event.target)) menu.open = false;
});

narrowScreen.addEventListener('change', () => { menu.open = false; });

if ('IntersectionObserver' in window && !motion.matches) {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.animate(
        [{ opacity: 0.65, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
        { duration: 360, easing: 'cubic-bezier(.16, 1, .3, 1)' },
      );
      observer.unobserve(entry.target);
    }
  }, { threshold: 0.2 });
  document.querySelectorAll('[data-reveal]').forEach((heading) => observer.observe(heading));
  motion.addEventListener('change', ({ matches }) => {
    if (matches) {
      observer.disconnect();
      document.getAnimations().forEach((animation) => animation.cancel());
    }
  });
}

const portrait = document.querySelector('.portrait img');
let scrollFrame = 0;
const updatePortrait = () => {
  scrollFrame = 0;
  const offset = motion.matches || narrowScreen.matches ? 0 : Math.min(10, Math.max(0, window.scrollY) * 0.04);
  portrait.style.setProperty('--portrait-shift', `${offset}px`);
};

window.addEventListener('scroll', () => {
  if (!scrollFrame && !motion.matches && !narrowScreen.matches && window.scrollY < window.innerHeight) {
    scrollFrame = requestAnimationFrame(updatePortrait);
  }
}, { passive: true });
motion.addEventListener('change', updatePortrait);
narrowScreen.addEventListener('change', updatePortrait);
updatePortrait();
