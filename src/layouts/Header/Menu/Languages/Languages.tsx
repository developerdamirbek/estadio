import React, { useState } from 'react'
import Flag from 'react-world-flags'
import { Box, FormControl, MenuItem, Select } from '@mui/material'
import classNames from 'classnames/bind'

import styles from './Languages.module.scss'

const cn = classNames.bind(styles)

export const LanguageSelect = () => {
  const [language, setLanguage] = useState('UZ')

  const handleChange = (event: any) => {
    setLanguage(event.target.value)
  }

  return (
    <FormControl fullWidth variant="outlined">
      <Select className={cn('language-select')} id="language-select" value={language} onChange={handleChange}>
        <MenuItem className={cn('language-select__item')} value="UZ">
          <Box className={cn('flag')} display="flex" alignItems="center">
            <Flag code="UZB" className={cn('flag')} />
            UZ
          </Box>
        </MenuItem>
        <MenuItem className={cn('language-select__item')} value="RU">
          <Box className={cn('flag')} display="flex" alignItems="center">
            <Flag code="RUS" className={cn('flag')} />
            RU
          </Box>
        </MenuItem>
        <MenuItem className={cn('language-select__item')} value="EN">
          <Box className={cn('flag')} display="flex" alignItems="center">
            <Flag code="USA" className={cn('flag')} />
            ENG
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  )
}
