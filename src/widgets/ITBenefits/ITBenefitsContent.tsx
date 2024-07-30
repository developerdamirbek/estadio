import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import mainDictionary from '@/dictionary'
import { List } from './List'
import { ITBenefitsProps } from './types'

import style from './ITBenefits.module.scss'

const cn = classNames.bind(style)

export const ITBenefitsContent = ({ image }: ITBenefitsProps) => (
  <Box component="section" className={cn('it-benefits')}>
    {image ? (
      <Box className={cn('it-benefits__conteiner')}>
        <Box className={cn('it-benefits__conteiner-content')}>
          <Typography variant="h2" className={cn('it-benefits__conteiner-content-title')}>
            {mainDictionary.itBenefitsTitle}
          </Typography>

          <Typography variant="h5" className={cn('it-benefits__conteiner-content-subtitle')}>
            {mainDictionary.itBenefitsSubtitle}
          </Typography>

          <List />

          <Button variant="contained" className={cn('it-benefits__conteiner-content-button')}>
            <Typography variant="h6">{mainDictionary.registry}</Typography>
          </Button>
        </Box>

        <Box component={Image} src={image} alt="image" className={cn('it-benefits__conteiner-image')} />
      </Box>
    ) : (
      <Box className={cn('it-benefits__content')}>
        <Typography variant="h5">{mainDictionary.itBenefitsTitle}</Typography>

        <Box className={cn('it-benefits__content-card')}>
          <Typography variant="h4">{mainDictionary.itBenefitsSubtitle}</Typography>

          <List />

          <Box>
            <Button variant="contained" className={cn('it-benefits__content-card-button')}>
              <Typography variant="h6">{mainDictionary.registry}</Typography>
            </Button>
          </Box>
        </Box>
      </Box>
    )}
  </Box>
)
