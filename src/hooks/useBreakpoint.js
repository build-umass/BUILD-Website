
import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl"} Breakpoint
 */

/**
 * @type {Record<Breakpoint, number>}
 * @description enum for the different breakpoint sizes
 * @example BreakpointSize.xs === 576
 */
export const BreakpointSize = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1440,
  xxl: 9999,
};

/**
 * @type {Record<Breakpoint, string>}
 * @description enum for the different breakpoints
 * @example Breakpoint.xs === 'xs'
 */
export const Breakpoint = {
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',
};

/**
 * @param {number} width
 * @returns {Breakpoint}
 */
const resolveBreakpoint = (width) => {
  const breakpoints = Object.entries(BreakpointSize);
  const [breakpoint] = breakpoints.find(([_, value]) => width < value);
  return breakpoint;
};

/**
 * @returns {Breakpoint}
 */
export const useBreakpoint = () => {
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