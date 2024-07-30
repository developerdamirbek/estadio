export type FaqsType = {
  id: number
  question: string
  answer: string
  position: number
}

export type FaqsResponse = {
  faqs: FaqsType[]
}
