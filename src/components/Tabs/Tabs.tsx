'use client'

import { useState } from 'react'
import { Tab as MuiTab, Tabs as MuiTabs, TabsProps } from '@mui/material'
import classNames from 'classnames/bind'
import { Props, Tab } from './types'

import styles from './Tabs.module.scss'

const cn = classNames.bind(styles)

export const Tabs = ({ tabs, onChange, isScrollable }: Props) => {
  const [value, setValue] = useState<Tab['value']>(0)
  const scrollVariant = isScrollable ? 'scrollable' : 'standard'

  const handleChange: TabsProps['onChange'] = (_event, value) => {
    setValue(value)
    onChange?.(value)
  }

  return (
    <MuiTabs variant={scrollVariant} scrollButtons="auto" className={cn('tabs')} value={value} onChange={handleChange}>
      {tabs.map(({ label, value }) => (
        <MuiTab className={cn('tabs__tab')} key={label} label={label} value={value} />
      ))}
    </MuiTabs>
  )
}
