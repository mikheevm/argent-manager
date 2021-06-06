import { extendTheme } from "@chakra-ui/react"

const extendedTheme = extendTheme({
  fonts: {
    body: "Barlow, sans-serif",
    heading: "Barlow, serif",
  },
  colors: {
    black: "#070707",
    orange: {
      500: "#f36a3d",
    },
  },
})

export { extendedTheme }
