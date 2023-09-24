import { useEffect, useState } from 'react';

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const eventHandler = (event: MediaQueryListEvent) =>
      setMatches(event.matches);
    mediaQuery.addEventListener('change', eventHandler);
    return () => mediaQuery.removeEventListener('change', eventHandler);
  }, []);
  return matches;
};

export default useMediaQuery;
