'use client'

import { ROUTES } from '@/constants/routes'
import mainDictionary from '@/dictionary'

export type MainMenuItem = {
  title: string
  link: string
}

export const mainMenuList: MainMenuItem[] = [
  {
    title: mainDictionary.home,
    link: ROUTES.courses,
  },
  {
    title: mainDictionary.aboutUs,
    link: ROUTES.blogs,
  },
]
