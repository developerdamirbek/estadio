import React from 'react'
import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import mainDictionary from '@/dictionary'
import { portfolioProjectData } from './data'
import { PortfolioCarousel } from './PortfolioCarousel'

import styles from './PortfolioProjects.module.scss'

const cn = classNames.bind(styles)

export const PortfolioProjects = () => (
  <Box className={cn('portfolio-projects')}>
    <PortfolioCarousel data={portfolioProjectData} title={mainDictionary.portfolioProjects} />
  </Box>
)

PortfolioProjects.displayName = 'PortfolioProjects'
