import React from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { employmentData } from './data'
import { EmploymentCarousel } from './EmploymentCarousel'

import styles from './Employment.module.scss'

const cn = classNames.bind(styles)

export const Employment = () => (
  <Box className={cn('employment')}>
    <Box className={cn('employment__header')}>
      <Typography className={cn('employment__header-title')}>{mainDictionary.employmentTitle}</Typography>
      <Typography className={cn('employment__header-subtitle')}>{mainDictionary.employmentSubtitle}</Typography>
    </Box>
    <Box className={cn('employment__content')}>
      <Box className={cn('employment__slider')}>
        <EmploymentCarousel />
      </Box>
      <Box className={cn('employment__details')}>
        {employmentData.details.map(({ id, title }, index) => (
          <Box className={cn('employment__details-item')} key={id}>
            <Box className={cn('employment__details-item-icon')}>
              <Typography className={cn('employment__details-number')}>{index + 1}</Typography>
            </Box>
            <Typography className={cn('employment__details-item-title')}>{title}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  </Box>
)

Employment.displayName = 'Employment'
