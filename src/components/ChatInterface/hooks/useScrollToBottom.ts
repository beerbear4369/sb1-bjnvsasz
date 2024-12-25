import { useEffect, useRef } from 'react';

export function useScrollToBottom<T extends HTMLElement>(deps: any[] = []) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.scrollTop = element.scrollHeight;
    }
  }, deps);

  return ref;
}