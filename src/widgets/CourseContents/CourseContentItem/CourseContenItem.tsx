'use client'

import { SyntheticEvent, useState } from 'react'
import { ModuleType } from '@/types'
import { CourseContentAccordion } from './CourseContentAccordion'

type Props = {
  id: number
  courseContents: ModuleType[]
}

export const CourseContentItem = ({ courseContents }: Props) => {
  const [expanded, setExpanded] = useState<Record<string, string | boolean>>({
    basicLessons: false,
    additionalCourse: false,
    bonusCourse: false,
  })

  const handleChange = (contentType: string) => (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
    setExpanded((prev) => ({
      ...prev,
      [contentType]: isExpanded ? panel : false,
    }))
  }

  return (
    <>
      <CourseContentAccordion
        courseContentModule={courseContents}
        expanded={expanded.basicLessons}
        onChange={handleChange('basicLessons')}
        contentType="basicLessons"
      />

      <CourseContentAccordion
        courseContentModule={courseContents}
        expanded={expanded.additionalCourse}
        onChange={handleChange('additionalCourse')}
        contentType="additionalCourse"
      />

      <CourseContentAccordion
        courseContentModule={courseContents}
        expanded={expanded.bonusCourse}
        onChange={handleChange('bonusCourse')}
        contentType="bonusCourse"
      />
    </>
  )
}
