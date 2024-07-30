import { Box, Rating, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { Swiper, SwiperSlide } from 'swiper/react'
import StarIcon from '@/assets/icons/star.svg'
import { Avatar } from '@/components'
import { APP_CDN_URL } from '@/constants'
import { getImageLink } from '@/helpers/utils'
import { CourseTextFeedbackProps } from '../../types'
import { swiperConfig } from './constants'

import './Swiper.scss'
import style from './Card.module.scss'

const cn = classNames.bind(style)

export const Card = ({ courseTextFeedback }: CourseTextFeedbackProps) => (
  <Box className={cn('card')}>
    <Swiper {...swiperConfig} className="siper">
      {courseTextFeedback.map((item) => (
        <SwiperSlide key={item.id} className="siper__slide">
          <Box className={cn('card__slide')}>
            <Box className={cn('card__slide-avatar')}>
              {item.media ? <Avatar image={getImageLink(item.media)} isBorder /> : <Avatar firstName={item.fullName} />}

              <Box>
                <Typography variant="h6">{item.fullName}</Typography>

                <Typography variant="body1" className={cn('card__slide-avatar-role')}>
                  {item.profession}
                </Typography>
              </Box>
            </Box>

            <Box className={cn('card__slide-content')}>
              <Typography variant="body1">{item.body}</Typography>

              <Rating
                value={item.rating ?? 0}
                readOnly
                icon={<StarIcon className={cn('card__slide-content-star-precision')} />}
                emptyIcon={<StarIcon className={cn('card__slide-content-star')} />}
              />
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Box>
)
