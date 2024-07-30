'use client'

import { Box, Chip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import maindictionary from '@/dictionary'
import { studentCompetitionProjects } from '../constants'
import { siperConfig } from './constants'

import style from './Cards.module.scss'

const cn = classNames.bind(style)

export const Cards = () => (
  <Box>
    <Swiper {...siperConfig}>
      {studentCompetitionProjects.map((item) => (
        <SwiperSlide key={item.autor}>
          <Box className={cn('card')}>
            <Box className={cn('card__autor')}>
              <Box component={Image} src={item.image} alt="card-image" className={cn('card__autor-image')} />

              <Chip
                label={`${maindictionary.studentCompetitionProjectsAuthor} ${item.autor}`}
                className={cn('card__autor-chip')}
              />
            </Box>

            <Box className={cn('card__content')}>
              <Typography variant="h4">{item.title}</Typography>

              <Typography variant="body1">{item.subtitle}</Typography>

              <Typography variant="body1">{item.secondSubtitle}</Typography>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
)
