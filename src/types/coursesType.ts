export type CourseType = {
  id: number
  name: string
  category: Category
  isComingSoon: boolean
  courseDuration: number
  lessonsCount: number
  color: string
  imageIllustration: string
  desc: string
  teacher: Teacher
  progress: number
  modulesCount: number
  paidModulesCount: number
  deletedAt: string
  courseType: number
  detailUrl: string
  isProfession: boolean
}

export type CoursesType = {
  courses: CourseType[]
}

export type Category = {
  id: number
  name: string
}

export type Teacher = {
  id: number
  roleId: number
  firstName: string
  lastName: string
  userId: number
  social: string
  phoneNumber: string
  createdAt: string
  status: number
  password: string
  userType: number
  isSuperadmin: boolean
  photo: string
}

type RequestParams = {
  page: number
  perPage: number
  key: string
  categoryId: number | null
  isProfession: boolean
}

export type CourseRequestParams = Partial<RequestParams>

export const enum JobLevels {
  Junior = 'Junior',
  Middle = 'Middle',
  Senior = 'Senior',
}

export type CourseCategoriesResponseType = {
  courseCategories: Category[]
}

export type CourseProfessionsType = {
  name: string
  value: number
}

export const enum CourseEnumType {
  Course = 'Kurs',
  Profession = 'Kasb',
}

export type CourseCategory = {
  name: string
  professions: string[]
}

type CoursesSectionsType = {
  id: number
  name: string
  displayName: string
  position: number
  isVisible: boolean
  isSwiper: boolean
}

export type CoursesSectionsResponseType = {
  courseSections: CoursesSectionsType[]
  total: number
}
