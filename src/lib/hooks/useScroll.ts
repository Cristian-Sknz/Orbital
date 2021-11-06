import { useCallback, useEffect, useState } from 'react';

export type ScrollElement = {
  id: string | null;
  className: string | null;
  item: string;
  top: number;
  height: number;
};

type SimpleObject = {
  item: string;
  element: HTMLElement;
}

function useScroll(selector: string[], offset?: number) : ScrollElement | undefined {
  const [item, setItem] = useState<ScrollElement>();

  const checkWindow = useCallback(() => {
    findAllElements(selector).forEach((element) => {
      if (!inside(element, window.scrollY, offset)) {
        return;
      }
      if (item?.item !== element.item) setItem(element);
    })
  },[item?.item, offset, selector]);

  useEffect(() => {
    window.addEventListener('scroll', checkWindow);
    return () => window.removeEventListener('scroll', checkWindow);
  }, [checkWindow]);

  return item;
}

function toScrollElement({element, item} : SimpleObject) : ScrollElement {
  console.log(element)
  return {
    id: element.getAttribute('id'),
    className: element.className,
    item: item,
    top: element.offsetTop,
    height: element.offsetHeight,
  }
}

function toSimpleObject(item: string) : SimpleObject {
  return {
    item: item,
    element: document.querySelector(item) as HTMLElement,
  }
}

function findAllElements(selects: string[]): ScrollElement[] {
  return selects.map((item) => toSimpleObject(item))
      .filter((item) => removeNulls(item.element))
      .map((element) => toScrollElement(element));
}

function removeNulls(item : any) : boolean {
  return item !== null;
}

function inside(element: ScrollElement, scroll: number, offset?: number): boolean {
  const top = element.top + (offset ? offset : 0);
  return scroll > top && scroll <= top + element.height;
}

export default useScroll;
