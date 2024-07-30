import { useEffect } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import classNames from 'classnames/bind'
import { useAppStoreActions, useAppStoreStates } from '@/stores/app'
import { MenuItems } from './MenuItems'
import { MobileDrawer } from './MobileDrawer'

import styles from './Menu.module.scss'

const cn = classNames.bind(styles)

export const Menu = () => {
  const { isSidebarMini } = useAppStoreStates()
  const { toggleSidebar } = useAppStoreActions()

  const isScreenLarge = useMediaQuery('(min-width:701px)')

  useEffect(() => {
    if (isScreenLarge && isSidebarMini) {
      toggleSidebar(false)
    }
  }, [isScreenLarge, isSidebarMini])

  return (
    <Box component="nav" className={cn('menu')}>
      <MenuItems />

      <MobileDrawer />
    </Box>
  )
}
