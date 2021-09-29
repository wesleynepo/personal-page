import { Story, Meta } from '@storybook/react'
import ExperienceSection from '.'

import { works } from './mock'

export default {
  title: 'ExperienceSection',
  component: ExperienceSection
} as Meta

export const Default: Story = () => <ExperienceSection works={works} />
