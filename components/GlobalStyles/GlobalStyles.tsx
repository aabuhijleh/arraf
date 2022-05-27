import { COLORS, SIZES } from "@/theme/constants";
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html {
    --color-primary: hsl(${COLORS.primary});
    --color-secondary: hsl(${COLORS.secondary});
    --color-white: hsl(${COLORS.white});
    --color-black: hsl(${COLORS.black});
    --color-gray-100: hsl(${COLORS.gray[100]});
    --color-gray-300: hsl(${COLORS.gray[300]});
    --color-gray-500: hsl(${COLORS.gray[500]});
    --color-gray-700: hsl(${COLORS.gray[700]});
    --color-gray-900: hsl(${COLORS.gray[900]});

    --fz-xxs: ${SIZES.xxs};
    --fz-xs: ${SIZES.xs};
    --fz-sm: ${SIZES.sm};
    --fz-md: ${SIZES.md};
    --fz-lg: ${SIZES.lg};
    --fz-xl: ${SIZES.xl};
    --fz-xxl: ${SIZES.xxl};
  }

  html,
  body,
  #__next {
    height: 100%;
  }

  body {
    font-family: 'Vazirmatn', sans-serif;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    background: var(--color-black);
    color: var(--color-white);
  }

  img,
  picture,
  video,
  canvas,
  svg {
    display: block;
    max-width: 100%;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
  }

  #__next {
    isolation: isolate;
  }
`;
