import { Image } from '@chakra-ui/image'
import { ListIcon, ListItem, List, Heading, Text, Box } from '@chakra-ui/layout'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import { Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { useBreakpointValue } from '@chakra-ui/media-query'

export const WorkInfo = ({
  jobTitle,
  company,
  description,
  timespan
}: WorkExperienceInfo) => {
  return (
    <>
      <Box m="5">
        <Text color="primary.100" fontWeight="bold">
          {jobTitle}
        </Text>
        <Text
          as="a"
          href="https://sgsistemas.com.br/"
          color="primary.300"
          fontWeight="bold"
        >
          {company}
        </Text>
        <Text color="white" fontSize="xs">
          {timespan}
        </Text>
      </Box>

      <List color="primary.100" mt="5" fontSize="sm" align="left">
        {description.map((item, index) => (
          <ListItem key={index}>
            <ListIcon as={ArrowForwardIcon} />
            {item}
          </ListItem>
        ))}
      </List>
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
  const tabOrientation =
    useBreakpointValue({
      base: 'horizontal',
      sm: 'horizontal',
      md: 'vertical',
      lg: 'vertical',
      xl: 'vertical'
    }) ?? ('vertical' as any)

  return (
    <>
      <Heading size="2xl" color="white" casing="uppercase" mb="3" mt="10">
        ONDE TRABALHEI
      </Heading>
      <Tabs isFitted variant="unstyled" orientation={tabOrientation}>
        <TabList>
          {works.map((work) => (
            <Tab
              key={work.company}
              borderColor="primary.700"
              borderLeftWidth={tabOrientation === 'vertical' ? '0.25rem' : '0'}
              _selected={{
                bg: 'secondary.700',
                opacity: 1,
                borderColor: 'primary.500',
                boxShadow: 'none',
                borderLeftWidth:
                  tabOrientation === 'vertical' ? '0.25rem' : '0',
                borderBottomWidth:
                  tabOrientation === 'horizontal' ? '0.25rem' : '0'
              }}
              opacity="0.5"
            >
              <Image src={work.imageUri} h="10" w="50" />
            </Tab>
          ))}
        </TabList>
        <TabPanels>
          {works.map((work) => (
            <TabPanel key={work.id}>
              <WorkInfo {...work} />
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </>
  )
}

export default ExperienceSection
