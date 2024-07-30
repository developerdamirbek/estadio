import type { Teacher } from './coursesType'

export type Video = {
  videoHistories: any[]
  id: number
  url: string
  filename: string
  size: number
  duration: number
  createdAt: string
  updatedAt: string
  hasLesson: boolean
  thumbnail: string
  info: any
  videoId: string
}

export type Lesson = {
  id: number
  title: string
  isFree: boolean
  progress: number
  position: number
  video: Video
}

export type Chapter = {
  lessons: Lesson[]
  id: number
  name: string
  progress: number
  lessonsCount: number
  hasFreeLesson: boolean
  desc: string
  position: number
  isNew: boolean
}

export type ModuleType = {
  chapters: Chapter[]
  id: number
  title: string
  price: number
  deletedAt: string
  isPaid: boolean
  progress: number
  chaptersCount: number
  hasFreeLesson: boolean
  position: number
  isPaidInThisCourse: boolean
  isNew: boolean
}

export type Course = {
  teachers: Teacher[]
  faqs: any[]
  benefits: any[]
  forWhoms: any[]
  modules: ModuleType[]
  id: number
  name: string
  modulesCount: number
  isComingSoon: boolean
  price: number
  lessonsCount: number
  duration: number
  chaptersCount: number
  imageIllustration: string
  desc: string
  bulkDiscount: number
  courseType: number
  isProfession: boolean
  detailUrl: string
}

export type CourseContentsResponse = {
  modules: ModuleType[]
}

export type CourseContentsRequestParams = {
  id: number
}
