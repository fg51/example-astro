import { defineConfig } from "@pandacss/dev";
import { createPreset } from "@park-ui/panda-preset";
import indigo from "@park-ui/panda-preset/colors/indigo";
import slate from "@park-ui/panda-preset/colors/slate";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  presets: [
    createPreset({ accentColor: indigo, grayColor: slate, radius: "sm" }),
  ],
  jsxFramework: "solid",

  // Where to look for your css declarations
  include: [
    "./src/**/*.{js,jsx,ts,tsx,astro}",
    "./pages/**/*.{js,jsx,ts,tsx,astro}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  // The output directory for your css system
  outdir: "styled-system",
});
