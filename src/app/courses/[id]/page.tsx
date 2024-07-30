import React from 'react'
import { Box } from '@mui/material'
import { CoursePageModules, coursePageModulesSort } from '@/app/courses/constants'
import { parseToInt } from '@/helpers/utils'

type Props = {
  params: {
    id: string
  }
}

export default async function SingleCourse({ params }: Props) {
  const parsedId = parseToInt(params.id)

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: { xs: '55px', md: '80px' }, paddingBottom: '40px' }}>
      {coursePageModulesSort?.map((moduleName) => {
        const Component = CoursePageModules[moduleName] || null

        return Component && <Component key={moduleName} id={parsedId} />
      })}
    </Box>
  )
}
