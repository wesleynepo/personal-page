import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Grid,
  theme,
  Spinner,
  Center
} from "@chakra-ui/react"

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh">
        <Center>
          <Spinner size="xl" m="5"/>
          <Text>
            Working progress!
          </Text>
        </Center>
      </Grid>
    </Box>
  </ChakraProvider>
)