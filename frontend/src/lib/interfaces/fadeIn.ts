export function fadeInOnScroll(node: HTMLElement) {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        node.classList.add('is-visible');
        observer.unobserve(node); // remove if you only want it to fade in once
      }
    },
    { threshold: 0.1 }
  );

  observer.observe(node);

  return {
    destroy() {
      observer.unobserve(node);
    }
  };
}
