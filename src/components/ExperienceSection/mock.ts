import { ExperienceSectionProps } from '.'
import {
  SiC,
  SiDocker,
  SiGit,
  SiGraphql,
  SiJest,
  SiLaravel,
  SiMongodb,
  SiNextDotJs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiStorybook,
  SiStyledComponents,
  SiTypescript
} from 'react-icons/si'

export const mockTechs: ExperienceSectionProps = {
  techs: [
    { name: 'NextJS', icon: SiNextDotJs },
    { name: 'React', icon: SiReact },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'Docker', icon: SiDocker },
    { name: 'PHP', icon: SiPhp },
    { name: 'Storybook', icon: SiStorybook },
    { name: 'Jest', icon: SiJest },
    { name: 'Styled Components', icon: SiStyledComponents },
    { name: 'Postgres', icon: SiPostgresql },
    { name: 'Mongo DB', icon: SiMongodb },
    { name: 'C', icon: SiC },
    { name: 'Typescript', icon: SiTypescript },
    { name: 'GraphQL', icon: SiGraphql },
    { name: 'Git', icon: SiGit }
  ]
}
