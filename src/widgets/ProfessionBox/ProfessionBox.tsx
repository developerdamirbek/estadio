import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image, { StaticImageData } from 'next/image'
import mainDictionary from '@/dictionary'

import styles from './ProfessionBox.module.scss'

const cn = classNames.bind(styles)

type Props = {
  title: string
  description: string
  isSecondary?: boolean
  image: StaticImageData
}

export const ProfessionBox = ({ title, description, isSecondary, image }: Props) => (
  <Box className={cn('profession-box', { 'profession-box--secondary': isSecondary })}>
    <Box className={cn('profession-box__content')}>
      <Typography className={cn('profession-box__content-title')}>{title}</Typography>

      <Typography className={cn('profession-box__content-description')}>{description}</Typography>

      <Button variant="contained" className={cn('profession-box__content-button')}>
        {mainDictionary.registerCourse}
      </Button>
    </Box>

    <Box className={cn('profession-box__image')}>
      <Image className={cn('profession-box__image-content')} src={image} alt={title} />
    </Box>
  </Box>
)
