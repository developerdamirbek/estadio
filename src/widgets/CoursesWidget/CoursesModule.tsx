import { getCourseCategories, getCourses } from '@/api'
import { CoursesModule } from '@/modules/CoursesModule'

export const CoursesWidget = async () => {
  //TODO: Analyze server side

  const courses = null
  // let courses = null
  // let courseCategories = null
  //
  // try {
  //   const coursesResponse = await getCourses({ categoryId: 0 })
  //   const courseCategoriesResponse = await getCourseCategories()
  //
  //   if (!(coursesResponse?.success && courseCategoriesResponse?.success)) {
  //     return null
  //   }
  //   courses = coursesResponse.data?.courses
  //   courseCategories = courseCategoriesResponse.data?.courseCategories
  // } catch (error) {
  //   console.error(error)
  //
  //   return null
  // }

  return <>{<CoursesModule />}</>
}

CoursesWidget.displayName = 'CoursesWidget'
