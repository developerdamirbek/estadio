'use client'

import { createTheme } from '@mui/material/styles'
import { colors } from './colors'
import { components } from './components'
import { palette } from './palette'
import { typography } from './typography'

export const theme = createTheme({
  palette,
  typography,
  components,
  colors,
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
