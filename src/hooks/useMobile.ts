import { useScrollContext } from '../context/ScrollContext';

export function useMobile() {
  const { isMobile } = useScrollContext();
  return isMobile;
}
