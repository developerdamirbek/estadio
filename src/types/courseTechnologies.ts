export type CourseSkillsType = {
  id: number
  name: string
  image: string
}

export type CourseToolType = {
  id: number
  name: string
  image: string
}

export type CourseSkillsResponseType = {
  courseSkills: CourseSkillsType[]
}

export type CourseToolsResponse = {
  tools: CourseToolType[]
}
