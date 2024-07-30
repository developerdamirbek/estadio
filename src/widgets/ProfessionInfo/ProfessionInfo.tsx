import React from 'react'
import { ProfessionBox } from '@/widgets/ProfessionBox'
import { professionInfoData } from './data'

export const ProfessionInfo = () => (
  <ProfessionBox
    title={professionInfoData.title}
    description={professionInfoData.description}
    image={professionInfoData.image}
    isSecondary
  />
)

ProfessionInfo.displayName = 'ProfessionInfo'
