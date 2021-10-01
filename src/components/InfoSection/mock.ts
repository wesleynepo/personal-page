import { InfoSectionProps } from '.'
import { mockSocialMedia } from '../SocialMedia/mock'

export const infoSectionMock: InfoSectionProps = {
  firstname: 'Wesley',
  lastname: 'Nepomuceno',
  description:
    'Obrigado pela visita ao meu site pessoal! <br /> Eu atuo como desenvolvedor, porém sou formado em Engenharia Civil <strong>(UNICESUMAR)</strong>, e tenho uma especialização em Gestão de Projetos <strong>(UEM)</strong>. <br/> Atualmente estudando front-end e programação funcional',
  heading: 'Opa, parece que você me encontrou!',
  title: 'Software Developer',
  ...mockSocialMedia
}
