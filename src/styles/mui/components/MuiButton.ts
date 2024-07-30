import { Components } from '@mui/material/styles/components'

const buttonSize: Record<'small' | 'medium' | 'large', number> = {
  small: 38,
  medium: 54,
  large: 60,
}

export const MuiButton: Components['MuiButton'] = {
  styleOverrides: {
    root: ({ ownerState }) => ({
      borderRadius: 'var(--field-border-radius)',
      ...(ownerState.size ? { height: buttonSize[ownerState.size] } : {}),
      boxShadow: 'none',
      border: 'none',
    }),

    contained: {
      border: 'none',
      boxShadow: 'none',

      '&.white': {
        color: 'var(--text)',
        backgroundColor: 'var(--white)',
      },
    },

    outlined: {
      border: 'none',
      boxShadow: 'none',
    },

    text: {
      border: 'none',
      boxShadow: 'none',
    },

    colorSecondary: {
      border: 'none',
      boxShadow: 'none',
    },

    colorError: {
      border: 'none',
      boxShadow: 'none',
      color: 'var(--badge)',
    },
  },
}
