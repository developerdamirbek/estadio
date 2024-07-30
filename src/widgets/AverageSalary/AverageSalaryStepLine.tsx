import { Box, Chip, Typography } from '@mui/material'
import classNames from 'classnames/bind'
import DOMPurify from 'isomorphic-dompurify'
import { getAverageSalaries } from '@/api'
import InfinityIcon from '@/assets/icons/infinity.svg'
import mainDictionary from '@/dictionary'
import { JobLevels, JobLevelSalary } from '@/types'
import { Slider } from './components/Slider'

import styles from './AverageSalary.module.scss'
const cn = classNames.bind(styles)

type Props = {
  id: number
}

export const AverageSalaryStepLine = async ({ id }: Props) => {
  const isStepLine = true
  let salaryStepLine = null

  try {
    const averageSalaryResponse = await getAverageSalaries(id)

    if (!averageSalaryResponse?.data?.specialistAverageSalary?.id) {
      return null
    }
    salaryStepLine = averageSalaryResponse.data.specialistAverageSalary
  } catch (error) {
    console.error(error)

    return null
  }

  const salarySource = `${mainDictionary.source}${salaryStepLine.source}`

  const jobLevelSalaries: JobLevelSalary[] = [
    { level: JobLevels.Junior, salary: salaryStepLine.juniorSalary },
    { level: JobLevels.Middle, salary: salaryStepLine.middleSalary },
    { level: JobLevels.Senior, salary: salaryStepLine.seniorSalary, icon: InfinityIcon },
  ]

  const minSalary = jobLevelSalaries[0].salary
  const maxSalary = jobLevelSalaries[2].salary
  const dynamicStep = Math.ceil(maxSalary - minSalary) / 100

  return (
    <Box>
      <Typography className={cn('average-salary__title')} variant="h3">
        {mainDictionary.salarySect0ionTitle}
      </Typography>
      <Box className={cn('average-salary__line-wrap')}>
        <Box>
          <Typography variant="h4">{salaryStepLine.title || 'Зарплаты fullstack-разработчиков'}</Typography>
          <Chip
            className={cn(
              'average-salary__source',
              salaryStepLine.sourceIcon && 'average-salary__source-with-image',
              isStepLine && 'average-salary__source-step',
            )}
            label={salarySource}
          />

          <Box className={cn('average-salary__slider')}>
            <Slider maxValue={maxSalary} minValue={minSalary} step={dynamicStep} />
          </Box>

          <Box className={cn('average-salary__levels')}>
            {jobLevelSalaries.map((item) => (
              <Chip
                key={item.salary}
                className={cn(
                  'average-salary__level',
                  salaryStepLine.sourceIcon && 'average-salary__source-with-image',
                )}
                label={item.level}
              />
            ))}
          </Box>
        </Box>

        <Box>
          {salaryStepLine.addInfo && (
            <Box
              className={cn('average-salary__additional')}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(salaryStepLine.addInfo),
              }}
            />
          )}
        </Box>
      </Box>
    </Box>
  )
}

AverageSalaryStepLine.displayName = 'AverageSalaryStepLine'
