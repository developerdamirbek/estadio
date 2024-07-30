import { StaticImageData } from 'next/image'
import Image from '/public/images/carousel.png'

type Carousel = {
  id: number
  title: string
  description: string
  image: StaticImageData
}

// TODO: replace with real data
export const slides: Carousel[] = [
  {
    id: 1,
    title: 'SMM onlayn',
    description: 'Ijtimoiy tarmoqlar orqali turli biznes va loyihalarni rivojlantirishni organasiz.',
    image: Image,
  },
  {
    id: 2,
    title: 'Dasturlash',
    description: 'Ijtimoiy tarmoqlar orqali turli biznes va loyihalarni rivojlantirishni organasiz.',
    image: Image,
  },
  {
    id: 3,
    title: 'Grafik dizayn',
    description: 'Ijtimoiy tarmoqlar orqali turli biznes va loyihalarni rivojlantirishni organasiz.',
    image: Image,
  },
]
