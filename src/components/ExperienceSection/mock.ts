import { WorkExperienceInfo } from '.'

const gazin: WorkExperienceInfo = {
  id: 1,
  imageUri: '/images/gazin.png',
  company: 'Gazin Tech',
  jobTitle: 'Desenvolvedor Pleno',
  timespan: 'Março 2021 - Presente',
  description: [
    'Atuando na sustentação e desenvolvimento no projeto do back-end do Ecommerce de empresa em PHP utilizando o framework Laravel.',
    'Refatoração do projeto Ecommerce em NextJS, Chakra UI.',
    'Contato com clean architecture e Domain design driven.',
    'SEO, Linx BigAdCore e melhorias nos WebVitals do front-end legado.'
  ]
}

const sgSistemas: WorkExperienceInfo = {
  id: 2,
  imageUri: '/images/sg.png',
  company: 'SG Sistemas de Automação',
  jobTitle: 'Desenvolvedor Sênior',
  timespan: 'Maio 2019 - Fevereiro 2021',
  description: [
    'Trabalhei na sustentação e desenvolvimento do ERP legado da empresa desenvolvido em Harbour/Clipper e no Food Service da empresa.',
    'Atuei nas melhorias de desempenho reduzindo de horas para minutos a emissão de  relatórios de vendas que estavam escritos em grau de complexidade O(n²) para reduzir para O(n) utilizando de ferramentas como Callgrind.',
    'Integrações com terceiros, exportações fiscais, remessas CNAB, emissão de notas fiscais entre outros.'
  ]
}

export const works = [gazin, sgSistemas]
