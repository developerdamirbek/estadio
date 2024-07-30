import React from 'react'
import { ProfessionBox } from '@/widgets/ProfessionBox'
import { professionInfoProgressData } from './data'

export const ProfessionInfoProgress = () => (
  <ProfessionBox
    title={professionInfoProgressData.title}
    description={professionInfoProgressData.description}
    image={professionInfoProgressData.image}
  />
)

ProfessionInfoProgress.displayName = 'ProfessionInfoProgress'
