import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import svgr from "vite-plugin-svgr"

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  // Match Gatsby's gatsby-plugin-remove-trailing-slashes behaviour loosely:
  // keep directory output so /resources/javascript/ and /resources/foo.md both resolve.
  trailingSlash: "ignore",
  vite: {
    plugins: [
      // `import Icon from "./icon.svg?react"` returns a React component,
      // replacing gatsby-plugin-react-svg / svg-react-loader. The `?react`
      // query keeps Astro's asset pipeline from claiming the .svg import.
      svgr(),
    ],
  },
})
