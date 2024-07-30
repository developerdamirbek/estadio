'use client'

import { useState } from 'react'
import { ToggleButton, ToggleButtonGroup, ToggleButtonProps } from '@mui/material'
import classNames from 'classnames/bind'
import { allCategories } from '@/modules/CoursesModule'
import { CourseProfessionsType } from '@/types/coursesType'

import styles from './CourseProfessions.module.scss'

const cn = classNames.bind(styles)

type Props = {
  professions: CourseProfessionsType[]
}

export const CourseProfessions = ({ professions }: Props) => {
  const allProfessions = [allCategories, ...professions]
  const [categoryName, setCategoryName] = useState(professions[0].name)

  const handleToggleButtonChange: ToggleButtonProps['onChange'] = (_, value) => {
    setCategoryName(value)
  }

  return (
    <ToggleButtonGroup
      className={cn('course-professions')}
      orientation="vertical"
      value={categoryName}
      onChange={handleToggleButtonChange}
      exclusive
    >
      {allProfessions.map((profession, idx) => (
        <ToggleButton className={cn('course-professions__single')} key={idx} value={profession.name}>
          {profession.name}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}
