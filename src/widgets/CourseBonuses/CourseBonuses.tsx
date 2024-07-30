import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { Cards } from './Cards'

import style from './CourseBonuses.module.scss'

const cn = classNames.bind(style)

export const CourseBonuses = () => (
  <Box component="section" className={cn('course-bonuses')}>
    <WidgetHeader title={mainDictionary.bonuses} />

    <Cards />
  </Box>
)

CourseBonuses.displayName = 'CourseBonuses'
