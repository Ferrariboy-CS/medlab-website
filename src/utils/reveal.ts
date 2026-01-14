const observedClass = 'reveal';

export const initScrollReveal = () => {
  if (typeof window === 'undefined') return;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll(`.${observedClass}`).forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const observeTargets = () => {
    document.querySelectorAll(`.${observedClass}:not(.is-visible)`).forEach((el) => {
      observer.observe(el);
    });
  };

  observeTargets();

  const mutationObserver = new MutationObserver(() => {
    observeTargets();
  });

  mutationObserver.observe(document.body, { childList: true, subtree: true });
};
