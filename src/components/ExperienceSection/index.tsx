import { Image } from '@chakra-ui/image'
import {
  Center,
  Flex,
  ListIcon,
  ListItem,
  List,
  Heading,
  Text,
  Box
} from '@chakra-ui/layout'
import { useState } from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

type EnterpriseButtonProps = {
  src: string
  active?: boolean
  onClick: () => void
}

const EnterpriseButton = ({ src, active, onClick }: EnterpriseButtonProps) => {
  return (
    <>
      <Center
        as="button"
        bgColor={active ? 'secondary.700' : ''}
        borderBottom="0.2rem"
        borderStyle="solid"
        borderColor={active ? 'primary.600' : 'primary.200'}
        minW="50%"
        p="4"
        onClick={onClick}
      >
        <Image src={src} />
      </Center>
    </>
  )
}

export type WorkExperienceInfo = {
  id: number
  imageUri: string
  jobTitle: string
  company: string
  timespan: string
  description: string[]
}

export type ExperienceSectionProps = {
  works: WorkExperienceInfo[]
}

const ExperienceSection = ({ works }: ExperienceSectionProps) => {
  const [activeWorkExperience, setWorkExperience] =
    useState<WorkExperienceInfo>(works[0])

  return (
    <>
      <Heading size="2xl" color="white" casing="uppercase" mb="3" mt="10">
        ONDE TRABALHEI
      </Heading>
      <Flex flexDir="row" overflowX="auto">
        {works.map((work) => (
          <EnterpriseButton
            key={work.id}
            src={work.imageUri}
            onClick={() => setWorkExperience(work)}
            active={activeWorkExperience.id === work.id}
          />
        ))}
      </Flex>

      <Box m="5">
        <Text color="primary.100" fontWeight="bold">
          {activeWorkExperience.jobTitle}
        </Text>
        <Text
          as="a"
          href="https://sgsistemas.com.br/"
          color="primary.300"
          fontWeight="bold"
        >
          {activeWorkExperience.company}
        </Text>
        <Text color="white" fontSize="xs">
          {activeWorkExperience.timespan}
        </Text>
      </Box>

      <List color="primary.100" mt="5" fontSize="sm">
        {activeWorkExperience.description.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={ArrowForwardIcon} />
            {item}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default ExperienceSection
