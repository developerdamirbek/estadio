import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { mainMenuList } from '@/constants'
import { useAppStoreActions } from '@/stores/app'

import styles from './MenuItems.module.scss'

const cn = classNames.bind(styles)

type Props = {
  column?: boolean
}

export const MenuItems = ({ column }: Props) => {
  const { toggleSidebar } = useAppStoreActions()

  const pathname = usePathname()

  const handleCloseAction = () => {
    toggleSidebar(false)
  }

  return (
    <Box component="nav" className={cn('menuItems', { 'menuItems--open': column })}>
      {mainMenuList.map((item) => (
        <Link
          className={cn('menuItem__item', { 'menuItem__item--active': pathname === item.link })}
          key={item.link}
          href={item.link}
          onClick={handleCloseAction}
        >
          {item.title}
        </Link>
      ))}
    </Box>
  )
}
