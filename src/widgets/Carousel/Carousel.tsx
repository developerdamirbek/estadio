'use client'

import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { Autoplay, EffectFade, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { CustomPagination } from './Pagination'
import { slides } from './slides'

import styles from './Carousel.module.scss'

const cn = classNames.bind(styles)

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const totalSlides = slides.length

  return (
    <Box className={cn('carousel')}>
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        slidesPerView={1}
        pagination={{ type: 'custom', clickable: true }}
        effect={'fade'}
        loop
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Box className={cn('carousel__slide')}>
              <Image className={cn('carousel__slide-image')} src={slide.image} alt={slide.title} />
              <Box className={cn('carousel__slide-bg')} />
              <Box className={cn('carousel__slide-content')}>
                <Typography variant="h2">{slide.title}</Typography>
                <Typography variant="body1">{slide.description}</Typography>
              </Box>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>

      <Box className={cn('carousel__pagination')}>
        <CustomPagination totalSlides={totalSlides} activeIndex={activeIndex} />
      </Box>
    </Box>
  )
}
