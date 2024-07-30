import { StaticImageData } from 'next/image'
import Actior from 'public/images/openToAllLearners.webp'
import mainDictionary from '@/dictionary'

type OpenToAllLearners = {
  content: string
  name: string
  role: string
  image: StaticImageData
}

export const openToAllLearners: OpenToAllLearners[] = [
  {
    content: mainDictionary.openToAllLearnersContent,
    name: mainDictionary.openToAllLearnersName,
    role: mainDictionary.openToAllLearnersRole,
    image: Actior,
  },
  {
    content: mainDictionary.openToAllLearnersContent,
    name: mainDictionary.openToAllLearnersName,
    role: mainDictionary.openToAllLearnersRole,
    image: Actior,
  },
  {
    content: mainDictionary.openToAllLearnersContent,
    name: mainDictionary.openToAllLearnersName,
    role: mainDictionary.openToAllLearnersRole,
    image: Actior,
  },
]
