import * as React from 'react'
import { Box, Card, CardContent, Grid, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import style from './CourseStructureCard.module.scss'

const cn = classNames.bind(style)

type Props = {
  title: string
  description: string
  color: string
  icon: string
}

export const CourseStructureCard = ({ title, description, color, icon: Icon }: Props) => (
  <Grid item xs={3}>
    <Card className={cn('course-structure__card')} sx={{ maxWidth: 312 }}>
      <Box
        className={cn('course-structure__card-icon', {
          [`course-structure__card-icon--color-${color}`]: color,
        })}
      >
        <Icon />
      </Box>
      <CardContent className={cn('course-structure__card-content')}>
        <Typography className={cn('course-structure__card-title')} gutterBottom variant="h5">
          {title}
        </Typography>
        <Typography className={cn('course-structure__card-description')} variant="body2">
          {description}
        </Typography>
      </CardContent>
    </Card>
  </Grid>
)
