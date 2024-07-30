import React from 'react'
import mainDictionary from '@/dictionary'
import { FeedbackForm } from '@/modules/FeedbackForm'
import { FormFeedbackType } from '@/types'

export const CourseCallback = () => (
  <>
    <FeedbackForm
      type={FormFeedbackType.COURSE_CALLBACK}
      description={mainDictionary.courseCallbackDescription}
      isPrimary
      title={mainDictionary.courseCallbackTitle}
    />
  </>
)

CourseCallback.displayName = 'CourseCallback'
