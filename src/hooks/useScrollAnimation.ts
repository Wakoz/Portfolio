import { useEffect, useState } from "react";

type ScrollAnimationOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
};

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLElement | null>(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: options.threshold || 0.1,
        root: options.root || null,
        rootMargin: options.rootMargin || "0px",
      },
    );

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options.threshold, options.root, options.rootMargin]);

  return { ref: setRef, isVisible };
};
