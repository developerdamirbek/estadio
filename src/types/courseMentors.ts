export type CourseMentorsType = {
  id: number
  fullName: string
  profession: string
  desc: string
  media: string
  blurImage: {
    placeholder: string
  } | null
}

export type CourseMentorsResponse = {
  courseMentor: CourseMentorsType[]
}
