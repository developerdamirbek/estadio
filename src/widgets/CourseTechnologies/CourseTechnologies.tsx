import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import { getCourseSkills, getCourseTools } from '@/api'
import mainDictionary from '@/dictionary'
import { Technologies } from './Technologies'

import styles from './CourseTechnologies.module.scss'

const cn = classNames.bind(styles)

type Props = {
  id: number
}

export const CourseTechnologies = async ({ id }: Props) => {
  let skills = null
  let tools = null

  try {
    const skillsResponse = await getCourseSkills(id)
    const toolsResponse = await getCourseTools(id)

    if (!(skillsResponse?.data?.courseSkills.length && toolsResponse?.data?.tools.length)) {
      return null
    }
    skills = skillsResponse.data?.courseSkills
    tools = toolsResponse.data?.tools
  } catch (error) {
    console.error(error)

    return null
  }

  return (
    <Box>
      <Typography className={cn('course-technologies__section-title')}>{mainDictionary.sectionTitle}</Typography>

      <Box className={cn('course-technologies__top')}>
        <Typography>{mainDictionary.position}</Typography>
        <Typography variant="h4">{mainDictionary.jobTitle}</Typography>
      </Box>

      <Box className={cn('course-technologies__bottom')}>
        <Technologies technologies={skills} isSkills />
        <Technologies technologies={tools} />
      </Box>
    </Box>
  )
}

CourseTechnologies.displayName = 'CourseTechnologies'
