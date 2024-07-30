import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { getCourseMentors } from '@/api'
import { SliderArrowButtons } from '@/components'
import mainDictionary from '@/dictionary'
import { checkWindow, getPlaceholderImage } from '@/helpers/utils'
import { CourseMentorsClient } from './CourseMentorsClient'
import { CourseMentorSingle } from './CourseMentorSingle'
import { CourseMentorsServer } from './CourseMentorsServer'

import styles from './CourseMentors.module.scss'
const cn = classNames.bind(styles)

type Props = {
  id: number
}

export const CourseMentors = async ({ id }: Props) => {
  let mentorsResponse = null

  try {
    const response = await getCourseMentors(id)

    if (response?.success) {
      mentorsResponse = response.data?.courseMentor
    } else {
      return null
    }
  } catch (error: Error | unknown) {
    console.error(error)

    return null
  }

  const hasMultipleMentors = Boolean(mentorsResponse)
  const singleMentor = mentorsResponse && mentorsResponse[0]
  const mentorsImages = mentorsResponse?.map((mentor) => mentor.media)

  let blurredMentorsImages = null

  if (mentorsImages) {
    blurredMentorsImages = await Promise.allSettled(mentorsImages.map((image) => getPlaceholderImage(image)))
  }

  const updatedMentors = mentorsResponse?.map((mentor, index) => {
    const result = blurredMentorsImages && blurredMentorsImages[index]
    const blurImage = result?.status === 'fulfilled' ? result.value : null

    return {
      ...mentor,
      blurImage,
    }
  })

  const CourseMentorsComponent = checkWindow() ? CourseMentorsServer : CourseMentorsClient

  return (
    <Box className={cn('course-mentors')}>
      <Box className={cn('course-mentors__top')}>
        <Typography variant="h3">{mainDictionary.mentorsTitle}</Typography>
        {hasMultipleMentors && (
          <SliderArrowButtons isUnHide sliderNext="courseMentorNext" sliderPrev="courseMentorPrev" />
        )}
      </Box>

      {!hasMultipleMentors && singleMentor && <CourseMentorSingle {...singleMentor} />}
      {hasMultipleMentors && updatedMentors && <CourseMentorsComponent courseMentor={updatedMentors} />}
    </Box>
  )
}

CourseMentors.displayName = 'CourseMentors'
