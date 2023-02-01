import { createVuetify, ThemeDefinition } from 'vuetify'

const lightTheme: ThemeDefinition = {
  colors: {
    background: '#607D8B',
    surface: '#d04901',
    'surface-variant': '#424242',
    'on-surface-variant': '#EEEEEE',
    'on-surface': '#ffffff',
    primary: '#FF9800',
    'primary-darken-1': '#3700B3',
    secondary: '#D6568B',
    'secondary-darken-1': '#018786',
    anchor: '#8E5B9A',
    error: '#B00020',
    info: '#2196F3',
    success: '#014c01',
    warning: '#FB8C00'
  }
}

const darkTheme: ThemeDefinition = {
  colors: {
    background: '#202020',
    surface: '#eb5d31',
    'surface-variant': '#BDBDBD',
    'on-surface-variant': '#424242',
    'on-surface': '#f3f2f2',
    primary: '#db8d47',
    'primary-darken-1': '#3700B3',
    secondary: '#D6568B',
    'secondary-darken-1': '#03DAC5',
    anchor: '#8E5B9A',
    error: 'rgba(176,0,32,0.7)',
    info: 'rgba(33,150,243,0.7)',
    success: 'rgba(76,175,80,0.7)',
    warning: 'rgb(231,127,34)'
  }
}

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'dark',
      themes: {
        light: {
          ...lightTheme
        },
        dark: {
          ...darkTheme
        }
      },
    }
  })

  nuxtApp.vueApp.use(vuetify)
})
