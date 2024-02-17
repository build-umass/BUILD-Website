
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} Breakpoint
 */

export const BREAKPOINTS = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 9999,
};

/**
 * @param {number} width
 * @returns {Breakpoint}
 */
const resolveBreakpoint = (width) => {
  const breakpoints = Object.entries(BREAKPOINTS);
  const [breakpoint] = breakpoints.find(([_, value]) => width < value);
  return breakpoint;
};

/**
 * @returns {Breakpoint}
 */
const useBreakpoint = () => {
  const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));

  const setBreakpoint = () => {
    setSize(resolveBreakpoint(window.innerWidth));
  };

  useEffect(() => {
    const calcInnerWidth = debounce(setBreakpoint, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return size;
};

export default useBreakpoint;