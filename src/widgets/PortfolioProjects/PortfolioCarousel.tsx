'use client'

import React from 'react'
import { Box, IconButton, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import SwiperCore from 'swiper'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArrowBackIcon from '@/assets/icons/arrow-left.svg'
import ArrowForwardIcon from '@/assets/icons/arrow-right.svg'
import { PortfolioProjectType } from './data'

import styles from './PortfolioProjects.module.scss'

const cn = classNames.bind(styles)

SwiperCore.use([Navigation])

type Props = {
  data: PortfolioProjectType[]
  title: string
}

export const PortfolioCarousel = ({ data, title }: Props) => (
  <Box className={cn('portfolio-projects__carousel')}>
    <Box className={cn('portfolio-projects__carousel-header')}>
      <Typography className={cn('portfolio-projects__carousel-title')}>{title}</Typography>
      <Box className={cn('portfolio-projects__carousel-navigation')}>
        <IconButton className={cn('swiper-button-prev')}>
          <ArrowBackIcon />
        </IconButton>
        <IconButton className={cn('swiper-button-next')}>
          <ArrowForwardIcon />
        </IconButton>
      </Box>
    </Box>
    <Swiper
      className={cn('portfolio-projects__carousel-items')}
      spaceBetween={50}
      slidesPerView={1}
      loop
      navigation={{
        nextEl: `.${cn('swiper-button-next')}`,
        prevEl: `.${cn('swiper-button-prev')}`,
      }}
    >
      {data.map(({ id, title, img, descriptions }) => (
        <SwiperSlide className={cn('portfolio-projects__carousel-item')} key={id}>
          <Image
            className={cn('portfolio-projects__carousel-item--img')}
            width={100}
            height={100}
            src={img}
            alt={title}
          />
          <Box className={cn('portfolio-projects__carousel-item--content')}>
            <Typography className={cn('portfolio-projects__carousel-item--title')}>{title}</Typography>
            <Box className={cn('portfolio-projects__carousel-item--descriptions')}>
              {descriptions.map((description) => (
                <Typography className={cn('portfolio-projects__carousel-item--description')} key={description}>
                  {description}
                </Typography>
              ))}
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
)
