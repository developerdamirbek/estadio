import React from 'react'
import { Box, Button, Chip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import mainDictionary from '@/dictionary'
import { BenefitsCard } from './BenefitsCard'
import { courseBenefitsData } from './data'

import styles from './CourseEnrollmentBenefits.module.scss'

const cn = classNames.bind(styles)

export const CourseEnrollmentBenefits = () => (
  <Box className={cn('course-enrollment-benefits')}>
    <Image
      src={courseBenefitsData.image}
      className={cn('course-enrollment-benefits__image')}
      alt={courseBenefitsData.title}
    />
    <Box className={cn('course-enrollment-benefits__content')}>
      <Box className={cn('course-enrollment-benefits__content-box')}>
        <Typography className={cn('course-enrollment-benefits__content-title')}>{courseBenefitsData.title}</Typography>
        <Button variant="contained" className={cn('course-enrollment-benefits__content-button')}>
          {mainDictionary.registerCourse}
        </Button>
      </Box>
      <Box className={cn('course-enrollment-benefits__content-author')}>
        <Chip
          className={cn('course-enrollment-benefits__content-author--chip')}
          label={`Autor: ${courseBenefitsData.author}`}
        />
      </Box>
    </Box>
    <Box className={cn('course-enrollment-benefits__wrapper')}>
      {courseBenefitsData.details.map(({ id, title, icon }) => (
        <BenefitsCard key={id} id={id} title={title} icon={icon} />
      ))}
    </Box>
  </Box>
)

CourseEnrollmentBenefits.displayName = 'CourseEnrollmentBenefits'
