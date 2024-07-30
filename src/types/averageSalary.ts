import { JobLevels } from './coursesType'

export type AverageSalaryType = {
  id: number
  juniorSalary: number
  middleSalary: number
  seniorSalary: number
  source: string
  sourceIcon: string
  addInfo: string
  title: string
}

export type AverageSalaryResponse = {
  specialistAverageSalary: AverageSalaryType
}

export type JobLevelSalary = {
  level: JobLevels
  salary: number
  icon?: string
}
