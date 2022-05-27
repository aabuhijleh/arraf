export const COLORS = {
  primary: "339deg 100% 54%",
  secondary: "219deg 84% 53%",
  white: "0deg 0% 100%",
  black: "0,0%,0%",
  gray: {
    100: "185deg 5% 95%",
    300: "190deg 5% 80%",
    500: "196deg 4% 60%",
    700: "220deg 5% 40%",
    900: "220deg 3% 20%",
  },
};

export const SIZES = {
  xxs: `${12 / 16}rem`,
  xs: `${13 / 16}rem`,
  sm: `${14 / 16}rem`,
  md: `${16 / 16}rem`,
  lg: `${18 / 16}rem`,
  xl: `${20 / 16}rem`,
  xxl: `${24 / 16}rem`,
  xxxl: `${32 / 16}rem`,
  xxxxl: `${48 / 16}rem`,
};

export const WEIGHTS = {
  normal: 500,
  medium: 600,
  bold: 800,
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 950,
  laptop: 1300,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  laptopAndSmaller: `(max-width: ${BREAKPOINTS.laptop / 16}rem)`,
};
