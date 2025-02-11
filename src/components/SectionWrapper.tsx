'use client'

import React, { ReactNode, cloneElement, isValidElement, Children } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

type AnimationEffect = 'fade-up' | 'fade-left' | 'fade-right' | 'zoom-in';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  effect?: AnimationEffect;
  hasItems?: boolean;
}

const getAnimationClasses = (effect: AnimationEffect, isVisible: boolean) => {
  const baseClasses = 'transform transition-all duration-1000';
  const animations = {
    'fade-up': isVisible
      ? 'opacity-100 translate-y-0'
      : 'opacity-0 translate-y-8',
    'fade-left': isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 -translate-x-8',
    'fade-right': isVisible
      ? 'opacity-100 translate-x-0'
      : 'opacity-0 translate-x-8',
    'zoom-in': isVisible
      ? 'opacity-100 scale-100'
      : 'opacity-0 scale-95',
  };
  
  return `${baseClasses} ${animations[effect]}`;
};

export default function SectionWrapper({
  children,
  id,
  effect = 'fade-up',
  hasItems = false,
}: SectionWrapperProps) {
  const { ref, isVisible } = useIntersectionObserver();

  const childrenWithDelay = hasItems
    ? Children.map(children, (child, index) => {
        if (isValidElement(child)) {
          return cloneElement(child as React.ReactElement<any>, {
            className: `${(child.props as any).className || ''} ${
              isVisible
                ? 'animate-fade-in'
                : 'opacity-0'
            }`,
            style: {
              ...child.props.style,
              animationDelay: `${index * 200}ms`,
              transitionDelay: `${index * 200}ms`,
            },
          });
        }
        return child;
      })
    : children;

  return (
    <section
      id={id}
      ref={ref}
      className={getAnimationClasses(effect, isVisible)}
    >
      <div className={`relative ${
        isVisible ? 'animate-section-highlight' : ''
      }`}>
        {childrenWithDelay}
      </div>
    </section>
  );
}
