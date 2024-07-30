'use client'

import { Controller, useFormContext } from 'react-hook-form'
import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import { TextField, TextFieldProps } from '@/shared/ui/TextField'
import { ClearAdornment } from './ClearAdornment'

export type RHFTextFieldProps = TextFieldProps & {
  isClearableField?: boolean
  isSearchableField?: boolean
  name: string
  onClear?: VoidFunction
}

export const RHFTextField = (props: RHFTextFieldProps) => {
  const isClearableFieldDefault = props.disabled !== true
  const {
    name,
    helperText,
    isClearableField = isClearableFieldDefault,
    isSearchableField,
    onClear,
    ...restOfProps
  } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...restOfFieldProps }, fieldState: { error } }) => (
        <TextField
          value={value}
          inputRef={ref}
          fullWidth
          error={!!error}
          helperText={error ? error?.message : helperText}
          onChange={onChange}
          InputProps={{
            endAdornment: isClearableField && (
              <ClearAdornment
                isVisibleClearButton={value}
                onClear={() => {
                  onClear?.()
                  onChange('')
                }}
                position="end"
              />
            ),
            startAdornment: isSearchableField && (
              <IconButton>
                <Search />
              </IconButton>
            ),
          }}
          {...restOfFieldProps}
          {...restOfProps}
        />
      )}
    />
  )
}
