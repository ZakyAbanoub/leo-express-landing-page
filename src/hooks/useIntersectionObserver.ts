'use client'

import { useEffect, useRef, useState } from 'react';

interface IntersectionResult {
  isVisible: boolean;
  isScrollingDown: boolean;
  ref: React.RefObject<any>;
}

export const useIntersectionObserver = (options = {}): IntersectionResult => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrollingDown(currentScrollY > lastScrollY.current);
      lastScrollY.current = currentScrollY;
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && isScrollingDown) {
        setIsVisible(true);
      }
    }, { threshold: 0.1, ...options });

    window.addEventListener('scroll', handleScroll);
    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [options, isScrollingDown]);

  return { ref: elementRef, isVisible, isScrollingDown };
};
