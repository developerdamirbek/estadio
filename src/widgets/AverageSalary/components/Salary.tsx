import { Box, Chip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import uzDictionary from '@/dictionary'
import { getFormattedNumberWithSpace } from '@/helpers/utils'

import styles from '../AverageSalary.module.scss'

const cn = classNames.bind(styles)

type Props = {
  salaryValue: number
  jobLevel: string
  isStepBox?: boolean
  icon?: string
}

export const Salary = ({ jobLevel, salaryValue, isStepBox, icon: InfinityIcon }: Props) => {
  const value = `${getFormattedNumberWithSpace(salaryValue)} ${uzDictionary.sum}`

  return (
    <Box className={cn('average-salary__inner', isStepBox && 'average-salary__inner-step-box')}>
      <Typography className={cn('average-salary__value')}>{value}</Typography>
      <Chip className={cn('average-salary__chip')} label={jobLevel} />
      {InfinityIcon && (
        <Box className={cn('average-salary__infinity')}>
          <InfinityIcon />
        </Box>
      )}
    </Box>
  )
}
