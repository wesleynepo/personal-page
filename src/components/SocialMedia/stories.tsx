import { Story, Meta } from '@storybook/react'
import SocialMedia from './index'
import { mockSocialMedia } from './mock'

export default {
  title: 'SocialMedia',
  component: SocialMedia
} as Meta

export const Default: Story = () => <SocialMedia {...mockSocialMedia} />
