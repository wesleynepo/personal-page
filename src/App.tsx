import * as React from "react"
import {
  ChakraProvider,
  Container
} from "@chakra-ui/react"
import { theme } from "./styles/theme"
import InfoSection from "./components/InfoSection"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container mt="10">
      <InfoSection/>
    </Container>
  </ChakraProvider>
)
