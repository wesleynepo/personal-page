import React from 'react'
import { Text, VStack } from '@chakra-ui/layout'

export type InfoSectionProps = {
  firstname: string
  lastname: string
  heading: string
  title: string
  description: string
}

const InfoSection = ({
  firstname,
  lastname,
  heading,
  title,
  description
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
