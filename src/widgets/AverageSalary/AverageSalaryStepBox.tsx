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

export const AverageSalaryStepBox = async ({ id }: Props) => {
  const isStepBox = true
  let salaryStepBox = null

  try {
    const averageSalaryResponse = await getAverageSalaries(id)

    if (!averageSalaryResponse?.data?.specialistAverageSalary?.id) {
      return null
    }
    salaryStepBox = averageSalaryResponse.data.specialistAverageSalary
  } catch (error) {
    console.error(error)

    return null
  }

  const salarySource = `${mainDictionary.source}${salaryStepBox.source}`

  const jobLevelSalaries: JobLevelSalary[] = [
    { level: JobLevels.Junior, salary: salaryStepBox.juniorSalary },
    { level: JobLevels.Middle, salary: salaryStepBox.middleSalary },
    { level: JobLevels.Senior, salary: salaryStepBox.seniorSalary, icon: InfinityIcon },
  ]

  return (
    <Stack className={cn('average-salary__parent-stack')}>
      <Stack className={cn('average-salary__child-stack')} mb={3}>
        <Typography variant="h3">{mainDictionary.salarySect0ionTitle}</Typography>

        <Box display="flex" alignItems="center">
          {salaryStepBox.sourceIcon && <Image src={salaryStepBox.sourceIcon} width={30} height={30} alt={'Salary'} />}
          <SalarySource salary={salaryStepBox} salarySource={salarySource} />
        </Box>
      </Stack>

      <Box className={cn('average-salary__wrapper', { 'average-salary__wrapper-step-box-wrap': isStepBox })}>
        {jobLevelSalaries.map((item) => (
          <Salary
            icon={item.icon}
            isStepBox={isStepBox}
            key={item.salary}
            jobLevel={item.level}
            salaryValue={item.salary}
          />
        ))}
      </Box>
    </Stack>
  )
}

AverageSalaryStepBox.displayName = 'AverageSalaryStepBox'
