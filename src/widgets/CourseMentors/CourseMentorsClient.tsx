'use client'

import { Box } from '@mui/material'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CourseMentorsResponse } from '@/types'
import { mentorSwiperConfig } from './constants'
import { CourseMentorSingle } from './CourseMentorSingle'

import styles from './CourseMentors.module.scss'
const cn = classNames.bind(styles)

export const CourseMentorsClient = ({ courseMentor }: CourseMentorsResponse) => (
  <Box className={cn('course-mentors__wrapper')}>
    <Swiper {...mentorSwiperConfig}>
      {courseMentor.map((mentor) => (
        <SwiperSlide key={mentor.id}>
          <CourseMentorSingle {...mentor} />
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
)
