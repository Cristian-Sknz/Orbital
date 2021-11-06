import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const DefaultConfig = {
  distance: '30px',
  duration: 1800,
  reset: true,
  interval: 500,
};

type Configuration = ((reveal: typeof ScrollReveal) => void) | string;
type RevealBreakPoint = {
  width: number;
  origin: Configuration;
};

function useReveal<T extends HTMLElement>(origin: Configuration, breakpoint?: RevealBreakPoint): React.RefObject<T> {
  const ref = useRef<T>(null);
  const rc = ScrollReveal();

  useEffect(() => {
    if (ref.current == null) return;
    handleReveal(rc, ref.current, origin);
    handleBreakpoint(rc, ref.current, breakpoint);
  }, [ref, rc, origin, breakpoint]);

  return ref;
}

function isFunction(item: any): item is Function {
  return typeof origin === 'function';
}

function executeIfIsFunction(item: any): boolean {
  if (isFunction(item)) {
    item();
    return true;
  }
  return false;
}

function handleBreakpoint<T extends HTMLElement>(rc: typeof ScrollReveal, element: T, breakpoint?: RevealBreakPoint) {
  if (breakpoint == null || window.innerWidth >= breakpoint.width) {
    return;
  }

  if (executeIfIsFunction(breakpoint.origin)) {
    return;
  }

  rc.reveal(element, {
    ...DefaultConfig,
    origin: breakpoint.origin as string,
  });
}

function handleReveal<T extends HTMLElement>(rc: typeof ScrollReveal, element: T, origin: Configuration) {
  if (executeIfIsFunction(origin)) {
    return;
  }
  rc.reveal(element, {
    ...DefaultConfig,
    origin: origin as string,
  });
}

export default useReveal;
