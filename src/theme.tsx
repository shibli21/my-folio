import { theme as chakraTheme } from "@chakra-ui/core";

const fonts = { ...chakraTheme.fonts, mono: `'Menlo', monospace` };

const breakpoints = ["360px", "768px", "1024px", "1440px"];

const theme = {
  ...chakraTheme,
  colors: {
    ...chakraTheme.colors,
    black: "#16161D",
    primary: "#fd3e60",
    gray: {
      "700": "#2D3748",
      "800": "#1A202C",
    },
  },
  fonts,
  breakpoints: {
    sm: breakpoints[0],
    md: breakpoints[1],
    lg: breakpoints[2],
    xl: breakpoints[3],
  },
  fontSizes: {
    "2xs": "0.625rem",
    xs: "	0.75rem",
    sm: "	0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.75rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "4rem",
    "8xl": "5rem",
  },
  sizes: {
    ...chakraTheme.space,
    full: "100%",
    "3xs": "14rem",
    "2xs": "16rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
  },
  zIndices: {
    hide: -1,
    auto: "auto",
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800,
  },
};

export default theme;
