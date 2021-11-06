import React, { useCallback, useEffect, useState } from 'react';

/**
 *  Sempre que um elemento não estiver visivel na tela ao dar scroll,
 *  este hook será ativo, retornando um boolean.
 */
function useElementHide<T extends HTMLElement>(ref: React.RefObject<T>) {
  const [hide, setHide] = useState<boolean>(false);

  const checkWindow = useCallback(() => {
    if (!ref.current) return;
    if (window.scrollY <= ref.current.offsetHeight) {
      if (hide) {
        setHide(false);
      }
    } else {
      if (!hide) {
        setHide(true);
      }
    }
  }, [hide, ref])

  useEffect(() => {
    window.addEventListener('scroll', checkWindow);
    return () => window.removeEventListener('scroll', checkWindow);
  }, [checkWindow]);

  return hide;
}

export default useElementHide;
