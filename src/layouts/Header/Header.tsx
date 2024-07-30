'use client'

import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { Logo } from '@/components'
import { useAppStoreStates } from '@/stores/app'
import { Actions } from './Actions'
import { Menu } from './Menu'

import styles from './Header.module.scss'

const cn = classNames.bind(styles)

export const Header = () => {
  const { isSidebarMini } = useAppStoreStates()

  return (
    <Box component="header" className={cn('header')}>
      <Box className={cn('header__left')}>
        <Logo />

        <Menu />
      </Box>

      {!isSidebarMini && (
        <Box className={cn('header__right')}>
          <Actions />
        </Box>
      )}
    </Box>
  )
}
