'use client'

import React from 'react'
import { CardMedia } from '@mui/material'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import { breakpoints } from './constants'
import { employmentData } from './data'

import styles from './Employment.module.scss'

const cn = classNames.bind(styles)

export const EmploymentCarousel = () => (
  <Swiper
    slidesPerView={4}
    autoplay
    spaceBetween={20}
    breakpoints={breakpoints}
    loop
    className={cn('employment__slider')}
  >
    {employmentData.images.map(({ id, image }) => (
      <SwiperSlide key={id}>
        <CardMedia component="img" className={cn('employment__image')} src={image} alt="employment image" />
      </SwiperSlide>
    ))}
  </Swiper>
)
