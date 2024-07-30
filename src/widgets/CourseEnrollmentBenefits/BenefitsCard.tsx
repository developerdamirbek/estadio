import { Box, Typography } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './CourseEnrollmentBenefits.module.scss'

const cn = classNames.bind(styles)

type Props = {
  id: number
  title: string
  icon: string
}

export const BenefitsCard = ({ title, icon: Icon }: Props) => (
  <Box className={cn('course-enrollment-benefits__card')}>
    <Box className={cn('course-enrollment-benefits__card-icon')}>
      <Icon />
    </Box>
    <Typography className={cn('course-enrollment-benefits__card-title')}>{title}</Typography>
  </Box>
)
