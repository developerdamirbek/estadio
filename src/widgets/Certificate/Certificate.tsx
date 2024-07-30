import React from 'react'
import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { ROUTES } from '@/constants'
import mainDictionary from '@/dictionary'

import styles from './Certificate.module.scss'

const cn = classNames.bind(styles)

export const Certificate = () => (
  <Box className={cn('certificate')}>
    <Box className={cn('certificate__content')}>
      <Box className={cn('certificate__info')}>
        <Typography className={cn('certificate__info-title')}>{mainDictionary.certificate}</Typography>
        <Typography className={cn('certificate__info-description')}>{mainDictionary.giveSpecialCertificate}</Typography>
      </Box>
      <Button href={ROUTES.certificate} color="primary" variant="contained" className={cn('certificate__button')}>
        {mainDictionary.viewCertificate}
      </Button>
    </Box>
    <Box className={cn('certificate__image-wrapper')}>
      <Image
        className={cn('certificate__image')}
        width={648}
        height={458}
        src="/images/certificate-img.webp"
        alt="certificate"
      />
    </Box>
  </Box>
)

Certificate.displayName = 'Certificate'
