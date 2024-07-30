import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import { Box, Stack, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import mainDictionary from '@/dictionary'
import { getImageLink } from '@/helpers/utils'
import { colors } from '@/styles/mui/colors'

import styles from './CourseTechnologies.module.scss'
const cn = classNames.bind(styles)

type Technology = {
  id: number
  name: string
  image: string
}

type Props = {
  technologies: Technology[]
  isSkills?: boolean
}

export const Technologies = ({ technologies, isSkills }: Props) => {
  const title = isSkills ? `${mainDictionary.skills}` : `${mainDictionary.tools}`

  return (
    <Stack className={cn('course-technologies')}>
      <Typography className={cn('course-technologies__subtitle')} variant="h4">
        {title}
      </Typography>

      <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap">
        {technologies.map((technology) => (
          <Box
            key={technology.id}
            className={cn('course-technologies__inner-wrap', { 'course-technologies__inner-wrap-tools': !isSkills })}
          >
            {isSkills ? (
              <CheckCircleIcon style={{ color: colors.blueLight }} />
            ) : (
              <Image src={`${getImageLink(technology.image)}`} width={32} height={32} alt={technology.name} />
            )}
            <Typography variant="body1">{technology.name}</Typography>
          </Box>
        ))}
      </Stack>
    </Stack>
  )
}
