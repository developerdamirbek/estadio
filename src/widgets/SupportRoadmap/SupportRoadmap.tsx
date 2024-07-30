import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import RoadMap from 'public/images/roadmap.webp'

import style from './SupportRoadmap.module.scss'

const cn = classNames.bind(style)

export const SupportRoadmap = () => (
  <Box className={cn('support-roadmap')}>
    <Box className={cn('support-roadmap__image')} component={Image} src={RoadMap} alt="roadmap" />
  </Box>
)

SupportRoadmap.displayName = 'SupportRoadmap'
