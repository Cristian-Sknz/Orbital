import React, { useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';

const DefaultConfig = {
  distance: '30px',
  duration: 1800,
  reset: true,
  interval: 500,
};

type Configuration = ((reveal: typeof ScrollReveal) => void) | string;

function useReveal<T extends HTMLElement>(origin: Configuration): React.RefObject<T> {
  const ref = useRef<T>(null);
  const rc = ScrollReveal();

  useEffect(() => {
    if (ref.current == null) return;
    if (typeof origin === 'function') {
      origin(rc);
      return;
    }
    rc.reveal(ref.current, {
      ...DefaultConfig,
      origin: origin,
    });
  }, [ref, rc, origin]);

  return ref;
}

export default useReveal;
