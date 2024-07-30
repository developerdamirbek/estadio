import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { SliderArrowButtons, WidgetHeader } from '@/components'
import maindictionary from '@/dictionary'
import { Cards } from './Cards'

import style from './StudentCompetitionProjects.module.scss'

const cn = classNames.bind(style)

export const StudentCompetitionProjects = () => (
  <Box component="section" className={cn('student-competition-projects')}>
    <WidgetHeader
      title={maindictionary.studentCompetitionProjectsTitle}
      actions={<SliderArrowButtons isUnHide sliderNext="studentCompetitionNext" sliderPrev="studentCompetitionPrev" />}
    />

    <Cards />
  </Box>
)

StudentCompetitionProjects.displayName = 'StudentCompetitionProjects'
