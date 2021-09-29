import { Story, Meta } from '@storybook/react'
import InfoSection from '.'

import { infoSectionMock } from './mock'

export default {
  title: 'InfoSection',
  component: InfoSection
} as Meta

export const Default: Story = () => <InfoSection {...infoSectionMock} />
