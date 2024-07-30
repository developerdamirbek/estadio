import { ReactNode } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { CenterBlock } from '@/layouts/CenterBlock'
import { Footer } from '@/layouts/Footer'
import { Header } from './Header'

import styles from './Layout.module.scss'

const cn = classNames.bind(styles)

type Props = {
  children: ReactNode
  isMain?: boolean
  isPage?: boolean
}

export const Layout = ({ children, isMain, isPage }: Props) => (
  <Box component="section" className={cn('layout')}>
    <Box className={cn('layout__header', { 'layout__header--white': isMain })}>
      <CenterBlock>
        <Header />
      </CenterBlock>
    </Box>

    <Box component="main" className={cn('layout__content')}>
      <CenterBlock isPage={isPage}>
        {children}
        <Footer />
      </CenterBlock>
    </Box>
  </Box>
)
