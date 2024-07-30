import React from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { courseAudienceData } from './data'
import { IconBox } from './IconBox'

import styles from './CourseAudience.module.scss'

const cn = classNames.bind(styles)

export const CourseAudience = () => (
  <Box className={cn('course-audience')}>
    <Box className={cn('course-audience__title-block')}>
      <Typography variant="h3">{mainDictionary.courseAudienceTitle}</Typography>
    </Box>
    <Box className={cn('course-audience__content')}>
      {courseAudienceData.map(({ id, title, icon: Icon, description }) => (
        <Box key={id} className={cn('course-audience__item')}>
          <IconBox id={id}>
            <Icon />
          </IconBox>
          <Box className={cn('course-audience__item-info')}>
            <Typography className={cn('course-audience__item-title')}>{title}</Typography>
            <Typography className={cn('course-audience__item-description')}>{description}</Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
)

CourseAudience.displayName = 'CourseAudience'
