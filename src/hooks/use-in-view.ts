import { useEffect, useRef, useState } from "react";

export function useInView(options?: { margin?: string; once?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (options?.once !== false) {
            observer.unobserve(element);
          }
        } else if (options?.once === false) {
          setIsInView(false);
        }
      },
      {
        rootMargin: options?.margin || "-100px",
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [options?.margin, options?.once]);

  return { ref, isInView };
}
