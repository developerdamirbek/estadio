import MenuIcon from '@mui/icons-material/Menu'
import { Box, IconButton } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import PhoneIcon from '@/assets/icons/phone.svg'
import { PUBLIC_PHONE } from '@/constants'
import { useAppStoreActions } from '@/stores/app'

import styles from './Actions.module.scss'

const cn = classNames.bind(styles)

export const Actions = () => {
  const { toggleSidebar } = useAppStoreActions()

  const handleOpenAction = () => {
    toggleSidebar()
  }

  return (
    <Box className={cn('actions')}>
      <Box className={cn('actions__mobile')}>
        <IconButton onClick={handleOpenAction}>
          <MenuIcon />
        </IconButton>
      </Box>

      {PUBLIC_PHONE && (
        <Box className={cn('actions__desktop')}>
          <Box component={Link} href={`tel:${PUBLIC_PHONE}`} className={cn('actions__desktop--item')}>
            <PhoneIcon />
            {PUBLIC_PHONE}
          </Box>
        </Box>
      )}
    </Box>
  )
}
