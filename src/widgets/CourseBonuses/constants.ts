import Pen from 'public/images/pen.webp'
import VueIcon from 'public/images/vue.webp'
import mainDictionary from '@/dictionary'
import { CourseBonuses } from './types'

export const courseBonuses: CourseBonuses[] = [
  {
    title: mainDictionary.computerLiteracyCourse,
    subtitle: mainDictionary.computerLiteracyCourseSubtitle,
    image: VueIcon,
  },
  {
    title: mainDictionary.coursesHR,
    subtitle: mainDictionary.coursesHRSubtitle,
    image: Pen,
  },
]
