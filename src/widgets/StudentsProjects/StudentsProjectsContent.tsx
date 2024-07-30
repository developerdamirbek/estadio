'use client'

import { Box, Button } from '@mui/material'
import classNames from 'classnames/bind'
import { useShallow } from 'zustand/react/shallow'
import { WidgetHeader } from '@/components'
import mainDictionary from '@/dictionary'
import { useStudentsProjectsStore } from '@/stores/studentsProjectsStore'
import { Cards } from './Cards'
import { MAX_VISIBLE_PROJECTS, studentsProjects } from './constans'

import style from './StudentsProjects.module.scss'

const cn = classNames.bind(style)

export const StudentsProjectsContent = () => {
  const { showAll, toggleShowAll } = useStudentsProjectsStore(
    useShallow((state) => ({
      showAll: state.showAll,
      toggleShowAll: state.toggleShowAll,
    })),
  )
  const showButton = studentsProjects.length > MAX_VISIBLE_PROJECTS

  return (
    <Box component="section" className={cn('students-projects')}>
      <WidgetHeader title={mainDictionary.studentsProjectsTitle} />

      <Cards showAll={showAll} />

      {showButton && (
        <Box className={cn('students-projects__action')}>
          <Button variant="contained" onClick={toggleShowAll} className={cn('students-projects__action-button')}>
            {showAll ? mainDictionary.showLess : mainDictionary.moreSee}
          </Button>
        </Box>
      )}
    </Box>
  )
}
