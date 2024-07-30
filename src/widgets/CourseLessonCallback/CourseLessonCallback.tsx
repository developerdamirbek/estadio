import React from 'react'
import mainDictionary from '@/dictionary'
import { FeedbackForm } from '@/modules/FeedbackForm'
import { FormFeedbackType } from '@/types'

export const CourseLessonCallback = () => (
  <>
    <FeedbackForm
      type={FormFeedbackType.COURSE_LESSON_CALLBACK}
      isPrimary
      title={mainDictionary.courseLessonCallbackTitle}
      description={mainDictionary.courseLessonCallbackDescription}
    />
  </>
)

CourseLessonCallback.displayName = 'CourseLessonCallback'
