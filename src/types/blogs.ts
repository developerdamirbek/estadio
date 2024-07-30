export type BlogsCategory = {
  id: number
  name: string
  color: string
  textColor: string
  createdAt: string
}

type BlogsAuthor = {
  id: number
  firstName: string
  lastName: string
  rank: string
  photo: string
}

export type Blog = {
  id: number
  category: BlogsCategory
  author: BlogsAuthor
  title: string
  shortDesc: string
  content: string
  image: string
  isTop: boolean
  isRecommended: boolean
  viewCount: number
  createdAt: string
}

export type BlogsResponse = {
  posts: Blog[]
}

export type BlogsState = {
  showAll: boolean
  toggleShowAll: () => void
}
