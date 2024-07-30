import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import LogoIcon from '@/assets/icons/logo.svg'
import { ROUTES } from '@/constants'

import styles from './Logo.module.scss'

const cx = classNames.bind(styles)

export const Logo = () => (
  <Box component={Link} href={ROUTES.home} className={cx('logo')}>
    <LogoIcon />
  </Box>
)
