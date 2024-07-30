import { Box, Stack, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { getAverageSalaries } from '@/api'
import InfinityIcon from '@/assets/icons/infinity.svg'
import mainDictionary from '@/dictionary'
import { JobLevels, JobLevelSalary } from '@/types'
import { Salary } from './components/Salary'
import { SalarySource } from './components/SalarySource'

import styles from './AverageSalary.module.scss'
const cn = classNames.bind(styles)

type Props = {
  id: number
}

export const AverageSalary = async ({ id }: Props) => {
  let salary = null

  try {
    const averageSalaryResponse = await getAverageSalaries(id)

    if (!averageSalaryResponse?.data?.specialistAverageSalary?.id) {
      return null
    }
    salary = averageSalaryResponse.data.specialistAverageSalary
  } catch (error) {
    console.error(error)

    return null
  }

  const salarySource = `${mainDictionary.source}${salary.source}`

  const jobLevelSalaries: JobLevelSalary[] = [
    { level: JobLevels.Junior, salary: salary.juniorSalary },
    { level: JobLevels.Middle, salary: salary.middleSalary },
    { level: JobLevels.Senior, salary: salary.seniorSalary, icon: InfinityIcon },
  ]

  return (
    <Box>
      <Stack direction="row" alignItems="center" justifyContent="space-between" marginBottom={4}>
        <Typography variant="h3">{mainDictionary.salarySect0ionTitle}</Typography>
        <Box display="flex" alignItems="center">
          {salary.sourceIcon && <Image src={salary.sourceIcon} width={30} height={30} alt={'Salary'} />}
          <SalarySource salary={salary} salarySource={salarySource} />
        </Box>
      </Stack>

      <Box className={cn('average-salary__wrapper')}>
        {jobLevelSalaries.map((item) => (
          <Salary key={item.salary} jobLevel={item.level} salaryValue={item.salary} />
        ))}
      </Box>
    </Box>
  )
}

AverageSalary.displayName = 'AverageSalary'
