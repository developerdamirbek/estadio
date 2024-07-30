export type FormFeedbacksType = {
  studentName: string
  phoneNumber: number
  courseName?: string
  telegramAccount?: string
  isTelegramUsed: boolean
}

export type FormFeedbacksResponse = {
  feedback: FormFeedbacksType[]
}

export type FormFeedbacksRequestParams = FormFeedbacksType & {
  feedbackType: FormFeedbackType
}

export enum FormFeedbackType {
  COURSE = 'COURSE',
  STUDENT = 'STUDENT',
  HELPER_CALLBACK = 'HELPER_CALLBACK',
  FREE_CONSULTATION = 'FREE_CONSULTATION',
  QUESTIONS_AND_SUPPORT = 'QUESTIONS_AND_SUPPORT',
  COURSE_CALLBACK = 'COURSE_CALLBACK',
  LESSON_CALLBACK = 'LESSON_CALLBACK',
  COURSE_LESSON_CALLBACK = 'COURSE_LESSON_CALLBACK',
  BLOGS = 'BLOGS',
  BLOG = 'BLOG',
  FEEDBACK_MODAL = 'FEEDBACK_MODAL',
}
