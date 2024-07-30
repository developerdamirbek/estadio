import { getCourseContents } from '@/api'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { CourseContentItem } from './CourseContentItem'

type Props = {
  id: number
}

export const CourseContents = async ({ id }: Props) => {
  let courseContents = null

  try {
    const response = await getCourseContents(id)

    if (response?.success) {
      courseContents = response.data?.modules
    } else {
      return null
    }
  } catch (error) {
    console.error(error)

    return null
  }

  return (
    <>
      <WidgetHeader title={mainDictionary.courseContentTitle} />
      {courseContents && <CourseContentItem id={id} courseContents={courseContents} />}
    </>
  )
}

CourseContents.displayName = 'CourseContents'
