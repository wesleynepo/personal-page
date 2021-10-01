import Icon from '@chakra-ui/icon'
import { Text, Flex, Grid, GridItem } from '@chakra-ui/layout'
import { IconType } from 'react-icons'

export type ExperienceSectionProps = {
  techs: Tech[]
}

type Tech = {
  icon: IconType
  name: string
}

const ExperienceSection = ({ techs }: ExperienceSectionProps) => {
  return (
    <Flex direction="column" mt="50">
      <Text color="primary.500" fontWeight="bold" fontSize="2xl">
        Tecnologias que eu trabalho
      </Text>
      <Grid
        color="primary.50"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }}
        gap="10"
        mt="10"
      >
        {techs.map((tech, index) => (
          <GridItem key={index}>
            <Text size="md">
              {' '}
              <Icon as={tech.icon} w="7" h="7" mr="3" />
              {tech.name}
            </Text>
          </GridItem>
        ))}
      </Grid>
    </Flex>
  )
}

export default ExperienceSection
