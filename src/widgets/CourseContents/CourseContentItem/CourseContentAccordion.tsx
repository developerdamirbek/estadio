import { SyntheticEvent } from 'react'
import { Box, Button, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Link from 'next/link'
import { Accordion, AccordionChildType } from '@/components'
import mainDictionary from '@/dictionary'
import { ModuleType } from '@/types'

import style from './CourseContentItem.module.scss'

const cn = classNames.bind(style)

type ContentType = 'basicLessons' | 'additionalCourse' | 'bonusCourse'

type Props = {
  expanded: string | boolean
  onChange: (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => void
  contentType: ContentType
  courseContentModule: ModuleType[]
}

const contentTitles = {
  basicLessons: mainDictionary.basicLessonsTitle,
  additionalCourse: mainDictionary.additionalCourseTitle,
  bonusCourse: mainDictionary.bonusCourseContentTitle,
}

export const CourseContentAccordion = ({ expanded, onChange, contentType, courseContentModule }: Props) => (
  <Box>
    <Typography className={cn('course-content__title')} variant="h3">
      {contentTitles[contentType]}
    </Typography>

    {courseContentModule?.map((item) => (
      <Box key={item.id} className={cn('course-content__wrapper')}>
        <Accordion
          expanded={expanded === `panel-${contentType}-${item.id}`}
          onChange={onChange(`panel-${contentType}-${item.id}`)}
          title={item.title}
          isChild={AccordionChildType.H5}
        >
          {item.chapters.map((chapter) =>
            chapter.lessons.map((lesson) => (
              <Box key={lesson.id} className={cn('course-content__subject')}>
                <Typography className={cn('course-content__subject-title')} variant="body1">
                  {lesson.title}
                </Typography>

                <Box>
                  {lesson.isFree && (
                    <Button component={Link} href="#" className={cn('course-content__button')} variant="contained">
                      {mainDictionary.freeViewing}
                    </Button>
                  )}
                </Box>
              </Box>
            )),
          )}
        </Accordion>
      </Box>
    ))}
  </Box>
)
