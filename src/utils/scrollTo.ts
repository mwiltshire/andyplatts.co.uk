interface ScrollOptions {
  offset?: number;
  delay?: number;
  behavior?: 'smooth' | 'auto';
  duration?: number;
}

export function createScrollTo({
  offset = 0,
  delay = 0,
  behavior = 'smooth'
}: ScrollOptions = {}) {
  return (hash: string) => {
    const element = document.querySelector(hash);
    const top = element ? (element as HTMLElement).offsetTop + offset : 0;
    window.setTimeout(
      () =>
        window.scrollTo({
          top,
          left: 0,
          behavior
        }),
      delay
    );
  };
}
