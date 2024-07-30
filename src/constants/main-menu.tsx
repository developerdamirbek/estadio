'use client'

import { ROUTES } from '@/constants/routes'
import mainDictionary from '@/dictionary'

export type MainMenuItem = {
  title: string
  link: string
}

export const mainMenuList: MainMenuItem[] = [
  {
    title: mainDictionary.courses,
    link: ROUTES.courses,
  },
  {
    title: mainDictionary.blogs,
    link: ROUTES.blogs,
  },
]
