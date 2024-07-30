import { Components } from '@mui/material/styles/components'

export const MuiTextField: Components['MuiTextField'] = {
  styleOverrides: {
    root: ({ ownerState }) => {
      const height = ownerState.size === 'small' ? 32 : 54

      return {
        borderRadius: 'var(--field-border-radius)',

        input: {
          height,
          boxSizing: 'border-box',
          padding: 'var(--field-padding-top) var(--field-padding-left)',
        },

        '& .MuiOutlinedInput-root': {
          borderRadius: 'var(--field-border-radius)',

          '&.Mui-focused fieldset': {
            borderWidth: '1px',
          },

          '&.Mui-focused .MuiInputAdornment-root': {
            color: 'var(--brand)',
          },
        },

        '&.white': {
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'var(--white)',
            },

            '&.Mui-focused fieldset': {
              borderColor: 'var(--white-hover)',
            },
          },
        },

        '& .MuiFormHelperText-root': {
          fontSize: '14px',
          lineHeight: '16px',
          marginBottom: '3px',
          marginTop: '1px',
        },
      }
    },
  },
}
