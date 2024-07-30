import CloseIcon from '@mui/icons-material/Close'
import { Box, Button, Drawer, IconButton, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import PhoneCallIcon from '@/assets/icons/phone.svg'
import { Logo } from '@/components'
import { PUBLIC_PHONE } from '@/constants'
import { useAppStoreActions, useAppStoreStates } from '@/stores/app'
import { paperProps } from '../Menu.style'
import { MenuItems } from '../MenuItems'

import style from './MobileDarawer.module.scss'

const cn = classNames.bind(style)

export const MobileDrawer = () => {
  const { toggleSidebar } = useAppStoreActions()
  const { isSidebarMini } = useAppStoreStates()

  const handleCloseAction = () => {
    toggleSidebar(false)
  }

  return (
    <Drawer open={isSidebarMini} anchor="right" onClose={handleCloseAction} PaperProps={paperProps}>
      <Box className={cn('drawer')}>
        <Box className={cn('drawer__top')}>
          <Box className={cn('drawer__top--header')}>
            <Logo />

            <IconButton onClick={handleCloseAction}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box className={cn('drawer__top--middle')}>
            <MenuItems column />
          </Box>
        </Box>
      </Box>

      {PUBLIC_PHONE && (
        <Link href={`tel:${PUBLIC_PHONE}`} className={cn('drawer__button')}>
          <Button startIcon={<PhoneCallIcon />} variant="contained">
            <Typography variant="h5">{PUBLIC_PHONE}</Typography>
          </Button>
        </Link>
      )}
    </Drawer>
  )
}
