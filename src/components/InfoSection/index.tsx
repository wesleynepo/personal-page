import { Text, VStack } from '@chakra-ui/layout'
import SocialMedia, { SocialMediaProps } from '../SocialMedia'

export type InfoSectionProps = {
  firstname: string
  lastname: string
  heading: string
  title: string
  description: string
} & SocialMediaProps

const InfoSection = ({
  firstname,
  lastname,
  heading,
  title,
  description,
  links
}: InfoSectionProps) => {
  return (
    <VStack alignItems="left" color="white">
      <Text color="primary.50"></Text>
      {heading}
      <Text
        fontWeight="bold"
        casing="uppercase"
        fontSize="x-large"
        lineHeight="1"
        pt="3"
      >
        {firstname}
      </Text>
      <Text
        fontWeight="bold"
        casing="uppercase"
        fontSize="xx-large"
        color="primary.400"
        lineHeight="1"
      >
        {lastname}
      </Text>
      <SocialMedia links={links} />
      <Text fontWeight="bold" color="primary.200">
        {title}
      </Text>
      <Text
        fontSize="sm"
        color="primary.50"
        pt="10"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </VStack>
  )
}

export default InfoSection
