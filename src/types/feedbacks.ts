export type FeedbacksType = {
  id: number
  fullName: string
  profession: string
  media: string
}

export type FeedbacksResponse = {
  feedback: FeedbacksType[]
}

export type FeedbacksRequestParams = {
  feedbackType: number
}
export const enum FeedbackType {
  Video = 1,
  Text,
}
