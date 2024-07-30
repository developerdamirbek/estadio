import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { getImageLink } from '@/helpers/utils'
import { CourseMentorsType } from '@/types'

import styles from './CourseMentors.module.scss'
const cn = classNames.bind(styles)

export const CourseMentorSingle = ({ desc, profession, fullName, media, blurImage }: CourseMentorsType) => {
  const placeholder = media ? 'blur' : undefined
  const blurDataURL = media ? blurImage?.placeholder : undefined

  return (
    <Box className={cn('course-mentors__inner')}>
      <Box className={cn('course-mentors__left')}>
        <Typography variant="h4" className={cn('course-mentors__full-name')}>
          {fullName}
        </Typography>

        <Typography className={cn('course-mentors__job-title')}>{profession}</Typography>

        <Typography className={cn('course-mentors__desc')}>{desc}</Typography>
      </Box>

      <Box className={cn('course-mentors__right')}>
        <Image
          src={getImageLink(media)}
          className={cn('course-mentors__media')}
          width={370}
          height={320}
          alt={fullName}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
        />
      </Box>
    </Box>
  )
}
