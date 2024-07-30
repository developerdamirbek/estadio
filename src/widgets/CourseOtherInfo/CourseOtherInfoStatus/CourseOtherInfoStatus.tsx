import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Success from '@/assets/icons/check.svg'
import Warning from '@/assets/icons/warning.svg'
import mainDictionary from '@/dictionary'
import { Status, StatusProps } from '../types'

import style from './CourseOtherInfoStatus.module.scss'

const cn = classNames.bind(style)

export const CourseOtherInfoStatus = ({ status }: StatusProps) => (
  <Box
    className={cn(
      'course-other-info-status',
      { 'course-other-info-status--warning': status === Status.Warning },
      { 'course-other-info-status--success': status === Status.Success },
    )}
  >
    {status === Status.Success ? <Success /> : status === Status.Warning ? <Warning /> : null}

    <Typography variant="h6" className={cn('course-other-info-status__content')}>
      {status === Status.Success
        ? mainDictionary.courseOtherInfoSuccess
        : status === Status.Warning
          ? mainDictionary.courseOtherInfoWarning
          : ''}
    </Typography>
  </Box>
)
