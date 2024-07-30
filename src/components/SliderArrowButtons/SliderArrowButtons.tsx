import { Box, IconButton } from '@mui/material'
import classNames from 'classnames/bind'
import ArrowLeft from '@/assets/icons/arrow-left.svg'
import ArrowRight from '@/assets/icons/arrow-right.svg'
import { sliderArrowButtonsStyles } from './styles'

import style from './SliderArrowButtons.module.scss'
const cn = classNames.bind(style)

type Props = {
  isUnHide?: boolean
  sliderPrev: string
  sliderNext: string
}

export const SliderArrowButtons = ({ isUnHide = false, sliderPrev, sliderNext }: Props) => (
  <Box sx={sliderArrowButtonsStyles.wrapper(isUnHide)}>
    <Box className={cn('slider-arrow-buttons')}>
      <IconButton className={cn('slider-arrow-buttons__prev', sliderPrev)} size="large">
        <ArrowLeft />
      </IconButton>

      <IconButton className={cn('slider-arrow-buttons__next', sliderNext)} size="large">
        <ArrowRight />
      </IconButton>
    </Box>
  </Box>
)
