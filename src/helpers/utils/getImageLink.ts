import { APP_CDN_URL } from '@/constants'

export const getImageLink = (src: string) => {
  if (src.startsWith('/')) {
    return `${APP_CDN_URL}${src}`
  }

  return `${APP_CDN_URL}/${src}`
}
