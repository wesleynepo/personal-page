import Icon from '@chakra-ui/icon'
import { HStack, Link } from '@chakra-ui/layout'
import { IconType } from 'react-icons'

export type SocialMediaProps = {
  links: SocialMediaLink[]
}

export type SocialMediaLink = {
  label: string
  href: string
  icon: IconType
}

const SocialMedia = ({ links }: SocialMediaProps) => {
  return (
    <HStack>
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
        >
          <Icon w="6" h="6" as={link.icon} color="primary.50" />
        </Link>
      ))}
    </HStack>
  )
}

export default SocialMedia
