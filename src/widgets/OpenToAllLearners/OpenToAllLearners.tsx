import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { SliderArrowButtons, WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { Cards } from './Cards'

import style from './OpenToAllLearners.module.scss'

const cn = classNames.bind(style)

export const OpenToAllLearners = () => (
  <Box component="section" className={cn('open-to-all-learners')}>
    <WidgetHeader
      title={mainDictionary.openToAllLearnersTitle}
      actions={<SliderArrowButtons isUnHide sliderNext="openToAllLearnersNext" sliderPrev="openToAllLearnersPrev" />}
    />

    <Cards />
  </Box>
)

OpenToAllLearners.displayName = 'OpenToAllLearners'
