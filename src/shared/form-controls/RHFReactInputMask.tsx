'use client'

import { Controller, useFormContext } from 'react-hook-form'
import ReactInputMask from 'react-input-mask'
import { TextField, TextFieldProps } from '@/shared/ui/TextField'
import { ClearAdornment } from './ClearAdornment'

export type RHFTextFieldProps = TextFieldProps & {
  isClearableField?: boolean
  name: string
  onClear?: VoidFunction
}

export const RHFReactInputMask = (props: RHFTextFieldProps) => {
  const isClearableFieldDefault = props.disabled !== true
  const { name, helperText, disabled, isClearableField = isClearableFieldDefault, onClear, ...restOfProps } = props

  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { ref, value, onChange, ...restOfFieldProps }, fieldState: { error } }) => (
        <ReactInputMask
          {...restOfFieldProps}
          value={value}
          mask="+998 (99) 999 99 99"
          maskPlaceholder={''}
          onChange={(e) => {
            onChange(e)
            if (props.onChange) props.onChange(e) // Ensure the parent's onChange is called
          }}
          disabled={disabled}
        >
          <TextField
            inputRef={ref}
            error={!!error}
            helperText={error ? error?.message : helperText}
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
            }}
            {...restOfProps}
            fullWidth
          />
        </ReactInputMask>
      )}
    />
  )
}
