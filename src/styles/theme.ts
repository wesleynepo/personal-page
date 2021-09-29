import { extendTheme } from '@chakra-ui/react'

const customTheme = {
  styles: {
    global: {
      body: {
        bg: 'secondary.800'
      }
    }
  },
  colors: {
    primary: {
      '50': '#CAF0F7',
      '100': '#CAF0F8',
      '200': '#ADE8F4',
      '300': '#90E0EF',
      '400': '#48CAE4',
      '500': '#00B4D8',
      '600': '#0096C7',
      '700': '#0077B6',
      '800': '#023E8A',
      '900': '#03045E'
    },
    secondary: {
      '50': '#F7FAFC',
      '100': '#EDF2F7',
      '200': '#E2E8F0',
      '300': '#CBD5E0',
      '400': '#A0AEC0',
      '500': '#718096',
      '600': '#4A5568',
      '700': '#2D3748',
      '800': '#1A202C',
      '900': '#171923'
    }
  },
  fonts: {
    body: "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    heading:
      "Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif"
  }
}

export const theme = extendTheme(customTheme)

export type Theme = typeof customTheme & typeof theme
