import { extendTheme } from "@chakra-ui/react";

// Define custom configuration
const customTheme = extendTheme({
  styles: {
    global: {
      html: {
        background: "transparent", // Transparent background for the HTML element
      },
      body: {
        background: "transparent", // Transparent background for the body
        color: "white", // Optional: Set text color (or transparent if needed)
      },
      "*::placeholder": {
        opacity: 0,
        color: "fg.subtle", // Custom placeholder style
      },
      "*::selection": {
        bg: "green.200", // Custom selection style
      },
    },
  },
});

export default customTheme;