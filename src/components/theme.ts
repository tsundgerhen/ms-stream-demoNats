import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react";

// Define custom configuration
const customConfig = defineConfig({
  globalCss: {
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
});

// Create the system configuration by combining base and custom config
export const system = createSystem(defaultConfig, customConfig);