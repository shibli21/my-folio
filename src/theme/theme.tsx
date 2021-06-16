import { extendTheme } from "@chakra-ui/react";

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
  colors: { primary: "#fd3e60" },
  styles: {
    global: (props) => ({
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
        color: props.colorMode === "dark" ? "white" : "gray.800",
        bg: props.colorMode === "dark" ? "gray.800" : "white",
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
