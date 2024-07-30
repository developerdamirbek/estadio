'use client'

import { useEffect, useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import classNames from 'classnames/bind'
import { getCourseTextFeedback } from '@/api/courseTextFeedback'
import { SliderArrowButtons, Spinner, WidgetHeader } from '@/components'
import maindictionary from '@/dictionary'
import { CourseTextFeedbackParam, CourseTextFeedbackType, FeedbackType } from '@/types'
import { Card } from './Card'

import style from './Content.module.scss'

const cn = classNames.bind(style)

export const Content = () => {
  const matches = useMediaQuery('(min-width:550px)')
  const [courseTextFeedback, setCourseTextFeedback] = useState<CourseTextFeedbackType[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchFeedback = async () => {
      setIsLoading(true)

      try {
        const response = await getCourseTextFeedback({
          feedbackType: FeedbackType.Text,
          courseId: CourseTextFeedbackParam.courseId,
        })

        if (!response?.data) {
          return null
        }

        setCourseTextFeedback(response.data.feedback)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }

    fetchFeedback()
  }, [])

  if (isLoading) {
    return <Spinner />
  }

  if (!courseTextFeedback) {
    return null
  }

  return (
    <Box className={cn('content')}>
      <WidgetHeader
        title={maindictionary.courseTextFeedbackTitle}
        actions={
          matches && (
            <SliderArrowButtons isUnHide sliderNext="courseTextFeedbackNext" sliderPrev="courseTextFeedbackPrev" />
          )
        }
      />

      <Card courseTextFeedback={courseTextFeedback} />
    </Box>
  )
}
