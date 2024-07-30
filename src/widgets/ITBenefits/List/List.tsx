import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { itBenefitsList } from '../constants'

import style from './List.module.scss'

const cn = classNames.bind(style)

export const List = () => (
  <Box className={cn('list')}>
    {itBenefitsList.map(({ title }) => (
      <Box key={title} className={cn('list__item')}>
        <Typography variant="subtitle1">{title}</Typography>
      </Box>
    ))}
  </Box>
)
