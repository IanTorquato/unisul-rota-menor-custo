import { Breakpoint } from 'antd';

type ColBreakpointsType = Partial<Record<Breakpoint, number>>;

export type GetColBreakpointsProps = number | ColBreakpointsType;

/**
 * The breakpoint "xs" has "24" as default value
 *
 * The breakpoint "sm" has "12" as default value
 */
export function getColBreakpoints(breakpoints?: GetColBreakpointsProps, smDefaultValue = 12): ColBreakpointsType {
  const colBreakpoints = typeof breakpoints === 'number' ? { sm: breakpoints } : breakpoints || {};

  return { xs: 24, sm: smDefaultValue, ...colBreakpoints };
}
