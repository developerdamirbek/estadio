import { FC } from 'react'
import { SvgIconProps } from '@mui/material'

export type FooterMenu = {
  value: string
  link: string
}

export type FooterSocialMedia = {
  icon: FC<SvgIconProps>
  link: string
}
