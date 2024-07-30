'use client'

import { Box, Card, Chip, Typography, useMediaQuery } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import Arrow from '@/assets/icons/arrow-right.svg'
import { openToAllLearners } from '../constants'
import { swiperConfig } from './constants'

import style from './Cards.module.scss'

const cn = classNames.bind(style)

export const Cards = () => {
  const matches = useMediaQuery('(min-width:500px)')

  return (
    <Box className={cn('cards')}>
      <Swiper {...swiperConfig}>
        {openToAllLearners.map((item) => (
          <SwiperSlide key={item.role}>
            <Card className={cn('cards__card')}>
              <Box component={Image} src={item.image} alt="card-image" className={cn('cards__card-image')} />

              <Box className={cn('cards__card-content')}>
                <Typography variant="body1">{item.content}</Typography>

                <Box className={cn('cards__card-content-bottom')}>
                  <Chip
                    label={item.name}
                    className={cn('cards__card-content-bottom-name')}
                    size={matches ? 'medium' : 'small'}
                  />

                  <Box className={cn('cards__card-content-bottom-arrow')}>
                    <Arrow />
                  </Box>

                  <Chip
                    label={item.role}
                    className={cn('cards__card-content-bottom-role')}
                    size={matches ? 'medium' : 'small'}
                  />
                </Box>
              </Box>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  )
}
