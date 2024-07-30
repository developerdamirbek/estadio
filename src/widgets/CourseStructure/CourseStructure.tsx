import { Box, Grid, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { CourseStructureCard } from './CourseStructureCard'
import { courseStructureData } from './CourseStructureCard/data'

import style from './CourseStructure.module.scss'

const cn = classNames.bind(style)

export const CourseStructure = () => (
  <Box>
    <Box className={cn('course-structure__top')}>
      <Typography variant="h3">{mainDictionary.courseStructureTitle}</Typography>
    </Box>
    <Box className={cn('course-structure__wrapper')}>
      <Grid container spacing={{ xs: 2, sm: 2, md: 3 }} columns={{ xs: 6, sm: 12, md: 12 }}>
        {courseStructureData.map(({ id, title, description, color, icon }) => (
          <CourseStructureCard key={id} title={title} description={description} color={color} icon={icon} />
        ))}
      </Grid>
    </Box>
  </Box>
)

CourseStructure.displayName = 'CourseStructure'
