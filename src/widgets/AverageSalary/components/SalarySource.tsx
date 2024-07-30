import { Chip } from '@mui/material'
import classNames from 'classnames/bind'
import { AverageSalaryType } from '@/types'

import styles from '../AverageSalary.module.scss'
const cn = classNames.bind(styles)

type Props = {
  salary: AverageSalaryType
  salarySource: string
}

export const SalarySource = ({ salary, salarySource }: Props) => (
  <Chip
    className={cn('average-salary__source', { 'average-salary__source-with-image': salary.sourceIcon })}
    label={salarySource}
  />
)
