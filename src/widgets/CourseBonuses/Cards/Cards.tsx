import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { courseBonuses } from '../constants'

import style from './Cards.module.scss'

const cn = classNames.bind(style)

export const Cards = () => (
  <Box className={cn('cards')}>
    {courseBonuses.map(({ title, subtitle, image }) => (
      <Box key={title} className={cn('cards__card')}>
        <Box component={Image} src={image} alt="course-bonus-image" className={cn('cards__card-image')} />

        <Box className={cn('cards__card-content')}>
          <Typography variant="h4">{title}</Typography>

          <Typography variant="h6">{subtitle}</Typography>
        </Box>
      </Box>
    ))}
  </Box>
)
