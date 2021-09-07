import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

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
  50: "#feb2bf",
  100: "#fe9fb0",
  200: "#fe8ba0",
  300: "#fe7890",
  400: "#fd6580",
  500: "#fd5170",
  600: "#fd3e60",
  700: "#e43856",
  800: "#ca324d",
  900: "#b12b43",
};

const primary = brandColorScheme[600];
const secondary = secondaryColorScheme[600];

// Text
const textPrimary = secondaryColorScheme[600];
const textSecondary = secondaryColorScheme[400];

// Background
const backgroundPrimary = "#FBFBFB";
const backgroundSecondary = "#EBEBEB";

// Dark mode
const textPrimaryDarkMode = backgroundPrimary;
const textSecondaryDarkMode = backgroundSecondary;

const backgroundPrimaryDarkMode = secondaryColorScheme[600];
const backgroundSecondaryDarkMode = secondaryColorScheme[400];

const theme = extendTheme({
  components: {
    Button: {
      baseStyle: {
        borderRadius: 0,
      },
      variants: {
        outline: () => ({
          borderColor: "primary",
          color: "primary",
          _hover: { bg: "primary", color: "white", textDecoration: "none" },
        }),
      },
    },
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
    primary,
    secondary,
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
          backgroundColor: "#fd3e60",
        },
      },
      "html, body": {
        fontFamily: "raleway",
        color: mode(textPrimary, textPrimaryDarkMode)(props),
        bg: mode(backgroundPrimary, backgroundPrimaryDarkMode)(props),
      },
      "*": {
        "::selection": {
          background: props.colorMode === "dark" ? "#fd3e60ed" : "primary",
          opacity: 1,
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

export default theme;
