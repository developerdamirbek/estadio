import { CourseMentorsResponse } from '@/types'
import { CourseMentorSingle } from './CourseMentorSingle'

export const CourseMentorsServer = ({ courseMentor }: CourseMentorsResponse) => (
  <>
    {courseMentor.map((mentor) => (
      <CourseMentorSingle key={mentor.id} {...mentor} />
    ))}
  </>
)
