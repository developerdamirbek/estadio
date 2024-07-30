'use client'

import React, { ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery'
import classNames from 'classnames/bind'

import styles from './CourseAudience.module.scss'

const cn = classNames.bind(styles)

type Props = {
  children: ReactNode
  id: number
}

export const IconBox = ({ children, id }: Props) => {
  const isResponsive = useMediaQuery('(max-width: 1024px)')

  return (
    <Box className={cn('course-audience__item-icon')}>
      {!isResponsive ? children : <Typography className={cn('course-audience__item-number')}>{id}</Typography>}
    </Box>
  )
}
