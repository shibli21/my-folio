import { extendTheme } from "@chakra-ui/core";

const theme = extendTheme({
  colors: { primary: "#fd3e60" },
  styles: {
    global: (props) => ({
      "html, body": {
        color: props.colorMode === "dark" ? "white" : "gray.800",
        bg: props.colorMode === "dark" ? "gray.800" : "white",
      },
    }),
  },
});

export default theme;
