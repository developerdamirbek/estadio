'use client'

import { Slider as MuiSlider } from '@mui/material'
import uzDictionary from '@/dictionary'
import { getFormattedNumberWithSpace } from '@/helpers/utils'
import { muiSliderStyles } from './styles'

type Props = {
  step: number
  minValue: number
  maxValue: number
}

const parseValueTooltip = (value: number) => {
  const result = getFormattedNumberWithSpace(value) || ''

  return `${result} ${uzDictionary.sum}`
}

export const Slider = ({ minValue, maxValue, step }: Props) => {
  const mediumValue = (minValue + maxValue) / 2
  const marks = [{ value: minValue }, { value: mediumValue }, { value: maxValue }]

  return (
    <MuiSlider
      sx={muiSliderStyles}
      defaultValue={mediumValue}
      valueLabelDisplay="on"
      step={step}
      marks={marks}
      min={minValue}
      max={maxValue}
      valueLabelFormat={parseValueTooltip}
    />
  )
}
