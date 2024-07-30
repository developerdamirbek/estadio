import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { Logo } from '@/components'
import mainDictionary from '@/dictionary'
import { CenterBlock } from '../CenterBlock'
import { footerMenu, footerSocialMedias } from './constants'

import style from './Footer.module.scss'
const cn = classNames.bind(style)

export const Footer = () => (
  <Box component="footer" className={cn('footer')}>
    <CenterBlock>
      <Box className={cn('footer__content')}>
        <Box className={cn('footer__content-top')}>
          <Logo />

          <Box className={cn('footer__content-top-menu')}>
            {footerMenu.map(({ value, link }) => (
              <Box key={value} component={Link} href={link} className={cn('footer__content-top-menu-item')}>
                <Typography variant="h6">{value}</Typography>
              </Box>
            ))}
          </Box>

          <Box className={cn('footer__content-top-social')}>
            {footerSocialMedias.map((item) => (
              <Box key={item.link} component={Link} href={item.link}>
                <item.icon />
              </Box>
            ))}
          </Box>
        </Box>

        <Box className={cn('footer__content-bottom')}>
          <Typography variant="h6">{mainDictionary.rightsReserved}</Typography>
        </Box>
      </Box>
    </CenterBlock>
  </Box>
)
