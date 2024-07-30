export type CourseTextFeedbackType = {
  id: number
  fullName: string
  profession: string
  media: string
  body: string
  rating: number
}

export type CourseTextFeedback = {
  feedback: CourseTextFeedbackType[]
}

export type CourseTextFeedbackParams = {
  feedbackType: number
  courseId: number
}

export const enum CourseTextFeedbackParam {
  courseId = 10,
}
