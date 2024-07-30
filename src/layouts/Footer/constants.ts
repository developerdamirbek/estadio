import FacebookIcon from '@/assets/icons/facebook-logo.svg'
import InstagramIcon from '@/assets/icons/instagram-logo.svg'
import LinkedinIcon from '@/assets/icons/linkedin-logo.svg'
import TelegramIcon from '@/assets/icons/telegram-logo.svg'
import YoutubeIcon from '@/assets/icons/youtube-logo.svg'
import { PUBLIC_PHONE, ROUTES } from '@/constants'
import mainDictioanry from '@/dictionary'
import { FooterMenu, FooterSocialMedia } from './types'

export const footerMenu: FooterMenu[] = [
  {
    value: mainDictioanry.courses,
    link: ROUTES.courses,
  },
  {
    value: mainDictioanry.onlineEducation,
    link: ROUTES.courses,
  },
  {
    value: PUBLIC_PHONE,
    link: `tel:${PUBLIC_PHONE}`,
  },
]

export const footerSocialMedias: FooterSocialMedia[] = [
  {
    icon: FacebookIcon,
    link: 'https://facebook.com',
  },
  {
    icon: InstagramIcon,
    link: 'https://instagram',
  },
  {
    icon: LinkedinIcon,
    link: 'https://linkedin.com',
  },
  {
    icon: TelegramIcon,
    link: 'http://telegram.com',
  },
  {
    icon: YoutubeIcon,
    link: 'https://youtube.com',
  },
]
