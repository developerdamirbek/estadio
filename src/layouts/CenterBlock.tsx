import { ReactNode } from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Layout.module.scss'

const cn = classNames.bind(styles)

type Props = {
  children: ReactNode
  isPage?: boolean
}

export const CenterBlock = ({ children, isPage }: Props) => (
  <Box className={cn('layout__center', { 'layout__center-space': isPage })}>{children}</Box>
)
