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
      },
    }),
  },
});

export default theme;
