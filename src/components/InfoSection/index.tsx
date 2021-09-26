import React from 'react'
import { Text, VStack } from "@chakra-ui/layout"

const InfoSection = () => {
  return (
    <VStack alignItems="left" color="white">
      <Text color="primary.50">
        Opa, parece que você me encontrou!
      </Text>

      <Text fontWeight="bold" casing="uppercase" fontSize="x-large" lineHeight="1" pt="3">
        Wesley
      </Text>
      <Text fontWeight="bold" casing="uppercase" fontSize="xx-large" color="primary.400" lineHeight="1">
        Nepomuceno
      </Text>
      <Text fontWeight="bold" color="primary.200">
        Software Developer
      </Text>
      <Text fontSize="sm" color="primary.50" pt="10">
        Obrigado pela visita no meu site pessoal! <br/>
        Eu atuo como desenvolvedor, porém sou formado em Engenharia Civil <strong>(UNICESUMAR)</strong>, e tenho uma especialização em Gestão de Projetos <strong>(UEM)</strong>.
        Atualmente sou fullstack developer na <strong>Gazin Tech</strong>, tenho uma maior familiaridade com desenvolvimento back-end entretanto venho estudando front-end nas horas vagas.
      </Text>
    </VStack>
  )
}

export default InfoSection
