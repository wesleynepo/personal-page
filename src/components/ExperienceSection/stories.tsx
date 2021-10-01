import { Story, Meta } from '@storybook/react'
import ExperienceSection from '.'

import { mockTechs } from './mock'

export default {
  title: 'ExperienceSection',
  component: ExperienceSection
} as Meta

export const Default: Story = () => <ExperienceSection {...mockTechs} />
