import { useState, useEffect } from 'react';
import { debounce } from 'lodash';

/**
 * @usage
 * import { useBreakpoint } from '@hooks/useBreakpoint';
 * const { xs, sm, md, lg, xl, xxl, smAndUp, lgAndDown } = useBreakpoint();
 * style={{ width: xs ? '100%' : '50%' }}
 * xs is a reactively changing boolean that evaluates to true if the current breakpoint is xs
*/

/**
 * @typedef {"smAndDown" | "smAndUp" | "mdAndDown" | "mdAndUp" | "lgAndDown" | "lgAndUp"} BreakpointHelper
*/

/**
 * @typedef {"xs" | "sm" | "md" | "lg" | "xl" | "xxl" | BreakpointHelper} Breakpoint
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

  // base props
  xs: 'xs',
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
  xxl: 'xxl',

  // helper props
  smAndDown: 'smAndDown',
  smAndUp: 'smAndUp',
  mdAndDown: 'mdAndDown',
  mdAndUp: 'mdAndUp',
  lgAndDown: 'lgAndDown',
  lgAndUp: 'lgAndUp',
};

/**
 * @type {Record<BreakpointHelper, Breakpoint => boolean>}
 * @description maps helper props to their respective predicates
 */
export const breakpointHelpers = {
  smAndDown: (size) => size === Breakpoint.xs || size === Breakpoint.sm,
  smAndUp: (size) => size !== Breakpoint.xs,
  mdAndDown: (size) => size === Breakpoint.xs || size === Breakpoint.sm || size === Breakpoint.md,
  mdAndUp: (size) => size !== Breakpoint.xs && size !== Breakpoint.sm,
  lgAndDown: (size) => size === Breakpoint.xl || size === Breakpoint.xxl,
  lgAndUp: (size) => size !== Breakpoint.xl && size !== Breakpoint.xxl,
}

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

  // for ssr
  if (typeof window === 'undefined') {
    return Breakpoint.xxl;
  }

  const [size, setSize] = useState(() => resolveBreakpoint(window.innerWidth));
  const setBreakpoint = () => setSize(resolveBreakpoint(window.innerWidth));

  useEffect(() => {
    const calcInnerWidth = debounce(setBreakpoint, 200);
    window.addEventListener('resize', calcInnerWidth);
    return () => window.removeEventListener('resize', calcInnerWidth);
  }, []);

  return new Proxy(Breakpoint, {
    get(target, prop) {
      if (!(prop in target)) throw new Error(`Invalid breakpoint: ${prop}`);
      return (prop in breakpointHelpers) ? breakpointHelpers[prop](size) : size === prop;
    },
  });
};