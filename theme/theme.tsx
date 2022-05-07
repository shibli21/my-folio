import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const secondaryColorScheme = {
  50: "#9da1a4",
  100: "#848a8d",
  200: "#6b7276",
  300: "#535b5f",
  400: "#3a4349",
  500: "#222c32",
  600: "#09141b",
  700: "#081218",
  800: "#071016",
  900: "#060e13",
};
const brandColorScheme = {
  50: "#d6befd",
  100: "#cbaeff",
  200: "#c09eff",
  300: "#b58fff",
  400: "#a97fff",
  500: "#a277ff",
  600: "#8e60ff",
  700: "#7f50ff",
  800: "#6e3fff",
  900: "#5a2dff",
};

const tertiaryColorScheme = {
  50: "#98fdd8",
  100: "#86f8ce",
  200: "#69ecbf",
  300: "#5cdfb2",
  400: "#4fd1a6",
  500: "#49c29a",
  600: "#44b58f",
  700: "#3ea784",
  800: "#389979",
  900: "##328c6e",
};

const primary = brandColorScheme[700];
const secondary = secondaryColorScheme[600];
const tertiary = tertiaryColorScheme[500];

// Text
const textPrimary = secondaryColorScheme[600];
const textSecondary = secondaryColorScheme[400];

// Background
const backgroundPrimary = "#FBFBFB";
const backgroundSecondary = "#EBEBEB";

// Dark mode
const textPrimaryDarkMode = backgroundPrimary;
const textSecondaryDarkMode = backgroundSecondary;

const backgroundPrimaryDarkMode = textPrimary;
const backgroundSecondaryDarkMode = textSecondary;

export const theme = extendTheme({
  components: {
    Table: {
      baseStyle: {
        td: {
          border: "1px solid #eee",
        },
        th: {
          border: "1px solid #eee",
        },
      },
    },
  },
  colors: {
    brand: brandColorScheme,
    brandSecondary: secondaryColorScheme,
    brandTertiary: tertiaryColorScheme,
    primary,
    secondary,
    tertiary,
    text: {
      primary: textPrimary,
      secondary: textSecondary,
      primaryDark: textPrimaryDarkMode,
      secondaryDark: textSecondaryDarkMode,
    },
    background: {
      primary: backgroundPrimary,
      secondary: backgroundSecondary,
      primaryDark: backgroundPrimaryDarkMode,
      secondaryDark: backgroundSecondaryDarkMode,
    },
  },
  fonts: {
    body: "Poppins, sans-serif",
    heading: "'Roboto Mono', monospace",
  },
  config,
  styles: {
    global: (props: any) => ({
      html: {
        scrollPaddingTop: "70px",
        scrollBehavior: "smooth",
        overflowY: "scroll",
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "0",
        },
        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(0, 0, 0, 0.1)",
          backgroundColor: primary,
        },
      },
      body: {
        color: mode(textPrimary, textPrimaryDarkMode)(props),
        bg: mode(backgroundPrimary, backgroundPrimaryDarkMode)(props),
      },
      "*": {
        "::selection": {
          background: primary,
          color: "white",
        },
        "&:focus": {
          outline: "0 !important",
          boxShadow: "none",
          "&:not(.focus-visible)": {
            outline: "0 !important",
            boxShadow: "none !important",
          },
        },
      },
    }),
  },
});
