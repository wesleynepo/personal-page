import { SocialMediaProps } from '.'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
export const mockSocialMedia: SocialMediaProps = {
  links: [
    {
      label: 'Linked-in',
      icon: FaLinkedin,
      href: 'https://www.linkedin.com/in/wesleynepo/'
    },
    {
      label: 'Github',
      icon: FaGithub,
      href: 'https://github.com/wesleynepo'
    }
  ]
}
