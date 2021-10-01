import { ChakraProvider, Container } from '@chakra-ui/react'
import { theme } from './styles/theme'
import InfoSection from './components/InfoSection'
import ExperienceSection from './components/ExperienceSection'
import { infoSectionMock } from './components/InfoSection/mock'
import { works } from './components/ExperienceSection/mock'

export const App = () => (
  <ChakraProvider theme={theme}>
    <Container mt="10" maxW={{ base: 'container.sm', md: 'container.lg' }}>
      <InfoSection {...infoSectionMock} />
      <ExperienceSection works={works} />
    </Container>
  </ChakraProvider>
)
