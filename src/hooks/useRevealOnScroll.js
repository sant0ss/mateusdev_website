import { useEffect } from 'react';

export function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    
    if (reveals.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      reveals.forEach((element) => observer.unobserve(element));
    };
  }, []);
}
