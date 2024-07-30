import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import 'swiper/css/navigation'

import { PropsWithChildren } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { QueryProvider } from '@/providers/QueryProvider'
import { theme } from '@/styles/mui'

export const Providers = ({ children }: PropsWithChildren<Record<string, unknown>>) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />

    <QueryProvider>{children}</QueryProvider>
  </ThemeProvider>
)
