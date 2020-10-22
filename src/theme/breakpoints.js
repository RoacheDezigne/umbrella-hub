export const appendUnitToArray = (arr, unit) => {
  return arr.map((val) => `${val}${unit}`);
};

const rawBreakpoints = [
  0, // zero
  320, // small
  672, // medium
  1056, // large
  1312, // xLarge
  1584, // max
];

const breakpoints = appendUnitToArray(rawBreakpoints, 'px');
breakpoints.zero = breakpoints[0];
breakpoints.sm = breakpoints[1];
breakpoints.md = breakpoints[2];
breakpoints.lg = breakpoints[3];
breakpoints.xl = breakpoints[4];
breakpoints.max = breakpoints[5];

export { breakpoints };
