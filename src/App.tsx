import '@fontsource/poppins'

import { ChakraProvider, Container, Center } from '@chakra-ui/react'
import { theme } from './styles/theme'
import InfoSection from './components/InfoSection'
import { infoSectionMock } from './components/InfoSection/mock'
import ExperienceSection from './components/ExperienceSection'
import { mockTechs } from './components/ExperienceSection/mock'
import Logo from './components/Logo'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container mt="10" maxW={{ base: 'container.sm' }}>
      <Center m="10">
        <Logo />
      </Center>
      <InfoSection {...infoSectionMock} />
      <ExperienceSection {...mockTechs} />
    </Container>
  </ChakraProvider>
)
